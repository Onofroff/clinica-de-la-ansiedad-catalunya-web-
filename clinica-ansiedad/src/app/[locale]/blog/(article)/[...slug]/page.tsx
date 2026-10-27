import { getEntries, getEntryBySlug } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { buildMetadata } from '@/lib/metadata';
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema';
import { LOCAL_POSTS, getLocalPost, getLocalPosts } from '@/content/blog';
import { markdownToHtml, markdownHeadings, markdownReadingTime } from '@/lib/markdown';
import BlogCard from '@/components/blog/BlogCard';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/ui/SafeImage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogPost } from '@/lib/blog-data';
import { calculateReadingTime, extractHeadings } from '@/lib/blog-utils';
import OptimizedImage from '@/components/OptimizedImage';
import { bookingUrl, AUTHOR_PHOTO } from '@/lib/constants';
import { slugSegments, slugPath } from '@/lib/blog-slug';

interface PageProps {
    params: Promise<{ locale: string, slug: string[] }>;
}

export const revalidate = 3600; // Revalidate every hour

const SITE = 'https://www.clinicadelansiedad.com';

export async function generateStaticParams() {
    const entries = await getEntries('blogPost', false, ['-fields.fechaPublicacion']);
    const locales = ['es', 'ca'];
    const slugs = [
        ...LOCAL_POSTS.map((p) => p.slug),
        ...entries.map((entry: any) => entry.fields.slug),
    ];

    return slugs.flatMap((s) =>
        locales.map(locale => ({
            locale,
            slug: slugSegments(s),
        }))
    );
}

export async function generateMetadata({ params }: PageProps) {
    const { slug: rawSlug, locale } = await params;
    const slug = slugPath(rawSlug);

    // Safety guard: if slug is somehow empty or "blog" at this level,
    // it shouldn't be matching here, but we return early to help Next.js.
    if (!slug || slug === 'blog') return {};

    const local = getLocalPost(slug, locale);
    if (local) {
        return buildMetadata({
            title: local.seoTitle || local.title,
            description: local.description,
            path: `/blog/${local.slug}`,
            keywords: local.keywords,
            image: `${SITE}${local.image}`,
            imageAlt: local.imageAlt,
            type: 'article',
            lang: locale,
            publishedTime: local.date,
            modifiedTime: local.updated || local.date,
            catalan: Boolean(LOCAL_POSTS.find((p) => p.slug === local.slug)?.ca),
        });
    }

    const entry = await getEntryBySlug('blogPost', slug, false, locale);

    if (!entry) return buildMetadata({
        title: 'Post no encontrado',
        description: 'El artículo que buscas no existe o ha sido movido.',
        path: '/blog',
        lang: locale
    });

    const fields = entry.fields as any;

    // El sufijo "| Blog Clínica de la Ansiedad" gastaba 28 de los ~60 caracteres
    // que Google muestra, así que los cinco artículos salían truncados y perdían
    // justo el final del titular. La marca ya sale en el dominio de la SERP.
    return buildMetadata({
        title: fields.titulo,
        description: fields.metaDescripcion || '',
        path: `/blog/${slug}`,
        keywords: [
            fields.categoria && fields.categoria[0]?.fields?.nombre ? fields.categoria[0].fields.nombre : 'psicología',
            'psicoanálisis',
            'ansiedad',
            'salud mental',
            'psicoterapia',
        ],
        image: fields.imagenDestacada?.fields?.file?.url ? `https:${fields.imagenDestacada.fields.file.url}` : undefined,
        imageAlt: fields.titulo,
        type: 'article',
        lang: locale,
        publishedTime: fields.fechaPublicacion || entry.sys.createdAt,
        modifiedTime: entry.sys.updatedAt
    });
}

// Estilos de los artículos en Markdown: los mismos tamaños, colores y espaciados
// que el renderizado de Contentful de abajo, para que ambos tipos se vean igual.
const LOCAL_ARTICLE_CLASSES = [
    '[&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-serif [&_h2]:text-navy [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:leading-snug [&_h2]:tracking-tight [&_h2]:scroll-mt-28',
    '[&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:font-serif [&_h3]:text-navy/90 [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:leading-snug [&_h3]:scroll-mt-28',
    '[&_p]:text-navy/80 [&_p]:text-[17px] [&_p]:leading-[30px] md:[&_p]:text-lg md:[&_p]:leading-8 [&_p]:mb-7 [&_p]:font-light',
    '[&_strong]:font-semibold [&_strong]:text-navy',
    '[&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-8 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-3',
    "[&_ul>li]:relative [&_ul>li]:pl-7 [&_ul>li]:before:content-[''] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.7rem] [&_ul>li]:before:w-1.5 [&_ul>li]:before:h-1.5 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-gold",
    '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-3 [&_ol>li]:pl-1 [&_ol>li]:marker:text-gold [&_ol>li]:marker:font-semibold',
    '[&_li]:text-navy/80 [&_li]:text-[17px] [&_li]:leading-[30px] md:[&_li]:text-lg md:[&_li]:leading-8 [&_li]:font-light',
    '[&_blockquote]:bg-navy/5 [&_blockquote]:p-8 md:[&_blockquote]:p-10 [&_blockquote]:rounded-[28px] [&_blockquote]:border-l-[6px] [&_blockquote]:border-gold/40 [&_blockquote]:my-12',
    '[&_blockquote_p]:italic [&_blockquote_p]:font-serif [&_blockquote_p]:text-navy/90 [&_blockquote_p]:text-lg md:[&_blockquote_p]:text-xl [&_blockquote_p]:mb-0',
    '[&_a]:text-gold [&_a]:font-medium [&_a]:border-b [&_a]:border-gold/30 hover:[&_a]:text-navy hover:[&_a]:border-navy [&_a]:transition-all',
].join(' ');

// Custom Rich Text Render Options
const renderOptions = {
    renderNode: {
        [BLOCKS.HEADING_2]: (node: any, children: any) => {
            const text = children[0];
            const id = typeof text === 'string' ? text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : undefined;
            return (
                <h2 id={id} className="text-2xl md:text-3xl font-serif text-navy mt-14 mb-5 leading-snug tracking-tight scroll-mt-28">
                    {children}
                </h2>
            );
        },
        [BLOCKS.HEADING_3]: (node: any, children: any) => {
            const text = children[0];
            const id = typeof text === 'string' ? text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : undefined;
            return (
                <h3 id={id} className="text-xl md:text-2xl font-serif text-navy/90 mt-10 mb-4 leading-snug scroll-mt-28">
                    {children}
                </h3>
            );
        },
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <p className="text-navy/80 text-[17px] leading-[30px] md:text-lg md:leading-8 mb-7 font-light">
                {children}
            </p>
        ),
        [BLOCKS.UL_LIST]: (node: any, children: any) => (
            <ul className="list-none pl-0 mb-8 flex flex-col gap-3">
                {children}
            </ul>
        ),
        [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
            <li className="relative pl-7 text-navy/80 text-[17px] leading-[30px] md:text-lg md:leading-8 font-light before:content-[''] before:absolute before:left-0 before:top-[0.7rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold">
                {children}
            </li>
        ),
        [BLOCKS.QUOTE]: (node: any, children: any) => (
            <blockquote className="border-l-0 bg-navy/5 p-8 md:p-10 rounded-[28px] italic text-navy/90 text-lg md:text-xl font-serif my-12 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-gold/30" />
                <span className="absolute top-2 left-4 text-4xl text-gold/20 font-serif">"</span>
                {children}
            </blockquote>
        ),
        [INLINES.HYPERLINK]: (node: any, children: any) => (
            <a 
                href={node.data.uri} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold font-medium border-b border-gold/30 hover:text-navy hover:border-navy transition-all no-underline"
            >
                {children}
            </a>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const asset = node.data.target;
            const url = asset?.fields?.file?.url;
            const title = asset?.fields?.title || 'Imagen del artículo';
            
            if (!url) return null;

            return (
                <div className="my-20 w-full rounded-[40px] overflow-hidden shadow-2xl bg-white p-2 text-center">
                    <OptimizedImage 
                        src={`https:${url}`} 
                        alt={title} 
                        width={1200} 
                        height={675} 
                        className="w-full h-auto object-cover rounded-[32px]" 
                    />
                </div>
            );
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
            const contentType = node.data.target?.sys?.contentType?.sys?.id;
            const fields = node.data.target?.fields;

            if (!fields) return null;

            if (contentType === 'blogPost') {
                return (
                    <div className="my-16 border border-navy/10 rounded-[32px] p-8 bg-white shadow-sm flex flex-col md:flex-row gap-8 items-center no-prose">
                        <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden shadow-md">
                             <SafeImage src={`https:${fields.imagenDestacada?.fields?.file?.url}`} alt={fields.titulo} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow text-left">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">Artículo Relacionado</span>
                            <h4 className="font-serif text-2xl text-navy mb-4 leading-tight">{fields.titulo}</h4>
                            <Link href={{ pathname: '/blog/[...slug]', params: { slug: slugSegments(fields.slug) } }} className="text-navy font-bold text-xs uppercase tracking-widest hover:text-gold transition-all inline-flex items-center gap-2 group">
                                Continuar leyendo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                );
            }
            return null;
        }
    }
};

export default async function BlogPostPage({ params }: PageProps) {
    const { slug: rawSlug, locale } = await params;
    const slug = slugPath(rawSlug);

    if (!slug || slug === 'blog') notFound();

    const local = getLocalPost(slug, locale);
    const entry = local ? null : await getEntryBySlug('blogPost', slug, false, locale);

    if (!local && !entry) {
        notFound();
    }

    const fields = (entry?.fields || {}) as any;
    const author = {
        name: fields.autor?.fields?.nombre || 'Joan Ramon Soto',
        role: 'Psicoanalista / Psicoterapeuta',
        image: fields.autor?.fields?.avatar?.fields?.file?.url ? `https:${fields.autor.fields.avatar.fields.file.url}` : AUTHOR_PHOTO,
    };

    // Estructura común para artículos propios (Markdown) y de Contentful (Rich Text)
    const post = local
        ? {
            id: `local-${local.slug}`,
            title: local.title,
            excerpt: local.description,
            content: (
                <div
                    className={LOCAL_ARTICLE_CLASSES}
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(local.body) }}
                />
            ),
            date: local.date,
            modified: local.updated || local.date,
            readTime: markdownReadingTime(local.body),
            category: local.category,
            image: local.image,
            imageAlt: local.imageAlt,
            author,
            slug: local.slug,
            headings: markdownHeadings(local.body),
            faq: local.faq || [],
        }
        : {
            id: entry!.sys.id,
            title: fields.titulo || 'Sin título',
            excerpt: fields.metaDescripcion || '',
            content: documentToReactComponents(fields.contenido, renderOptions), // Pre-render Rich Text
            date: fields.fechaPublicacion || entry!.sys.createdAt,
            modified: entry!.sys.updatedAt,
            readTime: calculateReadingTime(fields.contenido),
            category: fields.categoria && fields.categoria[0]?.fields?.nombre ? fields.categoria[0].fields.nombre : 'Psicología',
            image: fields.imagenDestacada?.fields?.file?.url ? `https:${fields.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
            imageAlt: fields.titulo || 'Imagen del artículo',
            author,
            slug: (fields.slug || '').replace(/^\/|\/$/g, ''),
            headings: extractHeadings(fields.contenido),
            faq: [] as { question: string; answer: string }[],
        };

    const headings = post.headings;

    // Todos los artículos (propios + Contentful) ordenados por fecha, para anterior/siguiente y relacionados
    const contentfulEntries = await getEntries('blogPost', false, ['-fields.fechaPublicacion'], locale);
    const allPosts: BlogPost[] = [
        ...getLocalPosts(locale).map((p) => ({
            id: `local-${p.slug}`,
            title: p.title,
            excerpt: p.description,
            content: '',
            date: p.date,
            readTime: markdownReadingTime(p.body),
            category: p.category,
            image: p.image,
            author: { name: 'Joan Ramon Soto', role: 'Psicoanalista / Psicoterapeuta', image: AUTHOR_PHOTO },
            slug: p.slug,
            featured: false,
        })),
        ...contentfulEntries.map((e) => {
            const f = e.fields as any;
            return {
                id: e.sys.id,
                title: f.titulo || 'Sin título',
                excerpt: f.metaDescripcion || '',
                content: '',
                date: f.fechaPublicacion || e.sys.createdAt,
                readTime: calculateReadingTime(f.contenido),
                category: f.categoria && f.categoria[0]?.fields?.nombre ? f.categoria[0].fields.nombre : 'Psicología',
                image: f.imagenDestacada?.fields?.file?.url ? `https:${f.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
                author: {
                    name: f.autor?.fields?.nombre || 'Joan Ramon Soto',
                    role: 'Psicoanalista / Psicoterapeuta',
                    image: f.autor?.fields?.avatar?.fields?.file?.url ? `https:${f.autor.fields.avatar.fields.file.url}` : AUTHOR_PHOTO,
                },
                slug: (f.slug || '').replace(/^\/|\/$/g, ''),
                featured: false,
            };
        }),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Find neighbors for next/prev
    const currentIndex = allPosts.findIndex((p) => p.id === post.id);
    const prevEntry = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextEntry = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    // Relacionados: primero de la misma categoría, luego los más recientes
    const others = allPosts.filter((p) => p.id !== post.id);
    const relatedPosts: BlogPost[] = [
        ...others.filter((p) => p.category === post.category),
        ...others.filter((p) => p.category !== post.category),
    ].slice(0, 2);

    const pageUrl = `${SITE}/${locale}/blog/${slug}`;
    const absoluteImage = post.image.startsWith('http') ? post.image : `${SITE}${post.image}`;

    // Datos estructurados: artículo, migas de pan y, si hay, preguntas frecuentes
    const postSchema = {
        ...blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            content: post.excerpt,
            author: post.author.name,
            datePublished: post.date,
            dateModified: post.modified,
            image: absoluteImage,
            url: pageUrl,
        }),
        author: {
            '@type': 'Person',
            name: 'Joan Ramon Soto',
            jobTitle: 'Psicoanalista / Psicoterapeuta',
            url: `${SITE}/es/sobre-mi`,
            memberOf: {
                '@type': 'Organization',
                name: "Col·legi Oficial de Psicòlegs de Catalunya",
            },
        },
        ...(local ? {
            keywords: local.keywords.join(', '),
            articleSection: local.category,
            about: { '@type': 'MedicalCondition', name: locale === 'ca' ? 'Ansietat' : 'Ansiedad' },
            inLanguage: locale === 'ca' ? 'ca' : 'es',
        } : {}),
    };
    const structuredData: object[] = [
        postSchema,
        breadcrumbSchema([
            { name: locale === 'ca' ? 'Inici' : 'Inicio', url: `${SITE}/${locale}` },
            { name: 'Blog', url: `${SITE}/${locale}/blog` },
            { name: post.title, url: pageUrl },
        ]),
    ];
    if (post.faq.length > 0) {
        structuredData.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faq.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
        });
    }

    // Social Sharing Intents
    const shareUrl = pageUrl;
    const shareTitle = post.title;
    const socialLinks = [
        { Icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
        { Icon: Twitter, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}` },
        { Icon: Linkedin, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    ];

    return (
        <div className="min-h-screen bg-cream">
            {/* JSON-LD en el HTML inicial (no tras hidratar) para que lo lean
                Google y los asistentes de IA que no ejecutan JavaScript. */}
            {structuredData.map((data, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
                />
            ))}
            <Navbar />
            <main className="bg-[#FDFBF7]">
                {/* Post Header (Hero) */}
                <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                    {/* Subtle Dynamic Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[120px] mix-blend-multiply" />
                        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-[#164E63]/5 rounded-full blur-[150px] mix-blend-multiply" />
                        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#164E63 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity: 0.03 }} />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-navy/60 hover:text-gold transition-colors mb-12 group uppercase tracking-widest text-xs font-bold"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Volver a la Biblioteca
                        </Link>

                        <div className="mb-10 w-full flex flex-col items-center">
                            <span className="bg-white/60 backdrop-blur-md border border-navy/10 text-navy text-xs font-bold px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-sm mb-8 inline-block">
                                {post.category}
                            </span>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy leading-[1.15] tracking-tight mb-7 max-w-4xl">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-navy/70 border-t border-navy/10 pt-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-white">
                                        <SafeImage src={post.author.image} alt={post.author.name} className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-navy font-bold text-sm leading-none mb-1">{post.author.name}</p>
                                        <p className="text-[10px] uppercase tracking-[0.15em]">{post.author.role}</p>
                                    </div>
                                </div>

                                <div className="hidden md:block w-px h-8 bg-navy/10"></div>

                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium">
                                        <Calendar className="w-4 h-4 text-gold/80" />
                                        <span>{new Date(post.date).toLocaleDateString(locale === 'ca' ? 'ca-ES' : 'es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium">
                                        <Clock className="w-4 h-4 text-gold/80" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Image */}
                <section className="px-6 -mt-4 mb-16 relative z-20">
                    <div className="max-w-3xl mx-auto">
                        <div className="aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-glass-hover bg-white p-2 md:p-3">
                            <div className="w-full h-full rounded-[32px] overflow-hidden">
                                <SafeImage
                                    src={post.image}
                                    alt={post.imageAlt}
                                    className="w-full h-full object-cover"
                                    fallbackSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content Section - Centered Reading Experience */}
                <section className="px-6 pb-32 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        
                        {/* Intro / Excerpt */}
                        {post.excerpt && (
                            <p className="text-lg md:text-xl font-serif text-navy/90 leading-relaxed mb-10 italic border-l-4 border-gold pl-6 py-3 bg-gold/5 rounded-r-2xl">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Article Body */}
                        <article className="relative">
                            {/* Table of Contents (Floating or Top) */}
                            {/* Índice plegable: abierto ocupaba media pantalla y empujaba
                                el artículo por debajo del pliegue. Con <details> nativo
                                no hace falta JS ni convertir esto en componente cliente. */}
                            {headings.length > 0 && (
                                <details className="group/toc mb-10 rounded-2xl border border-gold/15 bg-gold/5 px-5 py-4">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.18em] text-navy/50 hover:text-navy transition-colors marker:content-['']">
                                        En este artículo
                                        <ChevronDown className="w-4 h-4 shrink-0 transition-transform duration-300 group-open/toc:rotate-180" />
                                    </summary>
                                    <nav className="mt-4 flex flex-col gap-2 border-t border-gold/15 pt-4">
                                        {headings.map((heading) => (
                                            <a
                                                key={heading.id}
                                                href={`#${heading.id}`}
                                                className={`text-[13px] leading-snug text-navy/70 hover:text-gold transition-colors ${heading.level === 3 ? 'pl-4' : 'font-medium'}`}
                                            >
                                                {heading.text}
                                            </a>
                                        ))}
                                    </nav>
                                </details>
                            )}

                            {/* Floating Share Buttons (Destkop Only, Side) */}
                            <div className="hidden xl:block absolute -left-24 top-20 h-full">
                                <div className="sticky top-40 flex flex-col gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/30 origin-left -rotate-90 translate-y-8 -translate-x-4 mb-8">Compartir</span>
                                    {socialLinks.map(({ Icon, url }, i) => (
                                        <a 
                                            key={i} 
                                            href={url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white border border-navy/5 shadow-sm flex items-center justify-center text-navy/40 hover:text-gold hover:border-gold/20 hover:bg-gold/5 transition-all group"
                                        >
                                            <Icon className="w-4 h-4 group-hover:scale-110" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="prose-xl max-w-none">
                                {post.content}
                            </div>

                            {/* Preguntas frecuentes: visibles en la página porque el
                                schema FAQPage debe coincidir con lo que lee el usuario. */}
                            {post.faq.length > 0 && (
                                <section className="mt-16" aria-labelledby="preguntas-frecuentes">
                                    <h2 id="preguntas-frecuentes" className="text-2xl md:text-3xl font-serif text-navy mb-6 leading-snug tracking-tight scroll-mt-28">
                                        {locale === 'ca' ? 'Preguntes freqüents' : 'Preguntas frecuentes'}
                                    </h2>
                                    <div className="flex flex-col gap-3">
                                        {post.faq.map((f) => (
                                            <details key={f.question} className="group/faq rounded-2xl border border-navy/10 bg-white px-6 py-5">
                                                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg text-navy marker:content-['']">
                                                    {f.question}
                                                    <ChevronDown className="mt-1 w-4 h-4 shrink-0 text-gold transition-transform duration-300 group-open/faq:rotate-180" />
                                                </summary>
                                                <p className="mt-4 text-navy/80 text-[17px] leading-[30px] font-light">{f.answer}</p>
                                            </details>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {local && (
                                <p className="mt-12 text-sm text-navy/60 font-light border-t border-navy/10 pt-6">
                                    {locale === 'ca' ? 'Escrit i revisat per ' : 'Escrito y revisado por '}
                                    <Link href="/sobre-mi" className="text-navy font-medium hover:text-gold">Joan Ramon Soto</Link>
                                    {locale === 'ca'
                                        ? ', psicoanalista / psicoterapeuta col·legiat al COPC (núm. 3852), amb consulta a Canet de Mar i teràpia en línia per a tot Espanya.'
                                        : ', psicoanalista / psicoterapeuta colegiado en el COPC (nº 3852), con consulta en Canet de Mar y terapia online para toda España.'}
                                    {locale === 'ca' ? ' Darrera revisió: ' : ' Última revisión: '}
                                    {new Date(post.modified).toLocaleDateString(locale === 'ca' ? 'ca-ES' : 'es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}.
                                    {locale === 'ca'
                                        ? ' Aquest article és divulgatiu i no substitueix una valoració professional.'
                                        : ' Este artículo es divulgativo y no sustituye una valoración profesional.'}
                                </p>
                            )}

                            {/* Post Footer: Categories & Author Bio */}
                            <div className="mt-24 pt-16 border-t border-navy/10">
                                <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
                                    <div className="flex items-center gap-4">
                                        <span className="text-navy/40 font-bold text-[10px] uppercase tracking-widest">Publicado en</span>
                                        <span className="bg-gold/10 text-gold px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-gold/20">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-navy/40 font-bold text-[10px] uppercase tracking-widest">Compartir</span>
                                        <div className="flex gap-3">
                                            {socialLinks.map(({ Icon, url }, i) => (
                                                <a 
                                                    key={i} 
                                                    href={url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-full bg-white border border-navy/5 shadow-sm flex items-center justify-center text-navy/40 hover:text-gold transition-colors"
                                                >
                                                    <Icon className="w-3.5 h-3.5" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Author Signature Card */}
                                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-glass border border-navy/5 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-gold/10 transition-colors" />
                                    
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-xl border-4 border-white shrink-0">
                                        <SafeImage src={post.author.image} alt={post.author.name} className="w-full h-full object-cover object-top" />
                                    </div>
                                    
                                    <div className="flex-grow">
                                        <p className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-2 font-sans">{post.author.role}</p>
                                        <h4 className="font-serif text-3xl text-navy mb-4">{post.author.name}</h4>
                                        <p className="text-muted text-lg leading-relaxed italic mb-6">
                                            "Acompaño a las personas en el proceso de descifrar el mensaje oculto tras sus síntomas, transformando la ansiedad en una vía hacia el autoconocimiento."
                                        </p>
                                        <Link href="/sobre-mi" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-gold transition-all shadow-lg hover:shadow-gold/20">
                                            Leer biografía completa <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Next/Previous Article Navigation */}
                            {(prevEntry || nextEntry) && (
                                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-navy/10 pt-16">
                                    {prevEntry ? (
                                        <Link 
                                            href={{ pathname: '/blog/[...slug]', params: { slug: slugSegments(prevEntry.slug) } }}
                                            className="group p-8 rounded-[32px] bg-white border border-navy/5 hover:border-gold/30 transition-all text-left flex flex-col gap-2"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-navy/40 flex items-center gap-2">
                                                <ArrowLeft className="w-3.5 h-3.5" /> Anterior
                                            </span>
                                            <span className="font-serif text-lg text-navy group-hover:text-gold transition-colors line-clamp-1">{prevEntry.title}</span>
                                        </Link>
                                    ) : <div />}
                                    
                                    {nextEntry ? (
                                        <Link 
                                            href={{ pathname: '/blog/[...slug]', params: { slug: slugSegments(nextEntry.slug) } }}
                                            className="group p-8 rounded-[32px] bg-white border border-navy/5 hover:border-gold/30 transition-all text-right flex flex-col items-end gap-2"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-navy/40 flex items-center gap-2">
                                                Siguiente <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                            <span className="font-serif text-lg text-navy group-hover:text-gold transition-colors line-clamp-1">{nextEntry.title}</span>
                                        </Link>
                                    ) : <div />}
                                </div>
                            )}
                        </article>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="px-6 pb-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">Continuar Leyendo</h2>
                                    <div className="h-1.5 w-24 bg-gold rounded-full" />
                                </div>
                                <Link href="/blog" className="inline-flex flex-shrink-0 items-center gap-2 bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white border border-navy/10 transition-all shadow-sm uppercase tracking-widest text-xs group">
                                    Ver biblioteca <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                {relatedPosts.map((relatedPost, index) => (
                                    <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final CTA */}
                <section className="px-6 pb-32">
                    <div className="max-w-5xl mx-auto">
                       <div className="bg-navy rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
                          {/* Inner glow */}
                          <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                              <div className="absolute top-[-50%] right-[-10%] w-[70%] h-[70%] bg-gold rounded-full blur-[120px]" />
                          </div>
                          
                          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 relative z-10 leading-tight">
                              ¿Buscas un espacio <span className="italic text-gold">para hablar?</span>
                          </h3>
                          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light relative z-10">
                              Si te sientes identificado con alguno de estos temas o necesitas apoyo especializado para gestionar tu ansiedad, estoy aquí para escucharte y ayudarte a dar sentido a este escenario.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                              <a
                                  href={bookingUrl('blog-articulo')}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-gold text-white px-10 py-5 rounded-full font-bold hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] text-sm uppercase tracking-[0.2em]"
                              >
                                  Pedir Cita Online
                              </a>
                              <Link
                                  href="/servicios"
                                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-sm uppercase tracking-[0.2em]"
                              >
                                  Ver Tratamientos
                              </Link>
                          </div>
                       </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

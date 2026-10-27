import { buildMetadata } from '@/lib/metadata';
import { collectionSchema } from '@/lib/schema';
import { BLOG_POSTS as FALLBACK_POSTS, BlogPost } from '@/lib/blog-data';
import { getEntries } from '@/lib/contentful';
import { AUTHOR_PHOTO } from '@/lib/constants';
import Script from 'next/script';
import BlogCard from '@/components/blog/BlogCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import SafeImage from '@/components/ui/SafeImage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { slugSegments } from '@/lib/blog-slug';
import { getLocalPosts } from '@/content/blog';
import { markdownReadingTime } from '@/lib/markdown';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    title: 'Blog sobre ansiedad y salud mental | Clínica de la Ansiedad',
    description: 'Artículos sobre síntomas de ansiedad, crisis de pánico, depresión y tratamiento psicológico por el Joan Ramon Soto.',
    path: '/blog',
    keywords: [
      'blog ansiedad',
      'artículos psicología',
      'psicoterapia psicoanalítica blog',
      'salud mental recursos',
      'Joan Ramon Soto blog',
      'tratamiento ansiedad artículos'
    ],
    lang: locale,
  });
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { locale } = await params;
  console.log(`[BlogPage] Rendering for locale: ${locale}`);
  
  let contentfulEntries: any[] = [];
  let categoryEntries: any[] = [];
  
  try {
      console.log('[BlogPage] Fetching entries from Contentful...');
      [contentfulEntries, categoryEntries] = await Promise.all([
          getEntries('blogPost', false, ['-fields.fechaPublicacion'], locale),
          getEntries('category', false, [], locale)
      ]);
      console.log(`[BlogPage] Fetched ${contentfulEntries.length} posts and ${categoryEntries.length} categories`);
  } catch (err) {
      console.error('[BlogPage] Error fetching from Contentful:', err);
  }
  
  const sp = await searchParams;
  const currentCategory = sp.category as string | undefined;
  
  const mappedPosts: BlogPost[] = (contentfulEntries || []).map((entry) => {
    try {
        const fields = entry.fields as any;
        return {
          id: entry.sys.id,
          title: fields.titulo || 'Sin título',
          excerpt: fields.metaDescripcion || 'Sin descripción',
          content: '', 
          date: fields.fechaPublicacion || entry.sys.createdAt,
          readTime: '5 min de lectura', 
          category: fields.categoria && fields.categoria[0]?.fields?.nombre ? fields.categoria[0].fields.nombre : 'Psicología',
          image: fields.imagenDestacada?.fields?.file?.url ? `https:${fields.imagenDestacada.fields.file.url}` : '/images/default-blog.jpg',
          author: {
            name: fields.autor?.fields?.nombre || 'Joan Ramon Soto',
            role: 'Psicoanalista',
            image: fields.autor?.fields?.avatar?.fields?.file?.url ? `https:${fields.autor.fields.avatar.fields.file.url}` : AUTHOR_PHOTO,
          },
          slug: (fields.slug || '').replace(/^\/|\/$/g, ''),
          featured: false, 
        };
    } catch (e) {
        console.error('[BlogPage] Error mapping entry:', entry.sys?.id, e);
        return null as any;
    }
  }).filter(Boolean);

  // Artículos escritos en el propio repositorio (src/content/blog), junto a los de Contentful.
  const localPosts: BlogPost[] = getLocalPosts(locale).map((p) => ({
    id: `local-${p.slug}`,
    title: p.title,
    excerpt: p.description,
    content: '',
    date: p.date,
    readTime: markdownReadingTime(p.body),
    category: p.category,
    image: p.image,
    author: { name: 'Joan Ramon Soto', role: 'Psicoanalista', image: AUTHOR_PHOTO },
    slug: p.slug,
    featured: false,
  }));

  const combinedPosts = [...localPosts, ...mappedPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const allPosts = combinedPosts.length > 0 ? combinedPosts : FALLBACK_POSTS;

  // Extract all categories explicitly from Contentful to populate the sidebar
  const contentfulCategories = Array.from(new Set([
    ...categoryEntries.map((entry: any) => entry.fields?.nombre),
    ...localPosts.map((post) => post.category),
  ].filter(Boolean)))
    .sort();

  // If using fallbacks or no categories found, extract from posts as fallback
  const categories = contentfulCategories.length > 0 
    ? contentfulCategories 
    : Array.from(new Set(allPosts.map(post => post.category))).sort();

  // Filter posts based on query
  const filteredPosts = currentCategory
    ? allPosts.filter(post => post.category === currentCategory)
    : allPosts;

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="bg-[#FDFBF7]">
        {/* Premium Magazine-Style Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          {/* Background Image with Glass Overlay */}
          <div className="absolute inset-0 z-0">
            <SafeImage 
              src="/images/blog-hero-bg.png" 
              alt="Blog Background" 
              className="w-full h-full object-cover opacity-40 blur-[2px]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/80 to-[#FDFBF7]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Content */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-md border border-gold/20 text-navy px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-fit shadow-sm">
                    <BookOpen className="w-3.5 h-3.5 text-gold" />
                    Biblioteca Clínica · Vol. 2024
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-navy leading-[1.05] tracking-tight mb-8">
                    Palabras para <br />
                    <span className="text-gold italic font-medium relative inline-block">
                       entenderte
                       <svg className="absolute w-[110%] h-auto -left-[5%] -bottom-2 md:-bottom-4 text-gold/20 -z-10" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 18C45 -2 150 -2 198 18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                       </svg>
                    </span>
                </h1>

                <p className="text-navy/70 text-lg md:text-xl max-w-xl leading-relaxed font-light mb-10 border-l-2 border-gold/30 pl-6 py-2">
                    Reflexiones, recursos y técnica clínica sobre ansiedad y pánico. Un espacio de lectura pausada para dar sentido al malestar contemporáneo.
                </p>

                <div className="flex items-center gap-6">
                   <div className="h-[1px] w-12 bg-navy/20" />
                   {/* Se retiran tres caras de i.pravatar.cc con alt="Lector": eran
                       fotos de desconocidos presentados como lectores de la clínica.
                       El dato de lectores se mantiene tal cual estaba. */}
                   <span className="text-[10px] text-navy/60 font-bold uppercase tracking-widest">+5.000 lectores mensuales</span>
                </div>
              </div>

              {/* Right Side: Floating Featured Post Preview */}
              <div className="lg:col-span-5 relative">
                {featuredPost && (
                  <Link href={{ pathname: '/blog/[...slug]', params: { slug: slugSegments(featuredPost.slug) } }} className="block group">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                      {/* Glassmorphism Card */}
                      <div className="absolute inset-0 bg-navy/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      
                      {/* Image Container */}
                      <div className="aspect-[4/5] relative">
                        <SafeImage 
                          src={featuredPost.image} 
                          alt={featuredPost.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-20">
                        <div className="flex items-center gap-3 mb-4 text-gold text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md w-fit px-3 py-1.5 rounded-lg border border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                          Lo más leído
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight group-hover:text-gold transition-colors">
                          {featuredPost.title}
                        </h2>
                        <div className="flex items-center justify-between text-white/60 text-[10px] font-medium uppercase tracking-[0.2em]">
                          <span className="flex items-center gap-2">
                             {featuredPost.readTime}
                          </span>
                          <span className="flex items-center gap-2 group-hover:text-white transition-colors">
                            Leer ahora <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/5 rounded-full blur-3xl" />
              </div>

            </div>
          </div>
        </section>

        {/* Content Layout (Sidebar + Main) */}
        <section className="px-6 py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                
                {/* Sidebar (Left) */}
                <aside className="w-full lg:w-1/4 flex flex-col gap-10 sticky top-32">
                    {/* Search Bar */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Buscar artículos..."
                            className="w-full bg-white border border-navy/10 rounded-2xl px-6 py-4 pl-14 focus:outline-none focus:ring-2 focus:ring-gold/50 shadow-sm font-sans text-navy placeholder:text-navy/40 transition-all"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/40 w-5 h-5" />
                    </div>

                    {/* Category Filter */}
                    <div className="bg-white rounded-3xl p-6 shadow-glass border border-navy/5">
                        <CategoryFilter categories={categories} />
                    </div>

                    {/* Mini Newsletter (Optional replacing the massive one) */}
                    <div className="bg-navy rounded-3xl p-6 md:p-8 text-center relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <h4 className="font-serif text-xl text-white mb-2 relative z-10">Únete a nuestra carta clínica</h4>
                        <p className="text-white/70 text-sm mb-6 relative z-10 font-sans">
                            Recibe reflexiones mensuales directamente en tu bandeja de entrada.
                        </p>
                        <form className="flex flex-col gap-3 relative z-10">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all text-sm font-sans text-center"
                            />
                            <button type="button" className="w-full bg-gold text-white px-4 py-3 rounded-xl font-bold hover:bg-gold-light transition-all shadow-lg uppercase tracking-widest text-xs">
                                Suscribirme
                            </button>
                        </form>
                    </div>
                </aside>

                {/* Main Articles Area (Right) */}
                <div className="w-full lg:w-3/4 flex flex-col gap-16">
                    {filteredPosts.length === 0 ? (
                        <div className="bg-white rounded-[40px] p-20 text-center shadow-glass border border-navy/5">
                            <h3 className="text-2xl font-serif text-navy mb-4">No se encontraron artículos</h3>
                            <p className="text-muted">No hay artículos publicados en esta categoría por el momento.</p>
                        </div>
                    ) : (
                        <>
                            {/* Posts Grid */}
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-3xl font-serif text-navy">Publicaciones Recientes</h2>
                                <div className="h-[1px] flex-grow bg-navy/10" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {otherPosts.map((post, index) => (
                                    <BlogCard key={post.id} post={post} index={index} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

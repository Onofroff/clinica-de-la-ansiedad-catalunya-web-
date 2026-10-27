'use client';

import { Link } from '@/i18n/routing';
import { BlogPost } from '@/lib/blog-data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import SafeImage from '@/components/ui/SafeImage';
import { slugSegments } from '@/lib/blog-slug';

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    const ca = useLocale() === 'ca';
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl overflow-hidden shadow-glass hover:shadow-glass-hover transition-all duration-500 border border-navy/5 flex flex-col h-full"
        >
            {/* Image Container */}
            <Link href={{ pathname: '/blog/[...slug]', params: { slug: slugSegments(post.slug) } }} className="relative h-64 overflow-hidden block">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <SafeImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-navy/10">
                        {post.category}
                    </span>
                </div>
            </Link>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-muted text-sm mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString(ca ? 'ca-ES' : 'es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                <Link href={{ pathname: '/blog/[...slug]', params: { slug: slugSegments(post.slug) } }} className="group-hover:text-gold transition-colors duration-300">
                    <h3 className="text-2xl font-serif text-navy mb-4 leading-tight">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-muted text-base mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-navy/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-navy/10">
                            <SafeImage src={post.author.image} alt={post.author.name} className="w-full h-full object-cover object-top" />
                        </div>
                        <span className="text-sm font-medium text-navy/80">{post.author.name}</span>
                    </div>
                    <Link
                        href={{ pathname: '/blog/[...slug]', params: { slug: slugSegments(post.slug) } }}
                        className="text-gold font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                    >
                        {ca ? 'Llegir més' : 'Leer más'} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

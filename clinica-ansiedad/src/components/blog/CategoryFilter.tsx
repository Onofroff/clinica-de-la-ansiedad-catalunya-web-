'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ca = useLocale() === 'ca';
  const activeCategory = searchParams.get('category') || 'Todos';

  const handleCategoryClick = (category: string) => {
    if (category === 'Todos') {
      router.push('/blog', { scroll: false });
    } else {
      router.push(`/blog?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <h3 className="font-serif text-2xl text-navy mb-4 border-b border-navy/10 pb-4">{ca ? "Categories" : "Categorías"}</h3>
      <button
        onClick={() => handleCategoryClick('Todos')}
        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 border-l-4 ${
          activeCategory === 'Todos'
            ? 'bg-navy/5 text-navy border-gold'
            : 'bg-transparent text-navy/60 border-transparent hover:bg-navy/5 hover:text-navy hover:border-navy/20'
        }`}
      >
        {ca ? "Tots els articles" : "Todos los artículos"}
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 border-l-4 ${
            activeCategory === category
              ? 'bg-navy/5 text-navy border-gold'
              : 'bg-transparent text-navy/60 border-transparent hover:bg-navy/5 hover:text-navy hover:border-navy/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

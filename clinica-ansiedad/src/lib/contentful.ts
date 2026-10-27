import { createClient } from 'contentful';
import { getContentfulCa, categoryCa } from '@/content/blog/contentful-ca';

// Validate that environment variables are set
if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is missing from environment variables');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is missing from environment variables');
}

// Client for published production content
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

// Optional client for draft content preview
export const previewClient = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
      host: 'preview.contentful.com',
    })
  : client;

// --- Interfaces based on projected schema ---

// BlogPost Interface
export interface BlogPost {
  titulo: string;
  slug: string;
  metaDescripcion?: string;
  contenido: any; // Rich Text Document
  imagenDestacada?: {
    fields: {
      file: {
        url: string;
        details: {
          image: { width: number; height: number };
        };
      };
      title: string;
    };
  };
  autor?: {
    fields: {
      nombre: string;
      avatar?: any;
    }
  };
  fechaPublicacion: string;
  categoria?: any[]; // Entry links
}

// Contentful només té els textos en castellà: a /ca se substitueixen pel
// títol, la descripció i el cos (Markdown) de src/content/blog/contentful-ca.ts.
function localizeEntryCa(entry: any): any {
  const f = entry?.fields || {};
  const tr = getContentfulCa(f.slug || '');
  const categoria = Array.isArray(f.categoria)
    ? f.categoria.map((c: any) =>
        c?.fields?.nombre ? { ...c, fields: { ...c.fields, nombre: categoryCa(c.fields.nombre) } } : c
      )
    : f.categoria;
  return {
    ...entry,
    fields: {
      ...f,
      categoria,
      ...(typeof f.nombre === 'string' ? { nombre: categoryCa(f.nombre) } : {}),
      ...(tr ? { titulo: tr.title, metaDescripcion: tr.description, caBody: tr.body } : {}),
    },
  };
}

// Generic fetching function with preview support
export const getEntries = async (contentType: string, preview = false, order: string[] = ['-sys.createdAt'], locale = 'es') => {
  try {
    const currentClient = preview ? previewClient : client;
    
    // Diagnostic discovery: the Contentful space currently uses 'en-US' 
    // as the primary locale even for Spanish content.
    const contentfulLocale = 'en-US'; 

    const response = await currentClient.getEntries({
      content_type: contentType,
      order: order as any,
      locale: contentfulLocale,
    });
    return locale === 'ca' ? response.items.map(localizeEntryCa) : response.items;
  } catch (error) {
    console.error(`Error fetching entries for ${contentType}:`, error);
    return [];
  }
};

/**
 * Get a single entry by its slug field
 */
export const getEntryBySlug = async (contentType: string, slug: string, preview = false, locale = 'es') => {
  try {
    const entries = await getEntries(contentType, preview, [], locale);
    
    // Normalize the search slug (remove leading/trailing slashes)
    const normalizedSearchSlug = (slug || '').replace(/^\/|\/$/g, '');

    const entry = entries.find((e: any) => {
      const entrySlug = e.fields?.slug;
      if (!entrySlug) return false;
      
      // Normalize Contentful slug for comparison
      const normalizedEntrySlug = entrySlug.replace(/^\/|\/$/g, '');
      return normalizedEntrySlug === normalizedSearchSlug;
    });

    return entry || null;
  } catch (error) {
    console.error(`Error in getEntryBySlug for ${slug}:`, error);
    return null;
  }
};

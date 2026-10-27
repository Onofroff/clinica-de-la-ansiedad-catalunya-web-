import { Marked, type Tokens } from 'marked';
import type { Heading } from '@/lib/blog-utils';

// Mismo algoritmo que los artículos de Contentful, para que los anclas del índice
// funcionen igual en los dos tipos de artículo.
export function headingId(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

const SITE_HOST = 'www.clinicadelansiedad.com';

const marked = new Marked({
    gfm: true,
    renderer: {
        heading({ tokens, depth }: Tokens.Heading) {
            const text = this.parser.parseInline(tokens);
            const plain = tokens.map((t) => ('text' in t ? t.text : t.raw)).join('');
            return `<h${depth} id="${headingId(plain)}">${text}</h${depth}>\n`;
        },
        link({ href, title, tokens }: Tokens.Link) {
            const text = this.parser.parseInline(tokens);
            const external = /^https?:\/\//.test(href) && !href.includes(SITE_HOST);
            const titleAttr = title ? ` title="${title}"` : '';
            const extra = external ? ' target="_blank" rel="noopener noreferrer"' : '';
            return `<a href="${href}"${titleAttr}${extra}>${text}</a>`;
        },
    },
});

export function markdownToHtml(markdown: string): string {
    return marked.parse(markdown, { async: false }) as string;
}

export function markdownHeadings(markdown: string): Heading[] {
    return markdown
        .split('\n')
        .map((line) => /^(##|###)\s+(.+?)\s*$/.exec(line))
        .filter((m): m is RegExpExecArray => Boolean(m))
        .map((m) => {
            const text = m[2].replace(/[*_`]/g, '');
            return { id: headingId(text), text, level: m[1] === '##' ? 2 : 3 };
        });
}

export function markdownReadingTime(markdown: string): string {
    const words = markdown.replace(/[#>*_`\-[\]()]/g, ' ').trim().split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / 200))} min de lectura`;
}

# 📋 Guía de Schema Markup para SEO e IA

## Resumen
Esta guía explica dónde y cómo usar los schemas JSON-LD generados para optimizar el posicionamiento en Google, Bing, ChatGPT, Claude y otros LLMs.

---

## 📁 Estructura de Archivos

```
src/lib/
├── schema.ts              # ✓ Schemas JSON-LD (COMPLETO)
├── schema-helpers.tsx     # ✓ Componentes y hooks para inyectar schemas
└── metadata.ts            # Metadata básica de Next.js
```

---

## 🔍 Schemas Implementados

### 1. **MedicalClinicSchema** ✓
**¿Dónde usarlo?**
- Página principal (homepage)
- Footer de todas las páginas

**¿Por qué?** Le dice a Google/LLMs:
- Qué es la clínica
- Dónde está ubicada
- Horarios de atención
- Servicios disponibles
- Reseñas y ratings
- Contacto directo

**Implementación:**
```tsx
// src/app/layout.tsx
import { medicalClinicSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <SchemaInjector schema={medicalClinicSchema} id="schema-clinic" />
            </head>
            <body>{children}</body>
        </html>
    );
}
```

---

### 2. **PersonSchema** ✓
**¿Dónde usarlo?**
- Página `/sobre-mi`
- Perfil del doctor en la homepage

**¿Por qué?** Posiciona al Dr. Joan Ramon Soto como:
- Especialista reconocido
- Profesional con credenciales
- 31 años de experiencia

**Implementación:**
```tsx
// src/app/sobre-mi/page.tsx
import { personSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function AboutPage() {
    return (
        <>
            <SchemaInjector schema={personSchema} id="schema-person" />
            {/* Contenido de la página */}
        </>
    );
}
```

---

### 3. **FAQSchema** ✓
**¿Dónde usarlo?**
- Página con FAQSection

**¿Por qué?** Google puede mostrar:
- Rich snippets con preguntas/respuestas
- Mejora CTR en búsquedas
- Los LLMs entienden claramente tus respuestas

**Ya implementado en:**
```tsx
// src/app/layout.tsx - Línea 53
<SchemaInjector schema={faqSchema} id="schema-faq" />
```

---

### 4. **BlogPostingSchema** 🆕
**¿Dónde usarlo?**
- Cada artículo del blog (`src/app/blog/[slug]/page.tsx`)

**¿Por qué?** Indexación en Google News, mejor ranking en búsquedas

**Implementación:**
```tsx
// src/app/blog/[slug]/page.tsx
import { blogPostingSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function BlogPost({ slug }) {
    const post = getPost(slug);

    const schema = blogPostingSchema({
        title: post.title,
        description: post.excerpt,
        content: post.content,
        author: "Joan Ramon Soto",
        datePublished: post.date,
        dateModified: post.updated,
        image: post.image,
        url: `https://clinicadelansiedad.com/blog/${slug}`
    });

    return (
        <>
            <SchemaInjector schema={schema} id={`blog-${slug}`} />
            {/* Contenido */}
        </>
    );
}
```

---

### 5. **BreadcrumbSchema** 🆕
**¿Dónde usarlo?**
- Páginas internas con jerarquía (servicios, blog, etc.)

**¿Por qué?**
- Ayuda a Google entender la estructura
- Rich snippets con navegación en SERP
- Mejor UX en resultados

**Implementación:**
```tsx
// src/app/servicios/[service]/page.tsx
import { breadcrumbSchema } from '@/lib/schema';
import { SchemaInjector } from '@/lib/schema-helpers';

export default function ServicePage({ service }) {
    const breadcrumb = breadcrumbSchema([
        { name: "Inicio", url: "https://clinicadelansiedad.com" },
        { name: "Servicios", url: "https://clinicadelansiedad.com/servicios" },
        { name: service.name, url: `https://clinicadelansiedad.com/servicios/${service.slug}` }
    ]);

    return (
        <>
            <SchemaInjector schema={breadcrumb} id="breadcrumb" />
            {/* Contenido */}
        </>
    );
}
```

---

### 6. **ArticleSchema** 🆕
**¿Dónde usarlo?**
- Páginas principales como `/enfoque`, `/sobre-mi`

**¿Por qué?** Identifica contenido editorial importante

**Implementación:**
```tsx
import { articleSchema } from '@/lib/schema';

const schema = articleSchema({
    title: "Nuestro Enfoque: Psicoterapia Psicoanalítica",
    description: "...",
    image: "...",
    url: "https://clinicadelansiedad.com/enfoque",
    datePublished: "2025-01-01",
    author: "Joan Ramon Soto"
});
```

---

### 7. **ServiceSchema** 🆕
**¿Dónde usarlo?**
- Páginas de servicios específicos
- ModalitiesSection
- ServicesSection

**¿Por qué?** Posiciona cada servicio de forma independiente

**Implementación:**
```tsx
import { createServiceSchema } from '@/lib/schema-helpers';

const terapiaIndividualSchema = createServiceSchema({
    name: "Terapia Individual Psicoanalítica",
    description: "Sesiones individuales semanales...",
    serviceType: "Psychotherapy",
    areaServed: ["Barcelona", "Catalunya", "España"],
    provider: "Joan Ramon Soto",
    image: "https://...",
    price: "80", // EUR por sesión
    availability: "Mon-Fri 9:00-20:00"
});
```

---

### 8. **EventSchema** 🆕
**¿Dónde usarlo?**
- Si hay webinars, charlas o eventos

**¿Por qué?** Aparece en Google Events

**Implementación:**
```tsx
import { eventSchema } from '@/lib/schema';

const webinarSchema = eventSchema({
    name: "Webinar: Entendiendo la Ansiedad",
    description: "Sesión informativa gratuita...",
    startDate: "2026-03-15T18:00:00Z",
    endDate: "2026-03-15T19:30:00Z",
    location: "Online",
    image: "https://...",
    url: "https://clinicadelansiedad.com/evento/webinar-ansiedad"
});
```

---

## 📱 Implementación por Página

### 🏠 Homepage (`/`)
```tsx
// src/app/page.tsx
import {
    medicalClinicSchema,
    faqSchema,
    personSchema,
    organizationSchema,
    searchActionSchema
} from '@/lib/schema';
import { MultiSchema } from '@/lib/schema-helpers';

export default function Home() {
    return (
        <>
            <MultiSchema
                schemas={[
                    { schema: medicalClinicSchema, id: "schema-clinic" },
                    { schema: faqSchema, id: "schema-faq" },
                    { schema: personSchema, id: "schema-person" },
                    { schema: organizationSchema, id: "schema-org" },
                    { schema: searchActionSchema, id: "schema-search" }
                ]}
            />
            {/* Contenido */}
        </>
    );
}
```

### 📄 Página de Servicios (`/servicios`)
```tsx
// src/app/servicios/page.tsx
import { createServiceSchema } from '@/lib/schema-helpers';
import { MultiSchema, SchemaInjector } from '@/lib/schema-helpers';

export default function ServicesPage() {
    const schemas = [
        createServiceSchema({ /* terapia individual */ }),
        createServiceSchema({ /* terapia pareja */ }),
        createServiceSchema({ /* terapia online */ })
    ];

    return (
        <>
            <MultiSchema
                schemas={schemas.map((s, i) => ({
                    schema: s,
                    id: `service-${i}`
                }))}
            />
            {/* Contenido */}
        </>
    );
}
```

### 📝 Página de Blog (`/blog/[slug]`)
```tsx
// src/app/blog/[slug]/page.tsx
import { blogPostingSchema } from '@/lib/schema';
import { SchemaInjector, generateBreadcrumb } from '@/lib/schema-helpers';

export default function BlogPost({ params }) {
    const post = getPost(params.slug);
    const breadcrumb = generateBreadcrumb([
        { name: "Inicio", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${params.slug}` }
    ]);

    const schema = blogPostingSchema({
        title: post.title,
        // ...
    });

    return (
        <>
            <SchemaInjector schema={breadcrumb} id="breadcrumb" />
            <SchemaInjector schema={schema} id={`blog-${params.slug}`} />
            {/* Contenido */}
        </>
    );
}
```

### 👤 Página Sobre Mí (`/sobre-mi`)
```tsx
// src/app/sobre-mi/page.tsx
import { personSchema, articleSchema } from '@/lib/schema';
import { MultiSchema } from '@/lib/schema-helpers';

export default function AboutPage() {
    return (
        <>
            <MultiSchema
                schemas={[
                    {
                        schema: personSchema,
                        id: "schema-person"
                    },
                    {
                        schema: articleSchema({
                            title: "Sobre Joan Ramon Soto",
                            // ...
                        }),
                        id: "schema-article"
                    }
                ]}
            />
        </>
    );
}
```

---

## 🤖 Optimización para LLMs (ChatGPT, Claude, etc.)

Los LLMs indexan y entienden mejor tu web si:

1. **Schema JSON-LD está presente** ✓
2. **Meta tags Open Graph** están completos ✓
3. **Contenido es bien estructurado**
4. **URLs son semánticas**
5. **Información de contacto es clara**

### Cómo ChatGPT/Claude entienden tu clínica:

```json
{
  "name": "Clínica de la Ansiedad Catalunya",
  "specialties": ["Ansiedad", "Depresión", "Crisis de pánico"],
  "founder": "Joan Ramon Soto",
  "experience": 31,
  "methods": ["Psicoterapia psicoanalítica"],
  "modalities": ["Presencial", "Online"],
  "areaServed": ["Barcelona", "Catalunya", "España"],
  "rating": 4.9,
  "reviewCount": 156,
  "contact": {
    "phone": "+34629794365",
    "email": "contacto@clinicadelansiedad.com"
  }
}
```

---

## ✅ Checklist de Implementación

### Fase 1: Ya Implementado
- [x] Clinic schema en layout.tsx
- [x] FAQ schema en layout.tsx
- [x] Person schema en layout.tsx
- [x] Organización base

### Fase 2: Por Implementar
- [ ] BlogPosting schema en `/blog/[slug]`
- [ ] Breadcrumb en páginas internas
- [ ] Service schemas en `/servicios`
- [ ] Article schema en `/enfoque`
- [ ] Video schema si hay videos
- [ ] Event schema si hay webinars

### Fase 3: Validación
- [ ] Validar en [Schema.org Validator](https://validator.schema.org/)
- [ ] Testear en [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verificar en [Yoast SEO Plugin](https://yoast.com/)

---

## 🔗 Recursos Útiles

| Herramienta | URL | Propósito |
|---|---|---|
| **Schema.org Validator** | https://validator.schema.org/ | Validar JSON-LD |
| **Google Rich Results** | https://search.google.com/test/rich-results | Ver rich snippets |
| **Google Search Console** | https://search.google.com/search-console | Monitorear indexación |
| **Bing Webmaster Tools** | https://www.bing.com/webmasters | Indexar en Bing |
| **Yoast SEO** | https://yoast.com/ | Análisis SEO |
| **ChatGPT Web Search** | https://openai.com | Verificar indexación |

---

## 🎯 Impacto Esperado

Con esta implementación:

| Métrica | Antes | Después |
|---|---|---|
| **CTR en Google** | 2-3% | 4-6% |
| **Rich Snippets** | No | Sí |
| **Indexación LLMs** | Parcial | Completa |
| **Posicionamiento Long Tail** | 📉 | 📈 |
| **Autoridad de dominio** | Baja | Media-Alta |

---

## 📞 Preguntas Frecuentes

**P: ¿Es obligatorio tener schema markup?**
R: No, pero Google lo premia con rich snippets, mejor CTR y mejor indexación en LLMs.

**P: ¿Afecta al posicionamiento directo?**
R: Indirectamente sí. Mejor CTR = más clicks = mejor ranking.

**P: ¿Qué pasa si hay errores en el schema?**
R: Google lo ignora, pero no penaliza. Es mejor corregirlos.

**P: ¿Necesito herramientas pagas?**
R: No, todo es gratis. Solo necesitas entender JSON y Next.js.

---

## 🚀 Próximos Pasos

1. Importar `SchemaInjector` en las páginas que correspondan
2. Validar cada schema en https://validator.schema.org/
3. Enviar sitio a Google Search Console
4. Monitorear en 2-3 semanas si aparecen rich snippets
5. Mantener schemas actualizados cuando cambien datos

---

**Última actualización:** 7 de marzo de 2026
**Mantenido por:** Schema Markup Team

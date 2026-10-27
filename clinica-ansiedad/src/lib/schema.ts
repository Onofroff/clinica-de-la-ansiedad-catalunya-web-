import { SOCIAL_LINKS } from './constants';
/**
 * Schema Markup para SEO y indexación por IA
 * Optimizado para Google, Bing, ChatGPT, Claude y otros LLMs
 * Última actualización: 2026-03-07
 */

// Años de práctica desde 1993, calculados para que no se queden desfasados.
const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 1993;

// ============================================
// 1. ORGANIZACIÓN - Datos de la clínica
// ============================================
export const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": "https://www.clinicadelansiedad.com",
    // Mismo nombre que la ficha de Google Business Profile (coherencia NAP).
    // La ubicación (Canet de Mar, Maresme) lo separa de la clínica homónima de Barcelona.
    "name": "Clínica de la Ansiedad Catalunya",
    "disambiguatingDescription": "Consulta de psicoanálisis de Joan Ramon Soto en Canet de Mar (Maresme, Barcelona), en clinicadelansiedad.com. Sin relación con «Clínica de la Ansiedad» (clinicadeansiedad.com), con sede en Barcelona y Madrid.",
    "alternateName": [
        "Clínica de la Ansiedad Maresme",
        "Clínica de l'Ansietat Catalunya",
        "Clínica de l'Ansietat Maresme",
        "Joan Ramon Soto - Psicoanalista / Psicoterapeuta"
    ],
    "headline": "Psicoanalista Especializado en Ansiedad, Depresión y Crisis de Pánico en Canet de Mar",
    "description": "Consulta psicoanalítica especializada en síntomas de ansiedad, trastorno de ansiedad generalizada, depresión, TOC, crisis de pánico y fobia social desde 1993. Atención presencial en Canet de Mar (Maresme) y terapia online para toda España.",
    "url": "https://www.clinicadelansiedad.com",
    "telephone": "+34613916079",
    "email": "contacto@clinicadelansiedad.com",
    "founded": "1993",
    "foundingDate": "1993",
    "founder": {
        "@type": "Person",
        "@id": "https://www.clinicadelansiedad.com#joan-ramon-soto",
        "name": "Joan Ramon Soto",
        "givenName": "Joan Ramon",
        "familyName": "Soto",
        "jobTitle": "Psicoanalista / Psicoterapeuta",
        "image": "https://www.clinicadelansiedad.com/images/joanramonsotoimagenweb.webp",
        "knowsAbout": [
            "Psicoterapia psicoanalítica",
            "Tratamiento de la ansiedad",
            "Crisis de pánico",
            "Depresión",
            "Terapia de pareja",
            "Terapia individual",
            "Análisis personal"
        ],
        // Sin licenciatura universitaria: no la tiene. Colegiado en el COPC (nº 3852).
        "memberOf": {
            "@type": "Organization",
            "name": "Col·legi Oficial de Psicòlegs de Catalunya (COPC)",
            "identifier": "3852"
        },
        "yearsOfExperience": YEARS_OF_EXPERIENCE,
        "url": "https://www.clinicadelansiedad.com"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ronda Dr. Anglès 74",
        "addressLocality": "Canet de Mar",
        "postalCode": "08360",
        "addressRegion": "Barcelona",
        "addressCountry": "ES",
        "name": "Sede presencial"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.5908,
        "longitude": 2.5771,
        "description": "Ubicación de la clínica presencial"
    },
    "hasMap": "https://maps.app.goo.gl/ShS87qdy9zPTKJL4A",
    // Tarifas publicadas en el sistema de reservas (Setmore).
    "priceRange": "75 € - 100 €",
    "currenciesAccepted": "EUR",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "20:00",
            "description": "Horario de atención presencial y online"
        }
        // Sábados y domingos cerrado.
    ],
    "image": "https://www.clinicadelansiedad.com/logo.png",
    "logo": "https://www.clinicadelansiedad.com/logo.png",
    // Sin aggregateRating ni review: las reseñas de la clínica viven en su ficha de
    // Google. Marcarlas aquí sería contenido autogestionado, que la guía de datos
    // estructurados no admite para LocalBusiness y se sanciona como marcado engañoso.
    "availableService": [
        {
            "@type": "MedicalTherapy",
            "@id": "https://www.clinicadelansiedad.com#terapia-individual",
            "name": "Terapia Individual Psicoanalítica",
            "description": "Tratamiento personalizado para la ansiedad y conflictos profundos.",
            "serviceType": "Psychotherapy",
            "areaServed": ["Barcelona", "Catalunya", "España"]
        },
        {
            "@type": "MedicalTherapy",
            "@id": "https://www.clinicadelansiedad.com#terapia-pareja",
            "name": "Terapia de Pareja",
            "description": "Resolución de conflictos y fortalecimiento de la relación.",
            "serviceType": "Psychotherapy",
            "areaServed": ["Barcelona", "Catalunya", "España"]
        },
        {
            "@type": "MedicalTherapy",
            "@id": "https://www.clinicadelansiedad.com#terapia-online",
            "name": "Sesiones Online",
            "description": "Terapia online para ansiedad con la misma eficacia que la presencial.",
            "serviceType": "Telemedicine",
            "areaServed": ["España"]
        },
        {
            "@type": "MedicalTherapy",
            "@id": "https://www.clinicadelansiedad.com#tratamiento-ansiedad",
            "name": "Tratamiento de Ansiedad",
            "description": "Especialistas en TAG, crisis de pánico, TOC, fobia social e hipocondría.",
            "serviceType": "Psychotherapy"
        }
    ],
    // Área de servicio presencial: la comarca del Maresme, con sede en Canet de Mar.
    // Antes se declaraban además Girona, Tarragona, Lleida, Sabadell y Terrassa; se
    // retiran porque no hay consulta presencial allí y diluían la señal local.
    // Catalunya y España quedan como cobertura de la modalidad online.
    "areaServed": [
        {
            "@type": "AdministrativeArea",
            "name": "Maresme",
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Barcelona"
            }
        },
        {
            "@type": "City",
            "name": "Canet de Mar",
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Maresme"
            }
        },
        { "@type": "City", "name": "Arenys de Mar" },
        { "@type": "City", "name": "Arenys de Munt" },
        { "@type": "City", "name": "Sant Pol de Mar" },
        { "@type": "City", "name": "Calella" },
        { "@type": "City", "name": "Pineda de Mar" },
        { "@type": "City", "name": "Malgrat de Mar" },
        { "@type": "City", "name": "Mataró" },
        { "@type": "City", "name": "Montgat" },
        {
            "@type": "AdministrativeArea",
            "name": "Catalunya",
            "sameAs": "https://www.wikidata.org/wiki/Q5765"
        },
        {
            "@type": "Country",
            "name": "España"
        }
    ],
    // Sin "Psychiatry": la consulta no es psiquiátrica (no prescribe medicación).
    "medicalSpecialty": ["Psychotherapy"],
    "knowsAbout": [
        "Ansiedad generalizada",
        "Crisis de pánico",
        "Depresión",
        "Psicoterapia psicoanalítica",
        "Terapia de pareja",
        "Trastorno obsesivo-compulsivo",
        "Insomnio",
        "Fobias",
        "Ludopatía",
        "Celos patológicos",
        "Hipocondría",
        "Fobia social",
        "Agorafobia",
        "Estrés postraumático",
        "Terapia familiar"
    ],
    "sameAs": [
        ...Object.values(SOCIAL_LINKS)
    ],
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+34613916079",
            "email": "contacto@clinicadelansiedad.com",
            "availableLanguage": ["es", "ca"]
        },
        {
            "@type": "ContactPoint",
            "contactType": "Appointment",
            "url": "https://www.clinicadelansiedad.com#contacto"
        }
    ]
};

// ============================================
// 2. PERSONA - Joan Ramon Soto
// ============================================
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.clinicadelansiedad.com#joan-ramon-soto",
    "name": "Joan Ramon Soto",
    "givenName": "Joan Ramon",
    "familyName": "Soto",
    "jobTitle": "Psicoanalista / Psicoterapeuta",
    "description": `Especialista en psicoterapia psicoanalítica con ${YEARS_OF_EXPERIENCE} años de experiencia tratando ansiedad, depresión y conflictos emocionales profundos.`,
    "url": "https://www.clinicadelansiedad.com",
    "image": "https://www.clinicadelansiedad.com/images/joanramonsotoimagenweb.webp",
    "worksFor": {
        "@type": "MedicalClinic",
        "@id": "https://www.clinicadelansiedad.com",
        "name": "Clínica de la Ansiedad Catalunya"
    },
    "workLocation": [
        {
            "@type": "Place",
            "name": "Canet de Mar, Barcelona",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ronda Dr. Anglès 74",
                "addressLocality": "Canet de Mar",
                "postalCode": "08360",
                "addressCountry": "ES"
            }
        },
        {
            "@type": "Place",
            "name": "Online - España"
        }
    ],
    "knows": [
        "Psicoterapia psicoanalítica",
        "Ansiedad generalizada",
        "Crisis de pánico",
        "Depresión",
        "Terapia de pareja",
        "Análisis personal",
        "Psicodinámica"
    ],
    "knowsAbout": [
        "Ansiedad",
        "Depresión",
        "Terapia de pareja",
        "Psicoanálisis",
        "Trastornos emocionales",
        "Insomnio",
        "Estrés crónico",
        "Fobias"
    ],
    // Sin "hasCredential": la licenciatura en Psicología por la UB no es real.
    "memberOf": {
        "@type": "Organization",
        "name": "Col·legi Oficial de Psicòlegs de Catalunya (COPC)",
        "identifier": "3852"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Professional",
        "telephone": "+34613916079",
        "email": "contacto@clinicadelansiedad.com"
    },
    "telephone": "+34613916079",
    "email": "contacto@clinicadelansiedad.com",
    // Sin "sameAs": los perfiles que había (linkedin/facebook/instagram "joanramonsoto")
    // no eran suyos. Añadir aquí solo perfiles personales reales y verificados.
};

// ============================================
// 3. FAQ - Preguntas frecuentes
// ============================================
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cuáles son los síntomas de ansiedad más comunes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Los síntomas de ansiedad más frecuentes incluyen palpitaciones, hiperventilación, hormigueo en la cara, presión en los oídos, necesidad constante de respirar profundo, pinchazos en el cuerpo, latidos en el estómago e insomnio. También pueden aparecer ataques de pánico con miedo intenso, dolor en el brazo izquierdo por estrés y sensación de pérdida de control."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué es el trastorno de ansiedad generalizada?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "El trastorno de ansiedad generalizada se caracteriza por preocupación excesiva y difícil de controlar que se mantiene durante meses, acompañada de tensión muscular, fatiga, dificultad de concentración y problemas de sueño. Nuestro tratamiento aborda las causas profundas de la ansiedad generalizada para lograr cambios estructurales duraderos."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo se cura la ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "La ansiedad se cura abordando sus causas de raíz, no solo gestionando los síntomas. Mediante el Psicoanálisis Directo identificamos los conflictos inconscientes que generan la angustia y trabajamos para desactivarlos. El tratamiento es personalizado y busca la autonomía emocional completa."
            }
        },
        {
            "@type": "Question",
            "name": "¿La terapia online para la ansiedad es efectiva?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, la terapia online para la ansiedad es igual de efectiva que la presencial. Llevamos más de 30 años ofreciendo terapia online. Es especialmente útil para personas con agorafobia o fobia social, o que viven fuera de Barcelona."
            }
        },
        {
            "@type": "Question",
            "name": "¿Tratáis depresión, TOC, fobia social e hipocondría?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Tratamos la depresión y ansiedad combinadas, el trastorno obsesivo compulsivo (TOC), la fobia social, la hipocondría, la agorafobia, el estrés postraumático y la fobia de impulsión. Todos estos trastornos están interrelacionados y requieren un abordaje profundo."
            }
        },
        {
            "@type": "Question",
            "name": "¿Qué ocurre en la primera visita?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "En la primera consulta psicológica realizamos una entrevista clínica profunda. Exploramos tu historia, identificamos los síntomas y sus posibles causas, y evaluamos el tipo de trastorno. Es un espacio confidencial donde diseñamos juntos el plan de tratamiento más adecuado."
            }
        },
        {
            "@type": "Question",
            "name": "¿Cómo puedo ayudar a alguien con ansiedad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para ayudar a alguien con ansiedad: escucha sin juzgar, no minimices lo que siente, acompáñale sin presionar y anímale a buscar ayuda profesional. Durante una crisis de ansiedad, mantén la calma y ayúdale a regular la respiración."
            }
        },
        {
            "@type": "Question",
            "name": "¿Atendéis en catalán y castellano?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, Joan Ramon Soto es completamente bilingüe. Atiende indistintamente en catalán y castellano. Es fundamental que te expreses en tu lengua emocional para que la terapia sea lo más profunda y efectiva posible."
            }
        }
    ]
};

// ============================================
// 4. BREADCRUMB - Navegación para SEO
// ============================================
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
});

// ============================================
// 5. ARTÍCULO DE BLOG
// ============================================
export const blogPostingSchema = (post: {
    title: string;
    description: string;
    content: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image: string;
    url: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": post.url,
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "author": {
        "@type": "Person",
        "name": post.author,
        "url": "https://www.clinicadelansiedad.com"
    },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "mainEntity": {
        "@type": "Article",
        "headline": post.title
    },
    "publisher": {
        "@type": "Organization",
        "name": "Clínica de la Ansiedad Catalunya",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.clinicadelansiedad.com/logo.png"
        }
    },
    "inLanguage": "es"
});

// ============================================
// 6. ARTÍCULO - Para páginas principales
// ============================================
export const articleSchema = (article: {
    title: string;
    description: string;
    image: string;
    url: string;
    datePublished: string;
    author: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": article.url,
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
        "@type": "Person",
        "name": article.author
    },
    "datePublished": article.datePublished,
    "publisher": {
        "@type": "Organization",
        "name": "Clínica de la Ansiedad Catalunya",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.clinicadelansiedad.com/logo.png"
        }
    }
});

// ============================================
// 7. EVENTO - Para webinars o charlas
// ============================================
export const eventSchema = (event: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    image: string;
    url: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": {
        "@type": "Place",
        "name": event.location
    },
    "image": event.image,
    "url": event.url,
    "organizer": {
        "@type": "Organization",
        "name": "Clínica de la Ansiedad Catalunya",
        "url": "https://www.clinicadelansiedad.com"
    }
});

// ============================================
// 9. VIDEO - Si hay videos en la web
// ============================================
export const videoSchema = (video: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration: string;
    url: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "url": video.url,
    "embedUrl": video.url,
    "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "WatchAction",
        "userInteractionCount": 0
    }
});

// ============================================
// 10. COLECCIÓN - Para listados
// ============================================
export const collectionSchema = (collection: {
    name: string;
    description: string;
    url: string;
    items: Array<{ name: string; url: string }>;
}) => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": collection.url,
    "name": collection.name,
    "description": collection.description,
    "url": collection.url,
    "hasPart": collection.items.map(item => ({
        "@type": "WebPage",
        "name": item.name,
        "url": item.url
    }))
});

// ============================================
// 11. VALIDACIÓN - Schema para validadores
// ============================================
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clínica de la Ansiedad Catalunya",
    "url": "https://www.clinicadelansiedad.com",
    "logo": "https://www.clinicadelansiedad.com/logo.png",
    "description": "Clínica especializada en psicoterapia psicoanalítica para tratamiento de ansiedad desde 1993",
    "sameAs": [
        ...Object.values(SOCIAL_LINKS)
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+34613916079",
        "email": "contacto@clinicadelansiedad.com"
    }
};

// ============================================
// 12. WEBSITE SCHEMA - Principal
// ============================================
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.clinicadelansiedad.com#website",
    "url": "https://www.clinicadelansiedad.com",
    "name": "Clínica de la Ansiedad Catalunya",
    "description": "Terapia psicoanalítica especializada en ansiedad, depresión y crisis de pánico",
    "inLanguage": ["es", "ca"]
};

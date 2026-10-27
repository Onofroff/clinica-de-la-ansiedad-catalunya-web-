"use client";
import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import {
    Navbar as HeroNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@heroui/react";
import { ChevronDown, Phone, Menu, X, Globe } from "lucide-react";
import { bookingUrl } from "@/lib/constants";

export default function Navbar({ theme = "light" }: { theme?: "light" | "dark" }) {
    const t = useTranslations('navbar');
    const locale = useLocale();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Sobre un hero oscuro (theme="dark") y en la parte superior sin scroll, el
    // navbar transparente necesita texto claro; al hacer scroll pasa a fondo
    // blanco y vuelve al estilo navy por defecto.
    const onDark = theme === "dark" && !isScrolled && !isMenuOpen;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: t('about'), href: "/sobre-mi" as any },
        {
            name: t('services.title'),
            href: "/servicios" as any,
            subItems: [
                { name: t('services.all'), href: "/servicios" as any },
                { name: t('services.individual'), href: "/servicios/terapia-individual" as any },
                { name: t('services.couple'), href: "/servicios/terapia-de-pareja" as any },
                { name: t('services.family'), href: "/servicios/dimension-familiar" as any },
                { name: t('services.online'), href: "/terapia-online" as any },
            ]
        },
        {
            name: t('specialities.title'),
            href: "/ansiedad" as any,
            subItems: [
                { name: t('specialities.anxiety'), href: "/ansiedad" as any },
                { name: t('specialities.panic'), href: "/crisis-de-panico" as any },
                { name: t('specialities.depression'), href: "/depresion" as any },
                { name: t('specialities.jealousy'), href: "/celos" as any },
                { name: t('specialities.gambling'), href: "/ludopatia" as any },
            ]
        },
        { name: t('empresas'), href: "/taller-gestion-estres-empresas" as any },
        { name: t('approach'), href: "/enfoque" as any },
        { name: t('blog'), href: "/blog" as any },
        { name: t('contact'), href: "/#contacto" as any },
    ];

    const languages = [
        { key: "es", label: "CASTELLANO", flag: "ES" },
        { key: "ca", label: "CATALÀ", flag: "CA" }
    ];

    return (
        <HeroNavbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            className={`fixed top-0 w-full transition-all duration-500 z-50 px-2 sm:px-4 ${isScrolled
                ? "bg-white/95 backdrop-blur-3xl border-b border-navy/5 shadow-sm py-2 sm:py-1"
                : "bg-transparent py-3 sm:py-4"
                }`}
            maxWidth="full"
            position="sticky"
        >
            <NavbarContent className="sm:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 transition-colors ${onDark ? "text-white hover:text-gold-light" : "text-navy hover:text-gold"}`}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </NavbarContent>

            <NavbarBrand as={Link} href="/" className="flex items-center gap-0 flex-1 sm:flex-none">
                {/* Logo horizontal (cabezas + texto) para que se lea a la altura de la barra.
                    Sin filtros CSS: la senyera roja debe conservar su color. */}
                <img
                    src={onDark ? "/images/logo-horizontal-white.png" : "/images/logo-horizontal.png"}
                    alt="Clínica de la Ansiedad Catalunya"
                    className="h-9 sm:h-10 md:h-12 w-auto object-contain"
                />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4 md:gap-8 lg:gap-10" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name} className="text-xs md:text-sm lg:text-base">
                        {item.subItems ? (
                            <Dropdown
                                classNames={{
                                    content: "min-w-[220px] p-2 bg-white/95 backdrop-blur-3xl border border-navy/10 shadow-glass rounded-[20px]",
                                }}
                            >
                                <DropdownTrigger>
                                    <button className={`flex items-center gap-1 transition-colors font-sans text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold outline-none cursor-pointer ${onDark ? "text-white/90 hover:text-gold-light" : "text-navy hover:text-gold"}`}>
                                        {item.name} <ChevronDown className="w-3 h-3 opacity-50" />
                                    </button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label={`Submenú de ${item.name}`}>
                                    {item.subItems.map(subItem => (
                                        <DropdownItem key={subItem.name} as={Link as any} href={subItem.href} className="text-navy font-serif font-bold text-sm py-2.5 px-4 rounded-xl hover:bg-gold/5 hover:text-gold transition-colors data-[hover=true]:bg-gold/5 data-[hover=true]:text-gold">
                                            {subItem.name}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <Link
                                href={item.href}
                                className={`transition-colors font-sans text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold ${onDark ? "text-white/90 hover:text-gold-light" : "text-navy hover:text-gold"}`}
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {/* Language Switcher */}
                <NavbarItem className="hidden md:flex">
                    <Dropdown
                        classNames={{
                            content: "min-w-[120px] p-2 bg-white/95 backdrop-blur-3xl border border-navy/10 shadow-glass rounded-[20px]",
                        }}
                    >
                        <DropdownTrigger>
                            <Button
                                variant="light"
                                className={`p-0 min-w-unit-10 h-unit-10 transition-colors font-sans text-[10px] md:text-[11px] tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold ${onDark ? "text-white/90 hover:text-gold-light" : "text-navy hover:text-gold"}`}
                                startContent={<Globe className="w-4 h-4 opacity-70" />}
                            >
                                {locale.toUpperCase()}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Seleccionar idioma"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={[locale]}
                        >
                            {languages.map((lang) => (
                                <DropdownItem
                                    key={lang.key}
                                    as={Link as any}
                                    href={pathname as any}
                                    // @ts-ignore - locale prop is passed to Link component
                                    locale={lang.key as any}
                                    className={`text-navy font-sans font-bold text-[10px] uppercase tracking-widest ${locale === lang.key ? "text-gold bg-gold/5" : ""}`}
                                >
                                    {lang.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>

                <NavbarItem>
                    <Button
                        as="a"
                        href={bookingUrl('navbar')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-bold rounded-lg sm:rounded-xl px-3 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg transition-all text-[10px] sm:text-xs md:text-xs uppercase tracking-wider md:tracking-widest ${onDark ? "bg-white text-navy hover:bg-white/90 shadow-black/20" : "bg-navy text-white hover:bg-navy/90 shadow-navy/10"}`}
                    >
                        {t('cta')}
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-white/95 backdrop-blur-3xl pt-32 pb-24 px-6 md:px-8 overflow-y-auto min-h-screen gap-8 z-40">
                {/* Mobile Language Switcher */}
                <div className="flex gap-4 mb-8">
                    {languages.map((lang) => (
                        <Link
                            key={lang.key}
                            href={pathname as any}
                            locale={lang.key as any}
                            className={`text-xs font-sans font-bold tracking-widest uppercase pb-1 border-b-2 transition-all ${locale === lang.key ? "text-gold border-gold" : "text-navy/40 border-transparent"}`}
                        >
                            {lang.label}
                        </Link>
                    ))}
                </div>

                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} className="w-full block">
                        {item.subItems ? (
                            <div className="flex flex-col py-2 w-full">
                                <span className="w-full text-navy/40 text-[9px] font-bold tracking-[0.15em] uppercase mb-3">
                                    {item.name}
                                </span>
                                <div className="flex flex-col gap-3">
                                    {item.subItems.map(subItem => (
                                        <Link
                                            key={subItem.name}
                                            className="w-full text-navy text-lg sm:text-xl font-serif font-bold hover:text-gold transition-colors"
                                            href={subItem.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link
                                className="w-full text-navy text-2xl sm:text-3xl font-serif font-bold py-2 block"
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        )}
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="mt-8">
                    <Button
                        as="a"
                        href={bookingUrl('navbar-mobile')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-navy text-white font-bold rounded-2xl py-6 sm:py-8 text-base sm:text-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t('mobile_cta')}
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </HeroNavbar>
    );
}

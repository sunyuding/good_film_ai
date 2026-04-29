"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { NAV_ITEMS, NAV_DROPDOWN } from "@/lib/constants";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale(target: "en" | "zh") {
    router.replace(pathname, { locale: target });
  }

  const dropdownItems = NAV_DROPDOWN.items.map((item) => ({
    label: t(item.labelKey),
    sublabel: "sublabel" in item ? t(item.sublabel as string) : undefined,
    href: item.href.startsWith("/") ? `/${locale}${item.href}` : item.href,
    external: !item.href.startsWith("/"),
  }));

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-cinema-black/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href={`/${locale}`} className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold">
            <span className="text-sm font-black text-cinema-black">GF</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Good Film <span className="text-gold">AI</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {/* Regular nav items */}
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`/${locale}${item.href}`}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white"
            >
              {t(item.label)}
            </a>
          ))}

          {/* Projects dropdown */}
          <DropdownMenu
            label={t(NAV_DROPDOWN.labelKey)}
            items={dropdownItems}
          />
        </nav>

        {/* Desktop language switcher */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher onSwitch={switchLocale} currentLocale={locale} />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-cinema-black/98 px-6 py-6 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`/${locale}${item.href}`}
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              {t(item.label)}
            </a>
          ))}

          <div className="my-2 h-px bg-white/10" />

          <MobileDropdown
            label={t(NAV_DROPDOWN.labelKey)}
            items={dropdownItems}
            onNavigate={() => setMobileOpen(false)}
          />
          <div className="mt-4 border-t border-white/10 pt-4 pl-4">
            <LanguageSwitcher onSwitch={switchLocale} currentLocale={locale} />
          </div>
        </nav>
      )}
    </header>
  );
}

/* Desktop dropdown */
function DropdownMenu({
  label,
  items,
}: {
  readonly label: string;
  readonly items: readonly {
    label: string;
    sublabel?: string;
    href: string;
    external: boolean;
  }[];
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-white/5"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 min-w-[220px] overflow-hidden rounded-xl border border-white/10 bg-cinema-black/95 py-2 shadow-xl backdrop-blur-xl">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block px-4 py-2.5 transition-colors hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium text-gray-300">
                {item.label}
                {item.external && (
                  <span className="ml-1.5 text-[10px] text-gray-600">↗</span>
                )}
              </span>
              {item.sublabel && (
                <span className="block text-xs text-gray-500">
                  {item.sublabel}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* Mobile dropdown */
function MobileDropdown({
  label,
  items,
  onNavigate,
}: {
  readonly label: string;
  readonly items: readonly {
    label: string;
    sublabel?: string;
    href: string;
    external: boolean;
  }[];
  readonly onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gold"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="ml-4 space-y-1 border-l border-white/10 pl-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block rounded-lg px-3 py-2 transition-colors hover:text-white"
              onClick={onNavigate}
            >
              <span className="text-sm text-gray-400">
                {item.label}
                {item.external && (
                  <span className="ml-1.5 text-[10px] text-gray-600">↗</span>
                )}
              </span>
              {item.sublabel && (
                <span className="block text-xs text-gray-500">
                  {item.sublabel}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function LanguageSwitcher({
  onSwitch,
  currentLocale,
}: {
  readonly onSwitch: (locale: "en" | "zh") => void;
  readonly currentLocale: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-gray-400">
      <Globe size={14} />
      <button
        type="button"
        onClick={() => onSwitch("en")}
        className={`transition-colors hover:text-white ${currentLocale === "en" ? "text-white font-semibold" : ""}`}
      >
        EN
      </button>
      <span className="text-white/20">|</span>
      <button
        type="button"
        onClick={() => onSwitch("zh")}
        className={`transition-colors hover:text-white ${currentLocale === "zh" ? "text-white font-semibold" : ""}`}
      >
        中文
      </button>
    </div>
  );
}

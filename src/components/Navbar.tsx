import { useState, useEffect } from "react"
import { useLanguage } from "../i18n/LanguageContext"

export default function Navbar() {
  const { t, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick("home")}
          className="text-lg text-ink tracking-wide"
        >
          {t.profile.name}
          <span className="ml-2 text-xs text-ink-faint hidden sm:inline">
            {t.profile.altName}
          </span>
        </button>

        <div className="flex items-center gap-2">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {t.nav.items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-sm text-ink-soft hover:text-accent transition-colors tracking-widest"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* 语言切换按钮 */}
          <button
            onClick={toggle}
            className="ml-4 w-9 h-9 flex items-center justify-center text-xs tracking-wider text-accent bg-surface rounded-full hover:bg-surface-deep transition-colors"
            aria-label="Switch language"
            title="中 / EN"
          >
            {t.nav.toggleLabel}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-ink-soft hover:text-ink p-2"
            aria-label={t.nav.menuAria}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-t border-line">
          <div className="px-6 py-4 flex flex-col">
            {t.nav.items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="px-2 py-3 text-left text-ink-soft hover:text-accent transition-colors tracking-widest border-b border-line last:border-none"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

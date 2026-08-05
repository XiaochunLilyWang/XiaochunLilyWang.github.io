import { useLanguage } from "../i18n/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-surface-deep py-8">
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-ink-faint tracking-wider">
          © {new Date().getFullYear()} {t.profile.name} · {t.profile.altName}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-ink-faint hover:text-accent transition-colors tracking-widest"
        >
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  )
}

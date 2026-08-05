import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { content, type Lang } from "../data/profile"

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
  t: (typeof content)["zh"]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // 记住用户上次选择的语言
    const saved = localStorage.getItem("lang")
    return saved === "en" || saved === "zh" ? saved : "zh"
  })

  useEffect(() => {
    localStorage.setItem("lang", lang)
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"
    document.title = content[lang].meta.title
  }, [lang])

  const toggle = () => setLang((prev) => (prev === "zh" ? "en" : "zh"))

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}

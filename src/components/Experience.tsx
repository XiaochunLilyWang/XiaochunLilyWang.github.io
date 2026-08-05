import { useLanguage } from "../i18n/LanguageContext"

export default function Internships() {
  const { t } = useLanguage()
  const { internships } = t

  return (
    <section id="internships" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        {/* 标题 */}
        <div className="mb-10">
          <p className="text-xs italic tracking-widest text-accent uppercase mb-2">
            {internships.label}
          </p>
          <h2 className="text-3xl text-ink font-semibold">{internships.heading}</h2>
        </div>

        {/* 单行经历列表 */}
        <ul className="space-y-4">
          {internships.list.map((exp) => (
            <li
              key={exp.company}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
            >
              <span className="text-sm text-ink-faint tracking-wider w-44 shrink-0">
                {exp.period}
              </span>
              <span className="text-base text-ink font-semibold">
                {exp.company}
              </span>
              <span className="text-sm text-ink-soft">{exp.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

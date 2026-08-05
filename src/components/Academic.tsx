import { useLanguage } from "../i18n/LanguageContext"

export default function Academic() {
  const { t, lang } = useLanguage()
  const { academic } = t

  return (
    <section id="academic" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* 标题 */}
        <div className="mb-12">
          <p className="text-xs italic tracking-widest text-accent uppercase mb-2">
            {academic.label}
          </p>
          <h2 className="text-3xl text-ink font-semibold">{academic.heading}</h2>
        </div>

        {/* 论文列表 */}
        <div className="space-y-8">
          {academic.list.map((paper) => (
            <article
              key={paper.titleEn}
              className="grid sm:grid-cols-[200px_1fr] bg-surface rounded-2xl overflow-hidden"
            >
              {/* 配图 */}
              <div className="h-40 sm:h-full min-h-40 bg-white flex items-center justify-center overflow-hidden">
                {paper.image ? (
                  <img
                    src={paper.image}
                    alt={paper.titleEn}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center text-ink-faint">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="mx-auto mb-2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="text-xs tracking-widest uppercase">{academic.imageNote}</p>
                  </div>
                )}
              </div>

              {/* 文字 */}
              <div className="p-7">
                {/* 英文标题 */}
                <h3 className="text-lg text-ink font-semibold">
                  {paper.titleEn}
                </h3>
                {/* 中文翻译（仅中文版显示） */}
                {lang === "zh" && (
                  <p className="text-sm text-ink-soft mt-1">{paper.titleZh}</p>
                )}
                {/* 作者（本人加粗） */}
                <p className="text-sm text-ink-soft mt-3">
                  {paper.authors.map((a, i) => (
                    <span
                      key={a.name + i}
                      className={a.highlight ? "font-semibold text-ink" : ""}
                    >
                      {i > 0 ? ", " : ""}
                      {a.name}
                    </span>
                  ))}
                </p>
                {/* 类别标签 + 年份 + 出版物 */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="inline-block px-2.5 py-0.5 text-xs tracking-wider rounded-full bg-accent/15 text-accent font-medium">
                    {paper.type}
                  </span>
                  <span className="text-sm italic text-accent-soft">
                    {paper.year} · {paper.venue}
                  </span>
                </div>
                {/* 阅读论文：唯一链接热区 */}
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-accent mt-4 hover:underline"
                >
                  {paper.linkText ? paper.linkText[lang] : academic.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

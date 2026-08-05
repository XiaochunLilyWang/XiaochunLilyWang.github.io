import { useLanguage } from "../i18n/LanguageContext"

export default function Content() {
  const { t } = useLanguage()
  const { content } = t

  return (
    <section id="content" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* 标题 */}
        <div className="mb-12">
          <p className="text-xs italic tracking-widest text-accent uppercase mb-2">
            {content.label}
          </p>
          <h2 className="text-3xl text-ink font-semibold">{content.heading}</h2>
          <p className="text-sm md:text-base text-ink-soft leading-relaxed mt-4">
            {content.intro}
          </p>
        </div>

        {/* 作品卡片 */}
        <div className="grid sm:grid-cols-2 gap-6">
          {content.list.map((work, i) => (
            <article
              key={i}
              className="bg-surface rounded-2xl overflow-hidden"
            >
              {/* 封面：有 image 时显示真实图片（自动裁剪填充），否则占位 */}
              <div className="h-40 bg-surface-deep overflow-hidden">
                {work.image ? (
                  <img
                    src={work.image}
                    alt={work.title}
                    className={`w-full h-full object-cover ${
                      work.imagePosition === "bottom"
                        ? "object-bottom"
                        : work.imagePosition === "center"
                        ? "object-center"
                        : "object-top"
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-ink-faint">
                    <div className="text-center">
                      <svg
                        width="32"
                        height="32"
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
                      <p className="text-xs tracking-widest uppercase">{content.imageNote}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 文字 */}
              <div className="p-6">
                <p className="text-xs text-ink-faint tracking-wider mb-2">
                  {work.period ? `${work.period} · ${work.source}` : work.source}
                </p>
                <h3 className="text-base text-ink font-semibold">
                  {work.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed mt-2">
                  {work.description}
                </p>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-accent mt-3 hover:underline"
                >
                  {content.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

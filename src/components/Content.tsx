import { useEffect, useRef, useState } from "react"
import { useLanguage } from "../i18n/LanguageContext"

/* 封面：有 image 时显示真实图片（自动裁剪填充），否则占位 */
function Cover({
  image,
  imagePosition,
  alt,
  note,
}: {
  image?: string
  imagePosition?: string
  alt: string
  note: string
}) {
  return (
    <div className="h-40 bg-surface-deep overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover ${
            imagePosition === "bottom"
              ? "object-bottom"
              : imagePosition === "center"
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
            <p className="text-xs tracking-widest uppercase">{note}</p>
          </div>
        </div>
      )}
    </div>
  )
}

/* 一个子板块：标题 + 简介 + 单行横向滚动轨道
   滑动提示仅在轨道真的溢出时才出现 */
function CardRow({
  heading,
  intro,
  hint,
  children,
}: {
  heading: string
  intro: string
  hint: string
  children: React.ReactNode
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [overflowing, setOverflowing] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const check = () =>
      setOverflowing(track.scrollWidth > track.clientWidth + 1)
    check()
    const observer = new ResizeObserver(check)
    observer.observe(track)
    return () => observer.disconnect()
  }, [children])

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <h3 className="text-xl text-ink font-semibold">{heading}</h3>
        {overflowing && (
          <p className="text-xs text-ink-faint tracking-wider">{hint}</p>
        )}
      </div>
      <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-6">
        {intro}
      </p>
      <div
        ref={trackRef}
        role="region"
        aria-label={heading}
        tabIndex={0}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 -mx-6 px-6 pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-2xl"
      >
        {children}
      </div>
    </div>
  )
}

export default function Content() {
  const { t } = useLanguage()
  const { content } = t
  const { vibeCoding } = content

  return (
    <section id="content" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* 标题 */}
        <div className="mb-12">
          <p className="text-xs italic tracking-widest text-accent uppercase mb-2">
            {content.label}
          </p>
          <h2 className="text-3xl text-ink font-semibold">{content.heading}</h2>
        </div>

        {/* 媒体作品：不列卡片，直接把人送去全文作品集 */}
        <div className="mb-16">
          <h3 className="text-xl text-ink font-semibold mb-4">
            {content.mediaHeading}
          </h3>
          <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-6">
            {content.intro}
          </p>
          <a
            href={content.portfolioLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent text-paper hover:bg-accent-soft transition-colors"
          >
            <span className="text-sm tracking-wide">
              {content.portfolioLink.text}
            </span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        {/* Vibe Coding 作品 */}
        <div>
          <CardRow
            heading={vibeCoding.heading}
            intro={vibeCoding.intro}
            hint={content.scrollHint}
          >
            {vibeCoding.list.map((work, i) => (
              <article
                key={i}
                /* 宽度按轨道可视区计算：手机 1 张（露出下一张边缘），sm 以上正好 2 张 */
                className="w-[85%] sm:w-[calc((100%-1.5rem)/2)] shrink-0 snap-start bg-surface rounded-2xl overflow-hidden flex flex-col"
              >
                <Cover
                  image={work.image}
                  alt={work.title}
                  note={content.imageNote}
                />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-ink-faint tracking-wider mb-2">
                    {work.source}
                  </p>
                  <h4 className="text-base text-ink font-semibold">
                    {work.title}
                  </h4>
                  <p className="text-sm text-ink-soft leading-relaxed mt-2">
                    {work.description}
                  </p>
                  {/* 两个入口：试玩 + 源码 */}
                  <div className="flex items-center gap-4 mt-auto pt-3">
                    <a
                      href={work.playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {vibeCoding.playText}
                    </a>
                    <a
                      href={work.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-soft hover:text-accent hover:underline"
                    >
                      {vibeCoding.repoText}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </CardRow>
        </div>
      </div>
    </section>
  )
}

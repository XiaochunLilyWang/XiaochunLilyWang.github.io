import { useLanguage } from "../i18n/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()
  const { profile, about } = t

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-paper"
    >
      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 sm:grid-cols-[1fr_240px] md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-start">
        {/* 左侧：文字信息 */}
        <div>
          <h1
            className="text-4xl md:text-5xl text-ink font-semibold tracking-wide mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {profile.name}
            <span className="text-[0.62em] font-medium text-ink-soft whitespace-nowrap">
              {" "}· {profile.altName}
            </span>
          </h1>

          {/* 职位标签 */}
          <div
            className="flex items-center gap-4 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-accent text-sm tracking-widest">
              {profile.title}
            </span>
          </div>

          {/* 关于我 */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-ink-soft leading-relaxed text-justify"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* 右侧：照片 + 联系方式 */}
        <div
          className="justify-self-center sm:justify-self-end flex flex-col items-center gap-5 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {/* 证件照 */}
          <div className="w-48 aspect-[2/3] md:w-56 rounded-2xl overflow-hidden bg-surface-deep">
            <img
              src="/images/profile.jpg"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 邮箱 */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm italic text-accent bg-surface rounded-full hover:bg-accent hover:text-paper transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            {profile.email}
          </a>

          {/* 社交图标：小红书圆形 logo，其余品牌色底白图标 */}
          <div className="flex items-center gap-3">
            {profile.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                aria-label={s.name}
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-90 ${
                  s.icon === "red"
                    ? "overflow-hidden"
                    : socialBg(s.icon)
                }`}
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 向下滚动指示 */}
      <button
        onClick={() =>
          document.getElementById("academic")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-accent transition-colors"
        aria-label={profile.scrollAria}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}

function socialBg(icon: string): string {
  const colors: Record<string, string> = {
    linkedin: "bg-[#0a66c2] text-white",
    github: "bg-[#24292e] text-white",
    scholar: "bg-[#4285f4] text-white",
  }
  return colors[icon] || "bg-accent text-paper"
}

function SocialIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    // 小红书：真实 logo，圆形蒙版充满
    red: (
      <img
        src="/images/logo-red.png"
        alt="小红书"
        className="w-full h-full object-cover rounded-full"
      />
    ),
    linkedin: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
    github: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.224-.124-.303-.535-1.527.117-3.182 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 013.005-.404c1.02.005 2.045.137 3.005.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.655.242 2.879.118 3.182.768.842 1.233 1.914 1.233 3.224 0 4.61-2.804 5.622-5.475 5.92.43.37.814 1.103.814 2.222 0 1.604-.014 2.898-.014 3.293 0 .32.217.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    // Google Scholar：学士帽
    scholar: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        <path d="M5 13.18v3.64L12 21l7-4.18v-3.64L12 17l-7-3.82z" />
      </svg>
    ),
  }
  return <>{icons[icon] || null}</>
}

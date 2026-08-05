import { useLanguage } from "../i18n/LanguageContext"

export default function FunFacts() {
  const { t } = useLanguage()
  const { funfacts } = t

  return (
    <section id="funfacts" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        {/* 标题 */}
        <div className="mb-12">
          <p className="text-xs italic tracking-widest text-accent uppercase mb-2">
            {funfacts.label}
          </p>
          <h2 className="text-3xl text-ink font-semibold">{funfacts.heading}</h2>
        </div>

        {/* 摄影作品 */}
        <div className="mb-14">
          <h3 className="text-xl text-ink font-semibold mb-2">
            {funfacts.photography.title}
          </h3>
          <p className="text-sm text-ink-soft leading-relaxed mb-6">
            {funfacts.photography.note}
          </p>
          {/* 横向滚动 6×2 照片墙 */}
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-2 grid-flow-col auto-cols-[18rem] gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] rounded-xl overflow-hidden bg-surface-deep"
                >
                  <img
                    src={`/images/photos/photo-${String(i + 1).padStart(2, "0")}.jpg`}
                    alt={`${funfacts.photography.photoNote} ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 爱好：单行列表 */}
        <div>
          <h3 className="text-xl text-ink font-semibold mb-6">
            {funfacts.hobbies.title}
          </h3>
          <ul className="space-y-6">
            {funfacts.hobbies.items.map((hobby) => (
              <li key={hobby.name} className="flex flex-col gap-1">
                <span className="text-base text-ink font-semibold">{hobby.name}</span>
                <span className="text-sm text-ink-soft leading-relaxed">{hobby.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

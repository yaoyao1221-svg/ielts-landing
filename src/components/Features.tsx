const features = [
  {
    color: 'red',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: '智能学习计划',
    desc: '根据你的目标分数和考试日期，AI 自动生成个性化复习计划。',
  },
  {
    color: 'blue',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: '写作批改',
    desc: 'Task 1 / Task 2 作文逐篇分析结构、语法、词汇与逻辑连贯性。',
  },
  {
    color: 'red',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: '口语练习',
    desc: '模拟雅思口语 Part 1-3，配有时长控制和示范回答。',
  },
  {
    color: 'white',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: '阅读训练',
    desc: '限时阅读练习、题型特训、文章精析、错题复盘。',
  },
  {
    color: 'blue',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: '听力练习',
    desc: '分 Section 音频训练，含关键词提示与答题复盘。',
  },
  {
    color: 'white',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: '全真模考',
    desc: '完整模拟真实考试时长与难度，还原考场体验。',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-[2rem] lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--color-ink)]">
            雅思备考，一套搞定
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-secondary)]">
            AI 驱动，覆盖听说读写全模块，精准提升你的分数。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const bgMap = {
              red: { card: 'bg-red-50 border-red-200/60 hover:bg-red-50/80', icon: 'bg-red-100 text-red-600', hover: 'group-hover:border-red-300' },
              blue: { card: 'bg-blue-50 border-blue-200/60 hover:bg-blue-50/80', icon: 'bg-blue-100 text-blue-600', hover: 'group-hover:border-blue-300' },
              white: { card: 'bg-white border-gray-200/60 hover:bg-gray-50', icon: 'bg-gray-100 text-gray-600', hover: 'group-hover:border-gray-300' },
            }
            const b = bgMap[feature.color as keyof typeof bgMap]
            return (
            <div
              key={feature.title}
              className={`group p-6 rounded-[var(--radius-card)] border ${b.card} ${b.hover} transition-all duration-300`}
            >
              <div className={`w-11 h-11 rounded-lg ${b.icon} flex items-center justify-center border-0 transition-all duration-200`}>
                {feature.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-secondary)]">{feature.desc}</p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

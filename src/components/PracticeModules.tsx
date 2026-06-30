const modules = [
  {
    name: 'Listening',
    color: 'from-blue-500 to-blue-600',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
    description: '分 Section 音频练习，还原真实雅思口音。',
    types: ['选择题', '表格填空', '地图标注'],
  },
  {
    name: 'Reading',
    color: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
    description: '限时阅读，学术类与培训类可选。',
    types: ['判断正误', '标题匹配', '摘要填空'],
  },
  {
    name: 'Writing',
    color: 'from-purple-500 to-purple-600',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    description: 'Task 1 & 2 写作，AI 评分 + 改进建议。',
    types: ['小作文图表', '大作文论述', '评分标准解析'],
  },
  {
    name: 'Speaking',
    color: 'from-orange-500 to-orange-600',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    description: '模拟 1 对 1 口语考试，配示范回答。',
    types: ['Part 1 问答', 'Part 2 话题卡', 'Part 3 讨论'],
  },
]

export default function PracticeModules() {
  return (
    <section id="practice" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-[2rem] lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--color-ink)]">分模块练习</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-secondary)]">
            针对薄弱环节集中突破，配合专项训练与专家指导。
          </p>
        </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className="rounded-[var(--radius-card)] border border-[var(--color-border-light)] bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div className={`p-6 bg-gradient-to-br ${mod.color} text-white`}>
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  {mod.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{mod.name}</h3>
              </div>
                <div className="p-5">
                  <p className="text-sm text-[var(--color-ink-tertiary)] leading-relaxed">{mod.description}</p>
                  <div className="mt-3 space-y-1">
                  {mod.types.map((type) => (
                    <div key={type} className="flex items-center gap-2 text-xs text-[var(--color-ink-tertiary)]">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-brand-400)]" />
                      {type}
                    </div>
                  ))}
                </div>
                    <a
                      href="#"
                      className="mt-4 inline-flex text-sm font-medium text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] transition-colors"
                    >
                      开始练习 →
                    </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

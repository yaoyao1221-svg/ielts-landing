const stats = [
  { number: '4', label: '雅思四大模块', desc: '听力·阅读·写作·口语' },
  { number: '7.5', label: '分数追踪', desc: '实时掌握进步轨迹' },
  { number: 'AI', label: '写作批改', desc: '语法与结构即刻分析' },
  { number: '30', label: '每日学习计划', desc: '个性化日程安排' },
]

export default function TrustStats() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border-light)] rounded-[var(--radius-card-lg)] overflow-hidden border border-[var(--color-border-light)]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 sm:p-8 flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">
                {stat.number}
              </span>
              <span className="mt-1.5 text-sm font-semibold text-[var(--color-ink)]">{stat.label}</span>
              <span className="mt-0.5 text-xs text-[var(--color-ink-tertiary)]">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: '写作批改非常详细，我能清楚地看到扣分点和改进方向。',
    author: 'Sarah L.',
    role: '学术类雅思，总分 7.5',
  },
  {
    quote: '有组织的口语练习让我自信多了。Part 2 的话题卡训练特别有用。',
    author: 'James C.',
    role: '培训类雅思，总分 7.0',
  },
  {
    quote: '每日学习计划让我保持节奏，不再纠结每天练什么。',
    author: 'Mei L.',
    role: '学术类雅思，总分 8.0',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-[2rem] lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--color-ink)]">学员好评</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-secondary)]">
            来自成功达分学员的真实评价。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-6 rounded-xl border border-[var(--color-border-light)] bg-white"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[var(--color-ink-secondary)] leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-[var(--color-border-light)]">
                <span className="text-sm font-semibold text-[var(--color-ink)]">{t.author}</span>
                <span className="block text-xs text-[var(--color-ink-tertiary)]">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

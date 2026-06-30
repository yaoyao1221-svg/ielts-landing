const steps = [
  {
    step: 1,
    title: '设定目标分',
    desc: '选择目标分数和考试日期，系统自动生成专属学习时间线。',
  },
  {
    step: 2,
    title: '执行每日计划',
    desc: '获得精心编排的每日练习安排，高效平衡四大模块。',
  },
  {
    step: 3,
    title: '分模块练习',
    desc: '针对听力、阅读、写作、口语进行专项训练。',
  },
  {
    step: 4,
    title: '查看反馈',
    desc: '分析 AI 对写作和口语的反馈，精准定位提分空间。',
  },
  {
    step: 5,
    title: '追踪进度',
    desc: '通过详细的成绩分析，持续追踪分数变化。',
  },
]

export default function StudyFlow() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-[2rem] lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--color-ink)]">如何使用</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-secondary)]">
            从设定目标到考试日 — 一条清晰的成功路径。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4">
          {steps.map((s) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_6px_rgba(250,176,5,0.3)]">
                {s.step}
              </div>
              {s.step < 5 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[calc(100%-3rem)] h-px bg-gradient-to-r from-[var(--color-brand-200)] to-transparent" />
              )}
              <h3 className="mt-4 text-sm font-semibold tracking-tight text-[var(--color-ink)]">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-ink-tertiary)] max-w-[200px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

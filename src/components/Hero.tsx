export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(222,226,230,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(222,226,230,0.3)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold tracking-tight text-[var(--color-accent)] bg-[var(--color-accent-bg)] rounded-full border border-[var(--color-accent-border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              AI 智能雅思备考
            </div>
            <h1 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-ink)] break-keep">
              雅思备考，{' '}
              <span className="bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-700)] bg-clip-text text-transparent">
                从此有条不紊。
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--color-ink-secondary)] max-w-lg">
              在智能学习计划、个性化反馈和全真模考的引导下，系统练习听力、阅读、写作与口语。
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/speaking"
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-600)] hover:from-[var(--color-brand-600)] hover:to-[var(--color-brand-700)] rounded-xl shadow-sm hover:shadow-[0_4px_24px_rgba(76,110,245,0.3)] transition-all duration-200"
              >
                免费开始练习
              </Link>
              <a
                href="#"
                className="px-6 py-3 text-sm font-semibold text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-ink-tertiary)] rounded-xl transition-all duration-200"
              >
                查看样题
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gradient-to-b from-[var(--color-brand-50)] to-white rounded-[var(--radius-card-lg)] border border-[var(--color-border)] p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 bg-white rounded-xl border border-[var(--color-border-light)] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[var(--color-ink-secondary)] uppercase tracking-wider">今日计划</span>
                    <span className="text-xs font-medium text-[var(--color-accent)]">4 项任务</span>
                  </div>
                  <div className="space-y-2">
                    {['听力练习', '写作 Task 1', '口语 Part 2', '阅读精练'].map((task) => (
                      <div key={task} className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                        <span className="text-xs text-[var(--color-ink)] font-medium">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-[var(--color-border-light)] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <span className="text-xs font-semibold text-[var(--color-ink-secondary)] uppercase tracking-wider">目标分数</span>
                  <div className="mt-1.5 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[var(--color-brand-600)]">7.5</span>
                    <span className="text-xs text-[var(--color-ink-tertiary)]">/ 9.0</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-[var(--color-border-light)] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <span className="text-xs font-semibold text-[var(--color-ink-secondary)] uppercase tracking-wider">写作</span>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-emerald-600">反馈已就绪</span>
                  </div>
                </div>
                <div className="col-span-2 bg-white rounded-xl border border-[var(--color-border-light)] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[var(--color-ink-secondary)] uppercase tracking-wider">总体进度</span>
                    <span className="text-xs font-medium text-[var(--color-ink)]">68%</span>
                  </div>
                  <div className="w-full h-2 bg-[var(--color-surface-secondary)] rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-gradient-to-r from-[var(--color-brand-400)] to-[var(--color-brand-600)] rounded-full" />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-[var(--color-ink-tertiary)]">
                    <span>听力 7.0</span>
                    <span>阅读 6.5</span>
                    <span>写作 6.0</span>
                    <span>口语 6.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'

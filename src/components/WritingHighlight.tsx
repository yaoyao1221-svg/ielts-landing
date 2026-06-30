export default function WritingHighlight() {
  return (
    <section id="writing" className="py-20 sm:py-28 px-5 sm:px-8 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-2xl sm:text-[2rem] lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-[1.15] text-[var(--color-ink)]">AI 智能写作批改</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-secondary)]">
            获取即时、详细的写作反馈。AI 像真正的雅思考官一样，分析你的结构、连贯性、词汇资源和语法范围 — 并给出评分级建议。
          </p>
          <ul className="mt-6 space-y-3">
            {[
              '支持 Task 1 & Task 2',
              '评分级反馈 + 分数预估',
              '改写建议助你提分',
              '按类别归类错误分析',
            ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-ink-secondary)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-600)] hover:from-[var(--color-brand-600)] hover:to-[var(--color-brand-700)] rounded-xl shadow-sm hover:shadow-[0_4px_20px_rgba(79,70,229,0.25)] transition-all duration-200"
            >
              试试写作批改
            </a>
          </div>

          {/* Feedback Card UI */}
          <div className="bg-white rounded-[var(--radius-card-lg)] border border-[var(--color-border)] p-5 sm:p-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--color-border-light)]">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-semibold text-[var(--color-ink)]">大作文批改</span>
                <span className="block text-xs text-[var(--color-ink-tertiary)]">2 分钟前提交</span>
              </div>
              <div className="ml-auto px-2.5 py-1 rounded-md bg-[var(--color-accent-bg)] border border-[var(--color-accent-border)]">
                <span className="text-xs font-bold text-[var(--color-accent)]">Band 6.5</span>
              </div>
            </div>

            <div className="space-y-3">
              <FeedbackRow label="Task Response" score={7} max={9} color="bg-emerald-500" />
              <FeedbackRow label="Coherence & Cohesion" score={6} max={9} color="bg-amber-500" />
              <FeedbackRow label="Lexical Resource" score={6.5} max={9} color="bg-amber-500" />
              <FeedbackRow label="Grammatical Range" score={6} max={9} color="bg-amber-500" />
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--color-border-light)]">
              <p className="text-xs text-[var(--color-ink-secondary)] leading-relaxed">
                <span className="font-semibold text-[var(--color-ink)]">建议：</span>尝试使用更复杂句型和连接词来提升连贯性分数。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeedbackRow({ label, score, max, color }: { label: string; score: number; max: number; color: string }) {
  const pct = (score / max) * 100
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-[var(--color-ink-secondary)]">{label}</span>
        <span className="text-xs font-semibold text-[var(--color-ink)]">{score.toFixed(1)}</span>
      </div>
      <div className="w-full h-1.5 bg-[var(--color-surface-secondary)] rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

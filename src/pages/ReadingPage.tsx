import { useState } from 'react'

const passage = {
  title: 'The Science of Sleep',
  content: `Sleep is a fundamental biological process that is essential for human health and well-being. Despite decades of research, scientists are still uncovering the complex mechanisms that govern why we sleep and what happens when we do.

During sleep, the brain undergoes several important processes. One of the most significant is memory consolidation — the process by which short-term memories are transformed into long-term ones. This occurs primarily during Rapid Eye Movement (REM) sleep, which is also when most dreaming happens.

The sleep cycle consists of several stages. Non-REM sleep includes three stages: N1 (light sleep), N2 (deeper sleep where body temperature drops), and N3 (deep sleep, also called slow-wave sleep). These stages are followed by REM sleep. A complete cycle takes about 90 minutes, and most people experience four to six cycles per night.

Sleep deprivation has serious consequences. Studies have shown that lack of sleep impairs cognitive function, weakens the immune system, and increases the risk of chronic conditions such as heart disease and diabetes. The recommended amount of sleep for adults is seven to nine hours per night, though individual needs may vary.

Modern lifestyle factors, particularly the use of electronic devices before bedtime, have been shown to disrupt natural sleep patterns. The blue light emitted by screens suppresses the production of melatonin, the hormone that regulates sleep-wake cycles. Experts recommend avoiding screens for at least an hour before bed to improve sleep quality.`,
}

interface Question {
  id: number
  type: 'tfng' | 'mcq'
  question: string
  options?: string[]
  correctAnswer: string
}

const questions: Question[] = [
  { id: 1, type: 'tfng', question: 'Memory consolidation happens mostly during REM sleep.', correctAnswer: 'True' },
  { id: 2, type: 'tfng', question: 'A complete sleep cycle takes approximately 60 minutes.', correctAnswer: 'False' },
  { id: 3, type: 'tfng', question: 'Blue light from screens increases melatonin production.', correctAnswer: 'False' },
  { id: 4, type: 'tfng', question: 'Sleep deprivation can weaken the immune system.', correctAnswer: 'True' },
  { id: 5, type: 'mcq', question: 'How many stages are there in Non-REM sleep?', options: ['Two', 'Three', 'Four', 'Five'], correctAnswer: 'Three' },
  { id: 6, type: 'mcq', question: 'What is the recommended amount of sleep for adults per night?', options: ['5-6 hours', '7-9 hours', '9-10 hours', '10-12 hours'], correctAnswer: '7-9 hours' },
]

export default function ReadingPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState(false)

  const setAnswer = (id: number, val: string) => {
    setAnswers(prev => ({ ...prev, [id]: val }))
  }

  const checkAnswers = () => {
    setChecked(true)
  }

  const reset = () => {
    setAnswers({})
    setChecked(false)
  }

  const score = questions.filter(q => answers[q.id] === q.correctAnswer).length
  const allAnswered = questions.every(q => answers[q.id])

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-4">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          返回首页
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-[2rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">阅读训练</h1>
        <p className="mt-2 text-sm text-[var(--color-ink-secondary)]">限时阅读文章，完成题目并查看答案解析。</p>

        {/* Passage */}
        <div className="mt-6 p-5 sm:p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <h2 className="text-base font-semibold text-[var(--color-ink)]">{passage.title}</h2>
          <div className="mt-3 text-sm leading-relaxed text-[var(--color-ink-secondary)] whitespace-pre-line">
            {passage.content}
          </div>
        </div>

        {/* Questions */}
        <div className="mt-6 p-5 sm:p-6 rounded-[var(--radius-card)] border border-[var(--color-border-light)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-[var(--color-ink)]">题目</h2>
            {checked && (
              <span className="text-sm font-semibold text-[var(--color-brand-600)]">
                得分：{score} / {questions.length}
              </span>
            )}
          </div>

          <div className="space-y-5">
            {questions.map(q => {
              const userAnswer = answers[q.id]
              const isCorrect = userAnswer === q.correctAnswer
              const showResult = checked && userAnswer

              return (
                <div key={q.id} className={`p-4 rounded-lg border ${showResult ? (isCorrect ? 'border-emerald-200 bg-emerald-50/30' : 'border-red-200 bg-red-50/30') : 'border-[var(--color-border-light)] bg-[var(--color-surface)]'}`}>
                  <p className="text-sm font-medium text-[var(--color-ink)]">
                    {q.id}. {q.question}
                    <span className="ml-2 text-[10px] text-[var(--color-ink-tertiary)] font-normal">
                      {q.type === 'tfng' ? '（True / False / Not Given）' : '（单选）'}
                    </span>
                  </p>

                  {q.type === 'tfng' ? (
                    <div className="flex gap-2 mt-2">
                      {['True', 'False', 'Not Given'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => !checked && setAnswer(q.id, opt)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                            userAnswer === opt
                              ? checked
                                ? isCorrect
                                  ? 'bg-emerald-500 text-white border-emerald-500'
                                  : 'bg-red-500 text-white border-red-500'
                                : 'bg-[var(--color-brand-500)] text-white border-[var(--color-brand-500)]'
                              : 'border-[var(--color-border)] text-[var(--color-ink-secondary)] hover:border-[var(--color-brand-300)]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {q.options!.map(opt => (
                        <button
                          key={opt}
                          onClick={() => !checked && setAnswer(q.id, opt)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                            userAnswer === opt
                              ? checked
                                ? isCorrect
                                  ? 'bg-emerald-500 text-white border-emerald-500'
                                  : 'bg-red-500 text-white border-red-500'
                                : 'bg-[var(--color-brand-500)] text-white border-[var(--color-brand-500)]'
                              : 'border-[var(--color-border)] text-[var(--color-ink-secondary)] hover:border-[var(--color-brand-300)]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {showResult && !isCorrect && (
                    <p className="mt-1.5 text-xs text-[var(--color-ink-tertiary)]">
                      正确答案：<span className="font-medium text-emerald-600">{q.correctAnswer}</span>
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={checkAnswers}
              disabled={!allAnswered || checked}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-600)] rounded-xl disabled:opacity-40 transition-all duration-200"
            >
              提交答案
            </button>
            {checked && (
              <button onClick={reset} className="px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] border border-[var(--color-border)] rounded-xl hover:bg-[var(--color-surface)] transition-all">
                重新作答
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom'

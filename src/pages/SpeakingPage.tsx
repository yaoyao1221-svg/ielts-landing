import { useState } from 'react'

type PartType = 1 | 2 | 3

const partData: Record<PartType, { title: string; desc: string; time: number; questions: string[] }> = {
  1: {
    title: 'Part 1 — 问答',
    desc: '考官问一些关于你个人的基本问题，如工作、学习、兴趣爱好等。',
    time: 30,
    questions: [
      'Do you work or are you a student?',
      'What do you enjoy most about your job/studies?',
      'Do you like reading books? Why or why not?',
      'What kind of music do you enjoy?',
      'How often do you use the internet?',
      'Do you prefer cooking at home or eating out?',
      'What is your favorite season? Why?',
      'Do you like to travel? Where have you been?',
    ],
  },
  2: {
    title: 'Part 2 — 话题卡',
    desc: '你会拿到一张话题卡，准备 1 分钟，然后连续说 1-2 分钟。',
    time: 120,
    questions: [
      'Describe a book you recently read. You should say: what it was, why you chose it, what you liked about it, and whether you would recommend it.',
      'Describe a place you like to visit. You should say: where it is, how you know it, what you do there, and why you like it.',
      'Describe a person who has influenced you. You should say: who they are, how you know them, what they did, and why they influenced you.',
      'Describe a skill you want to learn. You should say: what it is, why you want to learn it, how you plan to learn it, and how it might help you.',
    ],
  },
  3: {
    title: 'Part 3 — 讨论',
    desc: '考官就 Part 2 的话题延伸提问，进行更深入的双向讨论。',
    time: 60,
    questions: [
      'Do you think people read less nowadays compared to the past? Why?',
      'What are the benefits of reading for children?',
      'How has technology changed the way people read?',
      'Do you think libraries are still important in the digital age?',
      'What role should governments play in promoting reading?',
    ],
  },
}

const mockFeedback = [
  { label: '流利度与连贯性', score: 6.5, tip: '回答流畅，可以增加一些连接词来提升连贯性。' },
  { label: '词汇资源', score: 6.0, tip: '词汇量不错，尝试使用更多话题相关的搭配词。' },
  { label: '语法范围与准确性', score: 6.5, tip: '基本语法正确，可尝试更复杂的句式。' },
  { label: '发音', score: 7.0, tip: '发音清晰，语调自然。' },
]

export default function SpeakingPage() {
  const [part, setPart] = useState<PartType>(1)
  const [qIndex, setQIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  const current = partData[part]
  const question = current.questions[qIndex]
  const maxTime = current.time

  const startTimer = () => {
    setTimer(0)
    setTimerOn(true)
    const interval = setInterval(() => {
      setTimer(t => {
        if (t >= maxTime) {
          clearInterval(interval)
          setTimerOn(false)
          return maxTime
        }
        return t + 1
      })
    }, 1000)
  }

  const submitAnswer = () => {
    setSubmitted(true)
    setTimerOn(false)
  }

  const nextQuestion = () => {
    if (qIndex < current.questions.length - 1) {
      setQIndex(qIndex + 1)
    } else {
      setQIndex(0)
    }
    setAnswer('')
    setSubmitted(false)
    setTimer(0)
    setTimerOn(false)
  }

  const timerPct = maxTime > 0 ? (timer / maxTime) * 100 : 0

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-4">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          返回首页
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-[2rem] font-bold tracking-[-0.02em] text-[var(--color-ink)]">口语练习</h1>
        <p className="mt-2 text-sm text-[var(--color-ink-secondary)]">模拟雅思口语 Part 1-3，输入你的回答获取反馈建议。</p>

        {/* Part Selector */}
        <div className="flex gap-2 mt-6">
          {([1, 2, 3] as PartType[]).map(p => (
            <button
              key={p}
              onClick={() => { setPart(p); setQIndex(0); setSubmitted(false); setAnswer(''); setTimer(0); setTimerOn(false) }}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${part === p ? 'bg-[var(--color-brand-500)] text-white border-[var(--color-brand-500)]' : 'border-[var(--color-border)] text-[var(--color-ink-secondary)] hover:border-[var(--color-brand-300)]'}`}
            >
              Part {p}
            </button>
          ))}
        </div>

        <div className="mt-6 p-5 sm:p-6 rounded-[var(--radius-card)] border border-[var(--color-border-light)] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-semibold text-[var(--color-ink)]">{current.title}</h2>
              <p className="text-xs text-[var(--color-ink-tertiary)] mt-0.5">{current.desc}</p>
            </div>
            <span className="text-xs text-[var(--color-ink-tertiary)]">{qIndex + 1} / {current.questions.length}</span>
          </div>

          {/* Question */}
          <div className="mt-4 p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border-light)]">
            <p className="text-sm leading-relaxed text-[var(--color-ink)] font-medium">{question}</p>
          </div>

          {/* Timer */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-[var(--color-ink-tertiary)]">计时 {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')} / {maxTime}s</span>
              {!timerOn && timer === 0 && (
                <button onClick={startTimer} className="text-xs font-medium text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)]">开始计时</button>
              )}
            </div>
            <div className="w-full h-1.5 bg-[var(--color-surface-secondary)] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: `${Math.min(timerPct, 100)}%` }} />
            </div>
          </div>

          {/* Answer Input */}
          <textarea
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder="在此输入你的回答..."
            rows={4}
            className="mt-4 w-full p-3 text-sm rounded-lg border border-[var(--color-border)] bg-white resize-none focus:outline-none focus:border-[var(--color-brand-400)] transition-colors"
          />

          <div className="flex gap-2 mt-3">
            <button
              onClick={submitAnswer}
              disabled={!answer.trim() || submitted}
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-600)] rounded-xl disabled:opacity-40 transition-all duration-200"
            >
              提交并获取反馈
            </button>
            {submitted && (
              <button onClick={nextQuestion} className="px-5 py-2 text-sm font-semibold text-[var(--color-ink)] border border-[var(--color-border)] rounded-xl hover:bg-[var(--color-surface)] transition-all">
                下一题
              </button>
            )}
          </div>

          {/* Feedback */}
          {submitted && (
            <div className="mt-5 pt-5 border-t border-[var(--color-border-light)]">
              <h3 className="text-sm font-semibold text-[var(--color-ink)] mb-3">AI 反馈评估</h3>
              <div className="space-y-3">
                {mockFeedback.map(f => (
                  <div key={f.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[var(--color-ink-secondary)]">{f.label}</span>
                      <span className="text-xs font-semibold text-[var(--color-accent)]">{f.score.toFixed(1)}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[var(--color-surface-secondary)] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: `${(f.score / 9) * 100}%` }} />
                    </div>
                    <p className="mt-0.5 text-[11px] text-[var(--color-ink-tertiary)]">{f.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom'

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[var(--radius-card-lg)] bg-gradient-to-br from-[var(--color-brand-600)] via-[var(--color-brand-500)] to-[var(--color-brand-700)] p-10 sm:p-14 lg:p-16 text-center shadow-[0_8px_30px_rgba(76,110,245,0.15)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0tMjQgMGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="relative">
            <h2 className="text-2xl sm:text-[2rem] lg:text-[2.5rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">今天就开始你的雅思备考计划。</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-brand-200)] max-w-lg mx-auto">
              在针对每个模块的专注计划中开始练习，你的目标分数比想象中更近。
            </p>
            <a
              href="#"
              className="mt-8 inline-flex px-8 py-3.5 text-sm font-semibold text-[var(--color-brand-600)] bg-white hover:bg-[var(--color-brand-50)] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              免费开始练习
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

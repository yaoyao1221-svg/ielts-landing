export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-light)] py-8 sm:py-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-sm text-[var(--color-ink)]">雅思助手</span>
            <span className="text-xs text-[var(--color-ink-tertiary)] ml-2">— AI 驱动的雅思备考工具</span>
          </div>
          <div>
            <p className="text-xs text-[var(--color-ink-tertiary)]">© 2025 雅思助手</p>
          </div>
      </div>
    </footer>
  )
}

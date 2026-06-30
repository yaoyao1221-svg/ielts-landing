import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: '口语练习', href: '/speaking' },
  { label: '阅读训练', href: '/reading' },
  { label: '写作批改', href: '#writing' },
  { label: '功能介绍', href: '#features' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-2xl border-b border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight text-[var(--color-ink)] hover:text-[var(--color-brand-600)] transition-colors duration-200">
          IELTS Assistant
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link =>
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center" />

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border-light)] bg-white/95 backdrop-blur-xl">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map(link =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-secondary)] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-secondary)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="pt-4 space-y-3">
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToId = (e, href) => {
    e.preventDefault()
    setOpen(false)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 md:h-24 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0f1115]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => scrollToId(e, '#top')}
          className="font-display text-2xl font-bold tracking-tight text-white"
        >
          AJAY<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollToId(e, link.href)}
                className="text-sm font-semibold tracking-widest text-gray-300 uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollToId(e, '#contact')}
            aria-label="Available for opportunities — go to contact"
            className="group flex items-center gap-2 rounded-full border border-white/15 pl-4 pr-1 py-1 text-xs font-semibold uppercase tracking-widest text-gray-300 transition-colors hover:border-accent/50 hover:text-white"
          >
            Available
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/5">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden overflow-hidden bg-[#0f1115]/95 backdrop-blur-md border-b border-white/10"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToId(e, link.href)}
                    className="text-base font-semibold tracking-widest text-gray-300 uppercase transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

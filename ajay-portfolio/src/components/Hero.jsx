import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageSquare } from 'lucide-react'

const HIGHLIGHTS = [
  'Hyderabad, India',
  'B.Tech in Data Science Engineering (2024–2027)',
  'Python • SQL • Power BI • Excel • R',
  'Open to Data Analyst & Data Science Opportunities',
]

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 pb-20 md:pt-24 md:pb-0"
    >
      {/* faint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* giant watermark typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <span className="font-display font-bold text-[20vw] leading-none text-white opacity-[0.02] whitespace-nowrap">
          DATA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-semibold tracking-widest text-gray-300 uppercase">
              Data Analyst
            </span>
          </div>

          <h1 className="font-display font-bold tracking-tighter leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white">TURNING DATA</span>
            <br />
            <span className="text-stroke-accent">INTO INSIGHTS</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-lg mb-6 text-base md:text-lg">
            I'm a Data Science undergraduate passionate about transforming raw data into
            meaningful business insights — analyzing datasets, building interactive dashboards,
            and developing predictive models that solve real problems.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#work"
              onClick={scrollTo('#work')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDark px-6 py-3.5 text-sm font-semibold text-[#06140f] shadow-[0_0_30px_rgba(0,223,143,0.25)]"
            >
              View My Projects
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#14181f] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent/40"
            >
              <Download size={16} className="text-accent" />
              Download Resume
            </motion.a>

            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:text-accent"
            >
              <MessageSquare size={16} />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right column — interactive ID card */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <motion.div
            animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* lanyard strip */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-[40vh] w-4 h-[40vh] bg-gradient-to-b from-[#1c222b] via-[#1c222b] to-[#0d1116]"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-1/3 h-px bg-white/10" />
              <div className="absolute inset-x-0 top-2/3 h-px bg-white/10" />
            </div>

            <motion.div
              drag
              dragElastic={0.2}
              dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileTap={{ cursor: 'grabbing' }}
              className="relative w-64 sm:w-72 md:w-80 cursor-grab rounded-[28px] border border-white/10 bg-[#14181f] p-3 shadow-2xl shadow-black/50"
            >
              {/* clip hole */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 h-4 w-14 rounded-full bg-[#0d1116] border border-white/10" />

              <div className="relative overflow-hidden rounded-3xl aspect-[3/4]">
                <img
                  src="/profile.jpg"
                  alt="Portrait of Ajay Kumar Kanamu"
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-lg font-bold text-white leading-tight">
                    Ajay Kumar<span className="text-accent">.</span>
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-300">
                    Data Analyst
                  </p>
                </div>
                <div className="absolute top-3 right-3 flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full rounded-full bg-accent animate-ping opacity-60" />
                  <span className="relative h-full w-full rounded-full bg-accent" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

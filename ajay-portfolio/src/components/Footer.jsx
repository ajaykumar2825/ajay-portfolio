import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight, MapPin } from 'lucide-react'

const OPPORTUNITIES = [
  'Data Analyst Internships',
  'Business Analyst Internships',
  'Data Science Internships',
  'BI & Analytics Projects',
]

const MENU_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
]

// TODO: replace these placeholders with your real email, LinkedIn, and GitHub URLs.
const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:kanamuajaykumar@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajay-kumar-kanamu-a32810286/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/ajaykumar2825', icon: Github },
]

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 pt-24 md:pt-32 pb-10">
      {/* background watermark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center select-none">
        <span className="font-display font-bold text-[25vw] leading-none text-white opacity-[0.05] whitespace-nowrap translate-y-[18%]">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex items-center gap-2 mb-6 text-gray-400 text-sm">
              <MapPin size={14} className="text-accent" />
              Hyderabad, Telangana, India
            </div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-3xl sm:text-4xl md:text-5xl mb-6">
              LET'S BUILD SOMETHING<br />WITH DATA<span className="text-accent">.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              I'm actively looking for opportunities where I can apply analytical thinking and
              data-driven problem solving. If you're looking for someone passionate about turning
              data into actionable insights, I'd love to connect.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {OPPORTUNITIES.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="mailto:kanamuajaykumar@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0d1116] transition-transform hover:scale-105"
            >
              <Mail size={16} />
              Say Hello
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-8 lg:justify-self-end lg:text-right"
          >
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-5">
                Menu
              </p>
              <ul className="space-y-3">
                {MENU_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={scrollTo(link.href)}
                      className="text-gray-300 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-5">
                Socials
              </p>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-gray-300 transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500">
          <p>&copy; 2026 Ajay Kumar Kanamu. All rights reserved.</p>
          <p>Data Analyst &middot; Data Science Undergraduate &middot; BI Enthusiast</p>
        </div>
      </div>
    </footer>
  )
}

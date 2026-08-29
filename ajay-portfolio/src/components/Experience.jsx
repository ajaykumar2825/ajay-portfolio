import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Front-End Developer Intern',
    org: 'Gwing Software Technologies',
    body:
      'Worked on responsive web applications and collaborated with development teams to build user interfaces and integrate APIs. Strengthened my understanding of how applications collect and display data — which motivated my move toward analytics.',
  },
  {
    role: 'Backend Python Intern',
    org: 'SFCollab',
    body:
      'Built backend APIs, integrated databases, and worked on application logic and data processing — gaining a clear picture of how data flows through production systems.',
  },
  {
    role: 'Management Intern',
    org: 'Resolute',
    body:
      'Supported operational and management processes — preparing reports, managing documentation, and coordinating team activities. Reinforced the importance of data-driven reporting in decision-making.',
  },
]

const COURSEWORK = [
  'Statistics for Data Science',
  'Machine Learning',
  'Database Management Systems',
  'Data Mining',
  'Artificial Intelligence',
  'Probability & Regression',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
            Journey
          </span>
          <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-3xl sm:text-4xl md:text-5xl">
            EXPERIENCE &amp; EDUCATION
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Experience timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-8 border-l border-white/10">
              {EXPERIENCE.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(0,223,143,0.6)]" />
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent mb-3">{item.org}</p>
                  <p className="text-gray-400 leading-relaxed max-w-xl">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <GraduationCap size={20} />
              </span>
              <span className="text-sm font-semibold tracking-widest text-gray-300 uppercase">
                Education
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-1">
              B.Tech in Data Science Engineering
            </h3>
            <p className="text-gray-400 mb-1">MLR Institute of Technology, Hyderabad</p>
            <p className="text-sm text-gray-500 mb-8">2023 – 2027</p>

            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {COURSEWORK.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-[#0d1116] px-3 py-1.5 text-xs text-gray-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

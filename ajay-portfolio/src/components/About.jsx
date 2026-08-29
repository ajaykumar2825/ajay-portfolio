import { motion } from 'framer-motion'

const TOOLKIT = [
  'Python', 'SQL', 'R', 'Pandas', 'NumPy', 'Scikit-learn',
  'Power BI', 'Tableau', 'Matplotlib', 'Plotly',
  'MySQL', 'PostgreSQL', 'Excel', 'Git', 'GitHub', 'Jupyter Notebook',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
            About Me
          </span>
          <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-3xl sm:text-4xl md:text-5xl mb-8">
            ANALYZING WITH<br />PURPOSE.
          </h2>

          <p className="text-gray-400 leading-relaxed mb-5">
            I'm Ajay Kumar Kanamu, a Data Science Engineering student based in Hyderabad with a
            growing passion for analytics, machine learning, and business intelligence. I enjoy
            working with data across its entire lifecycle — from collecting and cleaning raw
            datasets to analyzing patterns, building dashboards, and creating predictive models
            that generate actionable insights.
          </p>
          <p className="text-gray-400 leading-relaxed mb-12">
            My academic journey has introduced me to statistics, machine learning, database
            systems, and data visualization, while my personal projects have let me apply those
            concepts to real business scenarios — customer churn prediction, financial risk
            analysis, recommendation systems, demand forecasting, and performance analytics.
          </p>

          <div className="flex items-center gap-8">
            <div>
              <p className="font-display text-4xl font-bold text-white">6+</p>
              <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <p className="font-display text-4xl font-bold text-white">3</p>
              <p className="text-sm text-gray-400 mt-1">Internships</p>
            </div>
          </div>
        </motion.div>

        {/* Right column — toolkit */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10"
        >
          <h3 className="font-display text-xl font-bold text-white mb-2">My Toolkit</h3>
          <p className="text-sm text-gray-400 mb-8">
            Languages, libraries, and platforms I use to turn raw data into decisions.
          </p>

          <div className="flex flex-wrap gap-3">
            {TOOLKIT.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="rounded-full border border-white/10 bg-[#0d1116] px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,223,143,0.3)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

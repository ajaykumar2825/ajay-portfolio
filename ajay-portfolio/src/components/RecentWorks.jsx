import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    category: 'Machine Learning',
    title: 'Customer Churn Prediction',
    description:
      'A classification model that identifies subscription customers likely to leave, using historical behavior and demographic data — so businesses can act before they lose revenue.',
    outcome: 'Identified high-risk customers and visualized the key factors driving churn.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Classification', 'Feature Engineering'],
    image: 'https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Sports Analytics',
    title: 'Athlete Performance Dashboard',
    description:
      'An interactive dashboard that tracks fitness trends, recovery, and training load — giving coaches a single view of the metrics that affect performance.',
    outcome: 'Helped surface patterns in training outcomes across athletes over time.',
    tags: ['Power BI', 'SQL', 'Python', 'KPI Development'],
    image: 'https://images.unsplash.com/photo-1762010297288-ca543e4f0909?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Predictive Analytics',
    title: 'Bike Sharing Demand Prediction',
    description:
      'A regression model forecasting bike rental demand from historical usage, weather, and seasonal patterns, built to support fleet allocation decisions.',
    outcome: 'Produced seasonal demand forecasts to support operational planning.',
    tags: ['Python', 'Regression', 'Time Series', 'Data Visualization'],
    image: 'https://images.unsplash.com/photo-1750053551850-cb91a0d6981b?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Financial Analytics',
    title: 'Financial Risk Prediction',
    description:
      'An interactive Shiny application estimating the probability of financial risk from historical customer and transaction data, for faster lending decisions.',
    outcome: 'Delivered an app that predicts and visualizes risk probability in real time.',
    tags: ['R', 'Shiny', 'Logistic Regression', 'Random Forest'],
    image: 'https://images.unsplash.com/photo-1745270917449-c2e2c5806586?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Recommendation Systems',
    title: 'Movie Recommendation System',
    description:
      'A content-based recommendation engine that suggests similar movies from viewing preferences, built on similarity matrices over movie metadata.',
    outcome: 'Built an engine capable of surfacing relevant titles from a single seed movie.',
    tags: ['Python', 'Cosine Similarity', 'Data Processing'],
    image: 'https://images.unsplash.com/photo-1643553517154-24eb7fd86437?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Business Intelligence',
    title: 'Sales Analytics Dashboard',
    description:
      'An executive-style Power BI dashboard monitoring sales performance, revenue trends, and regional growth, with interactive filters and drill-through reports.',
    outcome: 'Gave stakeholders real-time visibility into sales KPIs across regions.',
    tags: ['Power BI', 'SQL', 'Excel', 'Business Intelligence'],
    image: 'https://images.unsplash.com/photo-1686061593213-98dad7c599b9?q=80&w=800&auto=format&fit=crop',
  },
]

const N = PROJECTS.length

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0)

  const diffOf = (i) => (i - activeIdx + N) % N

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-3xl sm:text-4xl md:text-5xl">
              FEATURED PROJECTS
            </h2>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gray-300 transition-colors hover:text-accent"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Stack */}
          <div className="lg:col-span-7">
            <div
              className="relative h-[340px] sm:h-[450px] md:h-[480px] [perspective:1200px]"
            >
              {PROJECTS.map((project, i) => {
                const diff = diffOf(i)
                if (diff > 3) return null // keep DOM light, only show front 4
                const isFront = diff === 0
                return (
                  <motion.button
                    key={project.title}
                    type="button"
                    onClick={() =>
                      setActiveIdx(isFront ? (activeIdx + 1) % N : i)
                    }
                    animate={{
                      y: diff * 28,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2,
                      opacity: 1 - diff * 0.18,
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    style={{ zIndex: N - diff }}
                    className={`absolute inset-0 w-full overflow-hidden rounded-3xl border border-white/10 bg-surface text-left ${
                      isFront ? 'cursor-pointer' : 'cursor-pointer'
                    }`}
                    aria-label={`Show ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    {isFront && (
                      <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* nav dots */}
            <div className="flex items-center gap-2 mt-6">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`View ${p.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIdx ? 'w-8 bg-accent' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Description panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-3 block">
                  {PROJECTS[activeIdx].category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  {PROJECTS[activeIdx].title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {PROJECTS[activeIdx].description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  <span className="text-gray-300 font-semibold">Outcome — </span>
                  {PROJECTS[activeIdx].outcome}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {PROJECTS[activeIdx].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/ajaykumar2825"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentDark px-6 py-3 text-sm font-semibold text-[#06140f]"
                >
                  Explore Project
                  <ArrowUpRight size={16} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

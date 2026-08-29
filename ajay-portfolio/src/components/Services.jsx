import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const STAGES = [
  {
    title: 'UNDERSTAND',
    body: 'Define the business objective and identify the key questions the analysis needs to answer before touching any data.',
  },
  {
    title: 'COLLECT',
    body: 'Gather structured or unstructured datasets from the available sources — databases, APIs, spreadsheets, or public datasets.',
  },
  {
    title: 'CLEAN & PREPARE',
    body: 'Handle missing values, duplicates, formatting issues, and outliers, and prepare features for analysis or modeling.',
  },
  {
    title: 'EXPLORE',
    body: 'Dig into the data to surface trends, distributions, correlations, and anomalies through exploratory analysis.',
  },
  {
    title: 'VISUALIZE',
    body: 'Turn findings into meaningful charts, dashboards, and reports that make the data easy to read at a glance.',
  },
  {
    title: 'MODEL',
    body: 'Apply machine learning algorithms — classification, regression, clustering, or forecasting — where prediction is required.',
  },
  {
    title: 'EVALUATE',
    body: 'Measure model performance against the right metrics and validate that the findings actually hold up.',
  },
  {
    title: 'PRESENT',
    body: 'Communicate results through dashboards and business-focused storytelling that stakeholders can actually act on.',
  },
]

export default function Services() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 block">
            How I Work
          </span>
          <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-3xl sm:text-4xl md:text-5xl">
            MY DATA ANALYTICS <span className="text-stroke-accent">WORKFLOW</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {STAGES.map((stage, i) => {
            const isOpen = openIdx === i
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 sm:gap-6 py-6 text-left"
                >
                  <span className="font-display text-sm text-gray-500 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display flex-1 text-lg sm:text-2xl font-bold tracking-tight text-white">
                    {stage.title}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen ? 'border-accent text-accent' : 'border-white/15 text-gray-400'
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-12 sm:pl-14 pr-10 text-gray-400 leading-relaxed max-w-2xl">
                        {stage.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

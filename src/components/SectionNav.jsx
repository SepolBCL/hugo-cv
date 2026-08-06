import { motion } from 'framer-motion';

export function SectionNav({ sections, activeSectionId, onSelect }) {
  return (
    <nav className="grid gap-2.5">
      {sections.map((section, index) => {
        const isActive = activeSectionId === section.id;

        return (
          <motion.button
            key={section.id}
            type="button"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 * index, duration: 0.32 }}
            onClick={() => onSelect(section.id)}
            className={`group relative overflow-hidden rounded-[1.25rem] border px-4 py-4 text-left transition-all duration-300 ${
              isActive
                ? 'border-sky-200 bg-sky-50 shadow-sm dark:border-sky-800/70 dark:bg-sky-950/40'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-slate-700 dark:hover:bg-slate-900'
            }`}
          >
            <span
              className={`absolute inset-y-3 left-0 w-1 rounded-r-full ${
                isActive ? 'bg-sky-700 dark:bg-sky-400' : 'bg-transparent'
              }`}
            />
            <div className="flex items-center justify-between gap-3 pl-2">
              <div>
                <div className="text-[0.66rem] uppercase tracking-[0.26em] text-slate-400 dark:text-slate-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="mt-1 font-display text-base font-semibold text-slate-900 dark:text-slate-50">
                  {section.label}
                </div>
              </div>
              <div
                className={`rounded-full px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.22em] ${
                  isActive
                    ? 'bg-white text-sky-900 dark:bg-sky-400/15 dark:text-sky-200'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {section.eyebrow}
              </div>
            </div>
          </motion.button>
        );
      })}
    </nav>
  );
}

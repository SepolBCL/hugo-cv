import { motion } from 'framer-motion';
import { BrandMark } from './BrandMark';

function Surface({ children, className = '' }) {
  return (
    <div
      className={`rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/80 ${className}`}
    >
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative grid gap-5 before:absolute before:bottom-0 before:left-[1.45rem] before:top-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
      {items.map((entry) => (
        <article key={`${entry.company}-${entry.period}`} className="relative pl-12">
          <div className="absolute left-0 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-950">
            <BrandMark brand={entry.brand} className="h-12 w-12" />
          </div>
          <Surface>
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-slate-50">{entry.role}</h3>
                <p className="mt-1 text-sm font-medium text-sky-800 dark:text-sky-300">{entry.company}</p>
              </div>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{entry.period}</p>
            </div>
            <ul className="mt-4 grid gap-2.5">
              {entry.points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Surface>
        </article>
      ))}
    </div>
  );
}

function SkillGroups({ groups }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {groups.map((group) => (
        <Surface key={group.title}>
          <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-slate-50">{group.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </Surface>
      ))}
    </div>
  );
}

function HighlightStrip({ items }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[1.4rem] border border-sky-100 bg-sky-50 px-4 py-4 text-sm leading-7 text-slate-700 dark:border-sky-900/60 dark:bg-sky-950/30 dark:text-slate-300"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function LinkGrid({ items }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          className="rounded-[1.35rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300 dark:hover:border-slate-700"
        >
          <div className="flex items-center gap-3">
            {item.brand ? <BrandMark brand={item.brand} className="h-10 w-10" /> : null}
            <span>{item.label}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

function InstitutionCard({ brand, label }) {
  return (
    <Surface className="mt-8">
      <div className="flex items-center gap-4">
        <BrandMark brand={brand} className="h-14 w-14" />
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-1 text-base font-semibold text-slate-950 dark:text-slate-50">{brand.label}</p>
        </div>
      </div>
    </Surface>
  );
}

export function ContentPanel({ section, labels }) {
  return (
    <motion.section
      key={section.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/85 dark:shadow-none md:p-8"
    >
      <div className="text-[0.68rem] uppercase tracking-[0.28em] text-sky-800 dark:text-sky-300">{section.eyebrow}</div>
      <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold text-slate-950 dark:text-slate-50 md:text-3xl">
        {section.heading}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 dark:text-slate-300 md:text-base">{section.summary}</p>

      {section.highlights ? (
        <div className="mt-8">
          <HighlightStrip items={section.highlights} />
        </div>
      ) : null}

      {section.institutionBrand ? <InstitutionCard brand={section.institutionBrand} label={labels.institution} /> : null}

      <div className="mt-8">
        {section.timeline ? <Timeline items={section.timeline} /> : null}
        {section.groups ? <SkillGroups groups={section.groups} /> : null}
        {section.bullets ? <BulletList items={section.bullets} /> : null}
      </div>

      {section.links ? (
        <div className="mt-8">
          <div className="mb-4 text-[0.68rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{labels.links}</div>
          <LinkGrid items={section.links} />
        </div>
      ) : null}
    </motion.section>
  );
}

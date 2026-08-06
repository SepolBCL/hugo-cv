export function ActionButton({ href, children, variant = 'primary', download = false }) {
  const isExternal = href.startsWith('http');
  const isAnchor = href.startsWith('#');

  const classes =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-900'
      : 'border border-slate-900/12 bg-slate-900 text-white shadow-[0_14px_30px_rgba(15,23,42,0.12)] hover:bg-slate-800 dark:border-white/10 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200';

  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${classes}`}
      href={href}
      target={download || isAnchor || !isExternal ? undefined : '_blank'}
      rel={download || isAnchor || !isExternal ? undefined : 'noreferrer'}
      download={download}
    >
      {children}
    </a>
  );
}

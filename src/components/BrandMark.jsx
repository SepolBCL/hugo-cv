function IconGlyph({ id }) {
  const className = 'h-5 w-5 stroke-current';

  if (id === 'github') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.54-1.4-1.34-1.77-1.34-1.77-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.24 1.84 1.24 1.08 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.77-1.6-2.66-.3-5.46-1.32-5.46-5.9 0-1.3.47-2.37 1.23-3.2-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.22a11.42 11.42 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.64.24 2.86.12 3.16.77.83 1.23 1.9 1.23 3.2 0 4.59-2.8 5.6-5.48 5.89.43.37.82 1.09.82 2.21v3.27c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM2.75 9.75h4.5V21h-4.5V9.75Zm7.25 0H14v1.54h.06c.56-1.06 1.92-2.18 3.95-2.18 4.23 0 5.01 2.78 5.01 6.38V21h-4.5v-4.88c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V21h-4.5V9.75Z" />
      </svg>
    );
  }

  if (id === 'briefcase') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M4 8h16" />
        <path d="M8 8V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5V8" />
        <rect x="4" y="8" width="16" height="11" rx="2.5" />
      </svg>
    );
  }

  if (id === 'graduation') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="m3 9 9-4 9 4-9 4-9-4Z" />
        <path d="M7 11.5v4.1c0 .39.21.75.54.95 1.18.68 2.7 1.45 4.46 1.45s3.28-.77 4.46-1.45c.33-.2.54-.56.54-.95v-4.1" />
      </svg>
    );
  }

  if (id === 'hammer') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="m14.5 5.5 4 4" />
        <path d="m12.2 7.8 4 4" />
        <path d="M5 19 15.8 8.2a2 2 0 0 0 0-2.82l-.18-.18a2 2 0 0 0-2.82 0L2 16" />
        <path d="m8 13 3 3" />
      </svg>
    );
  }

  if (id === 'factory') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M3 20V9l6 3V9l6 3V4l6 3v13H3Z" />
        <path d="M7 20v-4h3v4" />
      </svg>
    );
  }

  if (id === 'chef') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M8 10a4 4 0 1 1 8 0" />
        <path d="M6 10h12v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3Z" />
        <path d="M9 15v4M15 15v4" />
      </svg>
    );
  }

  if (id === 'layers') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="m12 4 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

export function BrandMark({ brand, className = 'h-11 w-11' }) {
  if (!brand) {
    return (
      <div
        className={`${className} flex items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100`}
      >
        ?
      </div>
    );
  }

  if (brand.type === 'image') {
    return (
      <div
        className={`${className} flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900`}
        aria-label={brand.label}
        title={brand.label}
      >
        <img src={brand.src} alt={brand.label} className="h-full w-full object-contain p-2" />
      </div>
    );
  }

  if (brand.type === 'social' || brand.type === 'icon') {
    return (
      <div
        className={`${className} flex items-center justify-center rounded-2xl border border-slate-200 text-white shadow-sm dark:border-slate-700`}
        style={{ background: brand.background ?? '#0f172a' }}
        aria-label={brand.label}
        title={brand.label}
      >
        <IconGlyph id={brand.id} />
      </div>
    );
  }

  return (
    <div
      className={`${className} flex items-center justify-center rounded-2xl border border-slate-200 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm dark:border-slate-700`}
      style={{ background: brand.background ?? '#334155' }}
      aria-label={brand.label}
      title={brand.label}
    >
      {brand.initials}
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const profilePhoto = '/assets/profile/hugo-profile.jpg';
const videoUrl =
  'https://player.vimeo.com/external/449626526.sd.mp4?s=617f3a58d7bf4f520ecdf8b084f2c6f8d8b4d6b6&profile_id=165&oauth2_token_id=57447761';
const fallbackImage =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hugolopesbcl', icon: 'linkedin', helper: 'Rede profissional' },
  { label: 'GitHub', href: 'https://github.com/SepolBCL', icon: 'github', helper: 'Portefólio técnico' },
];

const experiences = [
  {
    role: 'Consultor',
    company: 'Wave Solutions - Portugal',
    period: 'Jan. 2026 - Jun. 2026',
    logo: '/assets/logos/wave-logo.png',
    summary:
      'Atuação na consultoria técnica e implementação de sistemas de informação e mobilidade empresarial. Otimização de processos e fluxos de trabalho, com aplicação prática de competências de gestão de projetos.',
  },
  {
    role: 'Carpinteiro',
    company: 'OFP Carpintaria - Portugal',
    period: 'Out. 2020 - Jan. 2026',
    icon: 'hammer',
    summary:
      'Reintegração bem-sucedida no mercado português, com aplicação consistente de competências técnicas em projetos de carpintaria.',
  },
  {
    role: 'Construtor de Estruturas Metálicas',
    company: 'SLEICO, SAS - Saint-Étienne, França',
    period: 'Nov. 2010 - Out. 2020',
    icon: 'factory',
    summary:
      'Evolução de operário para líder de equipa, com coordenação de projetos técnicos e forte foco no cumprimento de prazos.',
  },
  {
    role: 'Ajudante de Cozinha',
    company: 'Hotel Chalet Mounier - Les Deux Alpes, França',
    period: 'Jun. 2009 - Ago. 2010',
    logo: 'https://logo.clearbit.com/chalet-mounier.com',
    summary: 'Adaptação a uma nova cultura e a um ambiente profissional exigente.',
  },
  {
    role: 'Gerente',
    company: 'Cerâmica Laurindo Lopes - Barcelos, Portugal',
    period: '2003 - 2008',
    icon: 'layers',
    summary: 'Gestão das operações diárias, liderança de equipa e acompanhamento operacional.',
  },
];

const expertiseCards = [
  {
    title: 'Programação',
    icon: 'code',
    items: ['C', 'C#', 'C++', 'Python', 'Kotlin'],
  },
  {
    title: 'Ferramentas',
    icon: 'spark',
    items: ['Microsoft Power BI', 'GitHub', 'Visual Studio', 'Visual Studio Code'],
  },
  {
    title: 'Sistemas',
    icon: 'server',
    items: ['Linux (Ubuntu)', 'Windows', 'Administração de sistemas'],
  },
  {
    title: 'Redes',
    icon: 'network',
    items: ['TCP/IP', 'Roteamento', 'DNS', 'Firewalls'],
  },
  {
    title: 'Bases de dados',
    icon: 'database',
    items: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Metodologias',
    icon: 'grid',
    items: ['Ágil', 'Scrum', 'Projetos académicos'],
  },
];

const softSkills = ['Responsabilidade', 'Organização', 'Trabalho de equipa', 'Resiliência'];

const languages = [
  { label: 'Português', level: 'Nativo', code: 'PT', accent: 'from-emerald-400 to-green-500' },
  { label: 'Francês', level: 'C1', code: 'FR', accent: 'from-sky-400 to-blue-500' },
  { label: 'Inglês', level: 'B1', code: 'EN', accent: 'from-violet-400 to-indigo-500' },
];

const navItems = [
  { id: 'hero', label: 'Início' },
  { id: 'education', label: 'Educação' },
  { id: 'experience', label: 'Experiência' },
  { id: 'skills', label: 'Competências' },
  { id: 'contact', label: 'Contacto' },
];

function FadeSection({ id, children, className = '', style }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.72rem] uppercase tracking-[0.34em] text-cyan-300/90">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">{text}</p>
    </div>
  );
}

function GlassPanel({ children, className = '' }) {
  return (
    <div
      className={`rounded-[1.8rem] border border-white/10 bg-slate-950/45 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function Icon({ name, className = 'h-5 w-5' }) {
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM2.75 9.75h4.5V21h-4.5V9.75Zm7.25 0H14v1.54h.06c.56-1.06 1.92-2.18 3.95-2.18 4.23 0 5.01 2.78 5.01 6.38V21h-4.5v-4.88c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V21h-4.5V9.75Z" />
      </svg>
    );
  }

  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.54-1.4-1.34-1.77-1.34-1.77-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.24 1.84 1.24 1.08 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.77-1.6-2.66-.3-5.46-1.32-5.46-5.9 0-1.3.47-2.37 1.23-3.2-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.22a11.42 11.42 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.66 1.64.24 2.86.12 3.16.77.83 1.23 1.9 1.23 3.2 0 4.59-2.8 5.6-5.48 5.89.43.37.82 1.09.82 2.21v3.27c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (name === 'hammer') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <path d="m14.5 5.5 4 4" />
        <path d="m12.2 7.8 4 4" />
        <path d="M5 19 15.8 8.2a2 2 0 0 0 0-2.82l-.18-.18a2 2 0 0 0-2.82 0L2 16" />
      </svg>
    );
  }

  if (name === 'factory') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <path d="M3 20V9l6 3V9l6 3V4l6 3v13H3Z" />
        <path d="M7 20v-4h3v4" />
      </svg>
    );
  }

  if (name === 'layers') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <path d="m12 4 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }

  if (name === 'code') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    );
  }

  if (name === 'server') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="2" />
        <rect x="4" y="14" width="16" height="6" rx="2" />
        <path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
      </svg>
    );
  }

  if (name === 'database') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    );
  }

  if (name === 'network') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <path d="M12 5v5" />
        <path d="M6 19h12" />
        <path d="M6 19v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
        <rect x="9" y="3" width="6" height="4" rx="1.5" />
      </svg>
    );
  }

  if (name === 'spark') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      </svg>
    );
  }

  if (name === 'grid') {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1.5" />
        <rect x="4" y="14" width="6" height="6" rx="1.5" />
        <rect x="14" y="14" width="6" height="6" rx="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className={`${className} stroke-current`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

function BrandBadge({ logo, icon, label, logoClassName = 'object-contain p-2' }) {
  if (logo) {
    return (
      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/80 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
        <img src={logo} alt={label} className={`h-full w-full ${logoClassName}`} />
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/80 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
      <Icon name={icon} className="h-6 w-6" />
    </div>
  );
}

function Typewriter({ text }) {
  const [visible, setVisible] = useState('');

  useEffect(() => {
    let index = 0;
    setVisible('');

    const timer = setInterval(() => {
      index += 1;
      setVisible(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 55);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="inline-flex items-center gap-1 text-lg font-medium text-cyan-200 md:text-xl">
      <span>{visible}</span>
      <span className="h-6 w-[2px] animate-pulse bg-cyan-300" />
    </div>
  );
}

function ExpertiseCard({ item }) {
  return (
    <div className="rounded-[1.45rem] border border-cyan-400/12 bg-slate-950/55 p-4 shadow-[0_0_20px_rgba(34,211,238,0.05)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/10 text-cyan-200">
          <Icon name={item.icon} className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{item.title}</p>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Especialização</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.items.map((entry) => (
          <span key={entry} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
            {entry}
          </span>
        ))}
      </div>
    </div>
  );
}

function LanguageCard({ item }) {
  return (
    <div className="rounded-[1.45rem] border border-cyan-400/12 bg-slate-950/55 p-4">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-sm font-bold tracking-[0.14em] text-white shadow-[0_0_20px_rgba(34,211,238,0.15)]`}>
          {item.code}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{item.label}</p>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{item.level}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const heroBackground = useMemo(
    () => ({
      backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.52), rgba(2,6,23,0.88)), url(${fallbackImage})`,
    }),
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.18;
      document.documentElement.style.setProperty('--parallax-offset', `${offset}px`);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_22%),linear-gradient(180deg,#04070f_0%,#07101d_100%)]" />
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-25"
        style={{
          ...heroBackground,
          transform: 'translate3d(0, calc(var(--parallax-offset, 0px) * -1), 0)',
        }}
      />

      <nav className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
          <div>
            <p className="font-display text-lg font-semibold tracking-[0.08em] text-white">Hugo Lopes</p>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-cyan-300/80">CV digital</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <FadeSection id="hero" className="relative overflow-hidden border-b border-white/8" style={heroBackground}>
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline poster={fallbackImage}>
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.42)_0%,rgba(3,7,18,0.72)_45%,rgba(3,7,18,0.96)_100%)]" />

        <div className="relative mx-auto grid min-h-[92vh] max-w-[1380px] gap-10 px-4 py-14 md:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-cyan-300/90">Perfil profissional</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] text-white md:text-7xl">Hugo Lopes</h1>
            <div className="mt-5">
              <Typewriter text="Engenheiro de Sistemas Informáticos" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">Barcelos, Portugal</span>
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">+351 963 622 418</span>
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">hugodecode@gmail.com</span>
            </div>

            <GlassPanel className="mt-8 max-w-3xl">
              <p className="text-sm leading-8 text-slate-200 md:text-base">
                Licenciado em Engenharia de Sistemas Informáticos, com experiência recente em consultoria técnica e implementação de sistemas de informação e mobilidade empresarial. Conhecimentos de programação, bases de dados, Linux, redes e administração de sistemas, aliados a mais de uma década de experiência internacional em ambientes técnicos. Percurso marcado pela progressão para liderança de equipa, rigor operacional, capacidade de adaptação e orientação para a resolução de problemas tecnológicos.
              </p>
            </GlassPanel>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-full border border-cyan-300/25 bg-cyan-300/12 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300/18"
              >
                Ver experiência
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/25 hover:text-cyan-100"
              >
                Entrar em contacto
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-[320px] rounded-full border border-cyan-300/25 bg-slate-950/35 p-4 shadow-[0_0_70px_rgba(34,211,238,0.18)] backdrop-blur-xl md:h-[400px] md:w-[400px]">
              <div className="absolute inset-0 rounded-full border border-cyan-300/20 shadow-[inset_0_0_40px_rgba(34,211,238,0.16)]" />
              <div className="absolute inset-3 rounded-full border border-white/10" />
              <img
                src={profilePhoto}
                alt="Hugo Lopes"
                className="relative h-full w-full rounded-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = 'https://source.unsplash.com/random/400x400/?portrait,man';
                }}
              />
            </div>
          </div>
        </div>
      </FadeSection>

      <div className="mx-auto flex max-w-[1380px] flex-col gap-8 px-4 py-12 md:px-8 md:py-16">
        <FadeSection id="education" className="scroll-mt-28">
          <SectionTitle
            eyebrow="Educação"
            title="Formação académica"
            text="Licenciatura concluída em Engenharia de Sistemas Informáticos, com base sólida em software, sistemas, redes e dados."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassPanel className="flex items-start gap-4">
              <BrandBadge logo="/assets/logos/upca-logo.png" label="UPCA" logoClassName="object-cover" />
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-300">2023 - concluído 2026</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">Licenciatura em Engenharia de Sistemas Informáticos</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">Universidade Politécnica do Cávado e do Ave (IPCA) - Barcelos, Portugal</p>
              </div>
            </GlassPanel>

            <GlassPanel>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  'Sistemas Operativos',
                  'Arquitetura de Computadores',
                  'Programação',
                  'Redes',
                  'Bases de Dados',
                  'Administração de Sistemas',
                  'Engenharia de Software',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan-400/12 bg-slate-950/55 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </FadeSection>

        <FadeSection id="experience" className="scroll-mt-28">
          <SectionTitle
            eyebrow="Experiência"
            title="Experiência profissional"
            text="Percurso marcado por execução, progressão e experiência internacional em contextos técnicos e operacionais."
          />
          <div className="mt-8 grid gap-5">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.9rem] border border-white/10 bg-slate-950/45 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <BrandBadge logo={item.logo} icon={item.icon} label={item.company} logoClassName={item.logo?.includes('wave-logo') ? 'object-contain p-1.5 bg-white' : 'object-contain p-2'} />
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-cyan-200">{item.company}</p>
                    </div>
                  </div>
                  <div className="rounded-full border border-cyan-400/12 bg-black/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-slate-300">
                    {item.period}
                  </div>
                </div>
                <p className="mt-5 max-w-5xl text-sm leading-8 text-slate-300 md:text-base">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </FadeSection>

        <FadeSection id="skills" className="scroll-mt-28">
          <SectionTitle
            eyebrow="Competências"
            title="Competências técnicas e pessoais"
            text="Conhecimentos técnicos, capacidade de execução e comunicação em três línguas para contextos profissionais internacionais."
          />
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <GlassPanel>
              <p className="text-[0.72rem] uppercase tracking-[0.3em] text-cyan-300">Habilidades técnicas</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {expertiseCards.map((skill) => (
                  <ExpertiseCard key={skill.title} item={skill} />
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6">
              <GlassPanel>
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-cyan-300">Soft skills</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <div key={skill} className="rounded-full border border-cyan-400/14 bg-slate-950/55 px-4 py-2 text-sm text-slate-200">
                      {skill}
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel>
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-cyan-300">Línguas</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {languages.map((language) => (
                    <LanguageCard key={language.label} item={language} />
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>
        </FadeSection>

        <FadeSection id="contact" className="scroll-mt-28">
          <GlassPanel className="overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-cyan-300">Contacto</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
                  Disponível para funções em consultoria, sistemas e tecnologia
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
                  Perfil preparado para contribuir com maturidade profissional, rigor operacional e evolução tecnológica consistente.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:hugodecode@gmail.com"
                    className="rounded-full border border-cyan-300/25 bg-cyan-300/12 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/18"
                  >
                    hugodecode@gmail.com
                  </a>
                  <a
                    href="tel:+351963622418"
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/25 hover:text-cyan-100"
                  >
                    +351 963 622 418
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[1.45rem] border border-white/10 bg-slate-950/55 px-5 py-4 transition hover:border-cyan-300/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/18 bg-black/25 text-cyan-200 transition group-hover:scale-105 group-hover:text-cyan-100">
                        <Icon name={social.icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{social.label}</p>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{social.helper}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </GlassPanel>
          <p className="mt-6 text-center text-sm text-slate-400">Desenvolvido com dedicação e tecnologia.</p>
        </FadeSection>
      </div>
    </div>
  );
}

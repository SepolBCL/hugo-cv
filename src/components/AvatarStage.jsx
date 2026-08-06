import { motion } from 'framer-motion';
import { useState } from 'react';

const portraitCandidates = [
  '/assets/profile/hugo-profile.jpg',
  '/assets/profile/hugo-profile.png',
  '/assets/profile/hugo-profile.webp',
];

function StylizedFallback() {
  return (
    <motion.div
      animate={{ y: [-1, 1, -1], rotate: [-0.12, 0.12, -0.12] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative h-[320px] w-[262px] rounded-[2rem] border border-slate-900/8 bg-[linear-gradient(180deg,#ffffff_0%,#e9eef4_100%)] shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
    >
      <div className="absolute inset-x-5 bottom-0 top-20 rounded-t-[7rem] bg-[linear-gradient(180deg,#48515c_0%,#27313d_55%,#18202a_100%)]" />
      <div className="absolute left-1/2 top-6 h-[220px] w-[170px] -translate-x-1/2 rounded-[45%] bg-[#d2a07d]" />
      <div className="absolute left-1/2 top-4 h-[115px] w-[150px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle_at_50%_28%,#efc29f_0%,#d59d77_72%,#ca926d_100%)]" />
      <div className="absolute left-[63px] top-[118px] h-[44px] w-[60px] rounded-full border-[6px] border-[#111317]" />
      <div className="absolute right-[63px] top-[118px] h-[44px] w-[60px] rounded-full border-[6px] border-[#111317]" />
      <div className="absolute left-1/2 top-[136px] h-[6px] w-[20px] -translate-x-1/2 rounded-full bg-[#111317]" />
      <div className="absolute left-[85px] top-[136px] h-[10px] w-[10px] rounded-full bg-[#463327]" />
      <div className="absolute right-[85px] top-[136px] h-[10px] w-[10px] rounded-full bg-[#463327]" />
      <div className="absolute left-1/2 top-[148px] h-[34px] w-[24px] -translate-x-1/2 rounded-[48%] bg-[#c98f6a]" />
      <div className="absolute left-1/2 top-[186px] h-[16px] w-[54px] -translate-x-1/2 rounded-full bg-[#71675f]" />
      <div className="absolute left-1/2 top-[198px] h-[18px] w-[42px] -translate-x-1/2 rounded-full bg-[#d6a481]" />
      <div className="absolute left-1/2 top-[198px] h-[95px] w-[120px] -translate-x-1/2 rounded-b-[52%] rounded-t-[34%] bg-[#7d756d]" />
      <div className="absolute left-1/2 top-[206px] h-[84px] w-[68px] -translate-x-1/2 rounded-b-[48%] rounded-t-[30%] bg-[#e1e2de]" />
      <div className="absolute bottom-[26px] left-[26px] right-[26px] h-[105px] rounded-t-[4rem] bg-[linear-gradient(180deg,#47505a_0%,#24303a_100%)]" />
    </motion.div>
  );
}

function PhotoPortrait({ labels }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const src = portraitCandidates[imageIndex];

  if (useFallback || !src) {
    return <StylizedFallback />;
  }

  return (
    <motion.div
      animate={{ y: [-1, 1, -1], rotate: [-0.08, 0.08, -0.08] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      className="relative h-[340px] w-[280px]"
    >
      <motion.div
        animate={{
          boxShadow: [
            '0 0 0 10px rgba(226,232,240,0.65)',
            '0 0 0 18px rgba(203,213,225,0.45)',
            '0 0 0 10px rgba(226,232,240,0.65)',
          ],
        }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-[2.2rem] border border-slate-900/8 bg-[linear-gradient(180deg,#ffffff_0%,#eef2f7_100%)] p-3 shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
      >
        <div className="relative h-full overflow-hidden rounded-[1.7rem] border border-slate-900/8 bg-slate-100">
          <img
            src={src}
            alt="Hugo Filipe Ferreira Lopes portrait"
            className="h-full w-full object-cover object-center"
            onError={() => {
              if (imageIndex < portraitCandidates.length - 1) {
                setImageIndex((current) => current + 1);
              } else {
                setUseFallback(true);
              }
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.14)_68%,rgba(15,23,42,0.38)_100%)]" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-black/22 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm font-semibold text-white">{labels.portraitName}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AvatarStage({ activeSection, labels }) {
  const highlights = activeSection.highlights?.slice(0, 3) ?? [];

  return (
    <section className="glass-panel rounded-[2rem] p-5 md:p-6">
      <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[1.6rem] border border-slate-900/8 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]">
          <PhotoPortrait labels={labels} />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.26em] text-sky-900">{activeSection.eyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950">{activeSection.label}</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{activeSection.heading}</p>
          </div>

          <div className="rounded-2xl border border-slate-900/8 bg-white/86 px-5 py-5 shadow-[0_16px_32px_rgba(15,23,42,0.05)]">
            <p className="text-sm leading-8 text-slate-700">{activeSection.summary}</p>
          </div>

          {highlights.length ? (
            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-900/8 bg-slate-50 px-4 py-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

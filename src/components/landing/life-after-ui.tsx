import { motion } from "framer-motion"
import stanImg from "@/assets/stan.png"
import bgImg from "@/assets/bg.png"
import { Instagram, Globe } from "lucide-react"
import { PodcastFooter } from "./podcast-footer"

/* ──────────────────────────────────────
   Animation Variants
   ────────────────────────────────────── */
const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut, delay },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut, delay },
  }),
}

/* ──────────────────────────────────────
   Platform logos (SVG inline)
   ────────────────────────────────────── */
function YouTubeLogo() {
  return (
    <div className="flex items-center gap-[0.4em]">
      <svg viewBox="0 0 24 24" className="h-[1em] w-[1em]" fill="white">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
      <span className="font-bold tracking-tight text-white">YouTube</span>
    </div>
  )
}

function SpotifyLogo() {
  return (
    <div className="flex items-center gap-[0.4em]">
      <svg viewBox="0 0 24 24" className="h-[1em] w-[1em]" fill="white">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
      <span className="font-bold tracking-tight text-white">Spotify</span>
    </div>
  )
}

function ApplePodcastsLogo() {
  return (
    <div className="flex items-center gap-[0.4em]">
      <svg viewBox="0 0 24 24" className="h-[1em] w-[1em]" fill="white">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" />
      </svg>
      <span className="font-bold tracking-tight text-white">Podcasts</span>
    </div>
  )
}


/* ──────────────────────────────────────
   Scroll-down chevron
   ────────────────────────────────────── */
function ScrollChevron() {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-[284px] z-10 hidden md:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 6, 0] }}
      transition={{ delay: 1.6, duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 10l7 7 7-7" stroke="#fffbf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  )
}

/* ──────────────────────────────────────
   Main Landing Component
   ────────────────────────────────────── */
export function LifeAfterUI() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#B8B8B8]">
      {/* ── Grain texture overlay ── */}
      <img
        src={bgImg}
        alt=""
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover opacity-75"
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* ── Bottom gradient overlays (depth) ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[60%] w-full rotate-180 bg-gradient-to-b from-[#111] to-transparent opacity-30" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-[3] h-[25%] w-full rotate-180 bg-gradient-to-b from-[#111] to-transparent opacity-30" />

      {/* ── Content container ── */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4">
        {/* ── Host label ── */}
        <motion.p
          className="mt-28 text-[12px] font-semibold tracking-[0.3px] text-[#fcfcfc]/60 sm:mt-12 sm:text-[14px] md:mt-14 md:text-[16px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Powered by NueveFolio
        </motion.p>

        {/* ── Main title ── */}
        <motion.h1
          className="mt-3 text-center text-[42px] font-bold leading-none text-[#2e2e2e] sm:text-[56px] md:text-[72px] lg:text-[80px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Life After UI
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          className="mt-2 text-center text-[18px] font-bold leading-[1.3] text-white sm:text-[26px] md:text-[34px] lg:text-[40px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Role of Product Design in times of AI
        </motion.p>

        {/* ── Scroll chevron ── */}
        <ScrollChevron />

        {/* ── Person photo + hosted by overlay ── */}
        <motion.div
          className="relative z-20 -mt-5 h-[280px] w-[340px] sm:-mt-6 sm:h-[340px] sm:w-[420px] md:h-[382px] md:w-[473px]"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          {/* Hosted by — overlaid at 50% height, left-aligned */}
          <motion.p
            className="absolute left-0 top-2/3 -translate-y-1/2 text-[11px] font-semibold tracking-[0.3px] text-[#fcfcfc]/60 sm:text-[13px] md:text-[15px]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            Hosted by<br />Stan Swiatkiewicz
          </motion.p>
          <img
            src={stanImg}
            alt="Host portrait"
            width={473}
            height={382}
            className="h-full w-full object-contain object-bottom"
            style={{ imageRendering: "auto" }}
            draggable={false}
          />
        </motion.div>

        {/* ── Waitlist card ── */}
        <motion.div
          className="relative z-30 mx-2 mt-[-2px] w-full max-w-[646px] overflow-hidden rounded-[20px] border-2 border-card-border sm:mx-0 sm:mt-0 sm:rounded-[30px]"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          {/* Dark area */}
          <div className="bg-card-dark px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
            <h2 className="text-center text-[22px] font-bold leading-[1.3] text-white sm:text-[28px] md:text-[34px]">
              Listen now
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-center text-[13px] font-semibold text-[#87878c] sm:text-[15px]">
              New episodes on your favorite platform.
            </p>
          </div>

          {/* Platform logos bar */}
          <div className="grid grid-cols-3 place-items-center gap-y-3 bg-platform-bar px-6 py-4 text-[clamp(17px,2.5vw,18px)] sm:py-5">
            <a href="https://www.youtube.com/@LifeAfterUI" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              <YouTubeLogo />
            </a>
            <a href="https://open.spotify.com/show/7axNIkwD8AYViDUoPqqDgg?si=28668edb95e34506" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              <SpotifyLogo />
            </a>
            <a href="https://podcasts.apple.com/pl/podcast/life-after-ui/id188822320" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
              <ApplePodcastsLogo />
            </a>
          </div>
        </motion.div>

        {/* ── Nueve Folio section ── */}
        <motion.div
          className="mt-10 w-full max-w-[646px] px-2 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div
            className="flex items-center justify-between overflow-hidden rounded-[16px] border border-[#4d4d4d]/20 bg-transparent px-5 py-4 min-[480px]:rounded-[20px] min-[480px]:px-8 min-[480px]:py-5"
            variants={scaleIn}
            custom={0}
          >
            {/* Left: branding */}
            <div className="text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4d4d4d]">
                A show by
              </p>
              <h3 className="mt-0.5 text-[18px] font-bold text-[#4d4d4d] min-[480px]:text-[22px]">
                NueveFolio
              </h3>
              <p className="max-w-[160px] text-[11px] font-semibold leading-snug text-[#4d4d4d] min-[480px]:max-w-none min-[480px]:text-[13px]">
                Product Design Education &amp; Community
              </p>
            </div>

            {/* Right: links */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.nueve.design/sub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4d4d4d]/30 text-[#4d4d4d] transition-colors duration-200 hover:border-[#4d4d4d]/60 hover:text-[#2e2e2e] min-[480px]:h-auto min-[480px]:w-auto min-[480px]:gap-1.5 min-[480px]:px-4 min-[480px]:py-2"
                aria-label="Website"
              >
                <Globe className="h-3.5 w-3.5" />
                <span className="hidden text-[13px] font-bold min-[480px]:inline">Website</span>
              </a>
              <a
                href="https://instagram.com/nueve.folio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#4d4d4d]/30 text-[#4d4d4d] transition-colors duration-200 hover:border-[#4d4d4d]/60 hover:text-[#2e2e2e] min-[480px]:h-auto min-[480px]:w-auto min-[480px]:gap-1.5 min-[480px]:px-4 min-[480px]:py-2"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span className="hidden text-[13px] font-bold min-[480px]:inline">Instagram</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <PodcastFooter />
      </div>
    </div>
  )
}

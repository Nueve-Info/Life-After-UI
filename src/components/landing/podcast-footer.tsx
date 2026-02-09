import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  }),
}

/* Medium icon — Lucide doesn't include it */
function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.52-6.42 3.38-6.42 3.38 2.88 3.38 6.42ZM24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12Z" />
    </svg>
  )
}

export function PodcastFooter() {
  return (
    <motion.footer
      className="w-full pb-8 pt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="mx-auto max-w-[646px] px-6">
        {/* Divider */}
        <motion.div
          className="h-px w-full bg-[#4d4d4d]/20"
          variants={fadeUp}
          custom={0}
        />

        {/* Two-column layout: left = description + copyright, right = links */}
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left column */}
          <motion.div
            className="flex flex-col gap-3"
            variants={fadeUp}
            custom={0.1}
          >
            <h3 className="text-[14px] font-bold text-[#4d4d4d] sm:text-[15px]">
              Life after UI - Podcast
            </h3>
            <p className="max-w-[340px] text-[13px] font-semibold leading-relaxed text-[#4d4d4d] sm:text-[14px]">
              We host a podcast where leading product designers share how they
              think, work, and build.
            </p>
            <span className="text-[12px] font-semibold text-[#4d4d4d]">
              &copy; {new Date().getFullYear()} DOKO Stanislaw Swiatkiewicz
            </span>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col gap-3 text-[13px] font-semibold text-[#4d4d4d]"
            variants={fadeUp}
            custom={0.15}
          >
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/stan-swiatkiewicz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[#2e2e2e]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://medium.com/@swiatkiewicz"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-[#2e2e2e]"
                aria-label="Medium"
              >
                <MediumIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-[#2e2e2e]"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

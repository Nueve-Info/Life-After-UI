import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "./hero-background"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-sm font-medium text-brand-orange">
              Design System v1.0
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            Build Stunning
            <br />
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent">
              Landing Pages
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-text-grey sm:text-xl"
          >
            High-contrast minimalism with vibrant functional accents.
            Focus on expert-level Product Design aesthetics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="nueve" size="lg" rounded="pill">
              Explore Components
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" rounded="pill">
              View Style Guide
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: "12+", label: "Components" },
              { value: "6", label: "Color Tokens" },
              { value: "100%", label: "Customizable" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-grey">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-grey">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-white/20 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-brand-orange"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

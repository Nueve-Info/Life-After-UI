import { motion } from "framer-motion"
import { Zap, Palette, Layout, Type, Layers, Sparkles } from "lucide-react"
import { Section } from "@/components/ui/section"
import { BentoGrid, BentoCard, BentoCardHeader } from "@/components/ui/bento-grid"

const features = [
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Nueve Color System",
    description: "High-contrast palette with #0C0C0C black and #F8810D orange accent",
    colSpan: 1 as const,
  },
  {
    icon: <Type className="h-5 w-5" />,
    title: "Plus Jakarta Sans",
    description: "Modern, geometric typeface with tracking-tight headings",
    colSpan: 2 as const,
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Bento Grid Layout",
    description: "Flexible grid system for feature showcases",
    colSpan: 2 as const,
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Framer Motion",
    description: "Smooth animations and scroll-triggered effects",
    colSpan: 1 as const,
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "ShadCN Components",
    description: "Pre-built, accessible UI components",
    colSpan: 1 as const,
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Unicorn Studio Ready",
    description: "WebGL background support out of the box",
    colSpan: 2 as const,
  },
]

export function Features() {
  return (
    <Section id="features" className="bg-nueve-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Design System Features
        </h2>
        <p className="mt-4 text-lg text-text-grey">
          Everything you need to build stunning landing pages
        </p>
      </motion.div>

      <BentoGrid>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={feature.colSpan === 2 ? "md:col-span-2" : ""}
          >
            <BentoCard className="h-full">
              <BentoCardHeader
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </BentoCard>
          </motion.div>
        ))}
      </BentoGrid>
    </Section>
  )
}

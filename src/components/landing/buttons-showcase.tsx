import { motion } from "framer-motion"
import { ArrowRight, Download, ExternalLink } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

export function ButtonsShowcase() {
  return (
    <Section id="buttons" className="border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Buttons
        </h2>
        <p className="mt-4 text-lg text-text-grey">
          Pill-shaped buttons with various styles and sizes
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Nueve CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-white/10 bg-white/5 p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-widest text-text-grey">
            Nueve CTA (Gradient)
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="nueve" size="xl" rounded="pill">
              Extra Large
            </Button>
            <Button variant="nueve" size="lg" rounded="pill">
              Large Button
            </Button>
            <Button variant="nueve" size="default" rounded="pill">
              Default Button
            </Button>
            <Button variant="nueve" size="sm" rounded="pill">
              Small
            </Button>
          </div>
        </motion.div>

        {/* Primary Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-white/10 bg-white/5 p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-widest text-text-grey">
            Primary (Solid Orange)
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default" size="lg" rounded="pill">
              Primary Large
            </Button>
            <Button variant="default" size="default" rounded="pill">
              Primary Default
            </Button>
            <Button variant="default" size="sm" rounded="pill">
              Primary Small
            </Button>
          </div>
        </motion.div>

        {/* Outline Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg border border-white/10 bg-white/5 p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-widest text-text-grey">
            Outline
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="lg" rounded="pill">
              Outline Large
            </Button>
            <Button variant="outline" size="default" rounded="pill">
              Outline Default
            </Button>
            <Button variant="outline" size="sm" rounded="pill">
              Outline Small
            </Button>
          </div>
        </motion.div>

        {/* Secondary Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-lg border border-white/10 bg-white/5 p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-widest text-text-grey">
            Secondary
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="lg" rounded="pill">
              Secondary Large
            </Button>
            <Button variant="secondary" size="default" rounded="pill">
              Secondary Default
            </Button>
            <Button variant="secondary" size="sm" rounded="pill">
              Secondary Small
            </Button>
          </div>
        </motion.div>

        {/* With Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg border border-white/10 bg-white/5 p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-widest text-text-grey">
            With Icons
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="nueve" size="lg" rounded="pill">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" rounded="pill">
              <Download className="mr-2 h-5 w-5" />
              Download
            </Button>
            <Button variant="ghost" size="lg" rounded="pill">
              Learn More
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Link Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-lg border border-white/10 bg-white/5 p-8"
        >
          <div className="mb-6 text-xs uppercase tracking-widest text-text-grey">
            Link Button
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="link">
              Link Button
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

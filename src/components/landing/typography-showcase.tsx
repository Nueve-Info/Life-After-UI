import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"

export function TypographyShowcase() {
  return (
    <Section id="typography" className="border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Typography
        </h2>
        <p className="mt-4 text-lg text-text-grey">
          Plus Jakarta Sans with tight tracking for headings
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-text-grey">
              Headings
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white lg:text-7xl">
              Heading H1 — 72px
            </h1>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="text-4xl font-black tracking-tighter text-white lg:text-5xl">
              Heading H2 — 48px
            </h2>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-black tracking-tighter text-white lg:text-3xl">
              Heading H3 — 32px
            </h3>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h4 className="text-xl font-black tracking-tighter text-white lg:text-2xl">
              Heading H4 — 24px
            </h4>
          </div>
        </motion.div>

        {/* Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 text-xs uppercase tracking-widest text-text-grey">
            Paragraph — 18px
          </div>
          <p className="text-lg leading-relaxed text-text-grey">
            Pharetra, massa lobortis nibh sit maecenas urna consequat. At morbi
            non duis et sed vitae. Placerat magna vitae bibendum auctor enim,
            blandit arcu volutpat nulla. Feugiat lorem est viverra enim amet
            nunc. Proin imperdiet ultricies.
          </p>
        </motion.div>

        {/* Text Styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-text-grey">
              Link
            </div>
            <a
              href="#"
              className="text-lg font-medium text-brand-orange hover:underline"
            >
              Paragraph Link
            </a>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-text-grey">
              Bold
            </div>
            <p className="text-lg font-bold text-white">Bold Text</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-xs uppercase tracking-widest text-text-grey">
              Italic
            </div>
            <p className="text-lg italic text-white">Italic Text</p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-lg border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 text-xs uppercase tracking-widest text-text-grey">
            Blockquote
          </div>
          <blockquote className="border-l-4 border-brand-orange pl-6 text-xl italic text-white">
            "Elit posuere interdum vitae posuere eu dolor platea eu. Aliquet
            risus et cras curabitur odio elit ut mauris."
          </blockquote>
        </motion.div>
      </div>
    </Section>
  )
}

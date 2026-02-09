import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"

const colors = {
  neutrals: [
    { name: "Black", value: "#0C0C0C", textColor: "text-white" },
    { name: "White", value: "#FFFFFF", textColor: "text-nueve-black" },
    { name: "Surface Grey", value: "#EBEBEB", textColor: "text-nueve-black" },
    { name: "Text Grey", value: "#4D4D4D", textColor: "text-white" },
  ],
  brand: [
    { name: "Brand Orange", value: "#F8810D", textColor: "text-white" },
    { name: "Orange Light", value: "#FFB347", textColor: "text-nueve-black" },
  ],
  accents: [
    { name: "Electric Blue", value: "#30A2FF", textColor: "text-white" },
    { name: "Mint Cyan", value: "#47FFD1", textColor: "text-nueve-black" },
    { name: "Vibrant Yellow", value: "#FAD02C", textColor: "text-nueve-black" },
  ],
}

interface ColorSwatchProps {
  name: string
  value: string
  textColor: string
  index: number
}

function ColorSwatch({ name, value, textColor, index }: ColorSwatchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div
        className="aspect-square rounded-lg border border-white/10 transition-transform hover:scale-105"
        style={{ backgroundColor: value }}
      >
        <div className={`flex h-full flex-col justify-end p-4 ${textColor}`}>
          <div className="font-medium">{name}</div>
          <div className="text-sm opacity-80">{value}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function ColorsShowcase() {
  return (
    <Section id="colors" className="border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Colors
        </h2>
        <p className="mt-4 text-lg text-text-grey">
          High-contrast palette with vibrant functional accents
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Neutrals */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-white">Neutrals</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {colors.neutrals.map((color, index) => (
              <ColorSwatch key={color.name} {...color} index={index} />
            ))}
          </div>
        </div>

        {/* Brand */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-white">Brand Primary</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {colors.brand.map((color, index) => (
              <ColorSwatch key={color.name} {...color} index={index} />
            ))}
          </div>
        </div>

        {/* Accents */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-white">UI Accents</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {colors.accents.map((color, index) => (
              <ColorSwatch key={color.name} {...color} index={index} />
            ))}
          </div>
        </div>

        {/* Gradient */}
        <div>
          <h3 className="mb-6 text-lg font-bold text-white">Brand Gradient</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-32 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-light"
          >
            <div className="flex h-full items-center justify-between p-6 text-white">
              <div>
                <div className="font-medium">Brand Gradient</div>
                <div className="text-sm opacity-80">135deg</div>
              </div>
              <div className="text-right text-sm">
                <div>#F8810D → #FFB347</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

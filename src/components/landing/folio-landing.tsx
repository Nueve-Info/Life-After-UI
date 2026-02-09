import { motion, type Variants } from "framer-motion"
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Users,
  Sparkles,
  Code,
  MessageCircle,
  BookOpen,
  Target,
  Layers,
  Rocket,
  GraduationCap,
  Play,
} from "lucide-react"
import { Section } from "@/components/ui/section"
import { BentoGrid, BentoCard, BentoCardHeader } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "./hero-background"

// ============================================================================
// Animation Variants
// ============================================================================

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1] // ease-out-quart — snappy entrance, smooth settle

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
}

// ============================================================================
// Shared Components
// ============================================================================

function AssetPlaceholder({ label = "Asset Placeholder" }: { label?: string }) {
  return (
    <div className="w-full h-full bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400 text-xs tracking-widest uppercase">
      {label}
    </div>
  )
}

function SocialProof() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-8 w-8 rounded-full border-2 border-nueve-black bg-gradient-to-br from-brand-orange/40 to-brand-orange-light/40"
          />
        ))}
      </div>
      <span className="text-sm text-text-grey">
        <span className="font-semibold text-white">2,900+</span> alumni
      </span>
    </div>
  )
}

function CTAButton({ children = "Join Nueve Folio 2.0" }: { children?: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button variant="nueve" size="lg" rounded="pill" className="gap-2">
        {children}
        <ArrowRight className="h-5 w-5" />
      </Button>
    </motion.div>
  )
}

// ============================================================================
// Section 1: Hero
// ============================================================================

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <HeroBackground />
      {/* Unicorn Studio embed placeholder */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-sm font-medium text-brand-orange">
              Nueve Folio 2.0 — Now Open
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            Build UX/UI portfolio
            <br className="hidden sm:block" />
            {" that gets you "}
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent">
              hired in 2026
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-text-grey sm:text-xl max-w-2xl mx-auto"
          >
            Online masterclass with a mentor who guides you step-by-step
            how to shape a job-winning case study valid in the AI era.
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <SocialProof />
          </motion.div>

          {/* Hero Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-12 aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden border border-white/10"
          >
            <AssetPlaceholder label="Video Preview" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
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

// ============================================================================
// Section 2: Logo Ticker
// ============================================================================

const logoItems = [
  { name: "Google", hasCaseStudy: true },
  { name: "Spotify", hasCaseStudy: false },
  { name: "Airbnb", hasCaseStudy: false },
  { name: "Stripe", hasCaseStudy: true },
  { name: "Figma", hasCaseStudy: false },
  { name: "Notion", hasCaseStudy: false },
  { name: "Linear", hasCaseStudy: true },
  { name: "Vercel", hasCaseStudy: false },
  { name: "Slack", hasCaseStudy: false },
  { name: "Dropbox", hasCaseStudy: true },
  { name: "Adobe", hasCaseStudy: false },
  { name: "Netflix", hasCaseStudy: true },
]

function LogoTickerRow({ reverse = false, speed = 40 }: { reverse?: boolean; speed?: number }) {
  const items = reverse ? [...logoItems].reverse() : logoItems
  return (
    <div className="overflow-hidden py-3">
      <div
        className="flex gap-10 w-max"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {[...items, ...items].map((logo, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-bold text-text-grey/60 tracking-tight">
              {logo.name}
            </span>
            {logo.hasCaseStudy && (
              <span className="rounded-full bg-white/10 px-3 py-0.5 text-[10px] font-medium text-text-grey tracking-wider uppercase">
                Case Study
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function LogoTicker() {
  return (
    <Section className="py-12 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <LogoTickerRow speed={50} />
        <LogoTickerRow reverse speed={45} />
        <LogoTickerRow speed={55} />
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 3: Problem Statement
// ============================================================================

function ProblemSection() {
  const lines = [
    "Recruiters spend 6 seconds scanning your portfolio.",
    "Basic Case Study with wireframes and personas won't cut it.",
    "You have to stand out.",
    "We'll show you how.",
    "Fast and easy with AI.",
  ]

  return (
    <Section className="py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {lines.map((line, i) => (
            <motion.p
              key={i}
              variants={staggerItem}
              className={`text-2xl sm:text-3xl lg:text-[40px] leading-tight tracking-tight ${
                i >= 3
                  ? "font-black text-white"
                  : "font-normal text-text-grey"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12"
        >
          <CTAButton />
        </motion.div>
      </div>
    </Section>
  )
}

// ============================================================================
// Section 4: Agenda (Bento Grid)
// ============================================================================

const agendaModules = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Portfolio Strategy",
    description: "Define your positioning, target companies, and the story your portfolio needs to tell.",
    colSpan: 1 as const,
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Case Study Architecture",
    description: "Structure your case studies with a proven framework that recruiters actually read.",
    colSpan: 2 as const,
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Visual Storytelling",
    description: "Turn boring process documentation into a compelling visual narrative.",
    colSpan: 2 as const,
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "AI-Powered Workflow",
    description: "Use AI tools to accelerate your design-to-portfolio pipeline.",
    colSpan: 1 as const,
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Build & Publish",
    description: "Ship a production-quality portfolio site using code frameworks — no dev skills needed.",
    colSpan: 1 as const,
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Interview Prep",
    description: "Practice presenting your work and handling portfolio review sessions.",
    colSpan: 2 as const,
  },
]

function AgendaSection() {
  return (
    <Section id="agenda" className="py-32 bg-nueve-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-12 text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-sm font-medium text-brand-orange">
          Course Agenda
        </span>
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Six modules. One portfolio.
        </h2>
        <p className="mt-4 text-lg text-text-grey">
          Everything you need, nothing you don't.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <BentoGrid>
          {agendaModules.map((mod) => (
            <motion.div
              key={mod.title}
              variants={staggerItem}
              className={mod.colSpan === 2 ? "md:col-span-2" : ""}
            >
              <BentoCard className="h-full group">
                <BentoCardHeader
                  icon={mod.icon}
                  title={mod.title}
                  description={mod.description}
                />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 group-hover:w-full" />
              </BentoCard>
            </motion.div>
          ))}
        </BentoGrid>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 5: Mid CTA — "Ship your portfolio by tomorrow."
// ============================================================================

function MidCTASection() {
  return (
    <Section className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Ship your portfolio by tomorrow.
        </h2>
        <motion.div variants={fadeUp} className="mt-8">
          <CTAButton />
        </motion.div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 6: Features Bento
// ============================================================================

function FeaturesBento() {
  return (
    <Section id="features" className="py-32 bg-nueve-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <BentoGrid className="gap-6">
          {/* Card 1: Insights — col-span-2 */}
          <motion.div variants={staggerItem} className="md:col-span-2">
            <BentoCard className="h-full min-h-[400px] flex flex-col group">
              <BentoCardHeader
                icon={<Users className="h-5 w-5" />}
                title="Apply unique insights from 9,000+ portfolios"
                description="We've reviewed thousands of portfolios. You get the patterns that actually work."
              />
              <div className="mt-auto flex-1 min-h-[200px] rounded-lg overflow-hidden">
                <AssetPlaceholder label="Portfolio Insights Visualization" />
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 group-hover:w-full" />
            </BentoCard>
          </motion.div>

          {/* Card 2: Testimonial — col-span-1 */}
          <motion.div variants={staggerItem}>
            <BentoCard className="h-full min-h-[400px] flex flex-col justify-between group">
              <div>
                <div className="mb-4 h-24 w-20 rounded-lg overflow-hidden">
                  <AssetPlaceholder label="Photo" />
                </div>
                <p className="text-lg text-text-grey">Slawek Kozik</p>
                <h3 className="mt-2 text-2xl font-black tracking-tighter text-white leading-tight">
                  In 2025 got job in
                  <br />
                  <span className="bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent">
                    Santander Bank
                  </span>
                </h3>
              </div>
              <p className="mt-6 text-sm text-text-grey italic leading-relaxed">
                "The framework changed everything. I went from zero callbacks to landing my dream role in 3 weeks."
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 group-hover:w-full" />
            </BentoCard>
          </motion.div>

          {/* Card 3: Captivating Story — col-span-1 */}
          <motion.div variants={staggerItem}>
            <BentoCard className="h-full min-h-[380px] flex flex-col group">
              <BentoCardHeader
                icon={<Shield className="h-5 w-5" />}
                title="Turn boring process into captivating story"
              />
              <div className="mt-4 space-y-3 text-sm text-text-grey">
                <p>You don't need big logos.</p>
                <p>You can even have projects blocked by NDA.</p>
                <p>Even boring and invisible projects can be shown well.</p>
              </div>
              <div className="mt-auto pt-6 inline-flex items-center gap-2 rounded-full bg-mint-cyan/10 px-4 py-2 text-sm font-medium text-mint-cyan w-fit">
                <Shield className="h-4 w-4" />
                NDA-safe portfolio system
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-mint-cyan to-electric-blue transition-all duration-500 group-hover:w-full" />
            </BentoCard>
          </motion.div>

          {/* Card 4: Build with AI — col-span-2 */}
          <motion.div variants={staggerItem} className="md:col-span-2">
            <BentoCard className="h-full min-h-[380px] flex flex-col group">
              <BentoCardHeader
                icon={<Sparkles className="h-5 w-5" />}
                title="Build effortlessly with AI"
                description="Build with power of code without knowing how to code. Each designer with at least one project."
              />
              <div className="mt-auto flex-1 min-h-[160px] rounded-lg overflow-hidden">
                <AssetPlaceholder label="AI Workflow Demo" />
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 group-hover:w-full" />
            </BentoCard>
          </motion.div>

          {/* Card 5: Publish 24h — col-span-2 */}
          <motion.div variants={staggerItem} className="md:col-span-2">
            <BentoCard className="h-full min-h-[320px] flex flex-col group">
              <BentoCardHeader
                icon={<Rocket className="h-5 w-5" />}
                title="Publish your folio within 24 hours."
                description="Use a framework created and iterated for over 14 years of UX career."
              />
              <div className="mt-auto grid grid-cols-3 gap-4 pt-6">
                {["Strategy", "Design", "Ship"].map((step, i) => (
                  <div
                    key={step}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <span className="text-2xl font-black text-brand-orange">{i + 1}</span>
                    <p className="mt-1 text-xs text-text-grey">{step}</p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 group-hover:w-full" />
            </BentoCard>
          </motion.div>

          {/* Card 6: Mentor — col-span-1 */}
          <motion.div variants={staggerItem}>
            <BentoCard className="h-full min-h-[320px] flex flex-col group">
              <BentoCardHeader
                icon={<MessageCircle className="h-5 w-5" />}
                title="Mentor available 24/7 to chat"
              />
              {/* Mock chat bubbles */}
              <div className="mt-4 space-y-3 flex-1">
                <div className="rounded-xl rounded-tl-none bg-white/10 px-4 py-3 text-sm text-white max-w-[80%]">
                  How do I handle NDA projects?
                </div>
                <div className="rounded-xl rounded-tr-none bg-brand-orange/20 px-4 py-3 text-sm text-brand-orange-light max-w-[80%] ml-auto">
                  Great question! Here's a framework for showing impact without breaking NDA...
                </div>
                <div className="rounded-xl rounded-tl-none bg-white/10 px-4 py-2 text-sm text-text-grey max-w-[60%]">
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    typing...
                  </motion.span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-brand-orange to-brand-orange-light transition-all duration-500 group-hover:w-full" />
            </BentoCard>
          </motion.div>
        </BentoGrid>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 7: Is This Course For Me?
// ============================================================================

const forYou = [
  "You finished bootcamps/courses and/or have commercial experience and want to find a new job in the product design industry",
  "You're creating your portfolio",
  "You finished your portfolio, search for a job and keep on failing",
]

const notForYou = [
  "You're starting to learn basics of UX/UI design",
  "You don't have any projects (even bootcamp ones)",
  "You don't want to incorporate AI in your process",
  "You think there's nothing wrong with your portfolio or job searching technique",
]

function CourseForMeSection() {
  return (
    <Section className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Is this course for me?
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* FOR you */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="rounded-lg border border-mint-cyan/20 bg-mint-cyan/5 p-8"
        >
          <h3 className="mb-6 text-xl font-black text-mint-cyan">
            This course is for you if:
          </h3>
          <ul className="space-y-4">
            {forYou.map((item, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex gap-3 text-text-grey"
              >
                <Check className="mt-1 h-5 w-5 shrink-0 text-mint-cyan" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* NOT for you */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="rounded-lg border border-red-500/20 bg-red-500/5 p-8"
        >
          <h3 className="mb-6 text-xl font-black text-red-400">
            This course is NOT for you if:
          </h3>
          <ul className="space-y-4">
            {notForYou.map((item, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex gap-3 text-text-grey"
              >
                <X className="mt-1 h-5 w-5 shrink-0 text-red-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}

// ============================================================================
// Section 8: Bottom Endorsement & Social Proof
// ============================================================================

function EndorsementSection() {
  return (
    <Section className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center"
      >
        <p className="text-lg text-text-grey">
          Kamil Grzaba | Senior Designer at Stampli
        </p>
        <div className="mt-6 flex justify-center">
          <SocialProof />
        </div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 9: Pricing
// ============================================================================

const pricingFeatures = [
  "6 structured modules with video lessons",
  "1:1 mentor access via chat 24/7",
  "Portfolio templates & frameworks",
  "Community of 2,900+ designers",
]

function PricingSection() {
  return (
    <Section id="pricing" className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleIn}
        className="mx-auto max-w-md"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-br from-nueve-black to-[#1a1a1a] p-8 text-center">
            <span className="rounded-full bg-brand-orange/10 px-4 py-1 text-sm font-medium text-brand-orange">
              Early Bird
            </span>
            <div className="mt-6 flex items-end justify-center gap-1">
              <span className="text-6xl font-black tracking-tighter text-white">$17</span>
            </div>
            <p className="mt-2 text-sm text-text-grey">
              One-time payment. Lifetime access.
            </p>
          </div>

          {/* Features */}
          <div className="bg-white/5 p-8">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {pricingFeatures.map((feature, i) => (
                <motion.li
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-3 text-sm text-text-grey"
                >
                  <Check className="h-4 w-4 shrink-0 text-brand-orange" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8">
              <CTAButton />
            </div>

            <div className="mt-6 space-y-1 text-center text-xs text-text-grey/60">
              <p>Program starts: 28.02</p>
              <p>Early bird price available till: 06.02</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 10: Guarantee
// ============================================================================

function GuaranteeSection() {
  return (
    <Section className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
        className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12"
      >
        {/* Badge */}
        <motion.div
          whileHover={{ rotate: -5, scale: 1.05 }}
          className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-brand-orange/40"
        >
          <div className="absolute inset-2 flex items-center justify-center rounded-full bg-brand-orange/10">
            <span className="-rotate-12 text-lg font-black tracking-widest text-brand-orange uppercase">
              Guarantee
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Risk-free 30 days
            <br />
            return policy
          </h2>
          <p className="mt-4 max-w-md text-text-grey">
            Not satisfied? Get a full refund within 30 days. No questions asked.
          </p>
        </div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 11: Testimonials
// ============================================================================

const testimonials = [
  {
    name: "Ana Rodriguez",
    role: "Product Designer at Meta",
    quote: "This course transformed how I present my work. Landed 3 interviews in my first week with the new portfolio.",
  },
  {
    name: "Marcus Chen",
    role: "Senior UX Designer at Shopify",
    quote: "The NDA-safe framework was a game changer. I finally showcased enterprise projects without legal risk.",
  },
  {
    name: "Priya Sharma",
    role: "Design Lead at Revolut",
    quote: "From zero callbacks to multiple offers. The case study architecture alone is worth 10x the price.",
  },
  {
    name: "Alex Kovalenko",
    role: "UX Designer at Bolt",
    quote: "I was skeptical about AI in portfolio building. Now I can't imagine doing it any other way.",
  },
  {
    name: "Sophie Müller",
    role: "Product Designer at N26",
    quote: "The mentor feedback was incredibly detailed. It felt like having a senior designer review every pixel.",
  },
]

function TestimonialsSection() {
  return (
    <Section id="testimonials" className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          What alumni say
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl space-y-6"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            whileHover={{ scale: 1.01, borderColor: "rgba(248, 129, 13, 0.3)" }}
            className="rounded-xl border border-white/10 bg-white/5 p-8 transition-colors"
          >
            <p className="text-lg text-white leading-relaxed">
              "{t.quote}"
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-orange-light/30" />
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-text-grey">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 12: Final CTA
// ============================================================================

function FinalCTASection() {
  return (
    <Section className="py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Ready to get hired?
        </h2>
        <p className="mt-4 text-text-grey">
          Join 2,900+ designers who transformed their portfolio and career.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block"
        >
          <Button
            variant="default"
            size="xl"
            rounded="pill"
            className="bg-nueve-white text-nueve-black font-bold hover:bg-surface-grey gap-2"
          >
            Join Nueve Folio 2.0
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 13: Video Section (Bottom)
// ============================================================================

function VideoSection() {
  return (
    <Section className="py-32 bg-white/[0.02]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mx-auto max-w-4xl"
      >
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer">
          <AssetPlaceholder label="Video Placeholder" />
          <div className="absolute inset-0 flex items-center justify-center bg-nueve-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange"
            >
              <Play className="h-6 w-6 text-white ml-1" />
            </motion.div>
          </div>
        </div>

        <div className="mt-8 mx-auto max-w-xl text-center">
          <h3 className="text-2xl font-black tracking-tighter text-white">
            Still not convinced?
          </h3>
          <ul className="mt-4 space-y-2 text-text-grey text-sm">
            <li>Got it — I have something special for deep divers.</li>
            <li>
              After you join, email me at{" "}
              <span className="text-brand-orange">folio@nueve.design</span>{" "}
              and we'll start with a 1:1 exclusive consultation.
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}

// ============================================================================
// Section 14: Footer
// ============================================================================

function FolioFooter() {
  return (
    <footer className="border-t border-white/5 bg-nueve-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter text-white">
              IX Nueve
            </span>
          </div>
          <p className="text-sm text-text-grey">
            &copy; {new Date().getFullYear()} Nueve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// Page Composition
// ============================================================================

export function FolioLanding() {
  return (
    <>
      <HeroSection />
      <LogoTicker />
      <ProblemSection />
      <AgendaSection />
      <MidCTASection />
      <FeaturesBento />
      <CourseForMeSection />
      <EndorsementSection />
      <LogoTicker />
      <PricingSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FinalCTASection />
      <VideoSection />
      <FolioFooter />
    </>
  )
}

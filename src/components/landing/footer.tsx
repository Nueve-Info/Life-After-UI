import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Typography", href: "#typography" },
    { label: "Colors", href: "#colors" },
    { label: "Buttons", href: "#buttons" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Components", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Examples", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
}

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-nueve-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-5"
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                Nueve
              </span>
              <span className="text-brand-orange">.</span>
            </a>
            <p className="mt-4 max-w-xs text-text-grey">
              High-contrast minimalism with vibrant functional accents. Focus on
              expert-level Product Design aesthetics.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-grey transition-colors hover:border-brand-orange hover:text-brand-orange"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-4 font-bold text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-grey transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-grey transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-grey transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row"
        >
          <p className="text-sm text-text-grey">
            &copy; {new Date().getFullYear()} Nueve Design System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-text-grey transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-text-grey transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

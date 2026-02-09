import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#agenda", label: "Agenda" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Alumni" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-nueve-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tighter text-white">
            IX Nueve
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-grey transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="nueve" size="sm" rounded="pill">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/5 bg-nueve-black/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-text-grey transition-colors hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="nueve" size="default" rounded="pill" className="mt-2">
                Join Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

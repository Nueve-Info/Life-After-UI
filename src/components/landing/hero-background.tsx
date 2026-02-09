import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface HeroBackgroundProps {
  embedScript?: string
  className?: string
}

export function HeroBackground({ embedScript, className }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (embedScript && containerRef.current) {
      // Create and inject the Unicorn Studio script
      const script = document.createElement("script")
      script.innerHTML = embedScript
      containerRef.current.appendChild(script)

      return () => {
        if (containerRef.current) {
          const scripts = containerRef.current.getElementsByTagName("script")
          while (scripts.length > 0) {
            scripts[0].remove()
          }
        }
      }
    }
  }, [embedScript])

  return (
    <div
      ref={containerRef}
      id="unicorn-embed"
      className={cn(
        "absolute inset-0 -z-10",
        !embedScript && "bg-nueve-black",
        className
      )}
    >
      {/* Unicorn Studio embed will be injected here */}
      {!embedScript && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle gradient overlay for visual interest */}
          <div className="absolute inset-0 bg-gradient-to-br from-nueve-black via-nueve-black to-brand-orange/5" />

          {/* Optional: Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      )}
    </div>
  )
}

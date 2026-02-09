import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  containerClassName?: string
}

export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-24", className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

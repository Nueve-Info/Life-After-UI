import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import bgImg from "@/assets/bg.png"

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  }),
}

export function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen w-full bg-[#B8B8B8]">
      {/* Grain texture overlay */}
      <img
        src={bgImg}
        alt=""
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover opacity-75"
        style={{ mixBlendMode: "soft-light" }}
      />

      <div className="relative z-10 mx-auto max-w-[720px] px-6 pb-20 pt-12 sm:px-8 sm:pt-16">
        {/* Back link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#4d4d4d] transition-colors duration-200 hover:text-[#2e2e2e]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="mt-10 text-[32px] font-bold leading-tight text-[#2e2e2e] sm:text-[40px] md:text-[48px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Privacy Policy
        </motion.h1>

        {/* Content */}
        <motion.div
          className="mt-8 space-y-8 text-[14px] leading-relaxed text-[#4d4d4d] sm:text-[15px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <p className="font-semibold text-[#87878c]">
            This Privacy Policy explains how DOKO Stanislaw Swiatkiewicz
            ("we", "us", "our") collects, uses, and shares information
            when you visit or use this website (the "Site").
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              1) Who we are
            </h2>
            <p className="mt-2">
              Controller/Business: DOKO Stanislaw Swiatkiewicz
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              2) What data we collect
            </h2>
            <p className="mt-2">
              We may collect information you provide directly (for example, when
              contacting us) and information collected automatically when you use
              the Site.
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                <strong>Contact data:</strong> name, email, and message content
                (if you email us).
              </li>
              <li>
                <strong>Usage data:</strong> pages viewed, clicks, approximate
                location, device/browser info, and referrer URLs.
              </li>
              <li>
                <strong>Cookie / similar technologies:</strong> identifiers used
                for analytics/advertising where enabled.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              3) Analytics &amp; tag management (GA4 + GTM)
            </h2>
            <p className="mt-2">
              We use (or may use) Google Analytics 4 (GA4) to understand how
              visitors interact with the Site (e.g., page views and engagement).
              GA4 may set cookies or use similar technologies to collect usage
              data.
            </p>
            <p className="mt-2">
              We also use (or may use) Google Tag Manager (GTM) to deploy and
              manage tags (including GA4 and other tools). GTM itself does not
              typically collect personal data, but tags deployed through GTM may.
            </p>
            <p className="mt-2">
              <strong>Opt-out:</strong> You can use the Google Analytics opt-out
              browser add-on (where available) or adjust your cookie preferences.
            </p>
            <p className="mt-2">
              <strong>More info:</strong> Google's documentation and policies
              explain how Google processes data.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              4) Advertising / Meta Pixel ("MetaTag")
            </h2>
            <p className="mt-2">
              We use (or may use) Meta technologies such as the Meta Pixel
              (sometimes referred to as a "Meta tag") to measure ad performance,
              build audiences, and understand conversions.
            </p>
            <p className="mt-2">
              Meta may collect information about your interaction with the Site
              and may use cookies or similar technologies. This data may be used
              for interest-based advertising.
            </p>
            <p className="mt-2">
              <strong>Opt-out:</strong> You can manage ad preferences in your
              Meta account and/or via your device/browser settings.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              5) Embedded media (Vimeo)
            </h2>
            <p className="mt-2">
              The Site includes embedded videos (for example, via Vimeo). When
              you view an embedded video, Vimeo may collect usage data and set
              cookies according to their policies.
            </p>
            <p className="mt-2">
              We do not control how third-party embedded providers collect or use
              data. Please review their privacy policies for details.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              6) How we use data
            </h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>To operate and improve the Site.</li>
              <li>
                To measure marketing performance and understand user behavior
                (analytics).
              </li>
              <li>To communicate with you (if you contact us).</li>
              <li>
                To comply with legal obligations and protect against
                abuse/fraud.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              7) Legal bases (EEA/UK, if applicable)
            </h2>
            <p className="mt-2">
              Where GDPR/UK GDPR applies, we process personal data under legal
              bases such as consent (for non-essential cookies), legitimate
              interests (site improvement and security), and contract (where
              relevant).
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              8) Your rights
            </h2>
            <p className="mt-2">
              Depending on your location, you may have rights to access, correct,
              delete, or object to processing of your personal data, and to
              withdraw consent for cookie-based processing.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              9) Cookies
            </h2>
            <p className="mt-2">
              Cookies are small text files stored on your device. Some cookies
              are necessary for the Site to work, while others are used for
              analytics and advertising. You can control cookies through your
              browser settings and (where available) on-site consent tools.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-[18px] font-bold text-[#2e2e2e] sm:text-[20px]">
              10) Changes
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. We will post
              the updated version on this page and update the "Last updated"
              date above.
            </p>
          </section>
        </motion.div>

        {/* Footer back link */}
        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#4d4d4d] transition-colors duration-200 hover:text-[#2e2e2e]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

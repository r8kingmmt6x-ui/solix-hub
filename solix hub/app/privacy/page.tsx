import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Button
          variant="ghost"
          className="mb-8 text-white/60 hover:text-pink-400 hover:bg-white/5"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-lg text-white/60">
            At Solix Hub, we value your privacy and are committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, store, and safeguard your data when you access or use our website,
            products, and services.
          </p>

          {/* Section 1 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
            <p className="mb-4 leading-relaxed text-white/70">We may collect the following types of information:</p>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-white">a. Personal Information</h3>
                <p className="text-white/70">
                  When you register, make a purchase, or contact us, we may collect your name, email address, billing
                  information, and payment details (processed securely through third-party providers).
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-white">b. Technical Information</h3>
                <p className="text-white/70">
                  We automatically collect information such as your IP address, browser type, device information,
                  operating system, and usage data.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-white">c. Communication Data</h3>
                <p className="text-white/70">
                  If you contact support or submit a form, we may store your messages and related details for assistance
                  purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed text-white/70">We use the collected data to:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Process and complete orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Provide and improve our products and services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Respond to customer inquiries and support requests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Send important updates, invoices, and notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Prevent fraud, abuse, or unauthorized use</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Comply with legal obligations</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Data Storage and Security</h2>
            <p className="leading-relaxed text-white/70">
              We use industry-standard security measures to protect your data from unauthorized access or disclosure.
              While we strive to safeguard all information, no online transmission or storage method is 100% secure.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Payment Processing</h2>
            <p className="leading-relaxed text-white/70">
              All payments are handled securely by trusted third-party processors. Solix Hub does not store or have
              access to full payment details. By completing a purchase, you agree to the privacy and security terms of
              our payment partners.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Data Sharing and Disclosure</h2>
            <p className="mb-4 leading-relaxed text-white/70">
              We do not sell, trade, or rent users' personal data. We may share limited data with:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Service providers assisting with operations or payment processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Legal authorities when required by law</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Analytics providers (aggregated and anonymized data only)</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Cookies and Tracking</h2>
            <p className="leading-relaxed text-white/70">
              We use cookies and similar tracking technologies to enhance user experience, analyze traffic, and improve
              our services. You can control cookie settings through your browser preferences.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
            <p className="mb-4 leading-relaxed text-white/70">You have the right to:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Access, update, or delete your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Opt-out of promotional communications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Request data portability or restriction of processing</span>
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Third-Party Links</h2>
            <p className="leading-relaxed text-white/70">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review their privacy policies before providing any
              personal information.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Children's Privacy</h2>
            <p className="leading-relaxed text-white/70">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children. If you believe we have collected data from a minor, please contact us
              immediately.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Changes to This Privacy Policy</h2>
            <p className="leading-relaxed text-white/70">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated revision date. Continued use of our services after changes indicates your acceptance of the
              updated policy.
            </p>
          </div>

          {/* Section 11 */}
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p className="leading-relaxed text-white/70">
              If you have any questions or concerns about this Privacy Policy or how your data is handled, please
              contact us through our Discord server or official support channels listed on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-lg text-white/60">
            Please read these terms carefully before using our services
          </p>

          {/* Section 1 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="leading-relaxed text-white/70">
              By accessing and using Solix Hub services, you accept and agree to be bound by the terms and provision
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">2. Product Usage</h2>
            <p className="mb-4 leading-relaxed text-white/70">
              All products sold are for educational and testing purposes only. Users are responsible for:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Using products in accordance with applicable laws and regulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Not using products for malicious or harmful activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Respecting the terms of service of third-party platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                <span className="text-white/70">Understanding that products may require technical knowledge to use</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8 rounded-lg border border-red-500/20 bg-red-500/5 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">3. Refund Policy</h2>
            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <p className="text-center text-lg font-bold text-red-400">ABSOLUTELY NO REFUNDS</p>
              <p className="text-center text-sm text-red-300">
                ALL SALES ARE FINAL. NO EXCEPTIONS. NO REFUNDS UNDER ANY CIRCUMSTANCES.
              </p>
            </div>
            <p className="mb-4 leading-relaxed text-white/70">
              Due to the digital nature of our products and services, we maintain a strict zero-refund policy. By
              purchasing any product or service from Solix Hub, you acknowledge and agree that:
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span className="text-white/70">
                  <strong className="text-white">NO REFUNDS</strong> will be issued for any reason whatsoever
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span className="text-white/70">
                  All purchases are <strong className="text-white">FINAL</strong> and{" "}
                  <strong className="text-white">NON-REFUNDABLE</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span className="text-white/70">
                  We do not provide refunds for technical issues, compatibility problems, or user error
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span className="text-white/70">
                  Chargebacks or payment disputes will result in permanent account suspension
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span className="text-white/70">You are responsible for ensuring compatibility before purchase</span>
              </li>
            </ul>
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
              <p className="text-sm text-yellow-200">
                <strong>WARNING:</strong> Please carefully review all product information, requirements, and
                descriptions before making a purchase. Once payment is processed, it cannot and will not be reversed
                under any circumstances.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">4. Account Security</h2>
            <p className="leading-relaxed text-white/70">
              Users are responsible for maintaining the security of their accounts and any activities that occur under
              their account. We recommend using strong passwords and not sharing account credentials with others.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Limitation of Liability</h2>
            <p className="leading-relaxed text-white/70">
              Solix Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
              from your use of the service.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">6. Changes to Terms</h2>
            <p className="leading-relaxed text-white/70">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try
              to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
              change will be determined at our sole discretion.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">7. Contact Information</h2>
            <p className="leading-relaxed text-white/70">
              If you have any questions about these Terms, please contact us through our Discord server or official
              support channels listed on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

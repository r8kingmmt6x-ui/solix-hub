"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Gauge, Shield, Code, Headphones, Monitor, Check, Copy } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { KomerzaCheckoutButton } from "@/components/komerza-checkout-button"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()
  
  const handleCopyScript = () => {
    const script = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/meobeo8/a/a/a"))()'
    navigator.clipboard.writeText(script)
    toast({
      description: (
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4" />
          <span>Script copied to clipboard!</span>
        </div>
      ),
      duration: 1500,
    })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          {/* Update Badge */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-sm text-pink-400">
              Solix Hub is currently working!
            </div>
          </div>

          {/* Logo & Title */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Image
                src="/favicon.ico"
                alt="Solix Hub Logo"
                width={56}
                height={56}
                className="drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
              />
              <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Solix </span>
                <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Hub</span>
              </h1>
            </div>

            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
              Unleash Power. Stay Invisible
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 text-balance">
              Now offering long-term access keys, no interruptions, no constant renewals!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                className="min-w-[200px] bg-pink-500/20 text-pink-400 border border-pink-500/30 hover:bg-pink-500/30 hover:border-pink-500/50 transition-all"
                onClick={handleCopyScript}
              >
                Get Script
              </Button>
              <Button
                size="lg"
                className="min-w-[200px] bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/40 transition-all"
                asChild
              >
                <a href="#pricing">Purchase Solix Hub</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[120px] border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/50 transition-all"
                asChild
              >
                <a href="https://solixhub.com/getkey">Get Key</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b border-white/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-widest text-pink-400">Features</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
              Why Exploiters Choose Solix Hub
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 text-balance">
              Unlock the full potential of your cheating experience with Solix Hub
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group border-white/10 bg-white/[0.02] transition-all hover:border-pink-500/40 hover:bg-white/[0.04]">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Freemium</h3>
                <p className="leading-relaxed text-white/60">
                  Use the core features for free, with the paid plan removing access barriers for a faster, smoother experience.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-white/10 bg-white/[0.02] transition-all hover:border-pink-500/40 hover:bg-white/[0.04]">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Support for 20+ Games</h3>
                <p className="leading-relaxed text-white/60">
                  Enjoy wide compatibility across more than twenty popular games, all optimized for smooth performance and seamless integration.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-white/10 bg-white/[0.02] transition-all hover:border-pink-500/40 hover:bg-white/[0.04]">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <Gauge className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Compatible With Free Utilities</h3>
                <p className="leading-relaxed text-white/60">
                  Works smoothly with a variety of widely-used free utilities, ensuring easy setup and broad accessibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-white/5 bg-white/[0.02] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-widest text-pink-400">Pricing</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
              Choose the Perfect Plan for Your Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 text-balance">
              Start with our weekly plan or go for extended access with our 2-month option.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            {/* Weekly Plan */}
            <Card className="relative border-white/10 bg-white/[0.02] transition-all hover:border-pink-500/30">
              <CardContent className="p-8">
                <h3 className="mb-2 text-lg font-semibold text-white">Weekly Access</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$1.99</span>
                  <span className="ml-2 text-white/50">per week</span>
                </div>
                <p className="mb-6 text-sm text-white/60">Perfect for trying out Solix Hub</p>
                <KomerzaCheckoutButton
                  productId="5888d73d-5779-4c6c-ba2b-4e819c4a991a"
                  variantId="d6afaa89-e53c-45d9-a9eb-4c9ef82e2849"
                  className="mb-8 w-full bg-pink-500/10 text-pink-400 hover:bg-pink-500 hover:text-white transition-all"
                >
                  Purchase
                </KomerzaCheckoutButton>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-white">Weekly Plan includes</p>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">7-Day Access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">Instant Key Delivery</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">No Checkpoints or Ads</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">No More Frequent Reactivations</span>
                  </div>

                </div>
              </CardContent>
            </Card>

            {/* 2-Month Plan - Featured */}
            <Card className="relative border-pink-500/50 bg-gradient-to-b from-pink-500/10 to-white/[0.02] shadow-lg shadow-pink-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="rounded-full bg-pink-500 px-4 py-1 text-xs font-semibold text-white">BEST VALUE</div>
              </div>
              <CardContent className="p-8">
                <h3 className="mb-2 text-lg font-semibold text-white">2-Month Access</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$4.99</span>
                  <span className="ml-2 text-white/50">for 2 months</span>
                </div>
                <p className="mb-6 text-sm text-white/60">Best value for extended access</p>
                <KomerzaCheckoutButton
                  productId="5888d73d-5779-4c6c-ba2b-4e819c4a991a"
                  variantId="6c55d8de-e778-4737-8b53-e52abecb5a3f"
                  className="mb-8 w-full bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/40 transition-all"
                >
                  Purchase
                </KomerzaCheckoutButton>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-white">2-Month Plan includes</p>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">60-Day Access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">Instant Key Delivery</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">No Checkpoints or Ads</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" />
                    <span className="text-sm text-white/70">No More Frequent Reactivations</span>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-b border-white/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-widest text-pink-400">FAQ</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
              Got questions? We've got answers.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 text-balance">
              Find answers to common questions about Solix Hub and its capabilities.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-lg bg-white/[0.02] px-6">
                <AccordionTrigger className="text-left text-white hover:text-pink-400 hover:no-underline">
                  What is Solix Hub and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-white/60">
                  Solix Hub is a powerful Roblox executor that emulates Hyperion, disables its defenses, and allows
                  seamless execution of any script/cheat in the background without detection. It works by accurately
                  mimicking Hyperion's behavior to bypass security measures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-white/10 rounded-lg bg-white/[0.02] px-6">
                <AccordionTrigger className="text-left text-white hover:text-pink-400 hover:no-underline">
                  How do I activate my Solix Hub License?
                </AccordionTrigger>
                <AccordionContent className="text-white/60">
                  Join the official Solix Hub discord server https://discord.gg/solixhub. Redeem your purchased key in the #get-script channel. Launch Roblox, execute your script, and enjoy!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-white/10 rounded-lg bg-white/[0.02] px-6">
                <AccordionTrigger className="text-left text-white hover:text-pink-400 hover:no-underline">
                  Where do I ask for help related to buying Solix Hub?
                </AccordionTrigger>
                <AccordionContent className="text-white/60">
                  For any purchase-related questions or technical support, join our Discord server where our highly
                  active and responsive staff provides 24/7 assistance. You can also reach out through our official
                  support channels listed on the website.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-black to-black p-12 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.15),transparent_50%)]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
                Ready to Revolutionize Your Experience?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/60 text-balance">
                Join countless exploiters already using Solix Hub to unlock limitless possibilities and dominate the
                Scenes.
              </p>
              <Button
                size="lg"
                className="bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/40 transition-all"
                asChild
              >
                <a href="https://discord.gg/solixhub" target="_blank" rel="noopener noreferrer">Join Solix Hub Community</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="link"
              className="text-white/60 hover:text-pink-400 transition-colors"
              asChild
            >
              <a href="/terms">Terms of Service</a>
            </Button>
            <span className="text-white/20">•</span>
            <Button
              variant="link"
              className="text-white/60 hover:text-pink-400 transition-colors"
              asChild
            >
              <a href="/privacy">Privacy Policy</a>
            </Button>
          </div>
          <p className="text-sm text-white/40">© 2025 Solix Hub. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

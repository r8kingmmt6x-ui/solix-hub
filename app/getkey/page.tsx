"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Clock, Shield, Ban, Code } from "lucide-react"

export default function GetKeyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <a href="http://solixhub.com/" className="flex items-center gap-3">
              <Image
                src="/favicon.ico"
                alt="Solix Hub Logo"
                width={32}
                height={32}
                className="drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
              />
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Solix </span>
                <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Hub</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Get Your <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Solix Hub</span> Key
          </h2>
          <p className="text-base leading-relaxed text-white/60">
            Choose your preferred method to get your Solix Hub script key.
          </p>
        </div>

        {/* Key Options Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16 max-w-5xl mx-auto">
          {/* Recommended Option */}
          <Card className="relative border-pink-500/50 bg-gradient-to-b from-pink-500/10 to-white/[0.02] shadow-lg shadow-pink-500/10 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">RECOMMENDED</div>
            </div>
            <CardHeader className="pt-6 pb-3 text-center">
              <div className="mb-3 flex justify-center">
                <Star className="h-10 w-10 text-pink-400" />
              </div>
              <CardTitle className="text-xl font-bold text-white">Solix Hub</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow px-4 pb-4">
              <div className="mb-4 space-y-2 w-full text-sm flex-grow">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-pink-400" />
                  <span className="text-white/70">Instant key delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-pink-400" />
                  <span className="text-white/70">Premium support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ban className="h-4 w-4 text-pink-400" />
                  <span className="text-white/70">No Ads</span>
                </div>
              </div>
              <Button
                className="w-full bg-pink-500 text-white shadow-lg shadow-pink-500/30 transition-all hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/40"
                asChild
              >
                <a href="https://solixhub.com/#pricing">Get Solix Hub</a>
              </Button>
            </CardContent>
          </Card>

          {/* Free Option 1 - Lootlabs */}
          <Card className="relative border-white/10 bg-white/[0.02] flex flex-col">
            <div className="absolute top-3 right-3">
              <div className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-semibold text-purple-400">FREE</div>
            </div>
            <CardHeader className="pt-6 pb-3 text-center">
              <div className="mb-3 flex justify-center">
                <Clock className="h-10 w-10 text-purple-400" />
              </div>
              <CardTitle className="text-xl font-bold text-white">Linkvertise</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow px-4 pb-4">
              <div className="mb-4 space-y-1.5 text-center text-sm flex-grow">
                <p className="text-white/70">• Fastest completion time</p>
                <p className="text-white/70">• Simple task system</p>
                <p className="text-white/70">• Mobile friendly</p>
              </div>
              <Button
                variant="outline"
                className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50"
                asChild
              >
                <a href="https://ads.luarmor.net/get_key?for=Solixhub_Free_KeySystem-OWlLHDMCHADk" target="_blank" rel="noopener noreferrer">Get Free Key</a>
              </Button>
            </CardContent>
          </Card>

          {/* Free Option 2 - Rinku */}
          <Card className="relative border-white/10 bg-white/[0.02] flex flex-col">
            <div className="absolute top-3 right-3">
              <div className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-semibold text-blue-400">FREE</div>
            </div>
            <CardHeader className="pt-6 pb-3 text-center">
              <div className="mb-3 flex justify-center">
                <Clock className="h-10 w-10 text-blue-400" />
              </div>
              <CardTitle className="text-xl font-bold text-white">Rinku</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow px-4 pb-4">
              <div className="mb-4 space-y-1.5 text-center text-sm flex-grow">
                <p className="text-white/70">• Free with Ads</p>
                <p className="text-white/70">• Quick Access</p>
                <p className="text-white/70">• No Payment Required</p>
              </div>
              <Button
                variant="outline"
                className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50"
                asChild
              >
                <a href="https://ads.luarmor.net/get_key?for=Solix_Free_Keysystems-pqJCGTqnTsng" target="_blank" rel="noopener noreferrer">Get Free Key</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Why Choose Solix Hub?</h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-white/10 bg-white/[0.02] text-center">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <Code className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Freemium</h4>
                <p className="text-sm text-white/60">
                  Use the core features for free, with the paid plan removing access barriers for a faster, smoother experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.02] text-center">
              <CardContent className="p-6">
                <div className="mb-3 flex justify-center">
                  <Shield className="h-10 w-10 text-pink-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Premium Support</h4>
                <p className="text-sm text-white/60">
                  Priority customer support and suggestions
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.02] text-center">
              <CardContent className="p-6">
                <div className="mb-3 flex justify-center">
                  <Ban className="h-10 w-10 text-pink-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">No Ads</h4>
                <p className="text-sm text-white/60">
                  Skip all advertisements and get straight to exploiting
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

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
          <p className="text-center text-sm text-white/40">© 2025 Solix Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"

interface KomerzaCheckoutButtonProps {
  productId: string
  variantId: string
  quantity?: number
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

declare global {
  interface Window {
    Komerza?: {
      open: (options: {
        storeId: string
        items: Array<{
          productId: string
          variantId: string
          quantity: number
        }>
        theme?: "light" | "dark" | "auto"
      }) => void
    }
  }
}

export function KomerzaCheckoutButton({
  productId,
  variantId,
  quantity = 1,
  children,
  className,
  variant = "default",
  size = "default",
}: KomerzaCheckoutButtonProps) {
  const handleClick = () => {
    if (window.Komerza) {
      window.Komerza.open({
        storeId: "55293833-286e-4a9c-b4e4-c8436d70ecef",
        items: [
          {
            productId,
            variantId,
            quantity,
          },
        ],
        theme: "dark",
      })
    } else {
      console.error("[v0] Komerza SDK not loaded yet")
    }
  }

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  )
}

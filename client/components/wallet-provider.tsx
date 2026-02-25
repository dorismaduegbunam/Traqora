/**
 * WalletProvider - Initialises the StellarWalletsKit on mount.
 * Wrap this around the app in layout.tsx so the kit is ready
 * before any component tries to connect a wallet.
 */
"use client"

import { useEffect } from "react"
// NEW: import initializeWalletKit from the stellar-wallet-connect package
import { initializeWalletKit } from "@/lib/stellar-wallet-connect"

export function WalletProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // NEW: initialise the Stellar Wallets Kit (testnet by default)
    // Initialize synchronously to ensure wallets like Freighter are detected
    try {
      initializeWalletKit("testnet")
      console.log("[v0] WalletProvider: StellarWalletsKit initialized")
    } catch (error) {
      console.error("[v0] WalletProvider: Failed to initialize StellarWalletsKit:", error)
    }
  }, [])

  return <>{children}</>
}

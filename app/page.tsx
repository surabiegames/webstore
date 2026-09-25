import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { ValuePropositionBar } from "@/components/sections/ValuePropositionBar"
import { CategoryExplorerSection } from "@/components/sections/CategoryExplorerSection"
import { PopularProductsSection } from "@/components/sections/PopularProductsSection"
import { GameCoachingSection } from "@/components/sections/GameCoachingSection"
import { GamePalSection } from "@/components/sections/GamePalSection"
import { AffiliateBannerSection } from "@/components/sections/AffiliateBannerSection"
import { SecurityTrustSection } from "@/components/sections/SecurityTrustSection"
import { PaymentMethodsBar } from "@/components/sections/PaymentMethodsBar"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section (Banner Utama dengan Background Portal Warcraft) */}
        <HeroSection />

        {/* 3. Trust / Value Proposition Bar */}
        <ValuePropositionBar />

        {/* 4. Kategori Produk Digital & Layanan */}
        <CategoryExplorerSection />

        {/* 5. Produk Digital Populer (WoW, Diablo, POE, dll.) */}
        <PopularProductsSection />

        {/* 6. Layanan Game Coaching */}
        <GameCoachingSection />

        {/* 7. Layanan GamePal / Teman Main */}
        <GamePalSection />

        {/* 8. Banner Afiliasi & Penjual */}
        <AffiliateBannerSection />

        {/* 9. Jaminan Keamanan (GamerProtect) */}
        <SecurityTrustSection />

        {/* 10. Metode Pembayaran */}
        <PaymentMethodsBar />
      </main>

      {/* 11. Footer Website */}
      <Footer />
    </div>
  )
}
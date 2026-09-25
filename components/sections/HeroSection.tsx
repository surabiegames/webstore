import React from 'react';
import Image from 'next/image';
import { Search, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { container, cardBase, tagPill, buttonPrimary, iconAccent } from '@/lib/section-styles';

const snapshot = [
  { title: 'World of Warcraft', tag: 'Gold', offers: '221.7k listing' },
  { title: 'Diablo 4', tag: 'Item', offers: '160.5k listing' },
  { title: 'Roblox', tag: 'Robux', offers: '143.2k listing' },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-slate-950 border-b border-slate-900 overflow-hidden">
      {/* background photo from public/hero-bg.jpg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Gaming Marketplace Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
      </div>

      <div className={`relative z-10 ${container} pt-10 pb-20 md:pt-14 md:pb-28`}>
        {/* eyebrow rule — states a fact, not a decorative badge */}
        <div className="flex items-center gap-3 mb-16 md:mb-24 text-slate-500">
          <span className="text-xs tracking-wide">Surabie Games</span>
          <span className="h-px flex-1 bg-slate-800" />
          <span className="text-xs tracking-wide">Pasar Digital Gaming</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — headline, copy, search */}
          <div className="lg:col-span-7">
            <h1 className="text-white font-black leading-[1.05] tracking-tight mb-6 text-4xl md:text-6xl">
              Tempat aset game dijaga, bukan sekadar dijual.
            </h1>

            <p className="text-slate-400 text-base leading-relaxed max-w-md mb-10">
              Koin, item, dan jasa joki dari penjual terverifikasi. Setiap transaksi
              ditahan dalam escrow sampai barang diterima sesuai deskripsi.
            </p>

            <div className="max-w-md">
              <div className={`flex items-center gap-3 ${cardBase} px-4 py-3`}>
                <Search className={`w-4 h-4 ${iconAccent} shrink-0`} />
                <Input
                  placeholder="Cari game, currency, atau layanan"
                  className="border-0 bg-transparent text-white placeholder:text-slate-500 p-0 text-sm focus-visible:ring-0 h-auto flex-1"
                />
                <button className={`${buttonPrimary} p-2.5 shrink-0`} aria-label="Cari">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-slate-500">
                <span>Dicari minggu ini:</span>
                <a href="#" className={tagPill}>Diablo 4</a>
                <a href="#" className={tagPill}>Roblox</a>
                <a href="#" className={tagPill}>Valorant Points</a>
              </div>
            </div>
          </div>

          {/* Right — market snapshot, replaces the old decorative badge */}
          <div className="lg:col-span-5">
            <div className={`${cardBase} overflow-hidden`}>
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
                <span className="text-xs text-slate-400">Aktivitas Pasar</span>
                <span className="text-xs text-slate-500">Hari ini</span>
              </div>
              <ul>
                {snapshot.map((row, idx) => (
                  <li
                    key={row.title}
                    className={`flex items-center justify-between px-5 py-4 ${
                      idx !== snapshot.length - 1 ? 'border-b border-slate-800' : ''
                    }`}
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{row.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{row.tag}</p>
                    </div>
                    <span className="text-slate-400 text-xs">{row.offers}</span>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-4 bg-slate-950/60">
                <p className="text-white text-sm font-medium">99.2% transaksi tuntas tanpa sengketa</p>
                <p className="text-slate-500 text-xs mt-0.5">Berdasarkan 2 juta+ transaksi terverifikasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
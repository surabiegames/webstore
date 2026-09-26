import React from 'react';
import { Search, Flame, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShaderFire } from '@/components/effects/shader-fire';
import { AsciiFluid } from '@/components/effects/ascii-fluid';

export const HeroSection = () => {
  const topSearches = ['Diablo 4', 'Roblox', 'Path of Exile 2', 'World of Warcraft', 'Valorant Points'];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-10 md:py-16 border-b border-slate-900">
      {/* Background Graphic Image Element */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center md:bg-right opacity-75 transition-opacity duration-700"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      {/* Ember glow rising from the bottom, in the site's red palette */}
      <ShaderFire
        className="z-[1] mix-blend-screen opacity-60 pointer-events-none"
        theme="dark"
        colors={['#450a0a', '#dc2626', '#fca5a5']}
        intensity={0.4}
        height={0.4}
        speed={0.4}
        interactive={false}
      />

      {/* Faint interactive glyph trail that follows the pointer */}
      <AsciiFluid
        className="z-[2] opacity-[0.16] hidden md:block"
        theme="dark"
        cellSize={14}
        color="#f87171"
        backgroundColor="#020617"
        dissipation={0.06}
        animate={false}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-left">
          <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 mb-6 px-4 py-1.5 rounded-full inline-flex items-center gap-2 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span className="font-semibold text-xs tracking-wide">PASAR TRANS-GAME TERPERCAYA #1</span>
          </Badge>

          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Pasar untuk Segala Sesuatu <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
              Gaming & Beyond
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base mb-8 font-normal leading-relaxed">
            Beli dan jual jarahan dalam permainan, koin, joki pro, atau bergabung dengan rekan tim terbaik di platform teraman.
          </p>

          {/* Search Box */}
          <div className="bg-slate-900/90 backdrop-blur-xl p-2 rounded-2xl border border-slate-700/60 shadow-2xl shadow-red-950/30">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4" />
              <Input
                placeholder="Cari Game, Currency, Item, atau Layanan..."
                className="w-full bg-transparent border-0 text-white placeholder:text-slate-400 pl-12 pr-28 py-3.5 text-sm md:text-base focus-visible:ring-0"
              />
              <button className="absolute right-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs md:text-sm shadow-md transition-all">
                Cari
              </button>
            </div>
          </div>

          {/* Top Searches Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium flex items-center gap-1 mr-1">
              <Flame className="w-3.5 h-3.5 text-amber-500" /> Pencarian Populer:
            </span>
            {topSearches.map((tag, idx) => (
              <button
                key={idx}
                className="bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-slate-800 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
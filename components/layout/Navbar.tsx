import React from 'react';
import { Search, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { container, iconAccent } from '@/lib/section-styles';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-900 text-slate-100">
      <div className={`${container} h-16 flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-xl font-black tracking-wider text-white group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center font-black text-white shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform">
              S
            </span>
            <span>SURABIE<span className="text-red-500">GAMES</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-red-400 transition-colors">Produk Digital</a>
            <a href="#" className="hover:text-red-400 transition-colors">Layanan Sewa Waktu</a>
          </nav>
        </div>

        <div className="hidden lg:flex flex-1 max-w-md relative">
          <Input
            placeholder="Cari game, item, atau layanan..."
            className="w-full bg-slate-900/80 border-slate-800 text-sm pl-10 pr-4 py-2 text-slate-200 placeholder:text-slate-500 focus:border-red-500 rounded-full"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-800 text-slate-300 hover:bg-slate-900 transition-colors">
            <Globe className={`w-3.5 h-3.5 ${iconAccent}`} />
            <span>ID / IDR</span>
          </button>

          <a href="#" className="hidden sm:block text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 transition-colors">
            Menjadi Penjual
          </a>

          <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/20 rounded-full text-xs font-bold px-5">
            Masuk / Daftar
          </Button>
        </div>
      </div>
    </header>
  );
};
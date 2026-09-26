'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Globe } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Produk Digital', href: '/produk' },
  { label: 'Layanan Sewa Waktu', href: '/sewa' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-900 text-slate-100">
      <div className="container mx-auto h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-wider text-white group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center font-black text-white shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform">
              S
            </span>
            <span>
              SURABIE<span className="text-red-500">GAMES</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-red-400 transition-colors">
                {label}
              </Link>
            ))}
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
            <Globe className="" />
            <span>ID / IDR</span>
          </button>

          <Link
            href="/auth?mode=daftar"
            className="hidden sm:block text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 transition-colors"
          >
            Menjadi Penjual
          </Link>
          <Link
            href="/auth"
            className={cn(
              buttonVariants(),
              "bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/20 rounded-full text-xs font-bold px-5 h-8 inline-flex items-center"
            )}
          >
            Masuk / Daftar
          </Link>
        </div>
      </div>
    </header>
  );
}
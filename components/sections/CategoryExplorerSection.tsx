"use client";

import React, { useState } from 'react';
import { Gamepad2, Laptop, ShoppingBag, Wallet, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { container, sectionBase, sectionHeading, cardBase, tagPill, iconAccent } from '@/lib/section-styles';

export const CategoryExplorerSection = () => {
  const [activeTab, setActiveTab] = useState('digital');

  const categories = [
    { id: 'gaming', title: 'Gaming', subtitle: 'Segala sesuatu tentang game, semuanya di satu tempat', icon: Gamepad2, tags: ['Isi Ulang Game & Kartu Hadiah', 'Skin', 'Jasa Joki', 'Koin Game', 'Item', 'Akun'] },
    { id: 'software', title: 'Perangkat Lunak & Aplikasi', subtitle: 'Essential tools for work and play', icon: Laptop, tags: ['AI & Alat', 'eBuku', 'Streaming Langsung & Sosial', 'Video & Musik', 'Lainnya'] },
    { id: 'retail', title: 'Ritel', subtitle: 'Hemat lebih banyak untuk pembelian harian', icon: ShoppingBag, tags: ['eCommerce', 'Makan & Makanan', 'Fashion', 'Perjalanan & Transportasi', 'Pendidikan'] },
    { id: 'stablecoins', title: 'Pembayaran & Koin Stabil', subtitle: 'Secure solutions for digital finance', icon: Wallet, tags: ['eWallet & Prabayar'] },
    { id: 'telco', title: 'Telko', subtitle: 'Koneksi tanpa batas dimana saja', icon: Phone, tags: ['Isi Ulang Kredit & Paket Seluler', 'eSIM Perjalanan'] },
  ];

  return (
    <section className={sectionBase}>
      <div className={container}>
        <h2 className={`${sectionHeading} mb-6`}>Jelajahi Kategori</h2>

        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('digital')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'digital'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>Produk Digital</span>
            <span className="w-5 h-5 rounded-full bg-slate-950/40 text-[10px] flex items-center justify-center">5</span>
          </button>

          <button
            onClick={() => setActiveTab('rental')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'rental'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>Layanan Sewa Waktu</span>
            <span className="w-5 h-5 rounded-full bg-slate-950/40 text-[10px] flex items-center justify-center">1</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.id} className={`${cardBase} p-6`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center ${iconAccent} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {cat.tags.map((tag, idx) => (
                    <button key={idx} className={tagPill}>
                      {tag}
                    </button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
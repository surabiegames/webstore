import React from 'react';
import { ShieldCheck, Zap, Star, Headphones } from 'lucide-react';
import { container } from '@/lib/SectionStyles';

export const ValuePropositionBar = () => {
  const items = [
    { icon: ShieldCheck, title: 'GamerProtect', desc: 'Setiap Transaksi Dilindungi Escrow', color: 'text-emerald-400' },
    { icon: Zap, title: 'Pengiriman Instan', desc: '80% Pesanan Dikirim Dalam 5 Menit', color: 'text-amber-400' },
    { icon: Star, title: '4.8 / 5 Peringkat', desc: 'Dari 2M+ Ulasan Terverifikasi', color: 'text-amber-400' },
    { icon: Headphones, title: 'Dukungan 24/7', desc: 'Siap Membantu Anda Kapan Saja', color: 'text-blue-400' },
  ];

  return (
    <section className="py-8 bg-slate-900/60 border-b border-slate-900">
      <div className={container}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className={`p-2.5 rounded-lg bg-slate-900 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
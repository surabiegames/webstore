import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { container, sectionBase, sectionHeading, viewAllLink, cardBase, badgeAccent } from '@/lib/section-styles';

export const PopularProductsSection = () => {
  const games = [
    { code: 'WOW', title: 'World of Warcraft', offers: '221.7k', sellers: '1.2k', tag: 'GOLD' },
    { code: 'D4', title: 'Diablo 4', offers: '160.5k', sellers: '444', tag: 'ITEMS' },
    { code: 'RBL', title: 'Roblox', offers: '143.2k', sellers: '2k', tag: 'ROBUX' },
    { code: 'POE', title: 'Path of Exile 2', offers: '37.7k', sellers: '453', tag: 'CURRENCY' },
    { code: 'GT', title: 'Growtopia', offers: '4.7k', sellers: '93', tag: 'DL / BGL' },
    { code: 'RFN', title: 'RF Online Next', offers: '975', sellers: '87', tag: 'CP' },
  ];

  return (
    <section className={sectionBase}>
      <div className={container}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={sectionHeading}>Produk Digital Populer</h2>
          <a href="#" className={viewAllLink}>
            Lihat Semua <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game, idx) => (
            <Card key={idx} className={`group relative overflow-hidden ${cardBase} p-4 cursor-pointer flex flex-col justify-between h-48`}>
              <div className="absolute -right-4 -bottom-4 text-7xl font-black text-slate-800/30 group-hover:text-red-500/10 transition-colors select-none">
                {game.code}
              </div>

              <div>
                <span className={badgeAccent}>{game.tag}</span>
                <h3 className="font-bold text-sm text-white mt-3 group-hover:text-red-400 transition-colors line-clamp-2">
                  {game.title}
                </h3>
              </div>

              <div className="relative z-10 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2">
                <p>{game.offers} penawaran</p>
                <p className="text-slate-500">{game.sellers} penjual</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
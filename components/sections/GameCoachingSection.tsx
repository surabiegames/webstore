"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { container, sectionBase, sectionHeading, sectionSubtitle, eyebrow, viewAllLink, cardBase, buttonSecondary, avatarRing } from '@/lib/SectionStyles';

export const GameCoachingSection = () => {
  const coaches = [
    { name: 'MPrime', game: 'World of Warcraft', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop' },
    { name: 'KingzStore', game: 'Rocket League', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop' },
    { name: 'the_matrix', game: 'Diablo 4', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop' },
    { name: 'nishashop', game: 'Counter-Strike 2', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop' },
    { name: 'DeleteRX', game: 'League of Legends', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className={sectionBase}>
      <div className={container}>
        <div className="mb-6">
          <span className={eyebrow}>LAYANAN BARU</span>
          <div className="flex items-center justify-between mt-1">
            <div>
              <h2 className={sectionHeading}>Permainan Bagus, <span className="text-red-400">Pelatih Hebat</span></h2>
              <p className={sectionSubtitle}>Terhubung dengan pemain elit untuk meningkatkan skill Anda.</p>
            </div>
            <a href="#" className={viewAllLink}>
              Lihat Semua <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {coaches.map((coach, idx) => (
            <Card key={idx} className={`${cardBase} p-4 flex flex-col items-center text-center`}>
              <img src={coach.avatar} alt={coach.name} className={`w-20 h-20 rounded-full object-cover mb-3 ${avatarRing}`} />
              <h3 className="font-bold text-sm text-white">{coach.name}</h3>
              <span className="text-[11px] text-slate-400 mb-4">{coach.game}</span>
              <Button className={`w-full ${buttonSecondary} py-2`}>
                Pesan Sesi
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
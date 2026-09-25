import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { container, sectionBase, sectionHeading, viewAllLink, cardBase, buttonPrimary, iconAccent, avatarRingOnline } from '@/lib/section-styles';

export const GamePalSection = () => {
  const pals = [
    { name: 'shi3rrr', game: 'Apex Legends', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'serapine', game: 'Valorant', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop' },
    { name: 'Rambofire', game: 'League of Legends', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop' },
    { name: 'TerroYT', game: 'CS2 & Overwatch', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Jugfawn', game: 'World of Warcraft', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className={sectionBase}>
      <div className={container}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Users className={`w-5 h-5 ${iconAccent}`} />
            <h2 className={sectionHeading}>GamePal (Teman Main)</h2>
          </div>
          <a href="#" className={viewAllLink}>
            Lihat Semua <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {pals.map((pal, idx) => (
            <Card key={idx} className={`${cardBase} p-4 flex flex-col items-center text-center`}>
              <div className="relative mb-3">
                <img src={pal.avatar} alt={pal.name} className={`w-20 h-20 rounded-full object-cover ${avatarRingOnline}`} />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full" />
              </div>
              <h3 className="font-bold text-sm text-white">{pal.name}</h3>
              <span className="text-[11px] text-slate-400 mb-4">{pal.game}</span>
              <Button className={`w-full ${buttonPrimary} py-2`}>
                Pesan Sesi
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
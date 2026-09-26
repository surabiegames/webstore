import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { container, sectionBase, sectionHeading, sectionSubtitle, cardFeature, buttonPrimary } from '@/lib/SectionStyles';

export const AffiliateBannerSection = () => {
  return (
    <section className={sectionBase}>
      <div className={container}>
        <div className="mb-6">
          <h2 className={sectionHeading}>Berkembang Bersama Surabie Games</h2>
          <p className={sectionSubtitle}>Dua cara untuk menghasilkan. Nol hambatan untuk memulai.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className={`relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-900/90 ${cardFeature} p-8`}>
            <div className="relative z-10 max-w-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                Dapatkan 20% Dari Setiap Rujukan Baru
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Bergabunglah dengan Program Afiliasi kami, bawa pemain baru, dan terus dapatkan komisi pasif.
              </p>
              <Button className="bg-slate-100 hover:bg-white text-slate-950 text-xs font-bold px-6 py-2.5 rounded-full transition-colors">
                Bergabung Program Afiliasi
              </Button>
            </div>
          </Card>

          <Card className={`relative overflow-hidden bg-gradient-to-r from-red-950/40 to-slate-900 border-red-900/30 rounded-3xl p-8`}>
            <div className="relative z-10 max-w-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                Ubah Waktu Bermain Menjadi Penghasilan
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Jual perlengkapan game, koin, joki pro, atau tawarkan layanan gamer kustom milik Anda sendiri.
              </p>
              <Button className={`${buttonPrimary} px-6 py-2.5`}>
                Mulai Mendapatkan Hari Ini
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
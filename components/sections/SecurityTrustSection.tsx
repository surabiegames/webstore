import React from 'react';
import { ShieldCheck, Lock, Users, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { container, sectionBase, cardFeature, buttonPrimary, iconAccent } from '@/lib/SectionStyles';

export const SecurityTrustSection = () => {
  return (
    <section className={sectionBase}>
      <div className={container}>
        <Card className={`${cardFeature} p-8 md:p-12 relative overflow-hidden`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                Perdagangkan dengan Aman dengan <span className="text-red-500">GamerProtect</span>
              </h2>
              <p className="text-sm text-slate-400 mb-8 max-w-xl">
                Sistem perlindungan transaksi berlapis memastikan dana Anda aman hingga barang diterima dengan sempurna.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <Lock className={`w-5 h-5 ${iconAccent} mb-2`} />
                  <h4 className="text-xs font-bold text-white">Keamanan Ganda</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Escrow komprehensif untuk pembeli & penjual.</p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <Users className={`w-5 h-5 ${iconAccent} mb-2`} />
                  <h4 className="text-xs font-bold text-white">Komunitas Terverifikasi</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Penjual yang sudah melewati verifikasi identitas.</p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <Headphones className={`w-5 h-5 ${iconAccent} mb-2`} />
                  <h4 className="text-xs font-bold text-white">Dukungan Terpercaya</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Bantuan 24/7 dari tim support berpengalaman.</p>
                </div>
              </div>

              <Button className={`${buttonPrimary} px-6 py-2.5`}>
                Pelajari Lebih Lanjut
              </Button>
            </div>

            <div className="hidden md:flex justify-center items-center">
              <div className="w-48 h-48 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center relative shadow-2xl shadow-red-500/20">
                <ShieldCheck className="w-28 h-28 text-red-500" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
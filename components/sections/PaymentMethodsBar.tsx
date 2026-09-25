import React from 'react';
import { container, sectionBase } from '@/lib/section-styles';

export const PaymentMethodsBar = () => {
  const methods = ['BCA', 'Mandiri', 'BNI', 'BRI', 'BSI', 'Indomaret', 'Alfamart', 'QRIS', 'VISA', 'Mastercard', 'eWallet'];

  return (
    <section className={`${sectionBase} !py-10`}>
      <div className={container}>
        <p className="text-center text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-4">
          Mendukung 200+ Metode Pembayaran Aman
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {methods.map((method, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-colors">
              {method}
            </div>
          ))}
          <span className="text-xs text-slate-500 font-medium">+200 Lagi</span>
        </div>
      </div>
    </section>
  );
};
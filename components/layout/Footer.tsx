const container = 'mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-12 pb-8">
      <div className={container}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-900">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-lg font-black text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">S</span>
              <span>SURABIE GAMES</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              Pasar online komprehensif untuk semua hal yang terkait dengan game. Kami berdedikasi untuk berinovasi demi keuntungan komunitas game global.
            </p>
            <p className="text-xs text-slate-500">© 2026 Surabie Games. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Layanan</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-red-400">Koin Game</a></li>
              <li><a href="#" className="hover:text-red-400">Item In-Game</a></li>
              <li><a href="#" className="hover:text-red-400">Jasa Joki (Boosting)</a></li>
              <li><a href="#" className="hover:text-red-400">Game Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Dukungan</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-red-400">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-red-400">GamerProtect</a></li>
              <li><a href="#" className="hover:text-red-400">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-red-400">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Komunitas</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-red-400">Discord Server</a></li>
              <li><a href="#" className="hover:text-red-400">Program Afiliasi</a></li>
              <li><a href="#" className="hover:text-red-400">Menjadi Penjual</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>Dibuat dengan dedikasi tinggi untuk gamer seluruh dunia.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Tentang Kami</a>
            <a href="#" className="hover:text-slate-300">Ketentuan Layanan</a>
            <a href="#" className="hover:text-slate-300">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
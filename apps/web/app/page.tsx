export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1420] text-white selection:bg-[#0A84FF]/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400&display=swap');
        *{font-family:Inter,sans-serif}
        .mono{font-family:JetBrains Mono,monospace}
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#0B1420]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1180px] px-5 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A84FF] grid place-items-center font-black text-[14px]">S</div>
            <span className="font-extrabold tracking-tight text-[18px] text-[#0A84FF]">SERVITRON.ID</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-zinc-400">
            <a className="hover:text-white transition">Firmware</a>
            <a className="hover:text-white transition">Skema</a>
            <a className="hover:text-white transition">Blog</a>
            <a className="px-4 py-2 rounded-full bg-white text-black font-semibold text-[12px]">Login Teknisi</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* glow */}
        <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(10,132,255,0.18),_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.25] pointer-events-none" />

        <div className="relative mx-auto max-w-[1180px] px-5 pt-20 pb-14 md:pt-28 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/20 text-[11px] mono text-[#6EB6FF] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" /> API: https://api.servitron.id • LIVE
          </div>
          <h1 className="text-[36px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[0.95]">
            SOLUSI CEPAT UNTUK<br />
            <span className="text-[#0A84FF]">TEKNISI</span> INDONESIA
          </h1>
          <p className="mt-4 text-[14px] md:text-[16px] text-zinc-400 max-w-[560px] mx-auto leading-relaxed">
            Pusat Solusi Elektronik Indonesia. Ribuan firmware TV, dump EEPROM & skema terlengkap. Deploy di Vercel berhasil!
          </p>

          {/* Search */}
          <div className="mt-8 max-w-[680px] mx-auto flex flex-col sm:flex-row gap-3 p-2 rounded-[16px] bg-white/[0.06] border border-white/[0.08] backdrop-blur">
            <input
              placeholder="Cari tipe TV, IC, chassis... ex: Polytron PLD 32T1852"
              className="flex-1 h-[48px] px-5 rounded-[12px] bg-[#111D2E] border border-white/10 outline-none text-[14px] placeholder:text-zinc-500"
            />
            <button className="h-[48px] px-7 rounded-[12px] bg-[#0A84FF] hover:bg-[#0A7AF0] font-semibold text-[14px] shadow-[0_0_24px_rgba(10,132,255,0.45)] transition">
              Cari Firmware
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-8 text-center mono">
            <div><div className="text-[18px] font-bold text-white">15.000+</div><div className="text-[11px] text-zinc-500 uppercase tracking-widest">Firmware</div></div>
            <div className="w-px bg-white/10" />
            <div><div className="text-[18px] font-bold text-white">5.200+</div><div className="text-[11px] text-zinc-500 uppercase tracking-widest">Skema</div></div>
            <div className="w-px bg-white/10" />
            <div><div className="text-[18px] font-bold text-white">12.000</div><div className="text-[11px] text-zinc-500 uppercase tracking-widest">Teknisi</div></div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1180px] px-5 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { name: "TV LED", count: "8.2k file", icon: "📺" },
            { name: "TV Tabung", count: "3.1k file", icon: "🖥️" },
            { name: "Skema", count: "5.2k file", icon: "📐" },
            { name: "Dump IC", count: "2.4k file", icon: "💾" },
          ].map((c) => (
            <div key={c.name} className="group rounded-[16px] border border-white/[0.06] bg-[#111D2E] p-4 hover:border-[#0A84FF]/30 hover:bg-[#13223A] transition cursor-pointer">
              <div className="text-[22px]">{c.icon}</div>
              <div className="mt-3 font-semibold text-[14px]">{c.name}</div>
              <div className="text-[11px] mono text-zinc-500 mt-1">{c.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-[1180px] px-5 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[16px]">Firmware Terbaru</h2>
          <a className="text-[12px] text-[#0A84FF] hover:underline">Lihat semua →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { brand: "POLYTRON", model: "PLD 32T1852", chassis: "MSD3663", dl: "1.2k" },
            { brand: "LG", model: "32LJ500D", chassis: "EAX681...", dl: "892" },
            { brand: "SAMSUNG", model: "UA32N4003", chassis: "BN94-...", dl: "2.1k" },
            { brand: "SHARP", model: "2T-C32BB1I", chassis: "TP.MS3663", dl: "654" },
            { brand: "COOCAA", model: "32S3U", chassis: "RT2841", dl: "543" },
            { brand: "TCL", model: "32D3000", chassis: "MSD308", dl: "431" },
          ].map((f) => (
            <div key={f.model} className="rounded-[14px] border border-white/[0.06] bg-[#111D2E] p-4 hover:border-white/10 transition">
              <div className="flex items-start justify-between">
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#0A84FF]/15 text-[#6EB6FF] mono font-bold">{f.brand}</span>
                <span className="text-[11px] mono text-zinc-500">{f.dl} download</span>
              </div>
              <div className="mt-3 font-semibold text-[14px]">{f.model}</div>
              <div className="text-[12px] mono text-zinc-500 mt-1">{f.chassis}</div>
              <button className="mt-3 w-full h-9 rounded-[10px] bg-white/[0.06] hover:bg-[#0A84FF] text-[12px] font-semibold transition">Download</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-8 text-center text-[11px] mono text-zinc-500">
        © 2026 SERVITRON.ID • Grobogan, Jawa Tengah • api.servitron.id
      </footer>
    </main>
  );
}


export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}
        body{background:#0B1420;color:white;overflow-x:hidden}
        .wrap{max-width:1180px;margin:0 auto;padding:0 16px;width:100%}
        .header{position:sticky;top:0;z-index:20;background:rgba(11,20,32,0.95);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.06);height:60px;display:flex;align-items:center}
        .header-inner{display:flex;justify-content:space-between;align-items:center;width:100%;gap:12px}
        .logo{font-weight:900;color:#0A84FF;letter-spacing:-0.5px;font-size:20px;white-space:nowrap;flex-shrink:0}
        .nav{font-size:13px;color:#9CA3AF;display:flex;gap:18px;align-items:center;white-space:nowrap}
        .nav a{cursor:pointer}
        .nav a:hover{color:white}
        .btn-login{background:white;color:black;padding:8px 14px;border-radius:999px;font-weight:700;font-size:12px;line-height:1;white-space:nowrap;flex-shrink:0}
        /* Mobile fix */
        @media(max-width:720px){
          .nav .hide-m{display:none}
          .header{height:56px}
          .logo{font-size:18px}
          .btn-login{padding:8px 12px;font-size:11px}
        }
        .hero{padding:44px 0 24px;text-align:center;position:relative}
        .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;background:rgba(10,132,255,0.1);border:1px solid rgba(10,132,255,0.2);font-size:11px;font-family:monospace;color:#6EB6FF;margin-bottom:18px}
        .dot{width:8px;height:8px;border-radius:50%;background:#0A84FF;box-shadow:0 0 10px #0A84FF}
        h1{font-size:32px;line-height:0.95;letter-spacing:-1.5px;font-weight:900;word-break:break-word}
        @media(min-width:768px){h1{font-size:52px}}
        h1 span{color:#0A84FF}
        .sub{color:#9CA3AF;max-width:560px;margin:14px auto 0;line-height:1.5;font-size:14px;padding:0 8px}
        .search{margin:22px auto 0;max-width:680px;display:flex;gap:8px;padding:6px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);border-radius:14px}
        .search input{flex:1;min-width:0;height:46px;padding:0 14px;border-radius:10px;background:#111D2E;border:1px solid rgba(255,255,255,0.1);color:white;outline:none;font-size:14px}
        .search button{height:46px;padding:0 16px;flex-shrink:0;white-space:nowrap;border-radius:10px;background:#0A84FF;border:none;color:white;font-weight:700;cursor:pointer;font-size:13px;box-shadow:0 0 20px rgba(10,132,255,0.35)}
        @media(min-width:768px){.search{border-radius:16px;padding:8px} .search input{height:48px;padding:0 18px;border-radius:12px} .search button{height:48px;padding:0 26px;border-radius:12px;font-size:14px}}
        .stats{margin-top:20px;display:flex;justify-content:center;gap:24px;font-family:monospace}
        .stats b{color:white;font-size:18px}
        .stats span{color:#6B7280;font-size:10px;text-transform:uppercase;letter-spacing:1px}
        .grid4{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:32px}
        @media(min-width:768px){.grid4{grid-template-columns:repeat(4,1fr);gap:12px}}
        .card{background:#111D2E;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;text-align:center}
        .firmGrid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:12px}
        @media(min-width:768px){.firmGrid{grid-template-columns:repeat(3,1fr)}}
        .firm{background:#111D2E;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;text-align:left}
        .pill{font-size:10px;padding:4px 8px;border-radius:999px;background:rgba(10,132,255,0.15);color:#6EB6FF;font-family:monospace;font-weight:700}
        .dl{margin-top:10px;width:100%;height:36px;border-radius:10px;background:rgba(255,255,255,0.06);border:none;color:white;font-weight:600;cursor:pointer}
        .footer{border-top:1px solid rgba(255,255,255,0.06);padding:22px 0;margin-top:40px;text-align:center;color:#6B7280;font-family:monospace;font-size:11px}
      `}</style>

      <div className="header">
        <div className="wrap header-inner">
          <div className="logo">SERVITRON.ID</div>
          <div className="nav">
            <a className="hide-m">Firmware</a>
            <a className="hide-m">Skema</a>
            <a className="hide-m">Blog</a>
            <div className="btn-login">Login Teknisi</div>
          </div>
        </div>
      </div>

      <div className="wrap hero">
        <div className="badge"><div className="dot"></div> API: https://api.servitron.id • LIVE</div>
        <h1>SOLUSI CEPAT UNTUK<br/>UNTUK<br/><span>TEKNISI</span><br/>INDONESIA</h1>
        <p className="sub">Pusat Solusi Elektronik Indonesia. Ribuan firmware TV, dump EEPROM & skema terlengkap. Deploy di Vercel berhasil!</p>
        
        <div className="search">
          <input placeholder="Cari tipe TV, IC, chassis..." />
          <button>Cari Firmware</button>
        </div>

        <div className="stats">
          <div><b>15.000+</b><br/><span>FIRMWARE</span></div>
          <div><b>5.200+</b><br/><span>SKEMA</span></div>
          <div><b>12.000</b><br/><span>TEKNISI</span></div>
        </div>

        <div className="grid4">
          <div className="card"><div style={{fontSize:22}}>📺</div><div style={{marginTop:8,fontWeight:700,fontSize:14}}>TV LED</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280',marginTop:2}}>8.2k file</div></div>
          <div className="card"><div style={{fontSize:22}}>🖥️</div><div style={{marginTop:8,fontWeight:700,fontSize:14}}>TV Tabung</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280',marginTop:2}}>3.1k file</div></div>
          <div className="card"><div style={{fontSize:22}}>📐</div><div style={{marginTop:8,fontWeight:700,fontSize:14}}>Skema</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280',marginTop:2}}>5.2k file</div></div>
          <div className="card"><div style={{fontSize:22}}>💾</div><div style={{marginTop:8,fontWeight:700,fontSize:14}}>Dump IC</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280',marginTop:2}}>2.4k file</div></div>
        </div>

        <div style={{textAlign:'left',marginTop:36}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h2 style={{fontSize:16,fontWeight:800}}>Firmware Terbaru</h2><a style={{color:'#0A84FF',fontSize:12}}>Lihat semua →</a></div>
          <div className="firmGrid">
            {[
              {b:'POLYTRON',m:'PLD 32T1852',c:'MSD3663',d:'1.2k'},
              {b:'LG',m:'32LJ500D',c:'EAX681...',d:'892'},
              {b:'SAMSUNG',m:'UA32N4003',c:'BN94-...',d:'2.1k'},
              {b:'SHARP',m:'2T-C32BB1I',c:'TP.MS3663',d:'654'},
              {b:'COOCAA',m:'32S3U',c:'RT2841',d:'543'},
              {b:'TCL',m:'32D3000',c:'MSD308',d:'431'},
            ].map((f:any)=>(
              <div key={f.m} className="firm">
                <div style={{display:'flex',justifyContent:'space-between'}}><span className="pill">{f.b}</span><span style={{fontSize:11,color:'#6B7280'}}>{f.d} dl</span></div>
                <div style={{marginTop:10,fontWeight:700,fontSize:14}}>{f.m}</div>
                <div style={{fontSize:12,color:'#6B7280',fontFamily:'monospace',marginTop:2}}>{f.c}</div>
                <button className="dl">Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">© 2026 SERVITRON.ID • Grobogan • api.servitron.id</div>
    </>
  );
}

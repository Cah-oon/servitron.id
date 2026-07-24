export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}
        body{background:#0B1420;color:white}
        .wrap{max-width:1180px;margin:0 auto;padding:0 20px}
        .header{position:sticky;top:0;z-index:10;background:rgba(11,20,32,0.9);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.06);height:64px;display:flex;align-items:center;justify-content:space-between}
        .logo{font-weight:900;color:#0A84FF;letter-spacing:-0.5px;font-size:19px}
        .hero{padding:80px 0 40px;text-align:center;position:relative}
        .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;background:rgba(10,132,255,0.1);border:1px solid rgba(10,132,255,0.2);font-size:11px;font-family:monospace;color:#6EB6FF;margin-bottom:18px}
        .dot{width:8px;height:8px;border-radius:50%;background:#0A84FF;box-shadow:0 0 10px #0A84FF}
        h1{font-size:52px;line-height:0.95;letter-spacing:-2px;font-weight:900}
        h1 span{color:#0A84FF}
        .sub{color:#9CA3AF;max-width:560px;margin:16px auto 0;line-height:1.5}
        .search{margin:28px auto 0;max-width:680px;display:flex;gap:10px;padding:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);border-radius:16px}
        .search input{flex:1;height:48px;padding:0 18px;border-radius:12px;background:#111D2E;border:1px solid rgba(255,255,255,0.1);color:white;outline:none}
        .search button{height:48px;padding:0 26px;border-radius:12px;background:#0A84FF;border:none;color:white;font-weight:700;cursor:pointer;box-shadow:0 0 24px rgba(10,132,255,0.45)}
        .stats{margin-top:24px;display:flex;justify-content:center;gap:28px;font-family:monospace}
        .stats b{color:white;font-size:18px}
        .stats span{color:#6B7280;font-size:11px;text-transform:uppercase;letter-spacing:1px}
        .grid4{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:40px}
        @media(min-width:768px){.grid4{grid-template-columns:repeat(4,1fr)}}
        .card{background:#111D2E;border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:16px}
        .card:hover{border-color:rgba(10,132,255,0.3)}
        .firmGrid{display:grid;grid-template-columns:1fr;gap:12px;margin-top:12px}
        @media(min-width:768px){.firmGrid{grid-template-columns:repeat(3,1fr)}}
        .firm{background:#111D2E;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:16px}
        .pill{font-size:10px;padding:4px 8px;border-radius:999px;background:rgba(10,132,255,0.15);color:#6EB6FF;font-family:monospace;font-weight:700}
        .dl{margin-top:12px;width:100%;height:36px;border-radius:10px;background:rgba(255,255,255,0.06);border:none;color:white;font-weight:600;cursor:pointer}
        .dl:hover{background:#0A84FF}
        .footer{border-top:1px solid rgba(255,255,255,0.06);padding:28px 0;margin-top:50px;text-align:center;color:#6B7280;font-family:monospace;font-size:11px}
      `}</style>

      <div className="header">
        <div className="wrap" style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
          <div className="logo">SERVITRON.ID</div>
          <div style={{display:'flex',gap:20,fontSize:13,color:'#9CA3AF'}}>
            <span>Firmware</span><span>Skema</span><span>Blog</span>
            <span style={{background:'white',color:'black',padding:'6px 14px',borderRadius:999,fontWeight:700,fontSize:12}}>Login Teknisi</span>
          </div>
        </div>
      </div>

      <div className="wrap hero">
        <div className="badge"><div className="dot"></div> API: https://api.servitron.id • LIVE</div>
        <h1>SOLUSI CEPAT UNTUK<br/><span>TEKNISI</span> INDONESIA</h1>
        <p className="sub">Pusat Solusi Elektronik Indonesia. Ribuan firmware TV, dump EEPROM & skema terlengkap. Deploy di Vercel berhasil!</p>
        
        <div className="search">
          <input placeholder="Cari tipe TV, IC, chassis... ex: Polytron PLD 32T1852" />
          <button>Cari Firmware</button>
        </div>

        <div className="stats">
          <div><b>15.000+</b><br/><span>Firmware</span></div>
          <div><b>5.200+</b><br/><span>Skema</span></div>
          <div><b>12.000</b><br/><span>Teknisi</span></div>
        </div>

        <div className="grid4">
          <div className="card"><div style={{fontSize:22}}>📺</div><div style={{marginTop:10,fontWeight:700}}>TV LED</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280'}}>8.2k file</div></div>
          <div className="card"><div style={{fontSize:22}}>🖥️</div><div style={{marginTop:10,fontWeight:700}}>TV Tabung</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280'}}>3.1k file</div></div>
          <div className="card"><div style={{fontSize:22}}>📐</div><div style={{marginTop:10,fontWeight:700}}>Skema</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280'}}>5.2k file</div></div>
          <div className="card"><div style={{fontSize:22}}>💾</div><div style={{marginTop:10,fontWeight:700}}>Dump IC</div><div style={{fontSize:11,fontFamily:'monospace',color:'#6B7280'}}>2.4k file</div></div>
        </div>

        <div style={{textAlign:'left',marginTop:50}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h2 style={{fontSize:18,fontWeight:800}}>Firmware Terbaru</h2><a style={{color:'#0A84FF',fontSize:12}}>Lihat semua →</a></div>
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
                <div style={{marginTop:12,fontWeight:700}}>{f.m}</div>
                <div style={{fontSize:12,color:'#6B7280',fontFamily:'monospace',marginTop:4}}>{f.c}</div>
                <button className="dl">Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">© 2026 SERVITRON.ID • Grobogan, Jawa Tengah • api.servitron.id</div>
    </>
  );
}

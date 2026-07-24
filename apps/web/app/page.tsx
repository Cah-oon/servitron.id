"use client";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif}
        body{background:#0B1420;color:white;overflow-x:hidden}
        .wrap{max-width:1180px;margin:0 auto;padding:0 16px;width:100%}
        .header{position:sticky;top:0;z-index:30;background:rgba(11,20,32,0.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.06);height:58px;display:flex;align-items:center}
        .header-inner{display:flex;justify-content:space-between;align-items:center;width:100%}
        .logo{font-weight:900;color:#0A84FF;letter-spacing:-0.5px;font-size:20px;white-space:nowrap}
        .nav-desktop{font-size:13px;color:#9CA3AF;display:flex;gap:22px;align-items:center}
        .nav-desktop a:hover{color:white}
        .btn-login{background:white;color:black;padding:8px 16px;border-radius:999px;font-weight:700;font-size:12px;cursor:pointer}
        .hamburger{display:none;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);width:38px;height:38px;border-radius:10px;color:white;font-size:18px;cursor:pointer}
        .mobile-menu{display:none;position:absolute;top:58px;left:0;right:0;background:#0F1D32;border-bottom:1px solid rgba(255,255,255,0.08);padding:12px 16px;flex-direction:column;gap:2px;z-index:20}
        .mobile-menu.open{display:flex}
        .mobile-menu a{padding:12px 12px;border-radius:10px;color:#9CA3AF;font-size:14px;text-decoration:none}
        .mobile-menu a:hover{background:rgba(255,255,255,0.06);color:white}
        .mobile-menu .btn-login-m{margin-top:8px;background:#0A84FF;color:white;text-align:center;padding:12px;border-radius:10px;font-weight:700}
        @media(max-width:800px){
          .nav-desktop{display:none}
          .hamburger{display:grid;place-items:center}
        }
        .hero{padding:36px 0 20px;text-align:center}
        .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:rgba(10,132,255,0.1);border:1px solid rgba(10,132,255,0.2);font-size:11px;font-family:monospace;color:#6EB6FF;margin-bottom:16px}
        .dot{width:8px;height:8px;border-radius:50%;background:#0A84FF;box-shadow:0 0 10px #0A84FF}
        h1{font-size:32px;line-height:0.95;letter-spacing:-1.5px;font-weight:900}
        @media(min-width:768px){h1{font-size:54px;letter-spacing:-2px}}
        h1 span{color:#0A84FF}
        .sub{color:#9CA3AF;max-width:560px;margin:14px auto 0;line-height:1.6;font-size:14px;padding:0 4px}
        .search{margin:22px auto 0;max-width:680px;display:flex;gap:8px;padding:6px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);border-radius:14px}
        .search input{flex:1;min-width:0;height:46px;padding:0 14px;border-radius:10px;background:#111D2E;border:1px solid rgba(255,255,255,0.1);color:white;outline:none;font-size:14px}
        .search button{height:46px;padding:0 18px;flex-shrink:0;white-space:nowrap;border-radius:10px;background:#0A84FF;border:none;color:white;font-weight:700;cursor:pointer;font-size:13px}
        .stats{margin-top:20px;display:flex;justify-content:center;gap:28px;font-family:monospace}
        .stats b{color:white;font-size:18px}
        .stats span{color:#6B7280;font-size:10px;text-transform:uppercase;letter-spacing:1px}
        .grid4{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:32px}
        @media(min-width:768px){.grid4{grid-template-columns:repeat(4,1fr)}}
        .card{background:#111D2E;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;text-align:center}
        .firmGrid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:12px}
        @media(min-width:768px){.firmGrid{grid-template-columns:repeat(3,1fr)}}
        .firm{background:#111D2E;border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:14px;text-align:left}
        .pill{font-size:10px;padding:4px 8px;border-radius:999px;background:rgba(10,132,255,0.15);color:#6EB6FF;font-family:monospace;font-weight:700}
        .dl{margin-top:10px;width:100%;height:36px;border-radius:10px;background:rgba(255,255,255,0.06);border:none;color:white;font-weight:600;cursor:pointer}
        .footer{border-top:1px solid rgba(255,255,255,0.06);padding:28px 0 40px;margin-top:36px;text-align:center;color:#6B7280;font-family:monospace;font-size:11px;line-height:1.6}
      `}</style>

      <div className="header">
        <div className="wrap header-inner">
          <div className="logo">SERVITRON.ID</div>
          
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div className="nav-desktop">
              <a>Firmware</a>
              <a>Skema</a>
              <a>Blog</a>
              <div className="btn-login">Login Teknisi</div>
            </div>
            <button className="hamburger" onClick={()=>setOpen(!open)}>{open ? '✕' : '☰'}</button>
          </div>
        </div>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          <a onClick={()=>setOpen(false)}>📁 Firmware</a>
          <a onClick={()=>setOpen(false)}>📐 Skema</a>
          <a onClick={()=>setOpen(false)}>📝 Blog</a>
          <a className="btn-login-m" onClick={()=>setOpen(false)}>Login Teknisi</a>
        </div>
      </div>

      <div className="wrap hero">
        <div className="badge"><div className="dot"></div> API: https://api.servitron.id • LIVE</div>
        <h1>SOLUSI CEPAT UNTUK<br/><span>TEKNISI</span><br/>INDONESIA</h1>
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

      <div className="footer">
        <div className="wrap">
          © 2026 SERVITRON.ID • Grobogan • api.servitron.id<br/>
          Pusat Solusi Elektronik Indonesia • Made for Teknisi
        </div>
      </div>
    </>
  );
}

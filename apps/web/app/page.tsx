export default function Home() {
  return (
    <main style={{background:'#0B1220', color:'white', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'48px', fontWeight:900, background:'linear-gradient(90deg,#0A84FF,#00D1FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>SERVITRON.ID</h1>
        <p>Pusat Solusi Elektronik Indonesia - Deploy di Vercel berhasil!</p>
        <p style={{marginTop:20, color:'#9CA3AF'}}>API: {process.env.NEXT_PUBLIC_API_URL}</p>
        <a href="/firmware" style={{display:'inline-block', marginTop:24, background:'#0A84FF', padding:'12px 24px', borderRadius:12, color:'white', textDecoration:'none'}}>Cari Firmware</a>
      </div>
    </main>
  )
}

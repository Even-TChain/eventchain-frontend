export default function Index() {
  return (
    <div style={{minHeight:'100vh',background:'#080c10',color:'#e8eaf0',fontFamily:'system-ui,sans-serif',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'24px'}}>
      <div style={{fontSize:40,marginBottom:16}}>⛓️</div>
      <h1 style={{fontSize:48,fontWeight:800,marginBottom:8}}>
        Event<span style={{color:'#f59e0b'}}>Chain</span>
      </h1>
      <p style={{fontSize:18,color:'#94a3b8',maxWidth:480,marginBottom:32,lineHeight:1.7}}>
        Plataforma de inversión en eventos sobre blockchain. Presupuestos públicos, avales bloqueados y distribución automática de ganancias.
      </p>
      <div style={{display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center'}}>
        <a href="/events" style={{padding:'12px 28px',background:'#f59e0b',color:'#000',borderRadius:8,fontWeight:700,textDecoration:'none',fontSize:16}}>Ver Eventos →</a>
        <a href="/connect" style={{padding:'12px 28px',background:'transparent',color:'#e8eaf0',borderRadius:8,fontWeight:600,textDecoration:'none',fontSize:16,border:'1px solid #334155'}}>Conectar Wallet</a>
      </div>
      <div style={{display:'flex',gap:48,marginTop:56}}>
        {[['$205K','Financiado'],['12','Eventos activos'],['847','Inversores']].map(([v,l])=>(
          <div key={l}>
            <p style={{fontSize:28,fontWeight:800,color:'#f59e0b',fontFamily:'monospace'}}>{v}</p>
            <p style={{fontSize:13,color:'#64748b'}}>{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
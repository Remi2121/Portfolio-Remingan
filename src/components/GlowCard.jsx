export default function GlowCard({children, style}){
  return <div className="card" style={{padding:10, ...style}}>{children}</div>
}

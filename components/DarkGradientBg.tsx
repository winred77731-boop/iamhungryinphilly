import type React from "react"

interface DarkGradientBgProps {
  children?: React.ReactNode
  className?: string
}

export function DarkGradientBg({ children, className }: DarkGradientBgProps) {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: 'linear-gradient(to bottom, rgb(46, 46, 46) 0%, rgb(20, 20, 20) 40%, rgb(0, 0, 0) 100%)',
            mask: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          {/* Vertical light reflections — matching the Schuylkill River hero image */}
          {/* Far-left amber */}
          <div className="absolute inset-0 opacity-30" style={{
            background: 'linear-gradient(to bottom, rgba(255,174,51,0.9) 0%, rgba(255,174,51,0.4) 45%, rgba(255,174,51,0.05) 80%, transparent 100%)',
            mask: 'linear-gradient(90deg, transparent 2%, black 4%, black 6%, transparent 8%)',
          }} />
          {/* White/blue building */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(234,246,255,0.85) 0%, rgba(120,200,255,0.3) 55%, transparent 90%)',
            mask: 'linear-gradient(90deg, transparent 10%, black 12%, black 14%, transparent 16%)',
          }} />
          {/* Blue tower */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(120,200,255,0.8) 0%, rgba(120,200,255,0.25) 55%, transparent 85%)',
            mask: 'linear-gradient(90deg, transparent 18%, black 20%, black 22%, transparent 24%)',
          }} />
          {/* White/blue bright */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(234,246,255,0.85) 0%, rgba(234,246,255,0.3) 50%, transparent 88%)',
            mask: 'linear-gradient(90deg, transparent 24%, black 26%, black 29%, transparent 31%)',
          }} />
          {/* Red/magenta Liberty Place */}
          <div className="absolute inset-0 opacity-20" style={{
            background: 'linear-gradient(to bottom, rgba(255,42,109,0.8) 0%, rgba(255,42,109,0.25) 50%, transparent 82%)',
            mask: 'linear-gradient(90deg, transparent 30%, black 32%, black 34%, transparent 36%)',
          }} />
          {/* Center white/blue */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(234,246,255,0.85) 0%, rgba(120,200,255,0.3) 55%, transparent 90%)',
            mask: 'linear-gradient(90deg, transparent 36%, black 38%, black 40%, transparent 42%)',
          }} />
          {/* Red/magenta Liberty Place 2 */}
          <div className="absolute inset-0 opacity-20" style={{
            background: 'linear-gradient(to bottom, rgba(255,42,109,0.8) 0%, rgba(255,42,109,0.25) 48%, transparent 80%)',
            mask: 'linear-gradient(90deg, transparent 41%, black 43%, black 45%, transparent 47%)',
          }} />
          {/* Red/magenta Liberty Place 3 */}
          <div className="absolute inset-0 opacity-20" style={{
            background: 'linear-gradient(to bottom, rgba(255,42,109,0.75) 0%, rgba(255,42,109,0.22) 48%, transparent 78%)',
            mask: 'linear-gradient(90deg, transparent 46%, black 48%, black 50%, transparent 52%)',
          }} />
          {/* Center white/blue */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(234,246,255,0.8) 0%, rgba(120,200,255,0.25) 55%, transparent 88%)',
            mask: 'linear-gradient(90deg, transparent 52%, black 54%, black 56%, transparent 58%)',
          }} />
          {/* Amber streetlight */}
          <div className="absolute inset-0 opacity-30" style={{
            background: 'linear-gradient(to bottom, rgba(255,174,51,0.9) 0%, rgba(255,174,51,0.35) 35%, transparent 70%)',
            mask: 'linear-gradient(90deg, transparent 58%, black 60%, black 63%, transparent 65%)',
          }} />
          {/* Amber streetlight */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(255,174,51,0.85) 0%, rgba(255,174,51,0.3) 35%, transparent 68%)',
            mask: 'linear-gradient(90deg, transparent 66%, black 68%, black 70%, transparent 72%)',
          }} />
          {/* White/blue distant */}
          <div className="absolute inset-0 opacity-20" style={{
            background: 'linear-gradient(to bottom, rgba(234,246,255,0.7) 0%, rgba(120,200,255,0.2) 50%, transparent 85%)',
            mask: 'linear-gradient(90deg, transparent 74%, black 76%, black 78%, transparent 80%)',
          }} />
          {/* Amber streetlight */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(255,174,51,0.85) 0%, rgba(255,174,51,0.28) 35%, transparent 65%)',
            mask: 'linear-gradient(90deg, transparent 81%, black 83%, black 85%, transparent 87%)',
          }} />
          {/* White/blue distant */}
          <div className="absolute inset-0 opacity-20" style={{
            background: 'linear-gradient(to bottom, rgba(234,246,255,0.7) 0%, rgba(120,200,255,0.18) 50%, transparent 84%)',
            mask: 'linear-gradient(90deg, transparent 88%, black 90%, black 92%, transparent 94%)',
          }} />
          {/* Amber far-right */}
          <div className="absolute inset-0 opacity-25" style={{
            background: 'linear-gradient(to bottom, rgba(255,174,51,0.8) 0%, rgba(255,174,51,0.25) 35%, transparent 62%)',
            mask: 'linear-gradient(90deg, transparent 94%, black 96%, black 98%, transparent 100%)',
          }} />
        </div>
      </div>

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
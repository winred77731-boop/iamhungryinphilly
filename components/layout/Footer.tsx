export default function Footer() {
  return (
    <footer className="bg-base-dark border-t border-border-dark pt-20 pb-10">
      <div className="container-wide">
        {/* Marquee text — Agenko pattern */}
        <div className="mb-20 overflow-hidden">
          <div className="marquee-wrap">
            <div className="marquee-inner">
              <span className="marquee-item">I Am Hungry In Philadelphia</span>
              <span className="marquee-item">·</span>
              <span className="marquee-item">The Many Faces of Food Insecurity</span>
              <span className="marquee-item">·</span>
              <span className="marquee-item">I Am Hungry In Philadelphia</span>
              <span className="marquee-item">·</span>
              <span className="marquee-item">The Many Faces of Food Insecurity</span>
              <span className="marquee-item">·</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-source-sans)" }}>
              I Am Hungry <span className="text-accent">In Philadelphia</span>
            </h3>
            <p className="text-sm text-text-muted mb-4 max-w-md leading-relaxed">
              A documentary film exploring hunger in one of America's largest cities. The Many Faces of Food Insecurity.
            </p>
            <p className="text-xs text-white/30">Philadelphia, PA</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-source-sans)" }}>Explore</h4>
            <div className="flex flex-col gap-3">
              <a href="#synopsis" className="text-sm text-text-muted hover:text-accent transition-colors">The Film</a>
              <a href="#stats" className="text-sm text-text-muted hover:text-accent transition-colors">The Issue</a>
              <a href="#proposal" className="text-sm text-text-muted hover:text-accent transition-colors">Proposal</a>
              <a href="#team" className="text-sm text-text-muted hover:text-accent transition-colors">Team</a>
              <a href="#gallery" className="text-sm text-text-muted hover:text-accent transition-colors">Gallery</a>
            </div>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-source-sans)" }}>The Team</h4>
            <div className="flex flex-col gap-3 text-sm text-text-muted">
              <span>Directed by Kaloni Davis</span>
              <span>Story by David J. Greenberg</span>
              <span>Produced by Harry Hayman</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} I Am Hungry In Philadelphia. All rights reserved.
          </p>
          <a href="#top" className="text-xs text-text-muted hover:text-accent transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
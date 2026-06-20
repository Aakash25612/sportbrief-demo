import { Link } from 'react-router-dom'
import { BadgeCheck, Briefcase, CreditCard, Shield, Upload, Users } from 'lucide-react'

const features = [
  { icon: Briefcase, title: 'Brand briefs', desc: 'Post campaign briefs with budget, sport niche, and deliverable specs.' },
  { icon: Users, title: 'Verified creators', desc: 'Connect with authenticated sports participants — college, semi-pro, and pro.' },
  { icon: Upload, title: 'Content delivery', desc: 'Creators submit assets in-platform with revision rounds and approval workflow.' },
  { icon: CreditCard, title: 'Seamless payments', desc: 'Escrow, milestone releases, and automated payouts on content approval.' },
]

export default function Landing() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <span className="logo">SportBrief</span>
        <Link to="/login" className="btn btn-primary btn-sm">Sign in</Link>
      </nav>

      <section className="hero">
        <p className="hero-label">Sports UGC Marketplace</p>
        <h1>Connect brands with verified sports creators.</h1>
        <p className="hero-sub">
          Post briefs, review applications, approve content, and pay creators — all in one platform built for sports marketing.
        </p>
        <div className="hero-actions">
          <Link to="/login" className="btn btn-primary">Explore demo</Link>
          <Link to="/login" className="btn btn-secondary">View portals</Link>
        </div>
        <div className="hero-tags">
          {['Marketplace', 'Verified athletes', 'Escrow payments', 'Content approval', 'Stripe'].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Platform capabilities</h2>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="roles-section">
        <h2>Three portals</h2>
        <div className="roles-grid">
          <Link to="/login" className="role-card role-blue">
            <div className="role-icon"><Briefcase size={22} /></div>
            <h3>Brand Portal</h3>
            <p>Create briefs, shortlist creators, review deliverables, and manage campaign payments.</p>
          </Link>
          <Link to="/login" className="role-card role-green">
            <div className="role-icon"><BadgeCheck size={22} /></div>
            <h3>Creator Portal</h3>
            <p>Browse sports briefs, apply with your profile, upload content, and track earnings.</p>
          </Link>
          <Link to="/login" className="role-card role-purple">
            <div className="role-icon"><Shield size={22} /></div>
            <h3>Admin</h3>
            <p>Verify athletes, monitor platform activity, and oversee marketplace health.</p>
          </Link>
        </div>
      </section>

      <section className="stack-section">
        <p className="stack-label">Project scope</p>
        <div className="stack-pills">
          {['UGC marketplace', 'Brief workflow', 'Content approval', 'Creator verification', 'Stripe Connect'].map((t) => (
            <span key={t} className="stack-pill">{t}</span>
          ))}
        </div>
        <p className="stack-note">Frontend demo — full-stack marketplace with RBAC, escrow, and sport-specific profiles.</p>
      </section>

      <footer className="landing-footer">SportBrief · Sports UGC Marketplace Demo</footer>
    </div>
  )
}

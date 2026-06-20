import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Briefcase, CreditCard, Shield, Upload, Users, Zap } from 'lucide-react'

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
        <div className="brand">
          <Zap size={24} />
          <span><strong>SportBrief</strong></span>
        </div>
        <Link to="/login" className="btn btn-primary btn-sm">Sign in</Link>
      </nav>

      <section className="hero">
        <p className="eyebrow">Sports UGC Marketplace</p>
        <h1>Connect brands with verified sports creators</h1>
        <p>
          Post briefs, review applications, approve content, and pay creators — all in one platform built for sports marketing.
        </p>
        <div className="hero-actions">
          <Link to="/login" className="btn btn-primary">Explore demo <ArrowRight size={16} /></Link>
          <Link to="/login" className="btn btn-secondary">View portals</Link>
        </div>
        <div className="stack-row">
          {['Marketplace', 'Verified athletes', 'Escrow payments', 'Content approval', 'Stripe integration'].map((t) => (
            <span key={t} className="stack-pill">{t}</span>
          ))}
        </div>
      </section>

      <section className="features">
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

      <section className="portals">
        <h2>Three portals</h2>
        <div className="portal-grid">
          <Link to="/login" className="portal-card portal-orange">
            <div className="portal-icon"><Briefcase size={24} /></div>
            <h3>Brand Portal</h3>
            <p>Create briefs, shortlist creators, review deliverables, and manage campaign payments.</p>
            <span className="portal-link">Brand demo <ArrowRight size={14} /></span>
          </Link>
          <Link to="/login" className="portal-card portal-green">
            <div className="portal-icon"><BadgeCheck size={24} /></div>
            <h3>Creator Portal</h3>
            <p>Browse sports briefs, apply with your profile, upload content, and track earnings.</p>
            <span className="portal-link">Creator demo <ArrowRight size={14} /></span>
          </Link>
          <Link to="/login" className="portal-card portal-slate">
            <div className="portal-icon"><Shield size={24} /></div>
            <h3>Admin</h3>
            <p>Verify athletes, monitor platform activity, and oversee marketplace health.</p>
            <span className="portal-link">Admin demo <ArrowRight size={14} /></span>
          </Link>
        </div>
      </section>

      <section className="spec-banner">
        <h3>Project scope</h3>
        <ul>
          <li>Sports-focused UGC marketplace connecting brands and verified participants</li>
          <li>Brief posting, creator applications, and content delivery workflow</li>
          <li>Multi-step approval with revision requests and escrow payments</li>
          <li>Creator verification, sport-specific profiles, and rating system</li>
          <li>Stripe Connect for brand billing and creator payouts</li>
        </ul>
      </section>
    </div>
  )
}

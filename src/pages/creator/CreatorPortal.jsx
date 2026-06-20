import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Briefcase, Clock, DollarSign, Send, Star, Upload } from 'lucide-react'
import { applications, briefs, deliverables, payments, stats, statusLabels } from '../../data/mockData'
import { useApp } from '../../context/AppContext'

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div>
        <h1>{title}</h1>
        <p className="muted">{subtitle}</p>
      </div>
    </div>
  )
}

export default function CreatorDashboard() {
  const { currentUser } = useApp()
  const s = stats.creator
  const myApps = applications.filter((a) => a.creator === currentUser.name)
  const myDeliverables = deliverables.filter((d) => d.creator === currentUser.name)

  return (
    <div className="page">
      <PageHeader title={`Welcome, ${currentUser.name}`} subtitle="Verified basketball creator" />
      <div className="card profile-banner">
        <div className="avatar">{currentUser.name.charAt(0)}</div>
        <div>
          <div className="profile-top">
            <strong>{currentUser.name}</strong>
            {currentUser.verified && <span className="verified-chip"><BadgeCheck size={12} /> Verified</span>}
          </div>
          <p className="muted">{currentUser.sport} · {currentUser.followers} followers · {currentUser.rating} rating</p>
        </div>
      </div>

      <div className="stat-grid four">
        <div className="stat-card"><Briefcase size={20} /><strong>{s.activeGigs}</strong><span>Active gigs</span></div>
        <div className="stat-card"><Send size={20} /><strong>{s.applications}</strong><span>Applications</span></div>
        <div className="stat-card"><DollarSign size={20} /><strong>{s.earnings}</strong><span>Total earnings</span></div>
        <div className="stat-card"><Star size={20} /><strong>{s.approvalRate}</strong><span>Approval rate</span></div>
      </div>

      <div className="two-col">
        <div className="card">
          <div className="card-head">
            <h2>Recommended briefs</h2>
            <Link to="/creator/browse" className="link-sm">Browse <ArrowRight size={14} /></Link>
          </div>
          {briefs.filter((b) => b.status === 'open').slice(0, 2).map((b) => (
            <div key={b.id} className="list-row">
              <div>
                <strong>{b.title}</strong>
                <span className="row-meta">{b.sport} · {b.budget}</span>
              </div>
              <button type="button" className="btn btn-primary btn-sm">Apply</button>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-head">
            <h2>Your submissions</h2>
            <Link to="/creator/deliverables" className="link-sm">View all <ArrowRight size={14} /></Link>
          </div>
          {myDeliverables.length ? myDeliverables.map((d) => (
            <div key={d.id} className="list-row">
              <div>
                <strong>{d.brief}</strong>
                <span className="row-meta">Submitted {d.submitted}</span>
              </div>
              <span className={`badge status-${d.status}`}>{statusLabels[d.status]}</span>
            </div>
          )) : (
            <p className="muted">No submissions yet.</p>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-head"><h2>Recent applications</h2></div>
        {myApps.map((a) => (
          <div key={a.id} className="list-row">
            <div>
              <strong>{a.brief}</strong>
              <span className="row-meta">Applied {a.applied}</span>
            </div>
            <span className={`badge status-${a.status}`}>{statusLabels[a.status]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CreatorBrowse() {
  return (
    <div className="page">
      <PageHeader title="Browse briefs" subtitle="Find sports UGC opportunities matched to your profile" />
      <div className="filter-bar">
        {['All sports', 'Basketball', 'Soccer', 'Running', 'CrossFit'].map((f, i) => (
          <button key={f} type="button" className={`filter-chip ${i === 0 ? 'active' : ''}`}>{f}</button>
        ))}
      </div>
      <div className="brief-grid">
        {briefs.filter((b) => b.status === 'open').map((b) => (
          <div key={b.id} className="brief-card">
            <div className="brief-top">
              <span className="sport-tag">{b.sport}</span>
              <span className="brand-name">{b.brand}</span>
            </div>
            <h3>{b.title}</h3>
            <p className="brief-desc">{b.requirements}</p>
            <div className="brief-meta">
              <span><DollarSign size={14} /> {b.budget}</span>
              <span><Clock size={14} /> Due {b.deadline}</span>
            </div>
            <p className="deliverable-line"><strong>Deliverables:</strong> {b.deliverables}</p>
            <button type="button" className="btn btn-primary btn-sm btn-full">Apply to brief</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CreatorApplications() {
  const { currentUser } = useApp()
  const myApps = applications.filter((a) => a.creator === currentUser.name)

  return (
    <div className="page">
      <PageHeader title="My applications" subtitle="Track status of your brief applications" />
      {myApps.map((a) => (
        <div key={a.id} className="card list-card">
          <div className="list-row">
            <div>
              <strong>{a.brief}</strong>
              <span className="row-meta">Applied {a.applied}</span>
            </div>
            <span className={`badge status-${a.status}`}>{statusLabels[a.status]}</span>
          </div>
          {a.status === 'accepted' && (
            <div className="card-footer">
              <button type="button" className="btn btn-primary btn-sm"><Upload size={14} /> Upload deliverable</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function CreatorDeliverables() {
  const { currentUser } = useApp()
  const myDeliverables = deliverables.filter((d) => d.creator === currentUser.name)

  return (
    <div className="page">
      <PageHeader title="Deliverables" subtitle="Upload and track your content submissions" />
      <div className="card upload-zone">
        <Upload size={32} />
        <strong>Upload new content</strong>
        <p className="muted">Drag & drop video files or click to browse</p>
        <button type="button" className="btn btn-primary btn-sm">Select files</button>
      </div>
      {myDeliverables.map((d) => (
        <div key={d.id} className="card deliverable-card compact">
          <div className="deliverable-preview small"><div className="preview-placeholder">{d.type}</div></div>
          <div className="deliverable-info">
            <span className={`badge status-${d.status}`}>{statusLabels[d.status]}</span>
            <h3>{d.brief}</h3>
            <p className="muted">Submitted {d.submitted} · Revision {d.revision}</p>
            {d.status === 'revision_requested' && (
              <p className="revision-note">Brand requested: clearer product placement in opening shot.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export function CreatorEarnings() {
  const { currentUser } = useApp()
  const myPayments = payments.filter((p) => p.creator === currentUser.name)

  return (
    <div className="page">
      <PageHeader title="Earnings" subtitle="Payment history and payout settings" />
      <div className="card highlight">
        <div>
          <p className="card-label">Available balance</p>
          <strong className="big-num">$2,500</strong>
          <p className="muted">Pending content approval</p>
        </div>
        <button type="button" className="btn btn-secondary btn-sm">Payout settings</button>
      </div>
      <div className="card table-card">
        <h2>Payment history</h2>
        <table>
          <thead>
            <tr><th>Brief</th><th>Amount</th><th>Status</th><th>Date</th></tr>
          </thead>
          <tbody>
            {myPayments.map((p) => (
              <tr key={p.id}>
                <td>{p.brief}</td>
                <td><strong>{p.amount}</strong></td>
                <td><span className={`badge status-${p.status}`}>{statusLabels[p.status]}</span></td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

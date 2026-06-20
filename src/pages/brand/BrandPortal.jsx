import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Clock, DollarSign, FileCheck, Plus, Users } from 'lucide-react'
import { applications, briefs, deliverables, payments, stats, statusLabels } from '../../data/mockData'

function PageHeader({ title, action }) {
  return (
    <div className="page-header">
      <div>
        <h1>{title}</h1>
        <p className="muted">Peak Performance Co. — campaign management</p>
      </div>
      {action}
    </div>
  )
}

export default function BrandDashboard() {
  const s = stats.brand
  const pendingDeliverables = deliverables.filter((d) => d.status === 'pending_review' || d.status === 'revision_requested')

  return (
    <div className="page">
      <PageHeader title="Brand dashboard" action={<button type="button" className="btn btn-primary btn-sm"><Plus size={14} /> New brief</button>} />
      <div className="stat-grid four">
        <div className="stat-card"><Briefcase size={20} /><strong>{s.activeBriefs}</strong><span>Active briefs</span></div>
        <div className="stat-card"><Users size={20} /><strong>{s.pendingApps}</strong><span>Pending applications</span></div>
        <div className="stat-card warn"><FileCheck size={20} /><strong>{s.awaitingApproval}</strong><span>Awaiting approval</span></div>
        <div className="stat-card"><DollarSign size={20} /><strong>{s.spent}</strong><span>Total spent</span></div>
      </div>

      <div className="two-col">
        <div className="card">
          <div className="card-head">
            <h2>Open briefs</h2>
            <Link to="/brand/briefs" className="link-sm">View all <ArrowRight size={14} /></Link>
          </div>
          {briefs.filter((b) => b.status === 'open').slice(0, 3).map((b) => (
            <div key={b.id} className="list-row">
              <div>
                <strong>{b.title}</strong>
                <span className="row-meta">{b.sport} · {b.budget} · {b.applicants} applicants</span>
              </div>
              <span className={`badge status-${b.status}`}>{statusLabels[b.status]}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-head">
            <h2>Content to review</h2>
            <Link to="/brand/deliverables" className="link-sm">Review <ArrowRight size={14} /></Link>
          </div>
          {pendingDeliverables.map((d) => (
            <div key={d.id} className="list-row">
              <div>
                <strong>{d.brief}</strong>
                <span className="row-meta">{d.creator} · {d.type}</span>
              </div>
              <span className={`badge status-${d.status}`}>{statusLabels[d.status]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BrandBriefs() {
  return (
    <div className="page">
      <PageHeader title="Campaign briefs" action={<button type="button" className="btn btn-primary btn-sm"><Plus size={14} /> Post brief</button>} />
      <div className="brief-grid">
        {briefs.map((b) => (
          <div key={b.id} className="brief-card">
            <div className="brief-top">
              <span className={`badge status-${b.status}`}>{statusLabels[b.status]}</span>
              <span className="sport-tag">{b.sport}</span>
            </div>
            <h3>{b.title}</h3>
            <p className="brief-desc">{b.requirements}</p>
            <div className="brief-meta">
              <span><DollarSign size={14} /> {b.budget}</span>
              <span><Clock size={14} /> {b.deadline}</span>
              <span><Users size={14} /> {b.applicants} applied · {b.slots} slots</span>
            </div>
            <p className="deliverable-line"><strong>Deliverables:</strong> {b.deliverables}</p>
            <button type="button" className="btn btn-secondary btn-sm btn-full">Manage brief</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BrandApplications() {
  return (
    <div className="page">
      <PageHeader title="Creator applications" />
      <div className="card table-card">
        <table>
          <thead>
            <tr><th>Creator</th><th>Brief</th><th>Sport</th><th>Followers</th><th>Applied</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {applications.map((a) => (
              <tr key={a.id}>
                <td><strong>{a.creator}</strong></td>
                <td>{a.brief}</td>
                <td>{a.sport}</td>
                <td>{a.followers}</td>
                <td>{a.applied}</td>
                <td><span className={`badge status-${a.status}`}>{statusLabels[a.status]}</span></td>
                <td>
                  {a.status === 'pending' && (
                    <div className="row-actions">
                      <button type="button" className="btn btn-ghost btn-sm">Shortlist</button>
                      <button type="button" className="btn btn-primary btn-sm">Accept</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function BrandDeliverables() {
  return (
    <div className="page">
      <PageHeader title="Content review" />
      {deliverables.map((d) => (
        <div key={d.id} className="card deliverable-card">
          <div className="deliverable-preview">
            <div className="preview-placeholder">{d.type}</div>
          </div>
          <div className="deliverable-info">
            <span className={`badge status-${d.status}`}>{statusLabels[d.status]}</span>
            <h3>{d.brief}</h3>
            <p className="muted">{d.creator} · Submitted {d.submitted} · Revision {d.revision}</p>
            <div className="deliverable-actions">
              {d.status === 'pending_review' && (
                <>
                  <button type="button" className="btn btn-secondary btn-sm">Request revision</button>
                  <button type="button" className="btn btn-primary btn-sm">Approve & release payment</button>
                </>
              )}
              {d.status === 'revision_requested' && <button type="button" className="btn btn-secondary btn-sm">View revision notes</button>}
              {d.status === 'approved' && <button type="button" className="btn btn-primary btn-sm">Release payment</button>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function BrandPayments() {
  return (
    <div className="page">
      <PageHeader title="Payments" />
      <div className="card highlight">
        <div>
          <p className="card-label">Escrow balance</p>
          <strong className="big-num">$5,300</strong>
          <p className="muted">Held until content approval</p>
        </div>
        <button type="button" className="btn btn-secondary btn-sm">Payment settings</button>
      </div>
      <div className="card table-card">
        <h2>Transaction history</h2>
        <table>
          <thead>
            <tr><th>Brief</th><th>Creator</th><th>Amount</th><th>Status</th><th>Date</th></tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.brief}</td>
                <td>{p.creator}</td>
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

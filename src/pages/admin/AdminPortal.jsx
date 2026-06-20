import { BadgeCheck, Building2, DollarSign, TrendingUp, Users } from 'lucide-react'
import { activity, creators, stats } from '../../data/mockData'

export default function AdminDashboard() {
  const s = stats.admin

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Platform overview</h1>
          <p className="muted">SportBrief marketplace health</p>
        </div>
      </div>
      <div className="stat-grid four">
        <div className="stat-card"><Building2 size={20} /><strong>{s.brands}</strong><span>Active brands</span></div>
        <div className="stat-card"><Users size={20} /><strong>{s.creators}</strong><span>Total creators</span></div>
        <div className="stat-card"><BadgeCheck size={20} /><strong>{s.verifiedCreators}</strong><span>Verified athletes</span></div>
        <div className="stat-card"><DollarSign size={20} /><strong>{s.gmv}</strong><span>GMV this quarter</span></div>
      </div>
      <div className="two-col">
        <div className="card">
          <h2>Recent activity</h2>
          {activity.map((a, i) => (
            <div key={i} className="activity-row">
              <span className="activity-time">{a.time}</span>
              <span>{a.event}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <h2>Marketplace trends</h2>
          <div className="trend-item">
            <TrendingUp size={18} />
            <div>
              <strong>Basketball briefs up 34%</strong>
              <p className="muted">Most active sport category this month</p>
            </div>
          </div>
          <div className="trend-item">
            <TrendingUp size={18} />
            <div>
              <strong>Avg. approval time: 2.1 days</strong>
              <p className="muted">Down from 3.4 days last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdminCreators() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Creator verification</h1>
          <p className="muted">Manage verified sports participants</p>
        </div>
      </div>
      <div className="card table-card">
        <table>
          <thead>
            <tr><th>Creator</th><th>Sport</th><th>Followers</th><th>Rating</th><th>Gigs</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {creators.map((c) => (
              <tr key={c.id}>
                <td><strong>{c.name}</strong></td>
                <td>{c.sport}</td>
                <td>{c.followers}</td>
                <td>{c.rating}</td>
                <td>{c.gigs}</td>
                <td>
                  {c.verified
                    ? <span className="verified-chip"><BadgeCheck size={12} /> Verified</span>
                    : <span className="badge status-pending">Pending</span>}
                </td>
                <td>
                  {!c.verified && <button type="button" className="btn btn-primary btn-sm">Verify</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function AdminActivity() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Activity log</h1>
          <p className="muted">Real-time marketplace events</p>
        </div>
      </div>
      <div className="card">
        {activity.map((a, i) => (
          <div key={i} className="activity-row">
            <span className="activity-time">{a.time}</span>
            <span>{a.event}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LogOut, Zap } from 'lucide-react'
import { useApp } from '../context/AppContext'

const navByRole = {
  brand: [
    { to: '/brand', label: 'Dashboard', end: true },
    { to: '/brand/briefs', label: 'Briefs' },
    { to: '/brand/applications', label: 'Applications' },
    { to: '/brand/deliverables', label: 'Content review' },
    { to: '/brand/payments', label: 'Payments' },
  ],
  creator: [
    { to: '/creator', label: 'Dashboard', end: true },
    { to: '/creator/browse', label: 'Browse briefs' },
    { to: '/creator/applications', label: 'My applications' },
    { to: '/creator/deliverables', label: 'Deliverables' },
    { to: '/creator/earnings', label: 'Earnings' },
  ],
  admin: [
    { to: '/admin', label: 'Overview', end: true },
    { to: '/admin/creators', label: 'Creators' },
    { to: '/admin/activity', label: 'Activity' },
  ],
}

const roleLabels = { brand: 'Brand Portal', creator: 'Creator Portal', admin: 'Admin' }

export default function Layout() {
  const { currentUser, logout } = useApp()
  const navigate = useNavigate()
  const nav = currentUser ? navByRole[currentUser.role] || [] : []

  return (
    <div className="app">
      {currentUser && (
        <header className="topbar">
          <Link to="/" className="brand">
            <Zap size={22} />
            <span>
              <strong>SportBrief</strong>
              <small>{roleLabels[currentUser.role]}</small>
            </span>
          </Link>
          <nav className="nav">
            {nav.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="topbar-right">
            {currentUser.role === 'creator' && currentUser.verified && (
              <span className="verified-chip">Verified athlete</span>
            )}
            {currentUser.company && <span className="meta-chip">{currentUser.company}</span>}
            {currentUser.sport && <span className="meta-chip">{currentUser.sport}</span>}
            <span className="user-name">{currentUser.name}</span>
            <button type="button" className="icon-btn" onClick={() => { logout(); navigate('/') }} aria-label="Sign out">
              <LogOut size={16} />
            </button>
          </div>
        </header>
      )}
      <main className="main"><Outlet /></main>
    </div>
  )
}

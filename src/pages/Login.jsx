import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { roles } from '../data/mockData'

const presets = [
  { key: 'brand', label: 'Brand', desc: 'Peak Performance Co. — post briefs & approve content' },
  { key: 'creator', label: 'Creator', desc: 'Marcus Chen — verified basketball creator' },
  { key: 'admin', label: 'Admin', desc: 'Platform admin — verify creators & monitor activity' },
]

const redirects = { brand: '/brand', creator: '/creator', admin: '/admin' }

export default function Login() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const result = login(email, password)
    if (!result.ok) { setError(result.error); return }
    navigate(redirects[result.role])
  }

  const quickLogin = (key) => {
    const user = roles[key]
    setEmail(user.email)
    setPassword(user.password)
    const result = login(user.email, user.password)
    if (result.ok) navigate(redirects[result.role])
  }

  return (
    <div className="auth-page">
      <Link to="/" className="auth-brand">SportBrief</Link>
      <div className="auth-card">
        <h1>Sign in</h1>
        <p>Choose a demo role or enter credentials below.</p>
        <div className="role-presets">
          {presets.map(({ key, label, desc }) => (
            <button key={key} type="button" className="preset-btn" onClick={() => quickLogin(key)}>
              <strong>{label}</strong>
              <span>{desc}</span>
            </button>
          ))}
        </div>
        <form className="auth-form" onSubmit={submit}>
          {error && <div className="form-error">{error}</div>}
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="demo123" required />
          </label>
          <button type="submit" className="btn btn-primary btn-full">Sign in</button>
        </form>
        <p className="auth-hint">All demo accounts use password <code>demo123</code>. <Link to="/">Back to home</Link></p>
      </div>
    </div>
  )
}

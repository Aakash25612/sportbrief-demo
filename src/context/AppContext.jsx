import { createContext, useContext, useMemo, useState } from 'react'
import { roles } from '../data/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const login = (email, password) => {
    const user = Object.values(roles).find((u) => u.email === email && u.password === password)
    if (!user) return { ok: false, error: 'Invalid email or password' }
    setCurrentUser(user)
    return { ok: true, role: user.role }
  }

  const logout = () => setCurrentUser(null)

  const value = useMemo(() => ({ currentUser, login, logout }), [currentUser])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must use AppProvider')
  return ctx
}

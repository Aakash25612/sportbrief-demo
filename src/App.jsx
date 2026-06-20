import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import BrandDashboard, { BrandBriefs, BrandApplications, BrandDeliverables, BrandPayments } from './pages/brand/BrandPortal'
import CreatorDashboard, { CreatorBrowse, CreatorApplications, CreatorDeliverables, CreatorEarnings } from './pages/creator/CreatorPortal'
import AdminDashboard, { AdminCreators, AdminActivity } from './pages/admin/AdminPortal'

function Guard({ role, children }) {
  const { currentUser } = useApp()
  if (!currentUser) return <Navigate to="/login" replace />
  if (currentUser.role !== role) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="brand" element={<Guard role="brand"><BrandDashboard /></Guard>} />
            <Route path="brand/briefs" element={<Guard role="brand"><BrandBriefs /></Guard>} />
            <Route path="brand/applications" element={<Guard role="brand"><BrandApplications /></Guard>} />
            <Route path="brand/deliverables" element={<Guard role="brand"><BrandDeliverables /></Guard>} />
            <Route path="brand/payments" element={<Guard role="brand"><BrandPayments /></Guard>} />
            <Route path="creator" element={<Guard role="creator"><CreatorDashboard /></Guard>} />
            <Route path="creator/browse" element={<Guard role="creator"><CreatorBrowse /></Guard>} />
            <Route path="creator/applications" element={<Guard role="creator"><CreatorApplications /></Guard>} />
            <Route path="creator/deliverables" element={<Guard role="creator"><CreatorDeliverables /></Guard>} />
            <Route path="creator/earnings" element={<Guard role="creator"><CreatorEarnings /></Guard>} />
            <Route path="admin" element={<Guard role="admin"><AdminDashboard /></Guard>} />
            <Route path="admin/creators" element={<Guard role="admin"><AdminCreators /></Guard>} />
            <Route path="admin/activity" element={<Guard role="admin"><AdminActivity /></Guard>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

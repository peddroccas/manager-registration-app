import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'
import { Request } from './pages/request/request'
import { Registration } from './pages/registration/registration'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="requests" element={<Request />} />
        <Route path="registrations" element={<Registration />} />
      </Route>
    </Routes>
  )
}

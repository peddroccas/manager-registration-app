import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'
import { Request } from './pages/request/request'
import { Register } from './pages/register/register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="requests" element={<Request />} />
        <Route path="registers" element={<Register />} />
      </Route>
    </Routes>
  )
}

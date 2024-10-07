import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <main className="bg-slate-950 h-screen text-slate-300">
        <Outlet />
      </main>
    </div>
  )
}

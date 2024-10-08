import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const menuItems = [
    { name: 'Solicitações', link: '/requests' },
    { name: 'Inscrições', link: '/registers' },
  ]

  return (
    <Navbar
      maxWidth="full"
      height="5rem"
      className="bg-slate-900 duration-300"
      classNames={{ wrapper: 'p-4', content: 'flex !justify-center' }}
    >
      <NavbarContent>
        {menuItems.map(item => (
          <NavbarItem key={item.name}>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 transition-colors duration-300 ${
                  isActive
                    ? 'border-b-2 font-bold text-slate-300'
                    : 'text-slate-300'
                }`
              }
              to={item.link}
            >
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}

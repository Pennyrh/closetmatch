import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/closet', label: 'Closet' },
  { to: '/outfits', label: 'Outfits' },
  { to: '/planner', label: 'Planner' },
  { to: '/usage', label: 'Usage' },
];

export default function Layout() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>ClosetMatch</h1>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <nav className="app-nav">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

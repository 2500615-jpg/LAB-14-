// Name: Ammanullah | Registration No: 2500615
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectWishIds } from '../store/wishlistSlice.js'

export default function Navbar() {
  const wishIds = useSelector(selectWishIds)

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <NavLink to="/" className="brand">
          <span className="brand-mark">M</span>
          <span>Mini<span className="brand-accent">Shop</span></span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Wishlist <span className="count-badge">{wishIds.length}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
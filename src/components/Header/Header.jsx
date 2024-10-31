import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
        <h2>This is my website</h2>
        <nav>
            {/* <Link to={'/'}>Home</Link> */}
            <NavLink to='/'>Home</NavLink>
            {/* <Link to={'/posts'}>Posts</Link> */}
            <NavLink to={'/posts'}>Posts</NavLink>
            {/* <Link to={'/about'}>About</Link> */}
            <NavLink to={'/about'}>About</NavLink>
            {/* <Link to={'/contact'}>Contact</Link> */}
            <NavLink to={'/contact'}>Contact</NavLink>
            {/* <Link to={'/users'}>Users</Link> */}
            <NavLink to={'/users'}>Users</NavLink>
            
        </nav>
    </div>
  )
}

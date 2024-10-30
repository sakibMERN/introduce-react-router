import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
        <h2>This is my website</h2>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/users'}>Users</Link>
            
        </nav>
    </div>
  )
}

import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
        <h2>Nav Bar</h2>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            
        </nav>
    </div>
  )
}

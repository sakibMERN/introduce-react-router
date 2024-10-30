
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default function Home() {
  return (
    <div>
        <Header></Header>
        <h1>This is the home component</h1>
        <Outlet></Outlet>
    </div>
  )
}

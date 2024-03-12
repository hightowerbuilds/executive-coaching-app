import { Link } from "react-router-dom"
import './HomeNav.css'


export default function HomeNav() {
  return (
    <div className="linkBox">
        <Link to="/" className="homeLink">HOME</Link>
    </div>

  )
}

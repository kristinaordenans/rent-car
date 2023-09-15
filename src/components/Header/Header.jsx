import { Link } from "react-router-dom"

const Header =() => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
}
export default Header
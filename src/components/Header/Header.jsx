import { Link } from "react-router-dom";
import css from '../Header/Header.module.css'

const Header =() => {
    return (
        <div className={css.container}>  
            <nav className={css.navContainer}>
            <Link to="/"className={css.navTitle}>Rental Service</Link>
            <Link to="/" className={css.navLink}>Home</Link>
            <Link to="/catalog" className={css.navLink}>Catalog</Link>
            <Link to="/favorites" className={css.navLink}>Favorites</Link>
          </nav>
            <Link href="tel:+380730000000" className={css.navLinkContact}>+38(073)000-00-00</Link>
        </div>
    )
}
export default Header;
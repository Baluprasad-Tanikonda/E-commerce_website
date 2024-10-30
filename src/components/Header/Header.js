import { Link } from 'react-router-dom';
import HeaderCSS from './Header.module.css';
import logo from '../Assets/e_commercelogo.avif';
import cartLogo from '../Assets/icons8-cart-80.png'; 
import profileLogo from '../Assets/account.png';

const Header = ({ cartCount }) => {
    return (
        <header className={HeaderCSS.header}>
            <div className={HeaderCSS.logoContainer}>
                <img src={logo} alt="E-Commerce Logo" className={HeaderCSS.logo} />
                <h1 className={HeaderCSS.title}>Shopify-E</h1>
            </div>
            <nav className={HeaderCSS.nav}>
                <Link to="/" className={HeaderCSS.link}><span className={HeaderCSS.Homebtn}>Home</span></Link>
                <Link to="/profile" className={HeaderCSS.link}><span className={HeaderCSS.profileLogo}>
                    <img src={profileLogo} alt="" /></span></Link> 
                <Link to="/cart" className={HeaderCSS.link}>
                    <img src={cartLogo} alt="Cart Icon" className={HeaderCSS.cartIcon} />
                    <span className={HeaderCSS.cartCount}>({cartCount})</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;


import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2 className='logo'>Flower Shop</h2>
            <div className='icon-container'>
            <i className="fa-solid fa-user icon"></i>
            <i className="fa-solid fa-magnifying-glass icon"></i>
            <i className="fa-solid fa-cart-shopping icon"></i>
            </div>
        </div>
    );
};

export default Header;
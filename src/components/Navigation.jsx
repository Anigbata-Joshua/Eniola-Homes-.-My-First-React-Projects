import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav-bar">
            {/* Logo Left Anchor */}
         <Link to="/">
            <div className="logo">
                <h1><span>e</span>niola <span>h</span>omes</h1>
                <p>real estate agency</p>
            </div>
         </Link>

            {/* Desktop Only Navigation Links */}
            <ul className="nav-menu-desktop">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            {/* Desktop Only Auth Actions */}
            <div className="nav-auth">
                <h2 className="login-btn">Login</h2>
                <button className="signup-btn">Sign Up</button>
            </div>

            <button
                className={`hamburger ${isOpen ? "is-active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Blurred Backdrop Shadow Overlay */}
            {isOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}

            {/* Premium Side Drawer Overlay Menu */}
            <div className={`side-drawer ${isOpen ? "drawer-open" : ""}`}>
                <ul className="drawer-links">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                </ul>

                <div className="drawer-auth">
                    <h2 className="login-btn" onClick={toggleMenu}>Login</h2>
                    <button className="signup-btn" onClick={toggleMenu}>Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
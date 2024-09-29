import { Link } from 'react-router-dom';
import '../Css/header.css';
import data from "../data.json";
import { Children } from 'react';
import { useState } from 'react';
export default function Header({ name, ...props }) {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className='body'>
            <header>
                <div className='header1'>
                    <div className='logo'>
                        <Link to="/" ><img src='./img/logo.png' alt='Logo' /></Link>
                    </div>
                    <div className="menu">
                        <nav className="navbar navbar-expand-lg" style={{ padding: 0 }}>
                            <Link to="/" className="navbar-brand" href="#"></Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle navigation"
                                onClick={handleToggle}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse list ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Introduce" className="nav-link">Introduce</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a href="/New" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdowns" aria-expanded="false">
                                            News
                                        </a>
                                        <ul className="dropdown-menu">
                                            <Link to="/NewsBicycle" className="dropdown-item">Cycling</Link>
                                            <Link to="/NewsSwimming" className="dropdown-item">Swimming</Link>
                                            <Link to="/NewsFitness" className="dropdown-item">Sports & Fitness</Link>
                                            <Link to="/NewGroupFitnes" className="dropdown-item">Group Exercise</Link>
                                            <Link to="/NewFood" className="dropdown-item">Membership</Link>
                                            <Link to="/NewSalos" className="dropdown-item">Salon & Spa</Link>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="/Product" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdowns" aria-expanded="false">
                                            Store
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/" className="dropdown-item">Action</Link></li>
                                            <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                            <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/Contact" className="nav-link" aria-disabled="true">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" aria-disabled="true">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/FAQs" className="nav-link" aria-disabled="true">FAQs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Register" className="nav-link" aria-disabled="true" style={{ marginRight: '15px' }}>Enquiry</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Stiemap" className="nav-link" aria-disabled="true">Sitemap</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    {/* <div className="bonus">
                        <div className='iconcart'>
                            <i style={{ fontSize: '20px', marginRight: '20px', marginLeft: '15px' }} className='fa'>&#xf07a;</i>
                        </div>
                        <div className='login_menu'>
                            <a href=''>Sign in</a>
                        </div>
                    </div> */}
                </div>
            </header>
            <div className='banner_menu'></div>
        </div>


    );
};
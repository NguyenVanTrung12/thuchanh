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
<<<<<<< HEAD
                    <div class="menu">

                        <nav class="navbar navbar-expand-lg navbar1" style={{ padding: 0 }}>
                            <Link to class="navbar-brand" href="#"></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse list" id="navbarSupportedContent">

                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link to="/" class="nav-link" aria-current="page" >Home</Link>
=======
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
>>>>>>> 21877cbf6c1d8e5a80bc20fa45bff5d4cd4521b4
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Introduce" className="nav-link">Introduce</Link>
                                    </li>
<<<<<<< HEAD
                                    <li className="nav-item dropdown">
                                        <Link to="/New" className="nav-link dropdown-toggle" role="button" aria-expanded="false">
                                            News
                                        </Link>
                                        <ul className="dropdown-menu" style={{background: '#54545c',width: 'auto'}}>
                                            <li><Link to="/NewsBicycle" className="dropdown-item">Cycling</Link></li>
                                            <li><Link to="/NewsSwimming" className="dropdown-item">Swimming</Link></li>
                                            <li><Link to="/NewsFitness" className="dropdown-item">Sports & Fitness</Link></li>
                                            <li><Link to="/NewGroupFitnes" className="dropdown-item">Group exercise</Link></li>
                                            <li><Link to="/NewFood" className="dropdown-item">Membership</Link></li>
                                            <li><Link to="/NewSalos" className="dropdown-item">Salon & Spa</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to="/Product" className="nav-link dropdown-toggle" role="button" aria-expanded="false">
                                            Store
                                        </Link>
                                        <ul className="dropdown-menu" style={{background: '#54545c',width: 'auto'}}>
                                            <li><Link to="/action" className="dropdown-item">ABDOMINAL CHAIR</Link></li>
                                            <li><Link to="/another-action" className="dropdown-item">DUMBELL</Link></li>
                                            <li><Link to="/something-else" className="dropdown-item">SINGLE BAR/ DOUBLE BAR</Link></li>
                                            <li><Link to="/something-else" className="dropdown-item">WEIGHT FRAME</Link></li>
                                            <li><Link to="/something-else" className="dropdown-item">WEIGHTLIFITNG CHAIR</Link></li>
                                            <li><Link to="/something-else" className="dropdown-item">MASSAGE MACHINE</Link></li>
                                            <li><Link to="/something-else" className="dropdown-item">MASSAGE CHAIR</Link></li>
                                            <li><Link to="/something-else" className="dropdown-item">GYM CESSORIES</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <Link to="/Contact" class="nav-link" aria-disabled="true">Contact</Link>
=======

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
>>>>>>> 21877cbf6c1d8e5a80bc20fa45bff5d4cd4521b4
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" aria-disabled="true">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/FAQs" className="nav-link" aria-disabled="true">FAQs</Link>
                                    </li>
<<<<<<< HEAD
                                    <li class="nav-item">
                                        <Link to="/Register" class="nav-link" aria-disabled="true" style={{ marginRight: '15px' }}>Enquiry</Link>
                                    </li>

                                </ul>

                            </div>

=======
                                    <li className="nav-item">
                                        <Link to="/Register" className="nav-link" aria-disabled="true" style={{ marginRight: '15px' }}>Enquiry</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Stiemap" className="nav-link" aria-disabled="true">Sitemap</Link>
                                    </li>
                                </ul>
                            </div>
>>>>>>> 21877cbf6c1d8e5a80bc20fa45bff5d4cd4521b4
                        </nav>
                    </div>
                    {/* <div className="bonus">
                        <div className='iconcart'>
<<<<<<< HEAD
                            <i style={{ fontSize: '20px', marginRight: '20px', marginLeft: '15px' }} class='fa'>	&#xf07a;</i>
=======
                            <i style={{ fontSize: '20px', marginRight: '20px', marginLeft: '15px' }} className='fa'>&#xf07a;</i>
>>>>>>> 21877cbf6c1d8e5a80bc20fa45bff5d4cd4521b4
                        </div>
                        <div className='login_menu'>
                            <a href=''>Sign in</a>
                        </div>
                    </div> */}
                </div>
            </header>
<<<<<<< HEAD
            <div className='banner_menu'>

            </div>
=======
            <div className='banner_menu'></div>
>>>>>>> 21877cbf6c1d8e5a80bc20fa45bff5d4cd4521b4
        </div>


    );
};
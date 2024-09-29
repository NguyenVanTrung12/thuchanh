import { Link } from 'react-router-dom';
import '../Css/header.css';
import data from "../data.json";
import { Children } from 'react';
export default function Header({ name, ...props }) {


    return (
        <div className='body'>
            <header>
                <div className='header1'>
                    <div className='logo'>
                        <img src='./img/logo.png'></img>
                    </div>
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
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/Introduce" class="nav-link" >Introduce</Link>
                                    </li>
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
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/about" class="nav-link" aria-disabled="true">About Us</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="FAQs" class="nav-link" aria-disabled="true">FAQs</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/Register" class="nav-link" aria-disabled="true" style={{ marginRight: '15px' }}>Enquiry</Link>
                                    </li>

                                </ul>

                            </div>

                        </nav>
                    </div>
                    <div class="bonus">
                        <div className='iconcart'>
                            <i style={{ fontSize: '20px', marginRight: '20px', marginLeft: '15px' }} class='fa'>	&#xf07a;</i>
                        </div>
                        <div className='login_menu'>
                            <a href=''>Sign in</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className='banner_menu'>

            </div>
        </div>


    );
};
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
    
                        <nav class="navbar navbar-expand-lg " style={{ padding: 0 }}>
    
                            <div class="collapse navbar-collapse list" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link to="/" class="nav-link" aria-current="page" >Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/Introduce" class="nav-link" >Introduce</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/New" class="nav-link" >News</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link to="/Product" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Store
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link to class="dropdown-item" >Action</Link></li>
                                            <li><Link to class="dropdown-item" >Another action</Link></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><Link to class="dropdown-item" >Something else here</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="#" class="nav-link" aria-disabled="true">Links</Link>
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
                                        <Link to="#" class="nav-link" aria-disabled="true">Enquiry</Link>
                                    </li>
    
                                </ul>
    
                            </div>
                            <Link to class="navbar-brand" href="#"></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                    <div class="bonus">
                        <div className='iconcart'>
                            <i style={{ fontSize: '20px',marginRight: '20px' }} class='fa'>	&#xf07a;</i>
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
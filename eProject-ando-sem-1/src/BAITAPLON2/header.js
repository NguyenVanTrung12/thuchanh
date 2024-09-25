import { Link } from 'react-router-dom';
import '../Css/header.css';
import data from "../data.json";
import { Children } from 'react';
export default function Header({ name, ...props }) {


    return (
<<<<<<< HEAD
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
                                        <Link to="/introduce" class="nav-link" >Introduce</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/HomeNews" class="nav-link" >News</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link to="/product" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        <Link to="/contact" class="nav-link" aria-disabled="true">Contact</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/about" class="nav-link" aria-disabled="true">About Us</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to class="nav-link" aria-disabled="true">FAQs</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to class="nav-link" aria-disabled="true">Enquiry</Link>
                                    </li>
    
                                </ul>
    
=======
        <div class="container-fluid header">
            <div class="container">
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 logo">
                            <img src="../../img/logo.png" />
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9 right">
                            <div class="row">
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 search">

                                    <input type="text" placeholder="Search..." />
                                    <button className='fa fa-search'></button>
                                    <Link to='/Register'><i class="fas fa-user fa-lg" style={{ color: '#ffa500' }}></i></Link>
                                    <Link to='/shoppingcart '> <i class="fas fa-shopping-cart fa-lg" style={{ color: '#ffa500' }} /> </Link>
                                </div>


>>>>>>> 4f69d547553a720b81341a8369c245b6b0feb244
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
<<<<<<< HEAD
    
            
        );
=======
            <div class="container">
                <hr />
                <nav class="navbar navbar-expand-sm bg- navbar-dark">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#"></a>
                    <div class="collapse navbar-collapse list" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Product" class="nav-link">Product</Link>
                            </li>

                           
                            <li class="nav-item">
                                <Link class="nav-link" to="/introduce">Introduce</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <div class="dropdown" style={{ marginTop: '10px' }}>
                                    <Link to="/New" class="dropbtn" style={{ listStyle: 'none', textDecoration: 'none' }} > News </Link>
                                    <div class="dropdown-content">
                                        <Link to="/NewsBicycle">Cycling</Link>
                                        <Link to="/NewsSwimming">Swimming</Link>
                                        <Link to="/NewsFitness">Sports & Fitness</Link>
                                        <Link to="/NewGroupFitnes">Group Exercise</Link>
                                        <Link to="/NewFood">Membership</Link>
                                        <Link to="/NewSalos">Salon & Spa</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/FAQs">FAQs</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Site Map</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div >

    );
>>>>>>> 4f69d547553a720b81341a8369c245b6b0feb244
};
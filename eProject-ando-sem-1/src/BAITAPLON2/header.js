import { Link } from 'react-router-dom';
import '../Css/header.css';
import data from "../data.json";
import { Children } from 'react';
export default function Header({ name, ...props }) {


    return (
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
                               

                            
                             


                            </div>
                        </div>
                    </div>

                </div>
            </div>
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
                                <a class="nav-link" href="#">Enquiry</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div >

    );
};
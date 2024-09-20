import '../Css/header.css';

export default function Header() {
    return(
        <div class="container-fluid header">
        <div class="container">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 logo">
                        <img src="./img/logo.png"/>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9 right">
                        <div class="row">
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 search">

                                <input type="text" placeholder="Search..."/>
                                <button className='fa fa-search'></button>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 icon">
                                <button type="submit">Register Memberships</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="container">
            <hr/>
            <nav class="navbar navbar-expand-sm bg- navbar-dark">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#"></a>
                <div class="collapse navbar-collapse list" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <div class="dropdown">
                                <button class="dropbtn">Product</button>
                                <div class="dropdown-content">
                                    <a href="#">significant product</a>
                                    <a href="#">equipment</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <div class="dropdown">
                                <button class="dropbtn">links</button>
                                <div class="dropdown-content">
                                    <a href="#">Cycling</a>
                                    <a href="#">Swimming</a>
                                    <a href="#">Sports & Fitness</a>
                                    <a href="#">Group Exercise</a>
                                    <a href="#">Membership</a>
                                    <a href="#">Salon & Spa</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Introduce</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Enquiry</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

    );
};
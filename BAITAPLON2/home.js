import '../style/home.css';
export default function Home() {
    return (
        <section>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="nd1">
                            <h2>ABOUT <span style={{ color: '#ed1c24' }}>APEXFITNESS</span></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
    <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="nd2">
                <h4 className="card-title">APEXFITNESS AND THE DEVELOPMENT PATH</h4>
                <p className="card-text">
                    Apex fitness is a professional organization, a pioneer in serving and bringing
                    health and beauty to active people to thereby improve the quality of life.
                </p>
                <p className="card-text">
                    We understand the pressures and fatigue of your work and life. And more than
                    ever, we also understand the desire to have good health and a beautiful body. 
                    Therefore, at Apex fitness, we always strive to bring the best quality KickFitness and HIIT
                    training programs. It is the most effective and healthy way to regain vitality, a balanced body,
                    improve health problems such as back, shoulder, and bone pain due to sitting too much, lack of
                    exercise, and at the same time increase flexible reflexes and self-defense.
                </p>
                <button className="btn btn-danger">SEE MORE</button>
            </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <img
                src="/img/gioi-thieu-gym-768x488.jpg"
                alt="Introduction to ApexFitness Gym"
                className="card-img-bottom"
            />
        </div>
    </div>
</div>



            <div className="container">
                <div className="row">


                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <img src="img/huanluenviencanhan2.jpg" alt="" style={{ margin: '20px 0px', width: 635, height: 403 }}
                            className="card-img-top" />
                    </div>


                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="nd2">
                            <h4 className="card-title">COACH, CORE TEAM</h4>
                            <p className="card-text">At Apex fitness, we build our success on high quality professional products and
                                customer service based on the motto: Close - Hands-on - Dedicated.</p>
                            <p className="card-text">The Trainers are former professional athletes who are thoroughly trained and
                                have deep experience in sports science, bringing the best results to students. Trainers are
                                direct representatives of Apex fitness, providing high quality services to customers, so they
                                always have the mindset of a service provider, understand the high and strict requirements of
                                the service industry to always strive to satisfy each student in each training session.</p>
                            <button className="btn btn-danger">SEE MORE</button>
                        </div>
                    </div>



                </div>
            </div>



            <div className="container-fluid carousels">
                <div className="container ">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="nd1">
                                <h2 style={{ color: 'white' }}><span style="color: #ed1c24">MEMBER </span> RESULTS</h2>
                            </div>
                        </div>
                    </div>


                    <div id="demo" className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}>
                                                <img className="card-img-top" src="img/carousel1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 100 }}>
                                                <img className="card-img-top" src="img/carousel1.1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}>
                                                <img className="card-img-top" src="img/carousel1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel1.1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="20000">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel1.1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel1.1.png" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Ms. Nguyen Thi Binh</h4>
                                                    <p className="card-text text-white">
                                                        Taekwondo black belt student (HN) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="nd1">
                                <h2>MEET <span style={{color: '#ed1c24'}}> THE COACH</span></h2>
                            </div>
                        </div>
                    </div>

                    <div id="coachCarousel" className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#coachCarousel" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#coachCarousel" data-bs-slide-to="1"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="30000">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.1.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.2.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.3.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="40000">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.1.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.2.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                                            <div className="card" style={{ width: 300 }}       >
                                                <img className="card-img-top" src="img/carousel2.3.jpg" alt="Card image"
                                                    style={{ width: '100%' }} />
                                                <div className="card-body bg-dark p-3">
                                                    <h4 className="card-title text-warning">Mr. Nguyen Viet Cuong</h4>
                                                    <p className="card-text text-white">
                                                        HLV Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#coachCarousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#coachCarousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid banner">
                <div className="container text-center">
                    <h2 className="feedback-title">CUSTOMER <span>FEEDBACK</span></h2>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="feedback-item">
                                <img src="img/cus1.jpg" className="feedback-img" alt="Customer 1" />
                                <p className="feedback-text">Each workout with the coach burned so many calories... I became
                                    "addicted" to this sport.</p>
                                <p className="feedback-author"><b>Tran Lan Ngoc / Hotel Manager</b></p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="feedback-item">
                                <img src="img/cus2.jpg" className="feedback-img" alt="Customer 2" />
                                <p className="feedback-text">Now my previous belly fat has become a little smaller. I really thank
                                    the coaches...</p>
                                <p className="feedback-author"><b>Tran Lan Ngoc / Teacher</b></p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="feedback-item">
                                <img src="img/cus3.jpg" className="feedback-img" alt="Customer 3" />
                                <p className="feedback-text">Each workout with the coach burned so many calories... I became
                                    "addicted" to this sport.</p>
                                <p className="feedback-author"><b>Tran Lan Ngoc / Hotel Manager</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="nd1">
                            <h2><span style={{color: '#ed1c24'}}>HIGH-END </span> WORKOUT EQUIPMENT</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-4 col-lg-12">


                        <div id="myModal" className="modal">
                            <span className="close">&times;</span>
                            <img className="modal-content" id="modalImg" />
                            <div id="caption"></div>
                        </div>
                    </div>

                </div>
                <div className="row">

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg1" className="img-trigger img-fluid" src="img/tb1.jpg" alt="Image 1" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg2" className="img-trigger img-fluid" src="img/tb2.jpg" alt="Image 2" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg3" className="img-trigger img-fluid" src="img/tb3.jpg" alt="Image 3" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg4" className="img-trigger img-fluid" src="img/tb4.jpg" alt="Image 4" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg5" className="img-trigger img-fluid" src="img/tb5.jpg" alt="Image 5" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg6" className="img-trigger img-fluid" src="img/tb6.jpg" alt="Image 6" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg7" className="img-trigger img-fluid" src="img/tb7.jpg" alt="Image 7" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <img id="myImg8" className="img-trigger img-fluid" src="img/tb8.jpg" alt="Image 8" />
                    </div>

                </div>

            </div>

            <div className="container dk">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="img_card">
                            <img className="img-fluid" src="img/dk.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <p style={{margin:10}}>Please fill in the form below accurately and we will call you as soon as possible.</p>
                        <form action="/action_page.php">
                            <div className="mb-3 mt-3">
                                <input type="text" className="form-control" placeholder="Full name..." name="name" required />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" placeholder="Phone number..." name="phone" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Address..." name="add" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="comment" name="text"
                                    placeholder="Additional notes..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">SIGN UP FOR A QUOTE</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}                
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/introduce.css';
const Introduce = () => {
    return (
        <div className="container-fluid introduce">
            <div className="container">
                <nav className="breadcrumb">
                    <Link class="nav-link" to="/"><span style={{ color: 'red' }}>Home</span>
                        <span> » </span>
                        <span>Introduce</span></Link>
                </nav>
                <hr />
                <div className="row">
                    {/* Left Column */}
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 left">
                        <h2>Introduce</h2>
                        <h2>Going to the gym every day helps improve your physical fitness.</h2>
                        <p>
                            Nowadays, the need for beauty is increasing, so fitness centers are increasingly popular. But many people
                            have the wrong idea that just following the videos on the internet is fine, practicing without a method
                            will make you receive the opposite effects. Therefore, going to the gym/Fitness every day not only helps
                            you have a beautiful body but also helps you improve your health, relieve your emotions more effectively.
                            AE FITNESS today will share with readers the benefits of going to the gym to exercise every day.
                        </p>
                        <h2>Benefits of going to the gym every day</h2>
                        <h2 style={{ color: '#54545c', fontSize: 'x-large' }}>Practice systematically</h2>
                        <p>
                            Of course, going to the gym will give you a more systematic workout than working out at home. Being able
                            to interact with people and get exercise guidance will help you practice a healthier and more disciplined
                            lifestyle. Not only that, working out with others will make you more interested in working out. Going to
                            the gym will give you advice and guidance from knowledgeable trainers in the field of fitness, they will
                            also help you balance your nutrition to make your exercises more effective.
                        </p>
                        <img src="./img/home-rigt-tintuc-2.jpg" alt="Gym Benefits" style={{ width: '100%' }} />
                        <h2 style={{ marginTop: '30px', color: '#54545c', fontSize: 'x-large' }}>Helps relieve stress effectively</h2>
                        <p>
                            Regular exercise and sports help people increase brain activity, relieve stress after a tiring day, or
                            help you create more energy to start a new day. Regular exercise makes your body produce substances such
                            as Dopamine, Epinephrine, which help bring back the importance of life. Of course, these things have been
                            proven by scientists, and you can verify them on the web.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 right">
                        <img src="./img/home-rigt-tintuc-1.jpg" alt="" width="80%" style={{ borderradius: '10px' }} />
                        <h4> Latest Posts</h4>
                        <div class="baiviet">
                            <div class="row">

                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-3 ">
                                    <Link to="/NewsBicycle"><img src="./img/home-tintuc-1.jpg" alt="" /></Link>
                                </div>
                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-9  baiviet-text">
                                    <p>The importance of Cycling for health </p>
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-3  ">
                                    <Link to="/NewsSwimming"><img src="./img/home-tintuc-2.jpg" alt="" /></Link>
                                </div>
                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-9  baiviet-text">
                                    <p>The importance of swimming for health </p>
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-3  ">
                                    <Link to="/NewsFitness"><img src="./img/home-tintuc-3.jpg" alt="" /></Link>
                                </div>
                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-9  baiviet-text">
                                    <p>Sports and Fitness Improve for health </p>
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-3  ">
                                    <Link to="/NewGroupFitnes"><img src="./img/home-tintuc-4.jpg" alt="" /></Link>
                                </div>
                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-9  baiviet-text">
                                    <p>Benefits of Group Fitness </p>
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-3  ">
                                    <Link to="/NewFood"><img src="./img/home-tintuc-5.jpg" alt="" /></Link>
                                </div>
                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-9  baiviet-text">
                                    <p>Food benefits for health</p>
                                </div>

                            </div>
                            <div class="row">

                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-3  ">
                                    <Link to="/NewSalos"><img src="./img/home-tintuc-6.jpg" alt="" /></Link>
                                </div>
                                <div class="col-xs-12  col-sm-12  col-md-6  col-lg-9  baiviet-text">
                                    <p> spas for health</p>
                                </div>

                            </div>



                        </div>
                        <div class="dangky-tintuc">
                            <h4>Sign up for a quote</h4>
                            <p>Please fill in all information and send it to us.</p>
                            <input type="text" placeholder="Full name..." />
                            <input type="text" placeholder="Phone Number..." />
                            <input type="text" placeholder="Address..." />
                            <textarea name="" id="" placeholder="Addition notes..."></textarea>
                            <button type="submit">SIGN UP FOR A QUOTE</button>


                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Introduce;

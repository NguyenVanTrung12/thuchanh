
import React from "react";
import "../../Css/News.css";
import { Link } from "react-router-dom";
function New() {
  return (
    <>
      <div class="container-fluid ">
        <div class="container ">

          <div class="row new">

            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 left">
              <div class="tieude">
                <Link to="/" title="Return to home page" style={{color: 'red'}}>Home page </Link>  »  Event news 
              </div>
              <h2>Event news </h2>


              <div class="row Tintuc1">

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="cart">
                    <Link to="/NewsBicycle"><img src="./img/home-tintuc-1.jpg" alt="" style={{width:'90%'}} /></Link>
                    <b>The importance of Cycling for health </b>
                    <p>
                      Cycling is the perfect choice if you are looking for exercises to slim and firm your hips and legs. Exercising on a bicycle...</p>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="cart">
                    <Link to="/NewsSwimming"><img src="./img/home-tintuc-2.jpg" alt="" style={{width:'90%'}} /></Link>
                    <b>The importance of swimming for health </b>
                    <p>strengthen muscles, regular swimming is also an ideal way to exercise and improve cardiovascular and pulmonary health...</p>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="cart">
                    <Link to="/NewsFitness"><img src="./img/home-tintuc-3.jpg" alt="" style={{width:'100%'}} /></Link>
                    <b>Sports and Fitness Improve for health </b>
                    <p> improve your health, provide energy for a long day, reduce stress, but it also helps firm the body and effectively reduce fat...</p>
                  </div>
                </div>

              </div>

              <div class="row Tintuc2">

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="cart">
                    <Link to="/NewGroupFitnes"><img src="./img/home-tintuc-4.jpg" alt="" style={{width:'90%'}} /></Link>
                    <b>Benefits of Group Fitness </b>
                    <p>Participating in group exercise not only reduces stress levels but also achieves many other notable physical health benefits...</p>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="cart">
                    <Link to="/NewFood"><img src="./img/home-tintuc-5.jpg" alt="" style={{width:'100%'}} /></Link>
                    <b>Food benefits for health</b>
                    <p>The diet we choose has a significant impact on our overall health and well-being. By prioritizing healthy, plant-based foods...</p>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="cart">
                    <Link to="/NewSalos"><img src="./img/home-tintuc-6.jpg" alt="" style={{width:'100%'}} /></Link>
                    <b> spas for health</b>
                    <p>Spa helps stimulate the lymphatic system to remove toxins and waste from the body ; Research from scientists shows that massage...</p>
                  </div>
                </div>

              </div>
              <Link to=""><img src="./img/home-rigt-tintuc-2.jpg" alt="" style={{width:'100% ' ,borderradius: '15px' }}  /></Link>
            </div>




            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 right">
              <img src="./img/home-rigt-tintuc-1.jpg" alt="" width="80%" style={{borderradius: '10px'}} />
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
    </>
  )

}
export default New;


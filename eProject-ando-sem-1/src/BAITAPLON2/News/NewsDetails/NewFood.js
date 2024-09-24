import React from "react"
import "../../../Css/NewsDetails.css";
import { Link } from "react-router-dom";

function NewFood() {
  return (
    <>
      <div class="container-fluid">
        <div class="container">

          <div class="row new">

            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 left">
              <div class="tieude">
                <a href="/" title="Return to home page" style={{color: 'red'}}> Home page » </a><a href="/New" style={{color: 'red'}} title="Return to Event news"> Event news </a> » Food benefits for health

              </div>
              <h2>
                Food benefits for health </h2>
              <b> Food is a source of nutrients for the body's development, ensuring human health, but at the same time it can also be a source of disease if it is not hygienic .</b>

              <div class="new_link">

                <img src="../img/home-tintuc-5.jpg" alt="" style={{width:'100%'}} />


                <b>1. What are fortified foods or nutritional supplements?.</b>
                <p>-Fortified foods are those that have added nutrients to improve or provide additional health benefits. For example, milk is often fortified withvitamin Dand fruit juices may be fortified with calcium..

                </p>
                <p>-Enriched foods are foods that have had nutrients removed during processing. Many refined grains now have their nutrients added back in after processing. For example, enriched flourfolic acid, iron and riboflavin, this is intended to restore its original vitamin levels.

                </p>


                <img src="../img/NewsDetails-food-1.jpg" alt="" style={{width:'100%'}} />


                <b>2. How to supplement adequate nutrients for the body?</b>
                <p>-In certain cases, fortified foods or nutritional supplements can be beneficial to your health. They can help you fill in nutrient gaps in your diet and increase your ability to absorb essential vitamins and minerals..</p>

                <p>-However, if fortified foods are not consumed properly, they can lead to nutrient overdose. Therefore, you should determine how much nutrients you are consuming and remember to add natural foods to your diet, such as dark green leafy vegetables. You should also monitor your portion sizes to ensure that you do not overdose on vitamin or mineral supplements.</p>

                <p>-Desserts made with enriched flour or breakfast cereals with added sugar are generally not healthy choices. It is best to avoid foods that contain added sugar, high levels of sodium, andtrans fat..</p>
                <p>-In summary, although fortified foods and supplements can be essential to a healthy diet, they do have some limitations. Therefore, you still need to eat a well-rounded, varied diet with plenty of vegetables and other whole foods. You should not rely on fortified foods or supplements to get all the nutrients you need.</p>
                <p>-To make an appointment at the hospital, please dial HOTLINE or book directlyHERE. Download and schedule an appointment automatically onMyVinmec applicationto manage, track schedules and book appointments anytime, anywhere right on the app.
                </p>

                <img src="../img/NewsDetails-food-2.jpg" alt="" style={{width:'100%'}} />





              </div>


              <div class="news_item">
                <h4 style={{color: 'rgb(90, 87, 87)'}}>You may be interested : </h4>

                <div class="row Tintuc1">

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="/NewsBicycle"><img src="../img/home-tintuc-1.jpg" alt="" style={{width:'90%'}} /></a>
                      <b>The importance of Cycling for health </b>

                    </div>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="/NewsSwimming"><img src="../img/home-tintuc-2.jpg" alt="" style={{width:'90%'}} /></a>
                      <b>The importance of swimming for health </b>

                    </div>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="/NewsFitness"><img src="../img/home-tintuc-3.jpg" alt="" style={{width:'100%'}} /></a>
                      <b>Sports and Fitness Improve for health </b>

                    </div>
                  </div>

                </div>

                <div class="row Tintuc2">

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="/NewGroupFitnes"><img src="../img/home-tintuc-4.jpg" alt="" style={{width:'90%'}} /></a>
                      <b>Benefits of Group Fitness </b>
                    </div>
                  </div>

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href=""><img src="../img/home-tintuc-5.jpg" alt="" style={{width:'100%'}} /></a>
                      <b>Food benefits for health</b>

                    </div>
                  </div>

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="/NewSalos"><img src="../img/home-tintuc-6.jpg" alt="" style={{width:'100%'}} /></a>
                      <b> spas for health</b>

                    </div>
                  </div>

                </div>

              </div>

              <div class="comment" style={{marginbottom: '200px'}}>
                <b>Reply</b>
                <p>Your email will not be displayed publicly. Required fields are marked *</p>

                <p>Comment *</p>
                <textarea name="" id=""></textarea>

                <div class="row">

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <p>Name *</p>
                    <input type="text" />
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <p>Email *</p>
                    <input type="text" />
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <p>Phone *</p>
                    <input type="text" />
                  </div>

                </div>
                <input type="checkbox" style={{margin: '15px 0px'}} /> Save my name, email, and website in this browser for the next time I comment.
                <br />
                <button type="submit">FEEBACK</button>



              </div>
            </div>



            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 right">
              <img src="./img/home-rigt-tintuc-1.jpg" alt="" width="80%" style={{borderradius: '10px'}} />
              <h4> Latest Posts</h4>
              <div class="baiviet">
                <div class="row">

                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-3 ">
                    <Link to="/NewsBicycle"><img src="./img/home-tintuc-1.jpg" alt="" /></Link>
                  </div>
                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-9  baiviet-text">
                    <p>The importance of Cycling for health </p>
                  </div>

                </div>
                <div class="row">

                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-3  ">
                    <Link to="/NewsSwimming"><img src="./img/home-tintuc-2.jpg" alt="" /></Link>
                  </div>
                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-9  baiviet-text">
                    <p>The importance of swimming for health </p>
                  </div>

                </div>
                <div class="row">

                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-3  ">
                    <Link to="/NewsFitness"><img src="./img/home-tintuc-3.jpg" alt="" /></Link>
                  </div>
                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-9  baiviet-text">
                    <p>Sports and Fitness Improve for health </p>
                  </div>

                </div>
                <div class="row">

                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-3  ">
                    <Link to="/NewGroupFitnes"><img src="./img/home-tintuc-4.jpg" alt="" /></Link>
                  </div>
                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-9  baiviet-text">
                    <p>Benefits of Group Fitness </p>
                  </div>

                </div>
                <div class="row">

                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-3  ">
                    <Link to="/NewFood"><img src="./img/home-tintuc-5.jpg" alt="" /></Link>
                  </div>
                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-9  baiviet-text">
                    <p>Food benefits for health</p>
                  </div>

                </div>
                <div class="row">

                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-3  ">
                    <Link to="/NewSalos"><img src="./img/home-tintuc-6.jpg" alt="" /></Link>
                  </div>
                  <div class="col-xs-6  col-sm-6  col-md-6  col-lg-9  baiviet-text">
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
export default NewFood;
import React from "react"
import "../../../Css/NewsDetails.css";
import { Link } from "react-router-dom";
function NewsBicycle() {
  return (
    <>
      <div class="container-fluid">
        <div class="container">

          <div class="row new">

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 left">
              <div class="tieude">
                <a href="" title="Return to home page" style={{color: 'red'}}> Home page » </a><a href="/New" style={{color: 'red'}} title="Return to Event news"> Event news </a> » Event news Bicycle details
              </div>
              <h2>Event news Bicycle details </h2>
              <b> Cycling brings many benefits to our health. Cycling not only helps physically but also makes your spirit always refreshed, reduces anxiety and stress.</b>

              <div class="new_link">

                <img src="../img/home-tintuc-1.jpg" alt="" style={{width:'100%'}}/>


                <b>1. Cycling helps control weight</b>
                <p>- When we have the habit of cycling every day, especially cycling at high intensity regularly,
                  it will significantly reduce body fat, help you control your weight and have a healthy body.
                  In addition, cycling also increases themetabolism of the body, builds muscle.
                  Therefore, your body will burn morecaloriesmore during movement.
                </p>
                <img src="../img/NewsDetails-xedap-1.jpg" alt="" style={{width:'100%'}} />


                <b>2. Helps reduce impact on joints, reducing the risk of foot injuries</b>
                <p>- When you run, your leg joints have to bear the full weight of your body.
                  Long-term impact can lead to injuries. Meanwhile, if youcycling, the body weight will now be borne by the quadriceps and hamstrings,
                  the knee and ankle joints will have their pressure reduced significantly.
                  Scientists around the world have conducted many studies to compare the risk of muscle damage between two groups of
                  people who run and cycle regularly. They found that the group of runners had a 133–134% higher risk of muscle damage and 87% higher muscle soreness than cyclists.
                </p>


                <b>3. The effects of cycling in improving mental health</b>
                <p>- A study by the YMCA (Young Men's Christian Association) found that people who lead active lives scored 32% higher on mental
                  health scores than those who were not active. That proves that exercise boosts your mood. Here's how you releaseadrenalineandendorphinout of your body. Exercise also helps you become more confident when achieving new skills and goals.
                  Cycling is a combination of outdoor exercise and exploring new areas. You can cycle alone to enjoy some private time,
                  but you can also cycle with friends to expand your relationships and bond better with people who share the same interests.
                </p>
                <img src="../img/NewsDetails-xedap-2.jpg" alt="" style={{width:'100%'}} />


                <b>4. Cycling makes our lungs healthier</b>
                <p>- This may sound counterintuitive, since cycling involves breathing in fresh air and may expose you to more dust and smoke than other people.
                  However, a recent study found that cyclists are actually exposed to less toxic fumes than people in cars.
                  In a study by the Healthy Air Campaign, conducted by King's College London and Camden Council, cyclists, pedestrians,
                  bus riders and drivers were equipped with air quality monitors and driven through London's busiest roads. The results showed that car drivers
                  were exposed to five times more air pollution than cyclists,
                  3.5 times more than pedestrians and 2.5 times more than bus riders. So it can be seen that cycling is the least likely to expose us to air pollution.
                </p>
              </div>


              <div class="news_item">
                <h4 style={{color: 'rgb(90, 87, 87)'}}>You may be interested : </h4>

                <div class="row Tintuc1">

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <img src="../img/home-tintuc-1.jpg" alt="" style={{width:'90%'}} />
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
                      <a href="/NewFood"><img src="../img/home-tintuc-5.jpg" alt="" style={{width:'100%'}} /></a>
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
export default NewsBicycle;
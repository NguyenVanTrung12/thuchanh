import React from "react"
import "../../../Css/NewsDetails.css";
import { Link } from "react-router-dom";

function NewSalos() {
  return (
    <>
      <div class="container-fluid">
        <div class="container">

          <div class="row new">

            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 left">
              <div class="tieude">
                <a href="" title="Return to home page" style={{ color: 'red' }}> Home page <i class="fas fa-angle-double-right fa-lg"></i> </a><a href="../HomeNews.html" style={{ color: 'red' }} title="Return to Event news"> Event news </a> <a href=""><i class="fas fa-angle-double-right fa-lg"></i> spas for health</a>

              </div>
              <h2>
                spas for health</h2>
              <b> Spas helps stimulate the lymphatic system to remove toxins and waste from the body ; Research from scientists shows that massage techniques in spas increase the release of the hormone Serotonin, helping the body's mood to be relaxed and comfortable. .</b>

              <div class="new_link">

                <img src="../img/NewDetails-spa-1.jpg" alt="" style={{ width: '100%' }} />


                <b>1. What is spa therapy and what benefits does it bring?.</b>
                <p>-Spa therapy is a form of health care and relaxation service, focusing on restoring and refreshing the body and mind. Through the combination of therapies such as massage, sauna, skin care treatments and other natural methods, spa therapy relaxation not only helps reduce stress and fatigue but also brings health benefits such as improving blood circulation, reducing muscle pain, detoxifying...

                </p>
                <p>-Sports massage is not only for athletes, professional sports but also for those who participate in daily sports activities, gym, jogging. Besides helping support injuries, reduce stress, enhance the recovery process, it also focuses on increasing flexibility and elasticity for athletes..

                </p>


                <img src="../img/NewDetails-spa-2.jpg" alt="" style={{ width: '100%' }} />


                <b>2. Một số kỹ thuật trong massage thể thao</b>
                <p>-Massage techniques: in sports massage, this technique uses massage movements on the body to help warm the muscles, stimulate the nervous system and thereby increase blood circulation..</p>

                <p>-Stretching techniques: this technique usually focuses on stretching and stretching the muscles. Thereby increasing flexibility and better recovery after exercise..</p>

                <p>-Kneading technique: often used first in sports massage, because it is mainly used to soften and stretch muscles. By applying pressure and gentle movements to the body, it increases blood circulation and reduces stress.</p>

              </div>

              <img src="../img/NewDetails-spa-3.jpg" alt="" style={{ width: '100%' }} />





              <div class="news_item">
                <h4 style={{ color: 'rgb(90, 87, 87)' }}>You may be interested : </h4>

                <div class="row Tintuc1">

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="./NewsDetails/NewsBicycle.html"><img src="../img/home-tintuc-1.jpg" alt="" style={{ width: '90%' }} /></a>
                      <b>The importance of Cycling for health </b>

                    </div>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="./NewsDetails/NewsSwimming.html"><img src="../img/home-tintuc-2.jpg" alt="" style={{ width: '90%' }} /></a>
                      <b>The importance of swimming for health </b>

                    </div>
                  </div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="./NewsDetails/NewsFitness.html"><img src="../img/home-tintuc-3.jpg" alt="" style={{ width: '100%' }} /></a>
                      <b>Sports and Fitness Improve for health </b>

                    </div>
                  </div>

                </div>

                <div class="row Tintuc2">

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="./NewsDetails/NewGroupFitnes.html"><img src="../img/home-tintuc-4.jpg" alt="" style={{ width: '90%' }} /></a>
                      <b>Benefits of Group Fitness </b>
                    </div>
                  </div>

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href="./NewsDetails/NewFood.html"><img src="../img/home-tintuc-5.jpg" alt="" style={{ width: '100%' }} /></a>
                      <b>Food benefits for health</b>

                    </div>
                  </div>

                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div class="cart">
                      <a href=""><img src="../img/home-tintuc-6.jpg" alt="" style={{ width: '100%' }} /></a>
                      <b> spas for health</b>

                    </div>
                  </div>

                </div>

              </div>

              <div class="comment" style={{ marginbottom: '200px' }}>
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
                <input type="checkbox" style={{ margin: '15px 0px' }} /> Save my name, email, and website in this browser for the next time I comment.
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
export default NewSalos;
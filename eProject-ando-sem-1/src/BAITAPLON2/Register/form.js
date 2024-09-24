import React from "react"

import "./form.css";
function Register() {
    return (
        <>
            <div class="container-fluid all">
                <div class="container">

                    <div class="row">

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="contact-form">
                                <form>
                                    <label for="name">Full Name</label>
                                    <input type="text" name="fullname" placeholder="Your Name ..." required />
                                    <label for="email">Email</label>
                                    <input type="text" name="email" placeholder="Your Email ..." required />
                                    <label for="phonenumber">Phone Number</label>
                                    <input type="text" name="phonenumber" placeholder="Phone number ..." required />
                                    <label for="target">Target</label>
                                    <select id="">
                                        <option value="">Traning Schedule</option>
                                        <option value="">Weight Loss</option>
                                        <option value="">Full Body</option>
                                        <option value="">Abs</option>
                                        <option value="">Booty and Legs</option>
                                        <option value="">Resistance</option>
                                    </select>
                                    <input type="submit" value="REGISTER" class="register" style={{ color: 'black' }} />
                                </form>
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{textalign: 'center'}}>
                            <img src="img/img-box-form.webp" alt="" style={{width:'100%'}} />
                        </div>


                    </div>

                </div>
            </div>




        </>
    )
}
export default Register;

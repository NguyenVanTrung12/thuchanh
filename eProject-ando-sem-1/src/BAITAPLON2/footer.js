import { Link } from 'react-router-dom';
import '../Css/footer.css'

export default function Footer() {
    return (
        <div className="container-fluid footer" >
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 col1">
                        <img src="img/logo.png" alt="" width="50%" style={{ margin: '30px 0' }} />
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 col2">
                        <i className='fa fa-globe'></i><span>ptfitness.vn</span>
                        <br />
                        <i className='fa fa-phone address'></i><span>096.8276.996</span>
                        <br />
                        <i className="fa fa-map-marker address"></i><span>238 Hoang Quoc Viet, Bac Tu Liem, Ha Noi
                        </span>
                        <br />
                        <i className="fa fa-envelope address"></i><span>daotao@bachkhoa-aptech.edu.vn</span>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col4">
                        <div className="policy-container">
                            <div className="policy-column">
                                <b>Buying Guy</b><br />
                                <b>Shipping Policy</b><br />
                                <b>Payment Method</b><br />
                                <b>Exchange</b>
                            </div>
                            <div className="policy-column">
                                <b>Warranty Policy</b><br />
                                <b>Return Policy</b><br />
                                <b>Privary Policy</b><br />
                                <b>Refund Policy</b>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col3">
                        <div className="vertical-list">
                            <div><i className='fa fa-arrow-right'></i><b>About PRIME</b></div>
                            <div><i className='fa fa-arrow-right'></i><b>Smart Strength Technology</b></div>
                            <div><i className='fa fa-arrow-right'></i><b>Prime Near Me</b></div>
                            <div><i className='fa fa-arrow-right'></i><b>Prime News</b></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col5">
                        <div className="follow-me">
                            <b className="follow">Follow Me :</b>
                            <div className="social-icons">
                                <a href='https://www.youtube.com/watch?v=EgxgD3wylLA'><i className='fa fa-facebook icon1'></i></a>
                                <a href='https://www.youtube.com/watch?v=nPiSX3gUbOg'><i className='fa fa-youtube-square icon1'></i></a>
                                <a href=''><i className='fa fa-instagram icon1'></i></a>
                                <a href=''><i className='fa fa-telegram icon1'></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
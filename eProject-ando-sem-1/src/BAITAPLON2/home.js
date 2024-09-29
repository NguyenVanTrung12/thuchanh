import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import '../Css/home.css';
export default function Home() {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleShow = (imgSrc) => {
        setSelectedImage(imgSrc);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const feedbacks = [
        {
            img: 'img/1.webp',
            text: 'Each workout with the coach burned so many calories... I became "addicted" to this sport.',
            author: 'Duong Thi Hong Nhung / Hotel Manager',
        },
        {
            img: ' img/cus3.jpg',
            text: 'Now my previous belly fat has become a little smaller. I really thank the coaches...',
            author: 'Nguyen Van Trung / Teacher',
        },
        {
            img: 'img/2.webp',
            text: 'Each workout with the coach burned so many calories... I became "addicted" to this sport.',
            author: 'Tran Thi Bach Thao / Hotel Manager',
        },
    ];
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

            {/* Section 1 */}
            <div className="container n">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-sm-6">
                        <div className="nd2">
                            <h4 className="card-title">APEX FITNESS AND THE DEVELOPMENT PATH</h4>
                            <p className="card-text">
                                Apex fitness is a professional organization, a pioneer in serving and bringing health and beauty to active people to thereby improve the quality of life.
                            </p>
                            <p className="card-text">
                                We understand the pressures and fatigue of your work and life. And more than ever, we also understand the desire to have good health and a beautiful body. Therefore, at Apex fitness, we always strive to bring the best quality KickFitness and HIIT training programs. It is the most effective and healthy way to regain vitality, a balanced body, improve health problems such as back, shoulder, and bone pain due to sitting too much, lack of exercise, and at the same time increase flexible reflexes and self-defense.
                            </p>
                            <button className="btn btn-danger">SEE MORE</button>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <img
                            src="/img/gioi-thieu-gym-768x488.jpg"
                            alt="Introduction to ApexFitness Gym"
                            className="img-fluid rounded"
                            style={{ margin: '20px 0px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="container n">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-sm-6">
                        <img
                            src="img/huanluenviencanhan2.jpg"
                            alt="Coach Team"
                            className="img-fluid rounded"
                            style={{ margin: '20px 0px' }}
                        />
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="nd2">
                            <h4 className="card-title">COACH, CORE TEAM</h4>
                            <p className="card-text">
                                At Apex fitness, we build our success on high quality professional products and customer service based on the motto: Close - Hands-on - Dedicated.
                            </p>
                            <p className="card-text">
                                The Trainers are former professional athletes who are thoroughly trained and have deep experience in sports science, bringing the best results to students. Trainers are direct representatives of Apex fitness, providing high quality services to customers, so they always have the mindset of a service provider, understand the high and strict requirements of the service industry to always strive to satisfy each student in each training session.
                            </p>
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
                                <h2 style={{ color: 'white' }}><span style={{ color: '#ed1c24' }}>MEMBER </span> RESULTS</h2>
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
                                            <div className="card" style={{ width: 300 }}>
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
                                <h2>MEET <span style={{ color: '#ed1c24' }}> THE COACH</span></h2>
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
                    <h2 className="feedback-title">
                        CUSTOMER <span>FEEDBACK</span>
                    </h2>
                    <div className="row justify-content-center">
                        {feedbacks.map((feedback, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                                <div className="feedback-item">
                                    <img src={feedback.img} className="feedback-img" alt={`Customer ${index + 1}`} />
                                    <p className="feedback-text">{feedback.text}</p>
                                    <p className="feedback-author">
                                        <b style={{ color:'red' ,fontSize:'20px'}}>{feedback.author}</b>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>








            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="nd1">
                            <h2><span style={{ color: '#ed1c24' }}>HIGH-END </span> WORKOUT EQUIPMENT</h2>
                        </div>
                    </div>
                </div>


                <div className="row image-gallery">
                    {['img/tb1.jpg', 'img/tb2.jpg', 'img/tb3.jpg', 'img/tb4.jpg', 'img/tb5.jpg', 'img/tb6.jpg', 'img/tb7.jpg', 'img/tb8.jpg'].map((src, index) => (
                        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"> {/* 4 ảnh mỗi hàng trên màn hình lớn */}
                            <Button variant="light" className="image-button" onClick={() => handleShow(src)}>
                                <img id={`myImg${index}`} className="img-trigger img-fluid gallery-img" src={src} alt={`Image ${index + 1}`} />
                            </Button>
                        </div>
                    ))}

                    {/* Modal hiển thị ảnh */}
                    <Modal show={show} onHide={handleClose} animation={true} centered>
                        <Modal.Body className="text-center p-0">
                            <img className="img-fluid modal-img" src={selectedImage} alt="Selected" />
                        </Modal.Body>
                    </Modal>
                </div>




            </div>

            <div className="container dk">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-sm-6">
                        <div className="img_card">
                            <img className="img-fluid" src="img/dk.jpg" alt="Sign Up" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <p className="form-description">
                            Please fill in the form below accurately and we will call you as soon as possible.
                        </p>
                        <form action="/action_page.php" className="signup-form">
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
                                <textarea className="form-control" id="comment" name="text" placeholder="Additional notes..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">SIGN UP FOR A QUOTE</button>
                        </form>
                    </div>
                </div>
            </div>
            <section className="class-schedule-area section-padding parallax" id="schedule">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-2 text-center">
                            {/* Section title */}
                            <div className="gym-title">
                                <h2>
                                    class <span>schedule</span>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="schedule-table-area">
                                <table className="schedule-table table-responsive">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div className="sched-days">#</div>
                                            </th>
                                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                                <th className="rt-col-title" key={day}>
                                                    <div className="sched-days">{day}</div>
                                                </th>
                                            ))}
                                        </tr>
                                        {[
                                            { time: '09:00 am', sessions: ['swimming', '', 'Yoga', '', 'Meditation', '', 'Karate'] },
                                            { time: '11:00 am', sessions: ['', 'Running', '', 'Body Building', '', 'Yoga', ''] },
                                            { time: '01:00 pm', sessions: ['Yoga', '', 'swimming', '', 'Karate', '', 'Running'] },
                                            { time: '03:00 pm', sessions: ['', 'swimming', '', 'Running', '', 'Meditation', ''] },
                                            { time: '05:00 pm', sessions: ['Meditation', '', 'Karate', '', 'Body Building', '', 'swimming'] },
                                            { time: '07:00 pm', sessions: ['', 'Body Building', '', 'swimming', '', 'Yoga', ''] }
                                        ].map((row, index) => (
                                            <tr key={index}>
                                                <th className="sced-time-table">{row.time}</th>
                                                {row.sessions.map((session, i) => (
                                                    <td key={i}>
                                                        {session && (
                                                            <div className="sched-tit-tim">
                                                                <span className="sched-title">{session}</span>
                                                                <span className="sched-time">
                                                                    {row.time} - {row.time.replace('am', 'pm')}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}                
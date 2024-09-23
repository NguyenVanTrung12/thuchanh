import React, { useEffect } from "react";
import "../Css/about.css";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in-image, .slide-in-text');

    // Apply sliding effects
    elements.forEach((element, index) => {
      if (index % 2 === 1) {
        element.classList.add('slide-in-left'); // Odd: slide from left
      } else {
        element.classList.add('slide-in-right'); // Even: slide from right
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove class when out of view
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup observer when component unmounts
    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <div className="container fade-in">
        <h1 style={{ textAlign: 'center' }}>
          About us: <span style={{ color: 'red', textAlign: 'center' }}>Venomous Snakes</span>
        </h1>
        <div className="row">
          <div className="col-12 col-md-6 slide-in-image">
            <img className="card-img-top" src="img/about1.jpg" alt="Card image"
              style={{ maxWidth: '80%', height: '600px', objectFit: 'cover' }} />
          </div>
          <div className="col-12 col-md-6 slide-in-text">
            <div className="car">
              <h3 style={{ marginLeft: '100px', color: 'red',fontSize:'40px',fontSize:'40px' }}>Nguyen Van Trung</h3>
              <div className="in4">
                <p className="card-text textt"><b>Address:</b> Phu Kieu, Kieu Mai, Bac Tu Liem, Ha Noi</p>
                <p className="card-text textt"><b>Email:</b> vantrung1242005@gmail.com</p>
                <p className="card-text textt"><b>Phone Number:</b> 0862144338</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections */}
      <div className="container fade-in">
        <div className="row">
          <div className="col-12 col-md-6 slide-in-text">
            <div className="car">
              <h3 style={{ marginLeft: '100px', color: 'red',fontSize:'40px' }}>Tran Thi Bach Thao</h3>
              <div className="in4">
                <p className="card-text textt"><b>Address:</b> Nguyen Khe, Dong Anh, Ha Noi</p>
                <p className="card-text textt"><b>Email:</b> bachthao111205@gmail.com</p>
                <p className="card-text textt"><b>Phone Number:</b> 0327985042</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 slide-in-image">
            <img className="card-img-top" src="img/about4.jpg" alt="Card image"
              style={{ maxWidth: '80%', height: '600px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <div className="container fade-in">
        <div className="row">
          <div className="col-12 col-md-6 slide-in-image">
            <img className="card-img-top" src="img/about6.jpg" alt="Card image"
              style={{ maxWidth: '80%', height: '600px', objectFit: 'cover' }} />
          </div>
          <div className="col-12 col-md-6 slide-in-text">
            <div className="car">
              <h3 style={{ marginLeft: '100px', color: 'red',fontSize:'40px' }}> Tran Tung Duong</h3>
              <div className="in4">
                <p className="card-text textt"><b>Address:</b> Hao Nam, Dong Da, Ha Noi</p>
                <p className="card-text textt"><b>Email:</b> duongdeptrai317@gmail.com</p>
                <p className="card-text textt"><b>Phone Number:</b> 0343075987</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container fade-in">
        <div className="row">
          <div className="col-12 col-md-6 slide-in-text">
            <div className="car">
              <h3 style={{ marginLeft: '100px', color: 'red',fontSize:'40px' }}>Duong Thi Hong Nhung</h3>
              <div className="in4">
                <p className="card-text textt"><b>Address:</b> Tan My, MyDinh1, Nam Tu Liem, Ha Noi</p>
                <p className="card-text textt"><b>Email:</b> nhung1379nvc@gmail.com</p>
                <p className="card-text textt"><b>Phone Number:</b> 0355612890</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 slide-in-image">
            <img className="card-img-top" src="img/about3.jpg" alt="Card image"
              style={{ maxWidth: '80%', height: '600px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <div className="container fade-in">
        <div className="row">
          <div className="col-12 col-md-6 slide-in-image">
            <img className="card-img-top" src="img/about2.jpg" alt="Card image"
              style={{ maxWidth: '80%', height: '600px', objectFit: 'cover' }} />
          </div>
          <div className="col-12 col-md-6 slide-in-text">
            <div className="car">
              <h3 style={{ marginLeft: '100px', color: 'red',fontSize:'40px' }}>Nguyen Tuyen Canh</h3>
              <div className="in4">
                <p className="card-text textt"><b>Address:</b> Tran Cung, Bac Tu Liem, Ha Noi</p>
                <p className="card-text textt"><b>Email:</b> canh19012k5@gmail.com</p>
                <p className="card-text textt"><b>Phone Number:</b> 0379255680</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
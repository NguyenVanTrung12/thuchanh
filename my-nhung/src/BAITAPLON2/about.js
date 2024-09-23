import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import '../Css/about.css';

import React, { useEffect } from 'react';


export default function About() {

  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in-image, .slide-in-text');

    // Áp dụng hiệu ứng cho cả ảnh và chữ
    elements.forEach((element, index) => {
      if (index % 2 === 1) {
        element.classList.add('slide-in-left'); // Chẵn: hiệu ứng từ trái sang
      } else {
        element.classList.add('slide-in-right'); // Lẻ: hiệu ứng từ phải sang
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Xóa lớp khi không còn trong viewport
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  }, []);

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
              <h3>Nguyen Van Trung</h3>
              <div className="in4">
                <p className="card-text"><b>Address:</b> Phu Kieu, Kieu Mai, Bac Tu Liem, Ha Noi</p>
                <p className="card-text"><b>Email:</b> vantrung1242005@gmail.com</p>
                <p className="card-text"><b>Phone Number:</b> 0862144338</p>
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
              <h3>Tran Thi Bach Thao</h3>
              <div className="in4">
                <p className="card-text"><b>Address:</b> Nguyen Khe, Dong Anh, Ha Noi</p>
                <p className="card-text"><b>Email:</b> bachthao111205@gmail.com</p>
                <p className="card-text"><b>Phone Number:</b> 0327985042</p>
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
              <h3 style={{ marginLeft: '100px', color: 'red' }}> Tran Tung Duong</h3>
              <div className="in4">
                <p className="card-text"><b>Address:</b> Hao Nam, Dong Da, Ha Noi</p>
                <p className="card-text"><b>Email:</b> duongdeptrai317@gmail.com</p>
                <p className="card-text"><b>Phone Number:</b> 0343075987</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container fade-in">
        <div className="row">
          <div className="col-12 col-md-6 slide-in-text">
            <div className="car">
              <h3>Duong Thi Hong Nhung</h3>
              <div className="in4">
                <p className="card-text"><b>Address:</b> Tan My, MyDinh1, Nam Tu Liem, Ha Noi</p>
                <p className="card-text"><b>Email:</b> nhung1379nvc@gmail.com</p>
                <p className="card-text"><b>Phone Number:</b> 0355612890</p>
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
              <h3 style={{ marginLeft: '100px', color: 'red' }}>Nguyen Tuyen Canh</h3>
              <div className="in4">
                <p className="card-text"><b>Address:</b> Tran Cung, Bac Tu Liem, Ha Noi</p>
                <p className="card-text"><b>Email:</b> canh19012k5@gmail.com</p>
                <p className="card-text"><b>Phone Number:</b> 0379255680</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import "./css/ProductDetail.css"
import { useParams } from 'react-router-dom';
import data from "../../data.json";

function ProductDetail() {

  const ImageMagnifier = ({ imgSrc, zoom }) => {
    const imgRef = useRef(null);
    const glassRef = useRef(null);
  
    useEffect(() => {
      
      const img = imgRef.current;
      const glass = glassRef.current;
  
      // Tạo magnifier glass
      glass.setAttribute('class', 'img-magnifier-glass');
  
      // Chèn magnifier glass vào DOM
      img.parentElement.insertBefore(glass, img);
  
      // Cài đặt các thuộc tính cho magnifier glass
      glass.style.backgroundImage = `url('${img.src}')`;
      glass.style.backgroundRepeat = 'no-repeat';
      glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
  
      const bw = 3;
      const w = glass.offsetWidth / 2;
      const h = glass.offsetHeight / 2;
  
      const moveMagnifier = (e) => {
        e.preventDefault();
        const pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;
  
        // Ngăn magnifier glass bị ngoài bức ảnh
        if (x > img.width - w / zoom) x = img.width - w / zoom;
        if (x < w / zoom) x = w / zoom;
        if (y > img.height - h / zoom) y = img.height - h / zoom;
        if (y < h / zoom) y = h / zoom;
  
        // Đặt vị trí cho magnifier glass
        glass.style.left = `${x - w}px`;
        glass.style.top = `${y - h}px`;
  
        // Hiển thị những gì magnifier glass "nhìn thấy"
        glass.style.backgroundPosition = `-${(x * zoom) - w + bw}px -${(y * zoom) - h + bw}px`;
      };
  
      const getCursorPos = (e) => {
        const a = img.getBoundingClientRect();
        let x = e.pageX - a.left - window.pageXOffset;
        let y = e.pageY - a.top - window.pageYOffset;
        return { x, y };
      };
  
      // Thêm sự kiện di chuyển chuột
      img.addEventListener('mousemove', moveMagnifier);
      glass.addEventListener('mousemove', moveMagnifier);
  
      // Cũng cho các thiết bị cảm ứng
      img.addEventListener('touchmove', moveMagnifier);
      glass.addEventListener('touchmove', moveMagnifier);
  
      return () => {
        // Xóa sự kiện khi component bị hủy
        img.removeEventListener('mousemove', moveMagnifier);
        glass.removeEventListener('mousemove', moveMagnifier);
        img.removeEventListener('touchmove', moveMagnifier);
        glass.removeEventListener('touchmove', moveMagnifier);
      };
    }, [imgSrc, zoom]);
  
    return (
      <div style={{ position: 'relative' }}>
        <img ref={imgRef} src={imgSrc} alt="Magnifiable" style={{ width: '100%', height: 'auto' }} />
        <div ref={glassRef} style={{ position: 'absolute', border: '3px solid #000', borderRadius: '50%', width: '100px', height: '100px', opacity: 0.7, pointerEvents: 'none' }} />
      </div>
    );
  };
  
  const { id } = useParams();

  const product = data.product.find((item) => item.id == id)


  

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 left">
            <div className="Category_img">
                <img src="../img/home-rigt-tintuc-2.jpg" style={{width:'100%',margin:'20px 0px'}} alt="Category" />
              </div>
              <div className="Category_img">
                <img src="../img/home-rigt-tintuc-1.jpg" style={{width:'100%'}} alt="Category" />
              </div>
            </div>

            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 right">
              <div className="row">
              <h3 style={{textAlign:'center'}}>{product.name}</h3>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div
                    className="img-magnifier-container"
                    style={{ margin: "0px 20px" }}
                  >
                      <ImageMagnifier imgSrc={'../'+ product.imageUrl} zoom={2} />
                   
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  
                  <p>
                    <b>Giá : </b> {'$'+product.price+'.00'}
                  </p>
                  <p>
                    Được biết đến là thương hiệu đi đầu trong lĩnh vực thể thao,
                    Adidas đã làm trọn vẹn thêm lòng tin thương hiệu với khách
                    hàng của mình nhờ mẫu thiết kế đẳng cấp cho dòng Máy chạy bộ
                    Adidas T-19i Treadmill.
                  </p>
                  <p style={{ borderBottom: "1px solid #ddd" }}>
                    Mời bạn liên hệ trực tiếp để nhận được báo giá tốt nhất.
                  </p>
                  <div style={{ borderBottom: "1px solid #ddd" }}>
                  <b>Số lượng :</b>
                    <p>
                      
                      <span className="buttonn">
                        <input  type="number"  style={{float:'left',width:'70%',height:'40px'}} />
                        <button type="submit" className="btn" style={{borderRadius:'none'}}>
                          ADD CART
                        </button>
                      </span>
                    </p>
                  </div>
                  <p>
                    <b>SKU:</b> T-19x
                  </p>
                  <p>
                    <b>Categories : </b> Máy chạy bộ gia đình, Máy tập Adidas,
                    Máy tập gym gia đình
                  </p>
                </div>
              </div>

              <div style={{ backgroundColor: "#ddd", padding: "20px 20px" }}>
                <p>
                  <b>Mô tả :</b>
                </p>
                <p>
                  Tiếp nối những mẫu máy chạy bộ hàng đầu của mình, Adidas tiếp
                  tục tung ra thị trường mẫu máy chạy bộ Adidas T-19x Treadmill
                  với những công nghệ tiên tiến, thiết kế ấn tượng và phù hợp
                  với mọi đối tượng, đem lại trải nghiệm tuyệt vời!
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default ProductDetail;
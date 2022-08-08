import "./Product.scss";
import sniker from "../../src/assets/img/sniker.jpg";
import sniker2 from "../../src/assets/img/sniker2.jpg";
import sniker3 from "../../src/assets/img/skiker3.jpg";
import sniker4 from "../../src/assets/img/sniker4.jpg";
import 'react-image-lightbox/style.css';
import Lightbox from "react-image-lightbox";
import { useState } from "react";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="product_container">
      <div className="content-left">
        <div className="img-up">
          <img src={sniker} />
        </div>
        <div className="img-down">
          <div className="img-small">
            <img src={sniker2} />
          </div>
          <div className="img-small">
            <img src={sniker3} />
          </div>
          <div className="img-small">
            <img src={sniker4} />
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="title">
          <h1>Giày chạy bộ nam New Balance Stability - MVNGOBP5</h1>
        </div>
        <div className="price">
          <span>229.000 ₫</span>F
        </div>
        <div className="size">
          <span>Size : 29</span>
        </div>
        <div className="action">
          <p>Số lượng</p>
          <input type="number" className="quantity" value="1" />
          <button className="buy">Chọn mua</button>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
      )}
    </div>
  );
};
export default Product;

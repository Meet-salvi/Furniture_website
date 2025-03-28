import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetails() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  // };

  // const thumbSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: true,
  // };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const mainSlider = useRef();
  const thumbSlider = useRef();

  return (
    <div>
      {/*breadcrumb section start*/}
      <div className="breadcrumb-section pt-40 pb-40">
        <div className="container-1700">
          <p className="breadcrumb-text mb-0">
            <a href="index.html">Home</a> /{" "}
            <span className="text-main-color">Product Details</span>
          </p>
        </div>
      </div>
      {/*breadcrumb section end*/}
      {/*product details start*/}
      <section className="vr-prodcuct-details ptb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="vr-product-double-slider">
                <div className="vr-product-thumb position-relative">
                  <span className="badge sale-badge">Sale</span>
                  <div className="vr-product-single-slider">
                    <Slider
                      ref={(slider) => {
                        setNav1(slider);
                        mainSlider.current = slider;
                      }}
                      asNavFor={nav2}
                      fade={true}
                      arrows={true}
                      autoplay={true}
                      autoplaySpeed={3000} // Set autoplay speed
                      pauseOnHover={true} // Pause autoplay when hovered
                    >
                      {/* Slide 1 */}
                      <div className="single-item text-center">
                        <span className="zoom-on-hover d-inline-block">
                          <img
                            src="assets/images/products/pd-thumb-1.png"
                            alt="product"
                            className="img-fluid mood-multiply d-inline-block"
                          />
                        </span>
                      </div>
                      {/* Slide 2 */}
                      <div className="single-item text-center">
                        <span className="zoom-on-hover d-inline-block">
                          <img
                            src="assets/images/products/pd-thumb-2.png"
                            alt="product"
                            className="img-fluid mood-multiply d-inline-block"
                          />
                        </span>
                      </div>
                      {/* Slide 3 */}
                      <div className="single-item text-center">
                        <span className="zoom-on-hover d-inline-block">
                          <img
                            src="assets/images/products/pd-thumb-3.png"
                            alt="product"
                            className="img-fluid mood-multiply d-inline-block"
                          />
                        </span>
                      </div>
                    </Slider>
                  </div>
                </div>
                {/* Thumbnail Control Slider */}
                <div className="vr-product-thumb-control mt-4">
                  <Slider
                    ref={(slider) => {
                      setNav2(slider);
                      thumbSlider.current = slider;
                    }}
                    asNavFor={nav1}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={true}
                    autoplay={false} // Disable autoplay to avoid conflict
                  >
                    <div className="single-item text-center">
                      <img
                        src="assets/images/products/vr-thumb-control-1.png"
                        alt="product"
                        className="img-fluid mood-multiply"
                      />
                    </div>
                    <div className="single-item text-center">
                      <img
                        src="assets/images/products/vr-thumb-control-2.png"
                        alt="product"
                        className="img-fluid mood-multiply"
                      />
                    </div>
                    <div className="single-item text-center">
                      <img
                        src="assets/images/products/vr-thumb-control-3.png"
                        alt="product"
                        className="img-fluid mood-multiply"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="vr-product-details-content mt-5 mt-xl-0">
                <h3 className="mb-4 fw-semibold">
                  Stonal Dinning Table Set 6X6 Full Packaged
                </h3>
                <div className="product-rating">
                  <ul className="rating-star d-inline-flex">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <span className="fs-sm">(3 Customer Reviews)</span>
                </div>
                <h5 className="mb-0 mt-30">
                  $1530.30 <del className="ms-1 text-color">$2100</del>
                </h5>
                <p className="mb-40 mt-30">
                  Ac montes elementum proin viverra placerat purus sagittis dui
                  curae, aptent tristi que eget enim rhoncus nostra torquent
                  luctus risus, tincidunt platea semper odio metus himenaeos
                  orciIac uliseu donec lacinia feugiat proin
                </p>
                <div className="color-variant">
                  <span className="fs-sm text-uppercase text-main-color fw-medium">
                    Color
                  </span>
                  <ul className="color-list mt-20">
                    <li className="red">
                      <a href="#" />
                    </li>
                    <li className="blue">
                      <a href="#" />
                    </li>
                    <li className="green">
                      <a href="#" />
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center mt-30 gap-3">
                  <div className="quantity-box">
                    <button type="button" className="drecrement">
                      <i className="fa-solid fa-minus" />
                    </button>
                    <input type="text" defaultValue={1} />
                    <button type="button" className="drecrement">
                      <i className="fa-solid fa-plus" />
                    </button>
                  </div>
                  <a
                    href="#"
                    className="template-btn primary-btn fs-sm text-uppercase h-40"
                  >
                    ADD To Cart
                  </a>
                </div>
                <a href="#" className="pd-wishlist-btn text-uppercase mt-30">
                  <i className="fa-regular fa-heart" />
                  ADD Wishlist
                </a>
                <ul className="product-meta mt-32">
                  <li>SKU:17</li>
                  <li>Categories: Light Bulb, Table</li>
                  <li>Tags: Iluminate, Textured</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-product details end*/}
    </div>
  );
}

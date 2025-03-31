import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust as per screen size
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Enables better spacing
    centerPadding: "20px", // Adds spacing between slides
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 boxes per row on desktop
    slidesToScroll: 1, // Slide 1 box at a time
    centerMode: true, // Enables better spacing
    centerPadding: "10px", // Adds spacing between slides
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/*hero section start*/}
      <section className="vr5-hero-section overflow-hidden position-relative overflow-hidden z-1">
        <img
          src="assets/images/home-5/chair_banner1.png"
          alt="flower"
          className="img-fluid position-absolute end-0 bottom-0 z--1 flower-shape"
        />
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="vr5-hero-banner"
                data-background="assets/images/home-5/sofa_banner1.png"
                style={{
                  backgroundImage: "url(assets/images/home-5/sofa_banner2.png)",
                }}
              />
            </div>
            <div className="col-xl-6">
              <div className="vr5-hero-content-slider">
                <div className="single-item">
                  <span className="fw-semibold text-main-color text-uppercase">
                    60% Flat Discount
                  </span>
                  <h1 className="mt-40 mb-5">New Year End Sale Hurry Up!</h1>
                  <p className="mb-60">
                    Sollicitudin natoque et nam dis potenti ante mi tincidunt.
                    Scelerisque nam sociosqu lacinia aliquet ac penatibus at
                    aptent consequat, lacus placerat congue quam vitae fames
                    etiam.
                  </p>
                  <a
                    href="shop.html"
                    className="template-btn primary-btn vr5-btn"
                  >
                    Show Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*hero section end*/}

      {/*ticker section start*/}
      <div className="ticker-area overflow-hidden vr5-ticker-area">
        <div className="ticker-wrapper bg-white">
          <div className="ticker vr5-ticker">
            <span className="text-main-color fw-bold fs-18 text-uppercase">
              Get 20% Discount on your first product
            </span>
            <span className="text-main-color fw-bold fs-18 text-uppercase">
              DISCOVER LATEST COLLECTIONS AND TOP DESIGNERS{" "}
            </span>
            <span className="text-main-color fw-bold fs-18 text-uppercase">
              10% DISCOUNT FOR REGISTERED USERS
            </span>
            <span className="text-main-color fw-bold fs-18 text-uppercase">
              Get 20% Discount on your first product
            </span>
            <span className="text-main-color fw-bold fs-18 text-uppercase">
              DISCOVER LATEST COLLECTIONS AND TOP DESIGNERS
            </span>
            <span className="text-main-color fw-bold fs-18 text-uppercase">
              10% DISCOUNT FOR REGISTERED USERS
            </span>
          </div>
        </div>
      </div>
      {/*ticker section end*/}

      {/*collection slider section start*/}
      <section className="vr5-collection-area ptb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h3 className="mb-0 fw-medium">Living Room Collection</h3>
            </div>
          </div>
          <div className="vr5-collection-slider slider-spacing mt-5">
            <Slider {...settings}>
              {/* Product 1 */}
              <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                <div className="vr5-product-card">
                  <div className="feature-image position-relative">
                    <img
                      src="assets/images/products/chair-md-2.png"
                      alt="not found"
                      className="img-fluid"
                    />
                    <div className="action-box">
                      <a href="#" className="cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <span className="fw-semibold subtitle text-uppercase">
                      Levies Cotton
                    </span>
                    <a href="product-details.html">
                      <h6 className="fw-semibold mt-3">White Comfort Chairs</h6>
                    </a>
                    <span className="text-main-color fw-bold fs-sm">
                      $693.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                <div className="vr5-product-card">
                  <div className="feature-image position-relative">
                    <img
                      src="assets/images/products/weardrobe-md.png"
                      alt="not found"
                      className="img-fluid"
                    />
                    <div className="action-box">
                      <a href="#" className="cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <span className="fw-semibold subtitle text-uppercase">
                      Levies Cotton
                    </span>
                    <a href="product-details.html">
                      <h6 className="fw-semibold mt-3">
                        Dinning Room Self Cabin
                      </h6>
                    </a>
                    <span className="text-main-color fw-bold fs-sm">
                      $233.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                <div className="vr5-product-card">
                  <div className="feature-image position-relative">
                    <img
                      src="assets/images/products/table-md.png"
                      alt="not found"
                      className="img-fluid"
                    />
                    <div className="action-box">
                      <a href="#" className="cart-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <span className="fw-semibold subtitle text-uppercase">
                      Levies Cotton
                    </span>
                    <a href="product-details.html">
                      <h6 className="fw-semibold mt-3">
                        Ballroom Wooden Table
                      </h6>
                    </a>
                    <span className="text-main-color fw-bold fs-sm">
                      $486.00
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="vr5-collection-progressbar mt-60">
            <span className="vr5-collection-progress" />
          </div>
        </div>
      </section>
      {/*collection slider section end*/}

      {/*category secion start*/}
      <section className="vr5-category-section overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-6">
              <div className="vr5-ct-single-box position-relative border-start-0 large-box">
                <img
                  src="assets/images/home-5/sofa1.png"
                  alt="not found"
                  className="img-fluid"
                />
                <a href="shop-list.html" className="explore-btn">
                  Sofa
                </a>
              </div>
            </div>{" "}
            <div className="col-xl-6">
              <div className="vr5-ct-single-box position-relative border-start-0 large-box">
                <img
                  src="assets/images/home-5/chair_banner2.png"
                  alt="not found"
                  className="img-fluid"
                />
                <a href="shop-list.html" className="explore-btn">
                  Chair
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*category section end*/}

      {/*filter section start*/}
      <section className="vr5-filter-section pt-40 mb-100 vr5-action-area  position-relative ">
        <div className="container-1700">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h3 className="mb-50 fw-medium">Our Best Seller Products</h3>
              </div>
            </div>
          </div>
          <div className="vr5-filter ">
            <ul className="nav nav-tabs justify-content-center border-0 vr5-filter-nav">
              <li>
                <a href="#chairs" data-bs-toggle="tab" className="active">
                  Chairs
                </a>
              </li>
              <li>
                <a href="#sofa" data-bs-toggle="tab">
                  Sofa
                </a>
              </li>
            </ul>
            <div className="tab-content mt-5">
              <div className="tab-pane show active" id="chairs">
                <div className="vr5-filter-slider slider-spacing">
                  <div style={{ padding: "20px" }}>
                    <Slider {...settings2}>
                      {/* Product Card 1 */}
                      <div className="vr5-product-card p-2">
                        <div className="feature-image position-relative">
                          <span className="circle-badge sale">Sale</span>
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/chair-md-2.png"
                              alt="Chair"
                              className="img-fluid"
                            />
                          </a>
                          <div className="action-box">
                            <button className="cart-btn">Add to Cart</button>
                          </div>
                        </div>
                        <div className="product-content">
                          <span className="fw-semibold subtitle text-uppercase">
                            Levies Cotton
                          </span>
                          <a href="product-details.html">
                            <h6 className="fw-semibold mt-3">
                              Director Beach Comfort Chair
                            </h6>
                          </a>
                          <p className="fs-sm mb-4">
                            Lacinia platea feugiat accumsan potenti fringilla
                            malesuada...
                          </p>
                          <span className="text-main-color fw-bold fs-sm">
                            $893.00
                          </span>
                        </div>
                      </div>

                      {/* Product Card 2 */}
                      <div className="vr5-product-card p-2">
                        <div className="feature-image position-relative">
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/busket-md.png"
                              alt="Basket"
                              className="img-fluid"
                            />
                          </a>
                          <div className="action-box">
                            <button className="cart-btn">Add to Cart</button>
                          </div>
                        </div>
                        <div className="product-content">
                          <span className="fw-semibold subtitle text-uppercase">
                            Levies Cotton
                          </span>
                          <a href="product-details.html">
                            <h6 className="fw-semibold mt-3">
                              Beach Comfort Chair
                            </h6>
                          </a>
                          <p className="fs-sm mb-4">
                            Lacinia platea feugiat accumsan potenti fringilla
                            malesuada...
                          </p>
                          <span className="text-main-color fw-bold fs-sm">
                            $799.00
                          </span>
                        </div>
                      </div>

                      {/* Product Card 3 */}
                      <div className="vr5-product-card p-2">
                        <div className="feature-image position-relative">
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/long-table-md.png"
                              alt="Long Table"
                              className="img-fluid"
                            />
                          </a>
                          <div className="action-box">
                            <button className="cart-btn">Add to Cart</button>
                          </div>
                        </div>
                        <div className="product-content">
                          <span className="fw-semibold subtitle text-uppercase">
                            Levies Cotton
                          </span>
                          <a href="product-details.html">
                            <h6 className="fw-semibold mt-3">
                              Beach Comfort Chair
                            </h6>
                          </a>
                          <p className="fs-sm mb-4">
                            Lacinia platea feugiat accumsan potenti fringilla
                            malesuada...
                          </p>
                          <span className="text-main-color fw-bold fs-sm">
                            $950.00
                          </span>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="sofa">
                <div className="vr5-filter-slider slider-spacing">
                  <div style={{ padding: "20px" }}>
                    <Slider {...settings2}>
                      {/* Product Card 1 */}
                      <div className="vr5-product-card">
                        <div className="feature-image position-relative">
                          <span className="circle-badge sale">Sale</span>
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/chair-md-2.png"
                              alt="Chair"
                              className="img-fluid"
                            />
                          </a>
                          <div className="action-box">
                            <button className="cart-btn">Add to Cart</button>
                          </div>
                        </div>
                        <div className="product-content">
                          <span className="fw-semibold subtitle text-uppercase">
                            Levies Cotton
                          </span>
                          <a href="product-details.html">
                            <h6 className="fw-semibold mt-3">
                              Director Beach Comfort Chair
                            </h6>
                          </a>
                          <p className="fs-sm mb-4">
                            Lacinia platea feugiat accumsan potenti fringilla
                            malesuada...
                          </p>
                          <span className="text-main-color fw-bold fs-sm">
                            $893.00
                          </span>
                        </div>
                      </div>

                      {/* Product Card 2 */}
                      <div className="vr5-product-card">
                        <div className="feature-image position-relative">
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/busket-md.png"
                              alt="Basket"
                              className="img-fluid"
                            />
                          </a>
                          <div className="action-box">
                            <button className="cart-btn">Add to Cart</button>
                          </div>
                        </div>
                        <div className="product-content">
                          <span className="fw-semibold subtitle text-uppercase">
                            Levies Cotton
                          </span>
                          <a href="product-details.html">
                            <h6 className="fw-semibold mt-3">
                              Beach Comfort Chair
                            </h6>
                          </a>
                          <p className="fs-sm mb-4">
                            Lacinia platea feugiat accumsan potenti fringilla
                            malesuada...
                          </p>
                          <span className="text-main-color fw-bold fs-sm">
                            $799.00
                          </span>
                        </div>
                      </div>

                      {/* Product Card 3 */}
                      <div className="vr5-product-card">
                        <div className="feature-image position-relative">
                          <a href="product-details.html">
                            <img
                              src="assets/images/products/long-table-md.png"
                              alt="Long Table"
                              className="img-fluid"
                            />
                          </a>
                          <div className="action-box">
                            <button className="cart-btn">Add to Cart</button>
                          </div>
                        </div>
                        <div className="product-content">
                          <span className="fw-semibold subtitle text-uppercase">
                            Levies Cotton
                          </span>
                          <a href="product-details.html">
                            <h6 className="fw-semibold mt-3">
                              Beach Comfort Chair
                            </h6>
                          </a>
                          <p className="fs-sm mb-4">
                            Lacinia platea feugiat accumsan potenti fringilla
                            malesuada...
                          </p>
                          <span className="text-main-color fw-bold fs-sm">
                            $950.00
                          </span>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*filter section end*/}
    </div>
  );
}

export default Home;

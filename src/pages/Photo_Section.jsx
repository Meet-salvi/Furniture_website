import React from "react";

function Photo_Section() {
  return (
    <div>
      {/*breadcrumb section start*/}
      <div className="breadcrumb-section pt-40 pb-40">
        <div className="container-1700">
          <p className="breadcrumb-text mb-0">
            <a href="index.html">Home</a> /{" "}
            <span className="text-main-color">Gallery</span>
          </p>
        </div>
      </div>
      {/*breadcrumb section end*/}

      {/*action product section start*/}
      <section
        className="vr5-action-area position-relative overflow-hidden"
        data-background="assets/images/home-5/banner-1.jpg"
        style={{
          backgroundImage: "url(assets/images/home-5/background_chair.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="vr5-product-tooltip tooltip-1">
          <button>
            <span>1</span>
          </button>
          <div className="vr5-tooltip-product active">
            <div className="feature-image">
              <a href="product-details-v2.html">
                <img
                  src="assets/images/home-5/chair1.png"
                  alt="chair"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="tooltip-product-content">
              <a href="product-details-v2.html">
                <h5 className="mb-2">Wood Smart Chair</h5>
              </a>
              <span className="fw-medium text-main-color">$256.39</span>
            </div>
          </div>
        </div>
        <div className="vr5-product-tooltip tooltip-2">
          <button>
            <span>2</span>
          </button>
          <div className="vr5-tooltip-product active">
            <div className="feature-image">
              <a href="product-details-v2.html">
                <img
                  src="assets/images/home-5/chair7.png"
                  alt="chair"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="tooltip-product-content">
              <a href="product-details-v2.html">
                <h5 className="mb-2">Wood Smart Chair</h5>
              </a>
              <span className="fw-medium text-main-color">$256.39</span>
            </div>
          </div>
        </div>
        <div className="vr5-product-tooltip tooltip-3">
          <button>
            <span>3</span>
          </button>
          <div className="vr5-tooltip-product active">
            <div className="feature-image">
              <a href="product-details-v2.html">
                <img
                  src="assets/images/home-5/chair1.png"
                  alt="chair"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="tooltip-product-content">
              <a href="product-details-v2.html">
                <h5 className="mb-2">Wood Smart Chair</h5>
              </a>
              <span className="fw-medium text-main-color">$256.39</span>
            </div>
          </div>
        </div>
      </section>
      {/*action product section end*/}

      {/*category secion start*/}
      <section className="vr5-category-section overflow-hidden mt-80">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-6">
              <div className="vr5-ct-single-box position-relative border-bottom-0 border-start-0">
                <img
                  src="assets/images/home-5/sofa4.png"
                  alt="not found"
                  className="img-fluid"
                />
              </div>
              <div className="row g-0">
                <div className="col-sm-6">
                  <div className="vr5-ct-single-box position-relative border-start-0">
                    <img
                      src="assets/images/home-5/chair5.png"
                      alt="not found"
                      className="img-fluid"
                    />
                   
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="vr5-ct-single-box position-relative border-start-0">
                    <img
                      src="assets/images/home-5/chair6.png"
                      alt="not found"
                      className="img-fluid"
                    />
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="vr5-ct-single-box position-relative border-start-0 large-box">
                <img
                  src="assets/images/home-5/sofa5.png"
                  alt="not found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*category section end*/}
    </div>
  );
}

export default Photo_Section;

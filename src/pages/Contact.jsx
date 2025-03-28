import React from "react";

function Contact() {
  return (
    <div>
      <div>
        {/*breadcrumb section start*/}
        <div className="breadcrumb-section pt-40 pb-40">
          <div className="container-1700">
            <p className="breadcrumb-text mb-0">
              <a href="index.html">Home</a> /{" "}
              <span className="text-main-color">Contact</span>
            </p>
          </div>
        </div>
        {/*breadcrumb section end*/}
        {/*address section start*/}
        <section className="address-section pt-100 overflow-hidden">
          <div className="container-1700">
            <div className="row g-5">
              <div className="col-xl-6 col-lg-4 col-sm-6">
                <div className="">
                  <img
                    src="https://img.freepik.com/premium-vector/get-touch-abstract-concept-vector-illustration_107173-29595.jpg"
                    style={{
                      border: "1px solid #000",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      margin: "0px 0px",
                    }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-sm-6">
                <div
                  className="address-single"
                  style={{
                    border: "1px solid #000",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    padding: "30px 50px",
                  }}
                >
                  <h5 className="mb-50 fw-normal hm2-font-family">
                    Owner name : Soyeb Ahmed
                  </h5>

                  <h5 className="mb-50 fw-normal hm2-font-family">
                    Shop name : King office system chair
                  </h5>
                  <h5 className="mb-50 fw-normal hm2-font-family">
                    Ahmedabad.Gujrat
                  </h5>
                  <div className="footer-address">
                    <a href="tel:256-31556.2369">+91 7043386545</a>
                    <br />
                    <a href="mailto:hello@Venturifur.com" className="mail">
                      soyebahmed207@gmail.com
                    </a>
                    <p className="mt-32">
                      A316, Sumel 8, Ajit Mill Cir, near City point hotel, near
                      shams school, Char Rasta, Rehmat Nagar, Bapunagar,
                      Ahmedabad, Gujarat 380023
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="address-single">
                  <h5 className="mb-50 fw-normal hm2-font-family">Paris</h5>
                  <div className="footer-address">
                    <a href="tel:256-31556.2369">+256-31556.2369</a>
                    <br />
                    <a href="mailto:hello@Venturifur.com" className="mail">
                      hello@Venturifur.com
                    </a>
                    <p className="mt-32">
                      219 Geom Street. UYS Office 215 Frankfurt-Germany
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="address-single">
                  <h5 className="mb-50 fw-normal hm2-font-family">Dieburg</h5>
                  <div className="footer-address">
                    <a href="tel:256-31556.2369">+256-31556.2369</a>
                    <br />
                    <a href="mailto:hello@Venturifur.com" className="mail">
                      hello@Venturifur.com
                    </a>
                    <p className="mt-32">
                      219 Geom Street. UYS Office 215 Frankfurt-Germany
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/*address section end*/}
        {/*contact form section start*/}
        <section className="contact-form-section pt-100 pb-140 overflow-hidden">
          <div className="container-1700">
            <div className="row align-items-center g-5">
              <div className="col-xl-7 col-md-6">
                <div className="google-map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.059450382816!2d72.63063977509174!3d23.021589279174478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8796368e3a3b%3A0x34fe8b3b7ca3ca8e!2sKing%20office%20setam%20chair!5e0!3m2!1sen!2sin!4v1743139325298!5m2!1sen!2sin"
                    width={850}
                    height={500}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-md-6">
                <div className="ct-form--wrapper">
                  <h2 className="fs-40 fw-regular hm2-font-family mb-30">
                    Get In Touch
                  </h2>
                  {/* <p className="mb-50">Don't worry, we don't spam your email</p> */}
                  <form className="ct-contact-form" action="#">
                    <input
                      type="text"
                      className="theme-input"
                      placeholder="Your Name*"
                    />
                    <input
                      type="email"
                      className="theme-input"
                      placeholder="Your Email*"
                    />
                    <textarea
                      className="theme-input"
                      placeholder="Your Message Here*"
                      rows={6}
                      defaultValue={""}
                    />
                    <button type="submit" className="template-btn primary-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*contact form section end*/}
      </div>
    </div>
  );
}

export default Contact;

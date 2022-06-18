import React from "react";
import AboutSection from "./about/AboutSection";
import ProductSection from "./products/ProductSection";
function HomeSection() {
  return (
    <div>
      {/* <div className="carousel-item">
        <img src="assets/img/intro.png" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div> */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              src="assets/img/main_home_img.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="assets/img/main1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="assets/img/main2.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="assets/img/intro.png" alt="..." />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                             
                                <span className="section-heading-lower">Happy Shopping</span>
                            </h2>
                            <p className="mb-2">
                                One stop for all your Kirana needs.
                                The best quality at the most competitive prices is what our store has been in operation with. We appreciate all the trust and confidence of all our customers, and invite to shop with us.</p>
                            <div className="intro-button mx-auto"><a className="btn btn-primary btn-xl" href="#!">Visit Us Today!</a></div>
                        </div>
                    </div>
                </div>
            </section> */}
      <AboutSection />
      <ProductSection />
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Our Promise</span>
                  <span className="section-heading-lower">To You</span>
                </h2>
                <p className="mb-0">
                  When you walk into our shop to start your day, we are
                  dedicated to providing you with friendly service, a welcoming
                  atmosphere, and above all else, excellent products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;

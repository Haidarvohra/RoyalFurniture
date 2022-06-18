import React from "react";

function AboutSection() {
  return (
    <div>
      <section className="page-section about-heading">
        <div className="container">
          <div class="about-title">
            <h1 class="htag1 aos-init aos-animate" data-aos="zoom-in">
              About us
            </h1>{" "}
          </div>
          {/* <div className=" htag1 ">About our Shop</div> */}
          <img
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src="assets/img/about_shop_1.png"
            alt="..."
          />
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    {/* <span className="section-heading-upper"></span> */}
                    <span className="section-heading-lower">
                      About Our Shop
                    </span>
                  </h2>
                  <p>
                    Royal Furniture is Founded in 2005 establishment in
                    Halvad,Gujarat.{" "}
                  </p>
                  <p className="mb-0">
                    <em></em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;

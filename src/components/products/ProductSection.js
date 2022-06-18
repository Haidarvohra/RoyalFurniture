import React from "react";
import { Link } from "react-router-dom";

function ProductSection() {
  return (
    <div>
      <h1
        class="title htag1 aos-init aos-animate about-title"
        data-aos="zoom-in"
      >
        Our Product
      </h1>{" "}
      <section id="product">
        <div class="myrow products-background">
          <div class="products">
            <h3>Bed</h3> <img src="assets/img/bed_P.jpeg" alt="" />
            <p>
              <Link to="/">view more</Link>
            </p>
          </div>
          <div class="products">
            <h3>Sofa</h3> <img src="assets/img/sofa_3_P.jpeg" alt="" />
            <p>
              <Link to="/">view more</Link>
            </p>
          </div>
          <div class="products">
            <h3>Bed</h3> <img src="assets/img/bed2_p.jpeg" alt="" />
            <p>
              <a href="/">view more</a>
            </p>
          </div>
          <div class="products">
            <h3>Sofa</h3> <img src="assets/img/sofa2_P.jpeg" alt="" />
            <p>
              <Link to="/">view more</Link>
            </p>
          </div>
          <div class="products">
            <h3>Bed</h3> <img src="assets/img/bed2_p.jpeg" alt="" />
            <p>
              <Link to="/">view more</Link>
            </p>
          </div>
          <div class="products">
            <h3>Sofa Set</h3> <img src="assets/img/sofa_P.jpeg" alt="" />
            <p>
              <Link href="/">view more</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductSection;

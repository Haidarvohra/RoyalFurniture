import React from 'react';
function HomeSection() {
    return (
        <div>
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="assets/img/intro.png" alt="..." />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                                {/* <span className="section-heading-upper">Fresh Coffee</span> */}
                                <span className="section-heading-lower">Happy Shopping</span>
                            </h2>
                            <p className="mb-2">
                                One stop for all your Kirana needs.
                                The best quality at the most competitive prices is what our store has been in operation with. We appreciate all the trust and confidence of all our customers, and invite to shop with us.</p>
                            <div className="intro-button mx-auto"><a className="btn btn-primary btn-xl" href="#!">Visit Us Today!</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner bg-faded text-center rounded">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Our Promise</span>
                                    <span className="section-heading-lower">To You</span>
                                </h2>
                                <p className="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeSection

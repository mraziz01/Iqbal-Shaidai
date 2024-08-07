import React from "react";

function Info() {
  return (
    <section id="info">
      <div className="info-cont container">
        <div className="row info-item align-items-center">
          <div className="col-12 col-md-6 order-2 order-md-1 item-top text-md-left">
            <h2 className="typewriter">For Shayari enthusiasts,</h2>
            <h4> Embark on a unique journey of Shayari with Iqbal Shaidai.</h4>
            <a href="#Books" className="btn btn-secondary btn-lg">
              Explore{" "}
              <img
                className="Explore-image"
                src="image/right-arrow.png"
                alt="img"
              />
            </a>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 text-center">
            <img
              className="image-top"
              src="image/shaidi.jpg"
              alt="Iqbal Shaidai"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;

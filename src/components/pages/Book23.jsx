import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headnav from ".././Headnav";
import Footer from "../Footer";
import "./pages.css";

export const Book23 = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1VTdSo0EOjfGeeSRloVw_YPu4vFweFLGR/preview"
  );

  return (
    <>
      <Headnav />
      <div className="cta-container">
        <p className="pname">
          Want to read the next book? <br />
          Don’t worry, I got you{" "}
          <Link className="link-p" to="/Book24">
            <b>click me</b>
          </Link>
        </p>
      </div>
      <div className="container">
        <iframe src={embedURL}></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Book23;

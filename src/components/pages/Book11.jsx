import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headnav from ".././Headnav";
import Footer from "../Footer";
import "./pages.css";

export const Book11 = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1n4cs-fkeby2M0BJ_Zd01xyfvixeZSNHw/preview"
  );

  return (
    <>
      <Headnav />
      <div className="cta-container">
        <p className="pname">
          Want to read the next book? <br />
          Don’t worry, I got you{" "}
          <Link className="link-p" to="/Book12">
            <b>click me</b>
          </Link>
        </p>
      </div>
      <div className="container">
        <iframe
          src={embedURL}
          title="Book 11 Preview"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Book11;

import React from "react";
import Sidebar from "../../components/Sidebar";
import "./index.scss";

function contact() {
  return (
    <div className="page">
      <Sidebar />
      <div className="about">
        <h1>About Us</h1>
        <p>
          Industry experts with more than 60 years of combined experience in the
          fields of data. We are here to introduce you to the next level of data
          architecture and engineering. We are all set to create a network of
          happening analytics engineers
        </p>
      </div>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>
          2100 N Greenville Ave, <br />
          Ste 123, Richardson, <br />
          TX 75082, <br />
          Ph: 972-232-9999 <br />
          Email: info@megha.ai
          <br />
        </p>
      </div>
    </div>
  );
}

export default contact;

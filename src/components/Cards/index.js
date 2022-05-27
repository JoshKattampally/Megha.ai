import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function index({ title, imageUrl, body }) {
  return (
    <>
      <div className="card">
        <img className="card__image" src={imageUrl} alt="" />
        <div className="card__content">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
        <div className="card__info">
          <div>
            <Link to="/" className="card__link">
              View Article
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

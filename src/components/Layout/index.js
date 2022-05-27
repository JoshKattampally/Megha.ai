import Sidebar from "../Sidebar";
import "./index.scss";
import cardData from "../../card-contents.json";
import Card from "../Cards";
import { useState } from "react";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTag, setSearchTag] = useState("");

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      {/*The input takes in a search term and sets that to the searchTerm variable */}
      <div className="page">
        <div className="search">
          <input
            type="text"
            placeholder="Search Items...."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="dropdown">
          {/*The selection menu takes in the dropdown item and sets that to the searchTerm variable */}
          <select
            onChange={(event) => {
              setSearchTag(event.target.value);
            }}
          >
            <option selected value="">
              All Items
            </option>
            <option value="X">Tag X</option>
            <option value="Y"> Tag Y</option>
          </select>
        </div>
        <div className="cards">
          {/*The card data is filtered by both the serach terms and the items in the dropdown menu.*/}
          {cardData
            .filter((val) => {
              if (searchTag === "") {
                return val;
              } else if (val.tag.includes(searchTag)) {
                return val;
              }
              return null;
            })
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
              return null;
            })
            .map((val, key) => {
              return (
                <Card
                  key={key}
                  title={val.title}
                  imageUrl={val.imageUrl}
                  body={val.description}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";
import "./HomePage.css";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Search() {
  const { query } = useParams();
  const [results, setResults] = useState(false);
  const [time, setTime] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const api_key = "AIzaSyDiGIBbvod9eTDrwiP_PzBbtPJHhO6sD-k";
      const cx_key = "623d08a9152c2cc67";
      const url = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${cx_key}&q=${query}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.items);
          setTime(data.searchInformation.searchTime);
        });
    };
    getData();
  }, [query]);

  const InputEvent = (event) => {
    setText(event.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      window.location = `/search/web/${text}`;
    }
  };

  return (
    <div className="search">
      <div className="search__upper">
        <a href="/">
          <img
            alt="google_img"
            className="search__gleImg"
            src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          />
        </a>

        <div className="homepage__input">
          <SearchIcon className="search" />
          <form onSubmit={formSubmit}>
            <input
              onChange={InputEvent}
              type="text submit"
              placeholder={query}
            />
          </form>
          <br />
          <div className="search__icons"></div>
        </div>
        <div className="search__icons">
          <AppsIcon alt="" src="" />
          <Avatar className="avatar" />
        </div>
        <br />
      </div>
      <br />
      <hr />
      <div className="search__results">
        <div>
          <p>
            Searched {results.length} results in {time} sec
          </p>
          <div className="search__resfinal">
            {results &&
              results.map((item) => (
                <React.Fragment>
                  <p className="search__display_link">
                    {item.displayLink}
                    <ArrowDropDownIcon />
                  </p>
                  <a className="search__link" href={item.link}>
                    {item.title}
                  </a>
                  <p>{item.snippet}</p>
                  <br />
                  <br />
                </React.Fragment>
              ))}
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Search;

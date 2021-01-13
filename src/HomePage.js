import React, { useState } from "react";
import "./HomePage.css";
import SearchIcon from "@material-ui/icons/Search";

function HomePage() {
  const [text, setText] = useState("");

  const Inputevent = (event) => {
    setText(event.target.value);
  };

  const GoToSearch = (query) => {
    if (text.toString().trim()) {
      window.location = `/search/web/${query}`;
    }
  };

  return (
    <div className="homepage">
      <div className="homepage__main">
        <img
          alt="google-img"
          className="img"
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="homepage__input_home">
            <SearchIcon className="search" />
            <input onChange={Inputevent} type="text submit" />
          </div>
          <div className="homepage__buttons">
            <button onClick={() => GoToSearch(text)} type="submit">
              Google Search
            </button>
            <button onClick={() => GoToSearch(text)} type="submit">
              I'm Felling Lucky
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;

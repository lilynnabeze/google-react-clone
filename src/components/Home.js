import React, { useState } from "react";
import Logo from "./images/GoogleLogo.png";
import SearchBar from "./SearchBar";

const Home = () => {
  const [search, setSearch] = useState("");

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
    if (event.key === "Backspace") {
      setSearch(event.target.value);
    }
  }
  return (
    <div className="home">
      <img src={Logo} alt="Google logo" />
      <div className="searchbar">
        <span className="material-symbols-outlined">search</span>
        <svg
          className="goxjub"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285f4"
            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
          ></path>
          <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
          <path
            fill="#fbbc05"
            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
          ></path>
          <path
            fill="#ea4335"
            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
          ></path>
        </svg>
        <svg
          className="Gdd5U"
          focusable="false"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="none" height="192" width="192"></rect>
          <g>
            <circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle>
            <path
              fill="#ea4335"
              d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"
            ></path>
            <path
              fill="#4285f4"
              d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"
            ></path>
            <path
              fill="#34a853"
              d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"
            ></path>
            <path
              fill="#fbbc05"
              d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"
            ></path>
          </g>
        </svg>
        <SearchBar onKeyDown={handleKeyDown} />
      </div>
      <p>{search}</p>
      <div className="btn">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>

      <div className="languages-container">
        <p className="languages-offering">Google offered in:</p>
        <ul className="languages">
          <li>
            <a
              href="https://www.britannica.com/topic/Hausa-language"
              target="_blank"
              rel="noreferrer"
              className="language"
            >
              Hausa
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Igbo_language"
              target="_blank"
              rel="noreferrer"
              className="language"
            >
              Igbo
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Yoruba_language"
              target="_blank"
              rel="noreferrer"
              className="language"
            >
              Èdè Yorùbá
            </a>
          </li>
          <li>
            <a
              href="https://www.britannica.com/topic/pidgin"
              target="_blank"
              rel="noreferrer"
              className="language"
            >
              Nigerian Pidgin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Leaf from "./images/leaf.png";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <p className="location">Nigeria</p>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <ul className="footer-left">
        <li>
          <a href="https://about.google/">About</a>
        </li>
        <li>
          <a href="https://ads.google.com/intl/en_ng/getstarted/?subid=ng-en-ha-aw-sk-c-bau!o3~Cj0KCQjw2eilBhCCARIsAG0Pf8uayZLE9vOfjRoXgbf6M8udpyCQilcHEyWYhuIfprmFn7sju5MiJwsaAoioEALw_wcB~149741567721~aud-1277764251247:kwd-436913726348~19700236792~648528764543&utm_source=aw&utm_medium=ha&utm_campaign=ng-en-ha-aw-sk-c-bau!o3~Cj0KCQjw2eilBhCCARIsAG0Pf8uayZLE9vOfjRoXgbf6M8udpyCQilcHEyWYhuIfprmFn7sju5MiJwsaAoioEALw_wcB~149741567721~aud-1277764251247:kwd-436913726348~19700236792~648528764543&gad=1&gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8uayZLE9vOfjRoXgbf6M8udpyCQilcHEyWYhuIfprmFn7sju5MiJwsaAoioEALw_wcB&gclsrc=aw.ds">
            Advertising
          </a>
        </li>
        <li>
          <a href="https://www.google.com/intl/en_ng/business/">Business</a>
        </li>
        <li>
          <a href="https://developers.google.com/search/docs/fundamentals/how-search-works#:~:text=Indexing%3A%20Google%20analyzes%20the%20text,relevant%20to%20the%20user's%20query.">
            How Search Works
          </a>
        </li>
      </ul>
      <div className="leaf-container">
        <img src={Leaf} alt="Leaf" className="leaf" />
        <a href="https://www.google.com/search?q=google+carbon+neutral+since+2007&oq=google+carbon+neutral&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEINTkwOGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8">
          Carbon neutral since 2007
        </a>
      </div>
      <ul className="footer-right">
        <li>
          <a href="https://policies.google.com/privacy?hl=en-US">Privacy</a>
        </li>
        <li>
          <a href="https://policies.google.com/terms?hl=en-US">Terms</a>
        </li>
        <li>
          <a href="https://support.google.com/accounts/answer/3118621?hl=en">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;

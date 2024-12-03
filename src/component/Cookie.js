"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("REIG-cookie");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set("REIG-cookie", "Accept all", { expires: 1 });
    setIsVisible(false); // Close the popup
  };

  const handleAcceptEssentials = () => {
    Cookies.set("REIG-cookie", "Only accept essential cookies", {
      expires: 1,
    });
    setIsVisible(false); // Close the popup
  };

  return (
    <>
      {isVisible && (
        <div className="cookie-main">
          <div className="cookie">
            <div className="cookie-wrapper">
              <div className="cookie-text">
                <p>
                  We use cookies to give you the best experience on our website.
                  Some cookies are necessary to ensure the basic functions of
                  the website, while others help us to analyze your user
                  behavior and improve our services. You can choose which
                  cookies you want to allow. You can find more information in
                  our
                  <a href="/Privacy" aria-label="" className="cookie_a">
                    {" "}
                    Privacy policy
                  </a>
                  .
                </p>
              </div>
              <div className="cookie-btn">
                <button onClick={handleAcceptAll} className="btn cookie-allow">
                  Accept all
                </button>
                <button
                  onClick={handleAcceptEssentials}
                  className="btn cookie-close"
                >
                  Only accept essential cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookie;

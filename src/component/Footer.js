"use client";
import Link from "next/link";
import Image from "next/image";
import F_logo from "../../public/img/REG.svg";
import Instagram_icon from "../../public/img/instagram.svg";
import Twitter_icon from "../../public/img/twitter.svg";
import Linkdin_icon from "../../public/img/linkdin.svg";
// import F_mail from "../../public/img/f-mail.svg";
import copy_right from "../../public/img/copy-right.svg";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "Neue Abonnement",
  });

  const [success, setSuccess] = useState(false); // State to track submission success
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state on new submission
    setErrorMessage("");
    setLoading(true); // Set loading to true when submission starts
    // const endpoint = process.env.NEXT_PUBLIC_SENDER_MAIL || 'https://formspree.io/f/mdkonqvw';  // client
    const endpoint =
      process.env.NEXT_PUBLIC_SENDER_MAIL || "https://formspree.io/f/myzygrvq"; // developer
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true); // Show success message if submission is successful
        setFormData({
          email: "",
          subject: "Neue Abonnement",
        });
      } else {
        setErrorMessage(
          `Nachricht konnte nicht gesendet werden.: ${result.message}`
        );
      }
    } catch (error) {
      setErrorMessage(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="f-wrapper">
          <div className="f-main">
            <div className="f-logo">
              <Link href="/" aria-label="Footer Logo">
                <Image src={F_logo} alt="footer logo" />
              </Link>
            </div>

            <div className="f-menu">
              <ul>
                <li>
                  <Link href="/" aria-label="Home">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/aboutUs" aria-label="aboutUs">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/acquisition_profile"
                    aria-label="acquisition_profile"
                  >
                    ACQUISITION PROFILE
                  </Link>
                </li>

                <li>
                  <Link href="/contact" aria-label="contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            <div className="f-social">
              {/* <Link href="/" aria-label="">
                <Image src={Instagram_icon} alt="instagram" />
              </Link> */}
              <Link href="/" aria-label="">
                <Image src={Twitter_icon} alt="twitter" />
              </Link>
              <Link href="/" aria-label="">
                <Image src={Linkdin_icon} alt="linkdin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="copy-wrapper">
            <div className="copy-text">
              <p>Copyright © 2024 Reig Ltd. All rights reserved</p>
            </div>
            <div className="copy-link">
              <Link href="/terms" aria-label="">
                Terms
              </Link>
              <Link href="/Privacy" aria-label="">
                Privacy
              </Link>
              <Link href="/" aria-label="">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import mail from "../../../public/img/mail.svg";
import location from "../../../public/img/location.svg";
import map from "../../../public/img/map.png";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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

    const endpoint = process.env.NEXT_PUBLIC_SENDER_MAIL || "";

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
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
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
    <div>
      {/* Contact Section */}
      <section className="contact py py-b">
        <div className="container">
          <div className="contact-wrapper py py-b">
            <div className="contact-text">
              <div className="com-title">
                <span>CONTACT US</span>
              </div>
              <div className="contact-detail">
                {/* Contact Details - Email */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={mail} alt="email" />
                  </div>
                  <div className="cd-title">
                    <p>E-Mail</p>
                    <Link href="mailto:contact@reig.uk">contact@reig.uk</Link>
                  </div>
                </div>

                {/* Contact Details - Address */}
                <div className="cd-box">
                  <div className="cd-img">
                    <Image src={location} alt="location" />
                  </div>
                  <div className="cd-title">
                    <p>Address</p>
                    <p>
                      128 City Rd <br />
                      London EC1V 2NX
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <form onSubmit={handleSubmit} method="POST">
                <div className="in-filds">
                  <div className="in-fild">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="in-fild">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="in-fild">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="in-fild">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="in-fild">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="in-button">
                  <input
                    type="submit"
                    value={loading ? "Senden..." : " SEND"}
                    disabled={loading} // Disable the button while loading
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map py">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-img">
              <Image src={map} alt="google map" />
            </div>
            <div className="maping-text">
              <p>A VIEW OF OUR OFFICE IN LONDON</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

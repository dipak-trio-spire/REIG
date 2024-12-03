import Image from "next/image";
import About1 from "../../../public/img/about-1.png";
import About2 from "../../../public/img/about-2.png";
import About3 from "../../../public/img/about-3.png";

const page = () => {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={About1} alt="hero" />
          </div>
        </div>
      </section>

      <section className="section product-dec py ">
        <div className="container">
          <div className="product-dec-wrapper">
            <div className="com-title">
              <span> At a glance</span>
              <h2>
                REIG is a premier real estate Investment firm dedicated to
                providing exceptional Investment opportunities in the real
                estate sector. Our team consists of seasoned professionals with
                extensive experience in real estate acquisition, management and
                development.
              </h2>
            </div>
            <div className="product-img">
              <Image src={About2} alt="product image" />
            </div>
            <div className="product-title">
              <h2>Our Mission</h2>
              <div className="dami-text">
                <p>
                  Our mission is to deliver superior returns for our investors
                  while maintaining the highest standards of integrity and
                  transparency. We believe in building long-term relationships
                  based on trust and performance.
                </p>
                <p>
                  Insgesamt zeigt die Vision von KI-Agenten, die kooperativ und
                  intelligent agieren, um komplexe Aufgaben zu bewältigen,
                  großes Potenzial. Die Verbindung von KI und neuronalen
                  Netzwerken verspricht eine aufregende Zukunft für EAS Lösung.
                </p>
              </div>
            </div>
            <div className="product-img">
              <Image src={About3} alt="product image" />
            </div>
            <div className="product-title">
              <h2>Our Vision</h2>
              <div className="dami-text">
                <p>
                  To be recognized as a leader in the real estate investment
                  space, known for our innovative strategies, deep market
                  insights, and commitment to sustainable practices. We aim to
                  create value not just for our investors, but for the
                  communities we serve.
                </p>
              </div>
            </div>
            <div className="product-line vision-line">
              <div className="com-title">
                <span> Exploring Our Opportunities</span>
              </div>
              <div className="pr-blog-boxs">
                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Investing in Tomorrows Opportunities Today</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      From urban regeneration to cutting-edge greenfield
                      developments, we identify and capitalize on projects with
                      long-term growth potential.
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Leveraging Data-Driven Insights</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Using advanced analytics, we pinpoint emerging trends and
                      unlock new market opportunities before they reach
                      mainstream awareness.
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Transforming Assets into Value</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Through strategic redevelopment and asset repositioning,
                      we maximize returns by breathing new life into undervalued
                      properties.
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Unparalleled Industry Collaboration</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Collaborating with the top players in the industry, we
                      ensure each project runs efficiently, offering a
                      frictionless experience for investors and developers
                      alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

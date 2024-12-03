import Image from "next/image";
import productBG from "../../../public/img/portfolio-bg.jpeg";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={productBG} alt="hero" />
          </div>
        </div>
      </section>

      <section className="section product-dec py ">
        <div className="container">
          <div className="product-dec-wrapper">
            <div className="product-title">
              <h2>Acquisition Profile</h2>
            </div>
            <div className="product-line vision-line">
              <div className="pr-blog-boxs">
                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>
                      <span>RESIDENTIAL</span>
                    </p>
                  </div>
                  <div className="pr-dec">
                    <div className="pr-dec-ul">
                      <p>Locations</p>
                      <ul>
                        <li>
                          Major cities: Berlin, Frankfurt am Main, Hamburg,
                          Munich
                        </li>
                        <li>
                          Metropolitan regions/university cities: Potsdam,
                          Berlin outskirts, Dresden, Leipzig, Halle, Offenbach,
                          Rostock
                        </li>
                        <li>Europe and international: London</li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Location Criteria</p>
                      <ul>
                        <li>Modest to good locations</li>
                        <li>Good transport connections</li>
                        <li>Strong infrastructure</li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Investment Volumes</p>
                      <ul>
                        <li>From 5,000,000 €</li>
                        <li>
                          Individual properties and real estate portfolios
                        </li>
                      </ul>
                    </div>
                    <div className="pr-dec-ul">
                      <p>Investment Segments</p>
                      <ul>
                        <li>Core plus</li>
                        <li>Value-add</li>
                        <li>Opportunistic</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>
                      <span>COMMERCIAL</span>
                    </p>
                  </div>
                  <div className="pr-dec">
                    <div className="pr-dec-ul">
                      <p>Locations</p>
                      <ul>
                        <li>
                          Major cities: Berlin, Frankfurt am Main, Hamburg,
                          Munich
                        </li>
                        <li>
                          Metropolitan regions/university cities: Potsdam,
                          Berlin outskirts, Dresden, Leipzig, Halle, Offenbach,
                          Rostock
                        </li>
                        <li>Europe and international: London</li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Location Criteria</p>
                      <ul>
                        <li>Modest to good locations</li>
                        <li>Good transport connections</li>
                        <li>Strong infrastructure</li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Investment Volumes</p>
                      <ul>
                        <li>From 10,000,000 €</li>
                        <li>
                          Individual properties and real estate portfolios
                        </li>
                      </ul>
                    </div>
                    <div className="pr-dec-ul">
                      <p>Investment Segments</p>
                      <ul>
                        <li>Core plus</li>
                        <li>Value-add</li>
                        <li>Opportunistic</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>
                      <span>LAND PLOTS</span>
                    </p>
                  </div>
                  <div className="pr-dec">
                    <div className="pr-dec-ul">
                      <p>Locations</p>
                      <ul>
                        <li>
                          Major cities: Berlin, Frankfurt am Main, Hamburg
                        </li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Location Criteria</p>
                      <ul>
                        <li>Modest to good locations</li>
                        <li>Good transport connections</li>
                        <li>Strong infrastructure</li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Investment Volumes</p>
                      <ul>
                        <li>From 3.500 GFA</li>
                      </ul>
                    </div>
                    <div className="pr-dec-ul">
                      <p>Investment Segments</p>
                      <ul>
                        <li>Core plus</li>
                        <li>Value-add</li>
                        <li>Opportunistic</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>
                      <span>RENEWABLE ENERGY</span>
                    </p>
                  </div>
                  <div className="pr-dec">
                    <div className="pr-dec-ul">
                      <p>Locations</p>
                      <ul>
                        <li>Germany, Portugal, Spain</li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Location Criteria</p>
                      <ul>
                        <li>Modest to good locations</li>
                        <li>Good transport connections</li>
                        <li>Strong infrastructure</li>
                      </ul>
                    </div>

                    <div className="pr-dec-ul">
                      <p>Investment Volumes</p>
                      <ul>
                        <li>From 50MW in all project stages</li>
                      </ul>
                    </div>
                    <div className="pr-dec-ul">
                      <p>Investment Segments</p>
                      <ul>
                        <li>Core plus</li>
                        <li>Value-add</li>
                        <li>Opportunistic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-title visi-product-title">
              <div class="dami-text">
                <p>
                  Please send us offers to:{" "}
                  <Link href="mailto:offer@reig.uk">offer@reig.uk</Link>
                </p>
              </div>
            </div>
            <div class="product-title visi-product-title">
              <div class="dami-text">
                <p>
                  please be aware that this purchase profile is not an offer for
                  the conclusion of a brokerage contract and does not constitute
                  grounds for broker commission claims in the event of a
                  purchase.
                </p>
                <p>
                  A brokerage contract occurs only after the written acceptance
                  of an offer provided from us in writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

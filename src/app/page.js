
import HeroBanner from "../component/HeroBanner";
import AnalyticsSection from "../component/AnalyticsSection";
import unter_about_1 from "../../public/img/unter-about-1.svg";
import unter_about_2 from "../../public/img/unter-about-2.svg";
import unter_about_3 from "../../public/img/unter-about-3.svg";
import unter_about_4 from "../../public/img/unter-about-4.svg";
import Image from "next/image";
import CommingSoon from "@/component/CommingSoon";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AnalyticsSection />
      <section className="unter-about new-unter-about py">
        <div className="container">
          <div className="unter-about-wrapper">
            <div class="com-title">
              <h2 class="unter">Exploring our Opportunities </h2>
            </div>
            <div className="unter-about-boxs">
              <div className="unter-about-box">
                <div className="unter-about-no">
                  <Image src={unter_about_1} alt="unter about icon" />
                </div>
                <div className="unter-about-text">
                  <p>
                    Strategic investments in residential, commercial, and
                    industrial properties
                  </p>
                </div>
              </div>
              <div className="unter-about-box">
                <div className="unter-about-no">
                  <Image src={unter_about_2} alt="unter about icon" />
                </div>
                <div className="unter-about-text">
                  <p>
                    Value-add projects that enhance property potential and
                    returns
                  </p>
                </div>
              </div>
              <div className="unter-about-box">
                <div className="unter-about-no">
                  <Image src={unter_about_3} alt="unter about icon" />
                </div>
                <div className="unter-about-text">
                  <p>Comprehensive market analysis and research</p>
                </div>
              </div>
              <div className="unter-about-box">
                <div className="unter-about-no">
                  <Image src={unter_about_4} alt="unter about icon" />
                </div>
                <div className="unter-about-text">
                  <p>
                    A dedicated team of professionals with a passion for real
                    estate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </>
  );
}

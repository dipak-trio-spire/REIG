export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-wrapper">
        <div className="hero-img">
          <video autoPlay loop muted playsInline>
            <source src="/video/hero_banner.mp4" type="video/mp4" />
          </video>
          {/* <Image src={heroBanner} /> */}
        </div>
      </div>
    </section>
  );
}

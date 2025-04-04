import Image from "next/image";

const Slider = () => {
  const RFM_CHILD = [
    { src: "/assets/slides/Grammarly.svg", alt: "Grammarly" },
    { src: "/assets/slides/Adobe.svg", alt: "Adobe" },
    { src: "/assets/slides/Unsplash.svg", alt: "Unsplash" },
    { src: "/assets/slides/Tronscan.svg", alt: "Tronscan" },
    { src: "/assets/slides/Yandex.svg", alt: "Yandex" },
    { src: "/assets/slides/Patreon.svg", alt: "Patreon" },
    { src: "/assets/slides/Framer.svg", alt: "Framer" },
    { src: "/assets/slides/Crypto.svg", alt: "Crypto" },
    { src: "/assets/slides/Perplexity.svg", alt: "Perplexity" },
    { src: "/assets/slides/Digikala.svg", alt: "Digikala" },
    { src: "/assets/slides/Binance.svg", alt: "Binance" },
    { src: "/assets/slides/Trendyol.svg", alt: "Trendyol" },
    { src: "/assets/slides/Incode.svg", alt: "Incode" },
  ];
  return (
    <div className="flex items-center gap-8 justify-center min-h-[140px] py-8 lg:py-24 overflow-hidden lg:overflow-visible relative">
      <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] z-10"></div>
      <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] z-10"></div>
      <div
        className="rfm-marquee-container"
        style={{
          "--pause-on-hover": "running",
          "--pause-on-click": "running",
          "--width": "100%",
          "--transform": "none",
        }}
      >
        <div
          className="rfm-marquee"
          style={{
            "--play": "running",
            "--direction": "normal",
            "--duration": "58.24s",
            "--delay": "0s",
            "--iteration-count": "infinite",
            "--min-width": "100%",
          }}
        >
          <div className="rfm-initial-child-container">
            {RFM_CHILD.map((slide) => (
              <div
                className="rfm-child"
                style={{ "--transform": "none" }}
                key={slide.alt}
              >
                <div className="px-1 lg:px-4">
                  <Image
                    width={240}
                    height={120}
                    alt={slide.alt}
                    src={slide.src}
                    decoding="async"
                    className="w-36 lg:w-48"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div
          className="rfm-marquee"
          style={{
            "--play": "running",
            "--direction": "normal",
            "--duration": "58.24s",
            "--delay": "0s",
            "--iteration-count": "infinite",
            "--min-width": "100%",
          }}
        >
          {RFM_CHILD.map((slide) => (
            <div
              className="rfm-child"
              style={{ "--transform": "none" }}
              key={slide.alt}
            >
              <div className="px-1 lg:px-4">
                <Image
                  width={240}
                  height={120}
                  alt={slide.alt}
                  src={slide.src}
                  decoding="async"
                  className="w-36 lg:w-48"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

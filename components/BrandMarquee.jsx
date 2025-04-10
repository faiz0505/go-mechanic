import React from "react";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  const images = [
    "https://caraagy.com/wp-content/uploads/elementor/thumbs/2-qccfgwa2vtowmizy7u5b05h1scfldwh9881er392w8.png",
    "https://caraagy.com/wp-content/uploads/elementor/thumbs/7-qccfgwa2vtowmizy7u5b05h1scfldwh9881er392w8.png",
    "https://caraagy.com/wp-content/uploads/elementor/thumbs/FordLogo-qccfgwa2vtowmizy7u5b05h1scfldwh9881er392w8.png",
    "https://caraagy.com/wp-content/uploads/elementor/thumbs/18-qccfgwa2vtowmizy7u5b05h1scfldwh9881er392w8.png",
    "https://caraagy.com/wp-content/uploads/elementor/thumbs/8-qccfgwa2vtowmizy7u5b05h1scfldwh9881er392w8.png",
    "https://caraagy.com/wp-content/uploads/elementor/thumbs/12-qccfgwa2vtowmizy7u5b05h1scfldwh9881er392w8.png",
    "https://caraagy.com/wp-content/uploads/elementor/thumbs/9-qccfgwa2vtowmizy7u5b05h1scfldwh9881er392w8.png",
  ];

  return (
    <div className="pt-12 pb-8">
    <h3 className="text-center text-lg pb-8 text-royal-purple"> Serving the world's leading brands</h3>
      <Marquee speed={50} pauseOnHover={true}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            style={{ width: "100px", margin: "0 15px" }}
          />
        ))}
      </Marquee>
      <div className="text-xl text-center font-bold pt-4 text-royal-purple">And More</div>
    </div>
  );
};

export default BrandMarquee;

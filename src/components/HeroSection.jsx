import React, { useEffect, useState } from "react";
import HeaderImg from "../assets/imgs/header-img.png";
import HeaderImg1 from "../assets/imgs/header-img1.png";
const HeroSection = () => {
  const imgs = [HeaderImg, HeaderImg1];
  // change the image every 5 seconds using setInterval in a useEffect hook
  const [img, setImg] = useState(imgs[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevImg) => (prevImg === imgs[0] ? imgs[1] : imgs[0]));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[60vh] hero-section">
      <img className="w-full object-cover h-full" src={img} alt="" />
    </section>
  );
};
export default HeroSection;

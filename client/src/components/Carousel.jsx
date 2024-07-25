import React from "react";
import { carouseldata } from "../utils/carouseldata.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Carousel() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3},
    1024: { items: 4 },
  };
  const items = carouseldata.map((item) => (
    <img className="cursor-pointer " src={item.image} height={100} width={100} alt="" ></img>
  ));

  return (
    <div className=" pb-24 pt-20">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
      />
    </div>
    
  );
}

export default Carousel;

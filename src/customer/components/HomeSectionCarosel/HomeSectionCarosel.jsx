import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/Men/men_kurta";

const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items =data.slice(0,40).map((item) => (
    <HomeSectionCard product={item}/>
  ));
  return (
    <div className="border">
      <h2 className="text-3xl font-extrabold text-grey-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
          responsive={responsive}
          //disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {/*
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: 'absolute',
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(0deg)",
            bgcolor:"white"
          }}
          aria-label="Next"
        >
          <KeyboardArrowLeftIcon sx={{transform: "rotate(180deg)",color:"black" }}/>
        </Button>
      //////////////
      <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: 'absolute',
            top: "8rem",
            left: "0rem",
            transform: "translateX(50%) rotate(0deg)",
            bgcolor:"white"
          }}
          aria-label="Next"
        >
          <KeyboardArrowLeftIcon sx={{transform: "rotate(0deg)",color:"black" }}/>
        </Button>
        */}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;

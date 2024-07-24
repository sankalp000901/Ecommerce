import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/Men/men_kurta";

const HomePage = () => {
    return(
        <div>
            <MainCarosel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirts"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Belts"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Lahenga"}/>
            </div>
        </div>
    )
}
    export default HomePage
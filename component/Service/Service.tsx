
"use client";

import { memo, useState } from "react";
import { Card } from "../Card";
import classes from "./Service.module.scss";

const cardData = [
  {
    image: "/servicecard1.png",
    title: "Satellite Network service",
    description: "Galaxy Telecom with its strong global network offers a complete satellite network solution inclusive of space segment and ground equipment."
  },
  {
    image: "/servicecard2.png",
    title: "IOT (Internet of Things) Solutions",
    description: "Galaxy Telecom provides a broad range of IOT solutions. We will help you build and optimize your IoT network efficiently."
  },
  {
    image: "/servicecard3.png",
    title: "Cellular Backhaul Solution",
    description: "Galaxy Telecom helps Telecom Operators to design and implement a robust cellular backhaul solution combining Satellite & Fiber connectivity."
  },
  {
    image: "/servicecard1.png",
    title: "Satellite Network service",
    description: "Galaxy Telecom with its strong global network offers a complete satellite network solution inclusive of space segment and ground equipment."
  },
  {
    image: "/servicecard2.png",
    title: "IOT (Internet of Things) Solutions",
    description: "Galaxy Telecom provides a broad range of IOT solutions. We will help you build and optimize your IoT network efficiently."
  },
  {
    image: "/servicecard3.png",
    title: "Cellular Backhaul Solution",
    description: "Galaxy Telecom helps Telecom Operators to design and implement a robust cellular backhaul solution combining Satellite & Fiber connectivity."
  } 
];

const Unmemoservice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= cardData.length - 1 ? cardData.length - 2 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? 0 : prev - 1
    );
  };

  return (
    <div className={classes.services}>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className={classes.serviceText}>
            <div className={classes.heading}>Our Services</div>
            <div className={classes.text}>
              We help develop network infrastructure by providing a complete solution from Hardware to service deliverable.
            </div>
            
            {/* Navigation Buttons */}
            <div className={classes.navigationButtons}>
              <button 
                onClick={handlePrev} 
                className={classes.navButton}
                disabled={currentIndex === 0}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 5L8 15.5C11.3333 19 18 26 18 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={handleNext} 
                className={classes.navButton}
                disabled={currentIndex >= cardData.length - 2}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5L24 15.5C20.6667 19 14 26 14 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* First card slot */}
        <div className="col-lg-4">
          <Card 
            image={cardData[currentIndex].image} 
            title={cardData[currentIndex].title} 
            description={cardData[currentIndex].description} 
          />
        </div>
        
        {/* Second card slot */}
        <div className="col-lg-4">
          <Card 
            image={cardData[currentIndex + 1].image} 
            title={cardData[currentIndex + 1].title} 
            description={cardData[currentIndex + 1].description} 
          />
        </div>
      </div>
    </div>
  );
};

export const Service = memo(Unmemoservice);
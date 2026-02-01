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
    image: "/servicecard1.png",
    title: "Satellite Network service",
    description: "Galaxy Telecom with its strong global network offers a complete satellite network solution inclusive of space segment and ground equipment."
  },
  {
    image: "/servicecard1.png",
    title: "Satellite Network service",
    description: "Galaxy Telecom with its strong global network offers a complete satellite network solution inclusive of space segment and ground equipment."
  },
  {
    image: "/servicecard1.png",
    title: "Satellite Network service",
    description: "Galaxy Telecom with its strong global network offers a complete satellite network solution inclusive of space segment and ground equipment."
  }
];

const Unmemoservice= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + cardsPerPage >= cardData.length ? 0 : prev + cardsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev - cardsPerPage < 0 ? Math.max(0, cardData.length - cardsPerPage) : prev - cardsPerPage
    );
  };

  const visibleCards = cardData.slice(currentIndex, currentIndex + cardsPerPage);

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
                  <path d="M18 5L8 15.5C11.3333 19 18 26 18 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </button>
              <button 
                onClick={handleNext} 
                className={classes.navButton}
                disabled={currentIndex + cardsPerPage >= cardData.length}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5L24 15.5C20.6667 19 14 26 14 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </button>
            </div>
            
          </div>
        </div>
        
        {visibleCards.map((card, index) => (
          <div className="col-lg-4" key={currentIndex + index}>
            <Card 
              image={card.image} 
              title={card.title} 
              description={card.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export const Service = memo(Unmemoservice);

import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import Carousel1 from "../assets/carousel/Carousel1.avif";
import Carousel2 from "../assets/carousel/Carousel2.avif";
import Carousel3 from "../assets/carousel/Carousel3.avif";
import Carousel4 from "../assets/carousel/Carousel4.avif";
import Carousel5 from "../assets/carousel/Carousel5.avif";

import "./css/Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const slideInterval = useRef(null);

  const slides = [
    {
      id: 1,
      image: Carousel1,
      title: "WELCOME",
      description:
        "सोमेश्वर रुद्राक्ष बचत तथा ऋण सहकारी संस्थाको आधिकारिक वेबसाइटमा तपाईहरुलाई स्वागत छ ।",
    },
    {
      id: 2,
      image: Carousel2,
      title: "हाम्रो बचतको बिशेषताहरु",
      description: "नियमित बचत, ऐच्छिक बचत, दैनिक बचत र आवधिक बचत आफ्नो इक्छाअनुसार गर्ने मिल्ने ",
      lazy: true,
    },
    {
      id: 3,
      image: Carousel3,
      title: "हाम्रो ऋणको बिशेषताहरु",
      description:
        "न्यूनतम ब्याजदरमा छिटो र सरल ऋण सेवा, धितो मूल्याङ्कनको ५०% सम्म कर्जा प्रवाह",
      lazy: true,
    },
    {
      id: 4,
      image: Carousel4,
      title: "खुत्रुके बचत खाताको बिशेषताहरु",
      description: "प्रत्येक महिना बचत, अधिकतम व्याजदर, बचतको गर्ने बानीको बिकाश",
      lazy: true,
    },
    {
      id: 5,
      image: Carousel5,
      title: "हाम्रो कार्यक्षेत्रहरु",
      description:
        "इटहरी उपनगरपालिका र रामधुनी नगरपालिका भित्र कार्यक्षेत्र",
      lazy: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const resetInterval = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  useEffect(() => {
    if (autoPlay) {
      slideInterval.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(slideInterval.current);
  }, [autoPlay]);

  // ✅ Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true, // also allows mouse drag on desktop
  });

  return (
    <section className="carousel-section">
      <div className="carousel-container" {...handlers}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="carousel-btn btn">Learn More</button>
            </div>
          </div>
        ))}

        <button className="carousel-control prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/Carousel.css"; // Import the CSS file

const GiftCarousel = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <video className="d-block w-100" autoPlay loop muted>
          <source src="/video/Gift.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Carousel.Caption>
          <h3>Exclusive Gift Deals</h3>
          <p>Surprise your loved ones with amazing gifts today!</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item className="carousel-item">
        <img className="d-block w-100" src="/images/Home1.jpg" alt="Gift 1" />
        <Carousel.Caption>
          <h3>Beautiful Bouquets</h3>
          <p>Send your love with a bouquet that's sure to impress!</p>
        </Carousel.Caption>
      </Carousel.Item> */}

      {/* <Carousel.Item className="carousel-item">
        <video className="d-block w-100" autoPlay loop muted>
          <source src="/videos/gift-video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Carousel.Caption>
          <h3>Perfect for Every Occasion</h3>
          <p>From birthdays to anniversaries, we have the perfect gift for you.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default GiftCarousel;

import React from "react";
import Slider from "react-slick";
// import img1 from "https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FB5CCNUDIDAQBA5WXPLRZYXJAWY_size-normalized%252Ejpg&w=992&h=662";
import "../Slider/Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="news-img">
          <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FB5CCNUDIDAQBA5WXPLRZYXJAWY_size-normalized%252Ejpg&w=992&h=662" alt="" />
        </div>
        <div className="news-img">
<img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FKQZG6R4O7F4IG2ZDKQ3425RIF4_size-normalized%252Ejpg&w=992&h=662" alt="" />
        </div>
        <div className="news-img">
            <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FXS6CBABFMLE74YEUDUJHIKI7AY%252EJPG&w=992&h=662" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

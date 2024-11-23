import React, { useState } from "react";
import "../../styles/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

const CarDetailsPictures = ({ images }) => {
  // Set the first image as the default main image
  const [mainImage, setMainImage] = useState(images[0]?.large);

  const settings = {
    dots: true,
    infinite: false, // Disable infinite scrolling if not needed
    speed: 500,
    slidesToShow: 6, // Adjust this to match your desired number of visible images
    slidesToScroll: 1,
    centerMode: false, // Disable center mode for precise control over alignment
    variableWidth: false, // Ensure all slides have equal width
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="car__details__pic">
      <div className="car__details__pic__large">
        <img className="car-big-img" src={mainImage} alt="Car" />
      </div>
      {/* Thumbnail slider with navigation */}
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        navigation={true} // Enables navigation arrows
        modules={[Navigation]}
        loop={true}
        className="car-thumbs-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => setMainImage(image.large)}>
            <img src={image.thumb} alt={`Thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarDetailsPictures;

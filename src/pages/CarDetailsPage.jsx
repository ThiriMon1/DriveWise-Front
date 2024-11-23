import React from "react";
import SideBar from "../components/carDetail/SideBar";
import CarDetailsTabs from "../components/carDetail/CarDetailsTabs";
import CarDetailsPictures from "../components/carDetail/CarDetailsPictures";
import "../styles/style.css";
import BannerSection from "../components/bannerSection/BannerSection";
import img1 from "../assets/img/cars/details/cd-1.jpg";
import img2 from "../assets/img/cars/details/sm-1.jpg";
import img3 from "../assets/img/cars/details/cd-2.jpg";
import img4 from "../assets/img/cars/details/sm-2.jpg";
import img5 from "../assets/img/cars/details/cd-3.jpg";
import img6 from "../assets/img/cars/details/sm-3.jpg";
import img7 from "../assets/img/cars/details/cd-4.jpg";
import img8 from "../assets/img/cars/details/sm-4.jpg";

const CarDetailsPage = () => {
  const carImages = [
    {
      large: img3,
      thumb: img2,
    },
    {
      large: img5,
      thumb: img4,
    },
    {
      large: img7,
      thumb: img6,
    },
    {
      large: img1,
      thumb: img8,
    },
    {
      large: img7,
      thumb: img6,
    },
    {
      large: img1,
      thumb: img8,
    },
    {
      large: img3,
      thumb: img2,
    },
    {
      large: img5,
      thumb: img4,
    },
  ];

  return (
    <div>
      <BannerSection />
      {/* <div className="breadcrumb">
        <h2>Porsche Cayenne Turbo S 2019</h2>
        <a href="/">Home</a> <a href="/cars">Car Listing</a> Porsche Cayenne
        Turbo S
      </div> */}
      <section className="car-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <CarDetailsPictures images={carImages} />
              <CarDetailsTabs />
            </div>
            <div className="col-lg-3">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetailsPage;

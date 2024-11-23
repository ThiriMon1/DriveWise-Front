import React, { useState, useEffect } from "react";
import CarCriteria from "../components/filter/FilterBy";
import Display from "../components/carDisplay/Display";
import "../styles/style.css";
import car1 from "../assets/img/cars/car-1.jpg";
import BannerSection from "../components/bannerSection/BannerSection";

const CarListPage = () => {
  const [criteria, setCriteria] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    bodyStyle: "",
    condition: "",
  });

  const [cars, setCars] = useState([]); // Store car data

  // Fetch filtered cars from backend or mock data
  const fetchCars = async () => {
    const mockCars = [
      {
        id: 1,
        brand: "Porsche",
        model: "Cayenne",
        year: 2019,
        price: 399,
        mileage: 15000,
        condition: "New",
        image: { car1 },
      },
      {
        id: 2,
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        price: 499,
        mileage: 12000,
        condition: "Used",
        image: "../assets/img/cars/car-2.jpg",
      },
      {
        id: 3,
        brand: "BMW",
        model: "X5",
        year: 2018,
        price: 299,
        mileage: 18000,
        condition: "New",
        image: "../assets/img/cars/car-3.jpg",
      },
    ];

    const filteredCars = mockCars.filter((car) => {
      return (
        (criteria.brand === "" || car.brand.includes(criteria.brand)) &&
        (criteria.model === "" || car.model.includes(criteria.model)) &&
        (criteria.year === "" || car.year.toString() === criteria.year) &&
        (criteria.condition === "" || car.condition === criteria.condition)
      );
    });

    setCars(filteredCars);
  };

  useEffect(() => {
    fetchCars();
  }, [criteria]);

  return (
    <>
      <hr
        style={{
          border: 0,
          height: ".4px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          marginTop: 0,
        }}
      />
      <div>
        <section className="car spad">
          <div className="container">
            <div className="row">
              <CarCriteria criteria={criteria} setCriteria={setCriteria} />
              <Display cars={cars} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarListPage;

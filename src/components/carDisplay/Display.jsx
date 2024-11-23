import React from "react";
import { Link } from "react-router-dom";

const Display = ({ cars }) => {
  return (
    <div className="col-lg-9">
      <div className="car__filter__option">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="car__filter__option__item">
              <h6>Show On Page</h6>
              <select>
                <option value="9">9 Cars</option>
                <option value="15">15 Cars</option>
                <option value="20">20 Cars</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="car__filter__option__item car__filter__option__item--right">
              <h6>Sort By</h6>
              <select>
                <option value="highest">Price: Highest First</option>
                <option value="lowest">Price: Lowest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div key={car.id} className="col-lg-4 col-md-6 mb-4">
              <div className="car__item">
                <div className="car__item__pic__slider">
                  {/* Replace `src` with a proper image source */}
                  <Link to={`/car/${car.id}`}>
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="car__item__text">
                  <div className="car__item__text__inner">
                    <h6>
                      {car.brand} {car.model}
                    </h6>
                    <p>
                      {car.year} | ${car.price}/Month
                    </p>
                    <p>
                      {car.mileage} miles | {car.condition}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No cars found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Display;

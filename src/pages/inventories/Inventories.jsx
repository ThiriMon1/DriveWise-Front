import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import FilterBy from "../../components/filter/FilterBy";
import { useParams } from "react-router-dom";
import CarCard from "../../components/cards/CarCard";
import hero from "../../assets/img/cars/car-1.jpg";

// Dummy data for properties
const dummyData = [
  {
    id: 1,
    image: [hero],
    make: "Toyota",
    model: "HH",
    price: "$300,000",
    mileage: 100000,
    year: 2008,
  },
  {
    id: 2,
    image: ["image2.jpg"],
    make: "Mercede",
    model: "HH1",
    price: "$400,000",
    mileage: 100000,
    year: 2018,
  },
  {
    id: 3,
    image: ["image3.jpg"],
    make: "Toyota",
    model: "HH44",
    price: "$20,000",
    mileage: 100000,
    year: 2018,
  },
];

const Inventories = () => {
  const param = useParams();
  const [props, setProps] = useState([]);

  useEffect(() => {
    // Simulate data fetch using dummy data
    const fetchData = () => {
      try {
        // const propertiesWithImages = dummyData.map((property, index) => {
        //   // Find the corresponding dummy data image by matching IDs
        //   property.image = dummyData[index].image;
        //   return property;
        // });

        setProps(dummyData);
        console.log("Fetched dummy data: ", dummyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(props);

  const handleSearch = (filteredData) => {
    setProps(filteredData);
  };

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
      <Container sx={{ mt: 4 }}>
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={4}>
            {/* Left side filter */}
            <Grid item xs={12} sm={4} md={3}>
              <FilterBy onSearch={handleSearch} />
            </Grid>

            {/* Right side car list */}
            <Grid item xs={12} sm={8} md={9}>
              <Box>
                <Grid container spacing={4}>
                  {props.map((p) => (
                    <Grid item xs={12} sm={6} md={4} key={p.id}>
                      <CarCard
                        id={p.id}
                        images={p.image}
                        make={p.make}
                        model={p.model}
                        price={p.price}
                        mileage={p.mileage}
                        year={p.year}
                        condition={p.condition}
                        VIN={p.VIN}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Inventories;

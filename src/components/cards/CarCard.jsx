import * as React from "react";
import { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// Custom styled card with better layout adjustments
const CustomCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  //width: "100%", // Adjust to the parent container
  position: "relative", // For absolute positioning (if needed for favorite icon)
  margin: "auto",
  borderRadius: "8px", // Add some smoothness to the card edges
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "185px", // Adjust height as needed
  objectFit: "cover", // Ensure the image fills the container proportionally
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
});

const CarCard = (props) => {
  const navigate = useNavigate();
  const { id, images, make, model, price, mileage, year, condition, VIN } =
    props;

  // To Favorite the property
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <CustomCard>
        <CardActionArea onClick={() => navigate(`/cars/${id}`)}>
          {images && images.length > 0 && (
            <StyledCardMedia
              component="img"
              image={images[0]}
              alt={`${make} ${model}`}
            />
          )}

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              ${new Intl.NumberFormat("en-US").format(price)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {make} {model} | {year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {mileage.toLocaleString()} miles | {condition}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    </Grid>
  );
};

export default CarCard;

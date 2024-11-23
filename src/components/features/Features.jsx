import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import agreementImg from "../../assets/img/cta/cta-1.jpg";
import saleSignImg from "../../assets/img/cta/cta-2.jpg";

const Features = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ height: 165 }} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
          p: 4,
          bgcolor: "#f5f5f5",
        }}
      >
        <Box sx={{ maxWidth: 345, m: 2 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            textAlign={"left"}
          >
            Looking to buy your car quickly and efficiently?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2 }}
            textAlign={"justify"}
          >
            DriveWise is your go-to destination! Our platform specializes in
            connecting sellers with a wide network of interested buyers,
            ensuring your car gets maximum visibility.
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Explore by becoming a Seller
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: 500, // Set a fixed height for the banner
            maxWidth: "40%",
            backgroundImage: `url(${saleSignImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover", // Cover the box area, maintaining aspect ratio
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
          p: 4,
          bgcolor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: 500,
            maxWidth: "40%",
            backgroundImage: `url(${agreementImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
        <Box sx={{ maxWidth: 345, m: 2 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            textAlign={"left"}
          >
            Looking to sell your car quickly and efficiently?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2 }}
            textAlign={"justify"}
          >
            DriveWise is your go-to destination! Our platform specializes in
            connecting sellers with a wide network of interested buyers,
            ensuring your car gets maximum visibility.
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Start looking for a DriveWise
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Features;

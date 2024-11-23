import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Box,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if the screen size is medium or smaller

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    // backgroundColor: "#000000",
    justifyContent: "space-between",
    maxWidth: "100%",
  });
  return (
    <>
      <Box
        sx={{
          position: "relative", // Needed to position the search bar absolutely within
          flexGrow: 1,
          height: 50, // Set a fixed height for the banner
          width: "100%",
          backgroundColor: "#323232",
          display: "flex",
        }}
      >
        <Box
          sx={{
            marginRight: "auto",
            marginLeft: "4rem",
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <AccessTimeIcon sx={{ marginRight: "0.5rem" }} />
          <Typography variant="body2">
            Week day: 08:00 am to 18:00 pm
          </Typography>

          <MailOutlineIcon sx={{ marginLeft: "1rem", marginRight: "0.5rem" }} />
          <Typography variant="body2">Info.drivewise@gmail.com</Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "4rem",
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <PhoneIcon sx={{ marginLeft: "1rem", marginRight: "0.5rem" }} />
          <Typography variant="body2" sx={{ marginRight: "1rem" }}>
            (+12) 345 888 919
          </Typography>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <GoogleIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Header;

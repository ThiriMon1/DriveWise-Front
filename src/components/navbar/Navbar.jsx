import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../assets/img/logo.png";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"; // For comment/review
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"; // For notifications
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // For favorites

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "100%",
});

const NavSection = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Logo = styled("img")({
  maxWidth: "180px",
  height: "40px",
});

const StyledButton = styled(Button)({
  color: "black",
  textTransform: "capitalize",
  "&:hover": {
    color: "grey",
  },
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  color: "black",
  boxShadow: "none", // Updated to remove elevation shadow
});

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userEmail, isLoggedIn, role, userId } = useSelector(
    (state) => state.auth
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [buyAnchorEl, setBuyAnchorEl] = useState(null);
  const buyOpen = Boolean(buyAnchorEl);

  const [researchAnchorEl, setResearchAnchorEl] = useState(null);
  const researchOpen = Boolean(researchAnchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const buyHandleMenu = (event) => {
    setBuyAnchorEl(event.currentTarget);
  };

  const researchHandleMenu = (event) => {
    setResearchAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buyHandleClose = () => {
    setBuyAnchorEl(null);
  };

  const researchHandleClose = () => {
    setResearchAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    sessionStorage.clear();
    navigate("/login");
  };

  // Create a function to render menu items based on role
  const renderMenuItems = () => {
    let items = [];

    if (role === "CUSTOMER") {
      items = [
        <MenuItem key="favorites" onClick={() => navigate("/users/favorites")}>
          View Favorite Properties
        </MenuItem>,
        <MenuItem
          key="offer-list"
          onClick={() => navigate("/users/view-offer-list")}
        >
          View Offer List
        </MenuItem>,
        <MenuItem
          key="review-list"
          onClick={() => navigate("/users/view-review-list")}
        >
          View Review List
        </MenuItem>,
      ];
    }

    items.push(
      <MenuItem key="logout" onClick={handleLogout}>
        Logout
      </MenuItem>
    );

    return items;
  };

  return (
    <Container>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <NavSection>
            {/* Conditional rendering based on role */}
            {role !== "ADMIN" && (
              <>
                {/* <StyledButton onClick={() => navigate("/buy")}>Buy</StyledButton>
                <StyledButton onClick={() => navigate("/rent")}>Rent</StyledButton> */}

                <StyledButton onClick={buyHandleMenu}>Buy</StyledButton>
                <Menu
                  id="menu-appbar-buy"
                  anchorEl={buyAnchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={buyOpen}
                  onClose={buyHandleClose}
                >
                  <MenuItem key="used" onClick={() => navigate("/buy/used")}>
                    Used Cars
                  </MenuItem>
                  ,
                  <MenuItem key="new" onClick={() => navigate("/buy/new")}>
                    New Cars
                  </MenuItem>
                </Menu>
                <StyledButton onClick={researchHandleMenu}>
                  Research
                </StyledButton>
                <Menu
                  id="menu-appbar-buy"
                  anchorEl={researchAnchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={researchOpen}
                  onClose={researchHandleClose}
                >
                  <MenuItem
                    key="reviewed"
                    onClick={() => navigate("/research/reviews")}
                  >
                    Drive Reviews
                  </MenuItem>
                </Menu>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    console.log("Navigate to reviews");
                    navigate("/write-review");
                  }}
                >
                  <ChatBubbleOutlineIcon />
                </IconButton>

                {/* Notifications Button */}
                <IconButton
                  color="inherit"
                  onClick={() => {
                    console.log("Navigate to notifications");
                  }}
                >
                  <NotificationsNoneIcon />
                </IconButton>

                {/* Favorites Button */}
                <IconButton
                  color="inherit"
                  onClick={() => {
                    console.log("Navigate to favorites");
                    navigate("/pre-info-favorite");
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </>
            )}
          </NavSection>

          <NavSection>
            {isLoggedIn ? (
              <>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ paddingLeft: 1, cursor: "pointer" }}
                  onClick={handleMenu}
                >
                  {userEmail}
                </Typography>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <ExpandMoreIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {renderMenuItems()}
                </Menu>
              </>
            ) : (
              <>
                <StyledButton onClick={() => navigate("/login")}>
                  Log In
                </StyledButton>
                <StyledButton onClick={() => navigate("/register")}>
                  Register
                </StyledButton>
              </>
            )}
          </NavSection>
        </StyledToolbar>
      </StyledAppBar>
    </Container>
  );
}

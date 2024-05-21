import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../styles/global.css";
import logo from "../assets/coach-art-logo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/Favorite";

const colors = {
  navyBlue: "#101C52",
  grey: "#606060",
  tangerine: "#EA781E",
};

const Header: React.FC = () => {
  return (
    <header>
      <Box className="header" display="flex" alignItems="center">
        <Link to="/">
          <img
            src={logo}
            alt="Coach Art"
            style={{ objectFit: "cover", height: "20px" }}
          />
        </Link>
        <Box>
          <Typography
            component={Link}
            to="https://coachart.org/about-us/"
            className="header-link"
          >
            About
          </Typography>
          <Typography
            component={Link}
            to="https://inspire.coachart.org/c/what-is-coachart-inspire/"
            className="header-link"
          >
            Inspiring Content
          </Typography>
          <Typography
            component={Link}
            to="https://coachart.org/get-involved/"
            className="header-link"
          >
            Get Involved
          </Typography>
          <Typography
            component={Link}
            to="https://coachart.my.site.com/CommunityLoginPage"
            className="header-link"
          >
            Connect App
          </Typography>
        </Box>
        <Button className="header-button">
          <Favorite />
          Donate
        </Button>
      </Box>
    </header>
  );
};

export default Header;

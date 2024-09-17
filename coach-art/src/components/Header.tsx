import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";
import logo from "../assets/coach-art-logo.png";

const colors = {
  navyBlue: "#101C52",
  grey: "#606060",
  tangerine: "#EA781E",
};

interface HeaderComponentProps {
  admin: string;
}

const Header: React.FC<HeaderComponentProps> = ({ admin }) => {
  const navigate = useNavigate();
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
        {admin ? (
          <Box>
            <Button className="header-button" sx={{ marginRight: 2 }}>
              {admin}
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              className="header-button"
              sx={{ marginRight: 2 }}
              onClick={() => {
                navigate("/admin/signup");
              }}
            >
              Admin Sign-Up
            </Button>
            <Button
              className="header-button"
              sx={{ marginLeft: 2 }}
              onClick={() => {
                navigate("/admin");
              }}
            >
              Admin Log-In
            </Button>
          </Box>
        )}
      </Box>
    </header>
  );
};

export default Header;

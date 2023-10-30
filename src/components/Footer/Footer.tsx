import { Box, Typography } from "@mui/material";
import * as St from "./Footer.styled";
import chplay from "../../assets/images/chplay.png";
import x from "../../assets/icons/x.png";
import instagram from "../../assets/icons/instagram.png";
import vector from "../../assets/icons/Vector.png";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import configs from "../../configs";

const Footer = () => {
    return (
        <St.StyledDiv>
            <Box className="container">
                <Box className="company">
                    <Typography className="title">Company</Typography>
                    <Typography className="company__desc">About Us</Typography>
                    <Typography className="company__desc">Careers</Typography>
                </Box>
                <Box className="help">
                    <Typography className="title">Need Help</Typography>
                    <Typography className="help__desc">
                        Visit Help Center ?
                    </Typography>
                    <Typography className="help__desc">
                        Share Feedback
                    </Typography>
                </Box>
                <Box className="view">
                    <Typography className="title">View Website in</Typography>
                    <Box className="view__wrapper">
                        <Typography className="view__desc">English</Typography>
                        <img className="view__icon" src={vector} />
                    </Box>
                </Box>
                <Box className="social">
                    <Typography className="title">Social Media</Typography>
                    <Box className="social__content">
                        <Box className="social__wrapper">
                            <img className="social__icon" src={instagram} />
                        </Box>
                        <Box className="social__wrapper">
                            <img className="social__icon" src={x} />
                        </Box>
                    </Box>
                </Box>
                <Box className="download">
                    <Typography className="title">Download Our App</Typography>

                    <Box className="download__wrapper">
                        <img className="download__image" src={chplay} />
                    </Box>
                </Box>
            </Box>
            <Box className="divider"></Box>
            <Box className="container">
                <Box className="footer__link">
                    <Box className="footer__link-desc">
                        © 2023 STREAM X. All Rights Reserved.
                    </Box>
                    <Box className="footer__link-desc">Terms Of Use</Box>
                    <Box className="footer__link-desc">Privacy Policy</Box>
                    <Box className="footer__link-desc">FAQ</Box>
                </Box>
                <NavLink
                    to={configs.routes.home}
                    className="footer__image-wrapper"
                >
                    <img className="footer__image" src={logo} alt="" />
                </NavLink>
            </Box>
        </St.StyledDiv>
    );
};

export default Footer;

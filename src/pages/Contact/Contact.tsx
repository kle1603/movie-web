// import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";
import * as St from "./Contact.styled";

const Contact = () => {
    return (
        <St.StyledBox>
            <Box className="container">
                <Typography className="contact__heading">
                    Contact With Us
                </Typography>
                <Typography className="contact__desc">
                    The right move at the right time saves your investment. live
                    the dream of expanding your business.
                </Typography>
                <Box className="contact__form">
                    <Box className="contact__form-group">
                        <input
                            type="text"
                            className="contact__form-input"
                            name="firstName"
                            id="firstName"
                            placeholder="First name"
                            required
                        />

                        <input
                            type="text"
                            className="contact__form-input"
                            name="lastName"
                            id="lastName"
                            placeholder="Last name"
                            required
                        />
                    </Box>

                    <Box className="contact__form-group">
                        <input
                            type="email"
                            className="contact__form-input"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        />

                        <input
                            type="tel"
                            className="contact__form-input"
                            name="phone"
                            id="phone"
                            placeholder="Phone number"
                            required
                            pattern="^(0|\+?84)(3|5|7|8|9)[0-9]{8}$"
                        />
                    </Box>
                    <Box className="contact__form-group">
                        <textarea
                            className="contact__form-textarea"
                            name="yourself"
                            id="yourself"
                            placeholder="Tell us about yourself"
                        ></textarea>
                    </Box>
                    <Box className="contact__form-group">
                        <button type="submit" className="button">
                            Contact us
                        </button>
                    </Box>
                </Box>
            </Box>
        </St.StyledBox>
    );
};

Contact.propTypes = {};

export default Contact;

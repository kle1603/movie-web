import background from "../../assets/images/background.png";
import * as St from "./LandingSpace.styled";
import spider from "../../assets/images/spider.png";
import chevron from "../../assets/icons/chevron.png";
import play from "../../assets/icons/play.png";
import { Box, Typography } from "@mui/material";

const LandingSpace = () => {
    return (
        <St.StyledDiv>
            <img className="background" src={background} alt="" />
            <Box className="content">
                <Box className="content__image-wrapper">
                    <img className="content__image" src={spider} alt="" />
                </Box>
                <Box className="content__title">
                    <Typography className="content__title-item">
                        CBFC:U/A
                    </Typography>
                    <Typography className="content__title-item">
                        Action
                    </Typography>
                    <Typography className="content__title-item">
                        Adventure
                    </Typography>
                    <Typography className="content__title-item">
                        2h 28m
                    </Typography>
                </Box>
                <Typography className="content__desc">
                    When a spell goes wrong, dangerous foes from other worlds
                    start to appear, forcing Peter to discover what it truly
                    means to be Spider-Man.
                </Typography>
                <Box className="content__button-wrapper">
                    <Box className="content__button-first">
                        <img
                            className="content__button-image"
                            src={play}
                            alt=""
                        />
                        <Typography className="content__button-desc">
                            Watch Now
                        </Typography>
                    </Box>
                    <Box className="content__button">
                        <img
                            className="content__button-image"
                            src={chevron}
                            alt=""
                        />
                        <Typography className="content__button-desc">
                            More Info
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="fade"></Box>
        </St.StyledDiv>
    );
};

export default LandingSpace;

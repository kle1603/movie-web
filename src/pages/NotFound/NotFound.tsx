import { Box, Button, Typography } from "@mui/material";
import image from "../../assets/images/img1.svg";
import * as St from "./NotFound.styled";
import { useNavigate } from "react-router-dom";
import configs from "../../configs";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(configs.routes.home);
    };

    return (
        <St.BoxStyled>
            <Box className="container">
                <img className="image" src={image} alt="" />
                <Typography className="title">Page not found</Typography>
                <Button onClick={handleClick} className="button-wrapper">
                    <Typography className="button">Go to home</Typography>
                </Button>
            </Box>
        </St.BoxStyled>
    );
};

export default NotFound;

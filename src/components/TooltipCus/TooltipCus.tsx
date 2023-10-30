// import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";
import { AiFillEdit, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../redux/userSlice";

import * as St from "./TooltipCus.styled";
import { useNavigate } from "react-router-dom";
import configs from "../../configs";

const TooltipCus = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("userData");
        navigate(configs.routes.home);
    };

    const handleDashboard = () => {
        navigate(configs.routes.dashboard);
    };

    return (
        <St.BoxStyled>
            <Box onClick={handleDashboard} className="button">
                <AiFillEdit className="icon" />
                <Typography className="button-desc">Dashboard</Typography>
            </Box>
            <Box className="button">
                <AiOutlineUser className="icon" />
                <Typography className="button-desc">Your Info</Typography>
            </Box>
            <Box onClick={handleClick} className="button">
                <AiOutlineLogout className="icon" />
                <Typography className="button-desc">Logout</Typography>
            </Box>
        </St.BoxStyled>
    );
};

TooltipCus.propTypes = {};

export default TooltipCus;

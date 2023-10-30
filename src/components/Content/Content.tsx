import { Box, Typography } from "@mui/material";

import * as St from "./Content.styled";
import chevron from "../../assets/icons/chevron-mini.png";
import Slider from "../Slider";

interface ContentProps {
    title: string;
    time: number;
    index: number;
}

const Content = ({ title, time, index }: ContentProps) => {
    return (
        <St.StyledDiv>
            <Box className="content__header">
                <Typography>{title}</Typography>
                <Box className="button__wrapper">
                    <Typography className="button__desc">View More</Typography>
                    <img className="button__icon" src={chevron} alt="" />
                </Box>
            </Box>
            <Slider time={time} link={"detail/"} index={index} />
        </St.StyledDiv>
    );
};

export default Content;

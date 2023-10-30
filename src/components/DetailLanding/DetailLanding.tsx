import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DownloadIcon from "@mui/icons-material/Download";
import ReplyIcon from "@mui/icons-material/Reply";

// import data from "../../components/Data";
import * as St from "./DetailLanding.styled";
import watchlist from "../../assets/icons/watchlist.png";
import play from "../../assets/icons/play.png";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Video from "../Video";
import { getMovieById } from "../../utils/movieApi";

interface DetailLandingProps {
    id: string;
}

interface Movie {
    id: string;
    background: string;
    logo: string;
    video: string;
}

const DetailLanding = ({ id }: DetailLandingProps) => {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    const [movie, setMovie] = useState<Movie>({
        id: "",
        background: "",
        logo: "",
        video: "",
    });

    useEffect(() => {
        (async () => {
            const { data } = await getMovieById("Movie", Number(id));
            setMovie(data);
        })();
    }, [id]);

    return (
        <St.StyledDiv>
            <img className="background" src={movie.background} alt="" />
            <Box className="content">
                <Box className="content__image-wrapper">
                    <img className="content__image" src={movie.logo} alt="" />
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
                <Box className="content__button-wrapper">
                    <Box
                        className="content__button-first"
                        onClick={handleModal}
                    >
                        <img
                            className="content__button-image"
                            src={play}
                            alt=""
                        />
                        <p className="content__button-desc">Watch Now</p>
                    </Box>
                    <Box className="content__button">
                        <img
                            className="content__button-image"
                            src={watchlist}
                            alt=""
                        />
                        <Typography className="content__button-desc">
                            Add Watchlist
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="button">
                <Box className="icon__wrapper">
                    <FavoriteBorderIcon className="icon" />
                </Box>
                <Box className="icon__wrapper">
                    <DownloadIcon className="icon" />
                </Box>
                <Box className="icon__wrapper">
                    <ReplyIcon className="icon" />
                </Box>
            </Box>
            <Box className="fade"></Box>
            <Video setOpen={setOpen} open={open} src={movie.video} />
        </St.StyledDiv>
    );
};

export default DetailLanding;

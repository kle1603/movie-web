import { Box, Typography } from "@mui/material";

import * as St from "./DetailContext.styled";
// import data from "../Data/Data";
import cast_1 from "../../assets/images/cast-1.png";
import cast_2 from "../../assets/images/cast-2.png";
import cast_3 from "../../assets/images/cast-3.png";
import cast_4 from "../../assets/images/cast-4.png";
import cast_5 from "../../assets/images/cast-5.png";
import Slider from "../Slider";
import { useEffect, useState } from "react";
import { getMovieById } from "../../utils/movieApi";

interface DetailContentProps {
    id: string;
    time: number;
    link: string;
    index: number;
}

interface Movie {
    id: string;
    description: string;
}

const DetailContent = ({ id, time, link, index }: DetailContentProps) => {
    // const item = data[id];
    // const [movie, setMovie] = useState("");
    // const [movies, setMovies] = useState("");
    const [movie, setMovie] = useState<Movie>({ id: "", description: "" });
    // const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await getMovieById("Movie", Number(id));
            setMovie(data);
        })();
    }, [id]);

    // useEffect(() => {
    //     (async () => {
    //         const { data } = await getAllMovie("Movie");
    //         console.log(data);
    //         setMovies(data);
    //     })();
    // }, []);

    return (
        <St.StyledDiv>
            <Typography className="content__desc">
                {movie.description}
            </Typography>
            <Typography className="title">Top Cast</Typography>
            <Box className="list">
                <Box className="item">
                    <Box className="item__image">
                        <img className="image" src={cast_1} alt="" />
                    </Box>
                    <Box className="item__content">
                        <Typography className="item__title">
                            Jenna Ortega
                        </Typography>
                        <Typography className="item__desc">
                            Wednesday Adams
                        </Typography>
                    </Box>
                </Box>
                <Box className="item">
                    <Box className="item__image">
                        <img className="image" src={cast_2} alt="" />
                    </Box>
                    <Box className="item__content">
                        <Typography className="item__title">
                            Emma Myers
                        </Typography>
                        <Typography className="item__desc">
                            Enid Sinclair
                        </Typography>
                    </Box>
                </Box>
                <Box className="item">
                    <Box className="item__image">
                        <img className="image" src={cast_3} alt="" />
                    </Box>
                    <Box className="item__content">
                        <Typography className="item__title">
                            Catherine Zeta Jones
                        </Typography>
                        <Typography className="item__desc">
                            Morticia Addams
                        </Typography>
                    </Box>
                </Box>
                <Box className="item">
                    <Box className="item__image">
                        <img className="image" src={cast_4} alt="" />
                    </Box>
                    <Box className="item__content">
                        <Typography className="item__title">
                            Gwendoline Christie
                        </Typography>
                        <Typography className="item__desc">
                            Larissa Weems
                        </Typography>
                    </Box>
                </Box>
                <Box className="item">
                    <Box className="item__image">
                        <img className="image" src={cast_5} alt="" />
                    </Box>
                    <Box className="item__content">
                        <Typography className="item__title">
                            Luis Guzman
                        </Typography>
                        <Typography className="item__desc">
                            Gomez Addams
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography className="title__carousel">More Like this</Typography>
            <Slider time={time} link={link} index={index} />
        </St.StyledDiv>
    );
};

export default DetailContent;

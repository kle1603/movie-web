import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import * as St from "./Slider.styled";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { getAllMovie } from "../../utils/movieApi";
import SkeletonCus from "../SkeletonCus";

interface SliderProps {
    time: number;
    link: string;
    index: number;
}

interface Movie {
    id: number;
    image: string;
}

const Slider = ({ time, link, index }: SliderProps) => {
    // const [movies, setMovies] = useState([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { data } = await getAllMovie("Movie");
            setMovies(data);
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            {loading ? (
                <SkeletonCus />
            ) : (
                <St.StyledSwiper
                    initialSlide={index}
                    spaceBetween={14}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 14,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 14,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 14,
                        },
                    }}
                    autoplay={{
                        delay: time,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={`${link}${item.id}`} className="item">
                                <img
                                    className="image"
                                    src={item.image}
                                    alt="image"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </St.StyledSwiper>
            )}
        </div>
    );
};

export default Slider;

import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
    padding: 20px 0;
    cursor: pointer;
    scroll-behavior: smooth;

    &:hover .item {
        opacity: 0.6;
    }

    .item {
        display: block;
        width: 100%;
        height: 171px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        overflow: hidden;

        transform: scale(1);
        transition: all 0.3s ease-in-out;
        scroll-behavior: smooth;

        &:hover {
            opacity: 1;
            transform: translateY(-10px);
        }

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

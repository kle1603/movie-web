import { Modal } from "@mui/material";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
    .modal__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70vw;
        height: 80vh;
        background-color: #000;
        border-radius: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        .video {
            width: 94%;
            height: 90%;
            object-fit: cover;
            border-radius: 20px;
            border: 1px solid #000;
            overflow: hidden;
        }
    }
`;

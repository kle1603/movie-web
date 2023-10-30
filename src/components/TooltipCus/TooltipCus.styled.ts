import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BoxStyled = styled(Box)`
    padding: 4px 0;
    width: 160px;

    .button {
        padding: 0px 20px;
        margin-bottom: 5px;
        border: 1px solid #fff;
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        border-radius: 10px;
        background-color: #000;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:last-child {
            margin-bottom: 0;
        }

        &:hover {
            background-color: #111;
        }

        .icon {
            margin-right: 10px;
            font-size: 1.6rem;
        }

        .button-desc {
            color: #fff;
            font-size: 1.4rem;
            font-weight: 700;
        }
    }
`;

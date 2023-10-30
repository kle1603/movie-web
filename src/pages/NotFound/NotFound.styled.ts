import { Box, styled } from "@mui/material";

export const BoxStyled = styled(Box)`
    background: rgb(8, 28, 34);
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: "Open Sans", sans-serif;

    .image {
        width: 50%;
    }

    .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: center;
    }

    .title {
        color: rgb(233, 238, 245);
        font-size: 3rem;
        /* padding: 20px; */
    }

    .button-wrapper {
        padding: 10px 20px;
        border-radius: 15px;
        border: none;
        background: rgb(5, 129, 245);
        color: white;

        .button {
            font-size: 1.6rem;
            font-weight: 700;
            color: #fff;
        }
    }
`;

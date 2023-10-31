import { Box, styled } from "@mui/material";

export const BoxStyled = styled(Box)`
    padding: 20px 0;

    .MuiSkeleton-root {
        /* -webkit-transform: none; */
    }

    .MuiSkeleton-root {
        display: block;
        background-color: rgba(141, 141, 141, 0.11);
        height: 1.2em;
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        -webkit-mask-image: -webkit-radial-gradient(white, black);
    }
`;

import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BoxStyled = styled(Box)`
    padding: 12px 10px;
    width: 250px;
    height: 200px;
    overflow: hidden;

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

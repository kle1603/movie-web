import { Skeleton } from "@mui/material";
import * as St from "./SkeletonCus.styled";

const SkeletonCus = () => {
    return (
        <St.BoxStyled>
            <Skeleton variant="rounded" animation="wave" height={172} />
        </St.BoxStyled>
    );
};

SkeletonCus.propTypes = {};

export default SkeletonCus;

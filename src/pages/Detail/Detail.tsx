import { useParams } from "react-router-dom";
import DetailLanding from "../../components/DetailLanding";
import DetailContent from "../../components/DetailContent";
import { Box } from "@mui/material";

const Detail = () => {
    const { id = "" } = useParams();

    return (
        <Box>
            <DetailLanding id={id} />
            <DetailContent id={id} time={2000} link={"/detail/"} index={1} />
        </Box>
    );
};

export default Detail;

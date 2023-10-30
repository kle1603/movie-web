import { ReactNode } from "react";
import "swiper/css";
import { Box } from "@mui/material";
import Header from "../../components/Header/Header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <Header scroll={0} />
            {children}
        </Box>
    );
};

export default DashboardLayout;

import { ReactNode } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import "swiper/css";

const StyledSection = styled.div`
    background-color: rgb(15, 15, 15);
`;

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <StyledSection>
            <Header scroll={300} />
            {children}
            <Footer />
        </StyledSection>
    );
};

export default Layout;

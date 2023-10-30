import { ReactNode } from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import "swiper/css";

const StyledSection = styled.div`
    background-color: rgb(15, 15, 15);
`;

const OnlyHeader = ({ children }: { children: ReactNode }) => {
    return (
        <StyledSection>
            <Header scroll={300} />
            {children}
        </StyledSection>
    );
};

export default OnlyHeader;

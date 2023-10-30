import styled from "@emotion/styled";
import Content from "../../components/Content/Content";
// import Data from "../../components/Data";
import LandingSpace from "../../components/LandingSpace";

const StyledSection = styled.div`
    background-color: rgb(15, 15, 15);
`;

const Home = () => {
    return (
        <StyledSection>
            <LandingSpace />
            <Content title={"Top Searches"} time={2000} index={1} />
            <Content title={"Action"} time={2000} index={4} />
            <Content title={"Romance & Drama"} time={2000} index={2} />
            <Content title={"Comedy"} time={2000} index={5} />
        </StyledSection>
    );
};

export default Home;

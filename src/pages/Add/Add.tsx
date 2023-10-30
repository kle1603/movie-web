import { useNavigate } from "react-router-dom";
import FormAdd from "../../components/FormAdd";
import * as St from "./Add.styled";
import { useEffect } from "react";
import configs from "../../configs";

const Add = () => {
    const navigate = useNavigate();
    const userData = localStorage.getItem("userData");

    useEffect(() => {
        if (!userData) {
            navigate(configs.routes.home);
        }
    }, [userData, navigate]);

    return (
        <>
            {userData ? (
                <St.BoxStyled>
                    <FormAdd />
                </St.BoxStyled>
            ) : (
                <></>
            )}
        </>
    );
};

export default Add;

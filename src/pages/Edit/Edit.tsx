import { useNavigate } from "react-router-dom";
import EditForm from "../../components/EditForm";
import * as St from "./Edit.styled";
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
                    <EditForm />
                </St.BoxStyled>
            ) : (
                <></>
            )}
        </>
    );
};

export default Add;

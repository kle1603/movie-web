import { Box, Button, Typography } from "@mui/material";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import * as St from "./Login.styled";
import google from "../../assets/images/Group.svg";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import configs from "../../configs";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            navigate(configs.routes.home);
        }
    }, [isLoggedIn, navigate]);

    const handleClick = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`,
                        },
                    }
                );
                localStorage.setItem("userData", JSON.stringify(res.data));
                dispatch(setUser(res.data));
                navigate(configs.routes.home);
            } catch (err) {
                console.log(err);
            }
        },
    });

    return (
        <St.BoxStyled>
            <Box className="inner">
                <Typography className="title">Login</Typography>
                <Box className="input-wrapper">
                    <input className="input" placeholder="Username" />
                    <BiSolidUser className="icon" />
                </Box>
                <Box className="input-wrapper">
                    <input className="input" placeholder="Password" />
                    <BiSolidLockAlt className="icon" />
                </Box>
                <Box className="link">
                    <Typography className="link-desc">
                        Forgot Password ?
                    </Typography>
                </Box>
                <Button className="button">
                    <Typography className="button-desc">Login</Typography>
                </Button>
                <Typography className="divider">Login with Others</Typography>
                <Button onClick={() => handleClick()} className="google">
                    <img className="google-logo" src={google} />
                    <Typography className="google-desc">
                        Login with Google
                    </Typography>
                </Button>
            </Box>
        </St.BoxStyled>
    );
};

export default Login;

import * as St from "./Header.styled";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";
import configs from "../../configs";
import useScroll from "../../hooks/useScroll";
import { Box, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// import { useSelector } from "react-redux";
import TooltipCus from "../TooltipCus";
import useAuth from "../../hooks/useAuth";

interface HeaderProps {
    scroll: number;
}

interface User {
    picture: string;
}

const Header = ({ scroll }: HeaderProps) => {
    const navigate = useNavigate();
    const [scrollY] = useScroll();
    const [user, setUser] = useState<User | null>(null);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const userData = localStorage.getItem("userData");

        if (userData) {
            const parsedUserData = JSON.parse(userData);
            setUser(parsedUserData);
        } else {
            setUser(null);
        }
    }, [isLoggedIn]);

    const handleClick = () => {
        navigate(configs.routes.login);
    };

    return (
        <St.StyledAppBar
            style={
                scrollY < scroll
                    ? { backgroundColor: "transparent", boxShadow: "none" }
                    : { backgroundColor: "black", boxShadow: "none" }
            }
        >
            <St.StyledToolbar>
                <Box className="header__left">
                    <NavLink to={configs.routes.home} className="header__logo">
                        <img className="header__image" src={logo} alt="" />
                    </NavLink>
                    <Box className="header__navbar">
                        <NavLink
                            to={configs.routes.home}
                            className="header__navbar-item"
                        >
                            Home
                        </NavLink>
                        <Typography className="header__navbar-item">
                            Movies
                        </Typography>
                        <Typography className="header__navbar-item">
                            Series
                        </Typography>
                        <Typography className="header__navbar-item">
                            Trending
                        </Typography>
                        <NavLink
                            to={configs.routes.contact}
                            className="header__navbar-item"
                        >
                            Contact
                        </NavLink>
                    </Box>
                </Box>
                <Box className="header__right">
                    <Box className="header__search">
                        <input
                            className="header__search-input"
                            placeholder="Search Movies, Series..."
                        />
                        <SearchIcon className="header__search-icon" />
                    </Box>
                    {user ? (
                        <Tooltip title={<TooltipCus />}>
                            <Box className="header__avatar">
                                <img
                                    className="header__avatar-image"
                                    src={user.picture}
                                    alt=""
                                />
                            </Box>
                        </Tooltip>
                    ) : (
                        <Box onClick={handleClick} className="login">
                            <Box className="login-button">
                                <Typography className="login-desc">
                                    Login
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </St.StyledToolbar>
        </St.StyledAppBar>
    );
};

export default Header;

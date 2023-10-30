import * as St from "./Header.styled";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";
import configs from "../../configs";
import useScroll from "../../hooks/useScroll";
import {
    Avatar,
    Badge,
    Box,
    Stack,
    Tooltip,
    Typography,
    styled,
} from "@mui/material";
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

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            backgroundColor: "#1ffadf",
            color: "#1ffadf",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
            },
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1,
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0,
            },
        },
    }));

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
                            <Stack
                                style={{ cursor: "pointer" }}
                                direction="row"
                                spacing={2}
                            >
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    variant="dot"
                                >
                                    {/* <Box className="header__avatar">
                                        <img
                                            className="header__avatar-image"
                                            src={user.picture}
                                            alt=""
                                        />
                                    </Box> */}
                                    <Avatar src={user.picture} />
                                </StyledBadge>
                            </Stack>
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

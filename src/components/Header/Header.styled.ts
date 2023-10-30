import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)``;

export const StyledToolbar = styled(Toolbar)`
    width: 1520px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 48px);

    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__left {
        margin-left: 68px;
        display: flex;
        justify-content: center;
        align-items: center;

        .header__logo {
            margin-right: 15px;
            width: 120px;
            height: 27px;
            cursor: pointer;
            overflow: hidden;

            .header__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .header__navbar {
            display: flex;

            .active {
                position: relative;

                &::after {
                    position: absolute;
                    bottom: 26px;
                    right: 12px;
                    left: 12px;
                    content: "";
                    /* width: 100px; */
                    height: 2px;
                    background-color: #ff4949;
                }
            }

            .header__navbar-item {
                padding: 30px 15px;
                color: #fff;
                font-size: 2rem;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: #ff4949;
                }
            }
        }
    }

    .header__right {
        margin-right: 65px;
        display: flex;
        justify-content: center;
        align-items: center;

        .header__search {
            margin-right: 9px;
            position: relative;
            font-size: 1.6rem;

            .header__search-input {
                padding: 10px 44px 10px 14px;
                width: 295px;
                height: 39px;
                border-radius: 40px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                background: rgba(0, 0, 0, 0.1);
                color: rgba(255, 255, 255, 0.6);

                &::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
            }

            .header__search-icon {
                position: absolute;
                right: 10px;
                top: 7px;

                background-color: transparent;
                font-size: 2.6rem;
                color: rgba(255, 255, 255, 0.6);
                cursor: pointer;
            }
        }

        .header__avatar {
            width: 39px;
            height: 39px;
            cursor: pointer;

            .header__avatar-image {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .login {
            /* border-radius: 10px;
            height: 39px;
            width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;

            border: 1px solid #fff;
            background: transparent;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            .login-button {
                color: #fff;
                font-size: 1.6rem;
                font-weight: 700;
            } */

            position: relative;
            color: #f5f5f5;
            height: 40px;
            width: 100px;
            display: block;
            text-align: center;
            border-radius: 999px;
            text-decoration: none;
            background-image: linear-gradient(
                115deg,
                #4fcf70,
                #fad648,
                #a767e5,
                #12bcfe,
                #44ce7b
            );
            cursor: pointer;

            &:hover {
                animation: rotate 0.4s linear infinite;
            }

            .login-button {
                height: 86%;
                width: 92%;
                background: #111;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 50%;
                left: 50%;
                border-radius: 999px;
                transform: translate(-50%, -50%);

                .login-desc {
                    font-size: 1.6rem;
                }
            }
        }

        @keyframes rotate {
            100% {
                filter: hue-rotate(-360deg);
            }
        }
    }
`;

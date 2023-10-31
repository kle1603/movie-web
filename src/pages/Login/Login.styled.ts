import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BoxStyled = styled(Box)`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://img.freepik.com/free-photo/digital-lavender-natural-landscape_23-2150538378.jpg");
    background-size: cover;

    .inner {
        margin-top: 90px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: transparent;
        border: 1px solid #fff;
        backdrop-filter: blur(5px);

        width: 500px;
        border-radius: 20px;
        overflow: hidden;

        .title {
            padding-top: 40px;
            font-size: 4rem;
            text-align: center;
            font-weight: 700;
            color: #fff;
        }

        .input-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            .input {
                margin-top: 25px;
                padding: 20px;
                width: 350px;
                height: 50px;
                border-radius: 999px;
                background-color: transparent;
                border: 1px solid #fff;
                color: #fff;

                font-size: 1.6rem;

                &::placeholder {
                    color: #fff;
                    font-size: 1.6rem;
                }
            }

            .icon {
                position: absolute;
                right: 20px;
                bottom: calc(50% - 24px);

                font-size: 2.2rem;
                color: #fff;
            }
        }

        .link {
            width: 310px;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .link-desc {
                margin-top: 20px;
                color: #fff;
                font-size: 1.4rem;
                cursor: pointer;
            }
        }

        .button {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 50px;
            height: 50px;
            width: 350px;
            border-radius: 999px;
            border: 1px solid #fff;
            background-color: #fff;
            color: #000;

            .button-desc {
                font-weight: 700;
                font-size: 1.6rem;
            }

            &:hover {
                color: #fff;
                background-color: transparent;
            }
        }

        .divider {
            margin-top: 20px;
            position: relative;
            font-size: 1.6rem;
            color: #fff;

            &::after {
                content: "";
                position: absolute;
                top: 11px;
                right: -100px;
                width: 90px;
                height: 1px;
                background-color: #fff;
            }

            &::before {
                content: "";
                position: absolute;
                top: 11px;
                left: -100px;
                width: 90px;
                height: 1px;
                background-color: #fff;
            }
        }

        .google {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 60px;
            height: 50px;
            line-height: 50px;
            width: 350px;
            border-radius: 999px;
            border: 1px solid #fff;
            background-color: #fff;
            color: #000;

            &:hover {
                color: #fff;
                background-color: transparent;
            }

            .google-logo {
                width: 22px;
                height: 22px;
            }

            .google-desc {
                margin-left: 20px;
                font-size: 1.6rem;
                font-weight: 700;
            }
        }
    }
`;

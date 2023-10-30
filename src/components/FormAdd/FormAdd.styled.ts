import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const BoxStyled = styled(Box)`
    height: calc(100vh - 90px);

    width: 1340px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 48px);

    display: flex;
    justify-content: center;
    align-items: center;

    .title-wrapper {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
            font-weight: 700;
        }

        .button {
            padding: 0 20px;
            position: relative;
            overflow: hidden;
            height: 40px;
            min-width: 100px;
            border-radius: 14px;
            background: #3d3a4e;
            background-size: 400%;
            color: #fff;
            border: none;

            display: flex;
            justify-content: center;
            align-items: center;

            &:hover::before {
                transform: scaleX(1);
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                transform: scaleX(0);
                transform-origin: 0 50%;
                width: 100%;
                height: inherit;
                border-radius: inherit;
                background: linear-gradient(
                    82.3deg,
                    rgba(150, 93, 233, 1) 10.8%,
                    rgba(99, 88, 238, 1) 94.3%
                );
                transition: all 0.475s;
            }

            .button-desc {
                position: relative;
                top: 1px;
                font-weight: 700;
                font-size: 1.6rem;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .wrapper {
        padding: 60px 80px 80px 80px;
        width: 100%;
        box-shadow: #00000029 0px 0px 10px 0px;
        border-radius: 20px;

        .message {
            padding: 0 20px;
            font-size: 1.6rem;
        }

        .input {
            margin-bottom: 24px;
            width: 100%;
            height: 40px;

            .name-input {
                padding: 0 20px;
                width: 100%;
                height: 100%;
                border-radius: 999px;
                border: 1px solid #ccc;
                font-size: 1.6rem;

                &::placeholder {
                    font-size: 1.6rem;
                }
            }
        }

        .desc {
            margin-bottom: 24px;
            width: 100%;
            height: 100px;

            .desc-input {
                padding: 10px 20px;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                border: 1px solid #ccc;
                font-size: 1.6rem;

                resize: none;

                &::placeholder {
                    font-size: 1.6rem;
                }

                &:focus {
                    outline: none;
                }
            }
        }

        .switch {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .MuiTypography-root {
                font-size: 1.6rem;
            }
        }

        .submit-button {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 50px;
            height: 50px;
            width: 100%;
            border-radius: 14px;
            border: 1px solid #ccc;
            background-color: #643aff;
            color: #000;

            .submit-desc {
                color: #fff;
                font-weight: 700;
                font-size: 1.6rem;
            }

            &:hover {
            }
        }
    }
`;

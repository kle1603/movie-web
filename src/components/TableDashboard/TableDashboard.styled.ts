import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const DivStyled = styled.div`
    padding-top: 120px;
    padding-bottom: 90px;

    width: 1340px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 48px);

    .title-wrapper {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            margin-left: 20px;
            font-size: 3rem;
            font-weight: 700;

            .MuiButtonBase-root {
                width: 300px;
            }
        }

        .button {
            margin-right: 20px;
            position: relative;
            overflow: hidden;
            height: 40px;
            width: 100px;
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

    .table-wrapper {
        box-shadow: #00000029 0px 0px 10px 0px;

        .table {
            .table-body {
                .MuiTypography-root {
                    font-size: 1.6rem;

                    display: -webkit-box;
                    -webkit-line-clamp: var(--line-clamp, 3);
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .desc {
                    width: 35%;
                }

                .image {
                    width: 20%;

                    .image-wrapper {
                        border: 1px solid #ccc;
                        height: 103px;

                        border-radius: 10px;
                        overflow: hidden;

                        .image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }

                .id {
                    padding: 16px 16px 16px 60px;
                    width: 15%;
                }

                .name {
                    width: 15%;
                }

                .action {
                    width: 15%;

                    .icon-wrapper {
                        border: 1px solid #ccc;

                        &:last-child {
                            margin: 0 0 0 10px;
                        }

                        .icon {
                            font-size: 2.4rem;
                        }
                    }
                }
            }

            .table-header {
                .MuiTypography-root {
                    font-size: 2rem;

                    display: -webkit-box;
                    -webkit-line-clamp: var(--line-clamp, 3);
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .id-col {
                    padding: 16px 16px 16px 60px;
                }
            }
        }
    }
`;

export const DialogStyled = styled(Dialog)`
    .MuiTypography-root {
        font-size: 3rem;
    }

    .MuiDialogContent-root {
        font-size: 2rem;
    }

    .dialog-cancel {
        margin-right: 10px;
        margin-bottom: 10px;
        width: 100px;
        height: 40px;
        font-size: 1.6rem;

        background-color: #f44336;
        color: #fff;
    }

    .dialog-ok {
        margin-right: 10px;
        margin-bottom: 10px;
        width: 100px;
        height: 40px;
        font-size: 1.6rem;

        background-color: #53d769;
        color: #fff;
    }
`;

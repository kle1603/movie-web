import styled from "styled-components";

export const StyledDiv = styled.div`
    position: relative;

    .background {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .MuiSkeleton-root {
        background-color: rgba(150, 150, 150, 0.11);
    }

    .content {
        position: absolute;
        top: 90%;
        left: 8%;
        transform: translate(-8%, -90%);
        /* max-width: 450px; */

        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        color: rgba(255, 255, 255, 0.8);

        .content__image-wrapper {
            margin-bottom: 20px;
            min-width: 340px;
            height: 110px;
            overflow: hidden;

            .content__image {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .content__title {
            display: flex;
            justify-content: center;
            align-items: center;

            .content__title-item {
                padding: 0 15px;
                font-size: 2rem;

                &:first-child {
                    border-radius: 999px;
                    border: 1px solid white;
                }
            }
        }

        .content__desc {
            padding-top: 20px;
            text-align: center;
        }

        .content__button-wrapper {
            padding-top: 27px;
            display: flex;
            justify-content: center;
            align-items: center;

            .content__button-first,
            .content__button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 206px;
                height: 54px;
                border-radius: 40px;
                cursor: pointer;

                .content__button-image {
                    width: 20px;
                    height: 20px;
                }

                .content__button-desc {
                    padding-left: 12px;
                }
            }

            .content__button {
                border: 1px solid rgba(255, 255, 255, 0.2);
                background: rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease-in-out;

                .content__button-desc {
                    color: #fff;
                    font-size: 2rem;
                    font-weight: 400;
                }

                &:hover {
                    background: rgba(200, 200, 200, 0.1);
                }
            }

            .content__button-first {
                margin-right: 21px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                background: rgba(255, 255, 255, 0.9);
                transition: all 0.3s ease-in-out;

                .content__button-desc {
                    color: #262626;
                    font-size: 2rem;
                    font-weight: 400;
                }

                &:hover {
                    background: rgba(200, 200, 200, 0.9);
                }
            }
        }
    }

    .button {
        position: absolute;
        display: flex;

        top: 93%;
        left: 94%;
        transform: translate(-94%, -93%);

        .icon__wrapper {
            margin: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            height: 54px;
            width: 54px;

            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            transition: all 0.3s ease-in-out;

            transform: scale(-1, 1);

            &:hover {
                background: rgba(255, 255, 255, 0.3);
            }

            .icon {
                font-size: 3rem;
                color: white;
            }
        }
    }

    .fade {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15, 15, 15, 0.6) 40%,
            rgb(15, 15, 15),
            rgb(15, 15, 15)
        );
    }
`;

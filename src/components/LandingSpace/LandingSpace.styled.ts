import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    position: relative;

    .background {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 450px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        color: rgba(255, 255, 255, 0.8);

        .content__image-wrapper {
            width: 380px;
            /* height: 160px; */
            overflow: hidden;

            .content__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
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
            font-size: 1.6rem;
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

    .fade {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15, 15, 15, 0.6) 40%,
            rgb(15, 15, 15),
            rgb(15, 15, 15)
        );
    }
`;

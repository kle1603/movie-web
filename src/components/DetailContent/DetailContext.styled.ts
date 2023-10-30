import styled from "@emotion/styled";

export const StyledDiv = styled.div`
    padding-top: 30px;

    width: 1340px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 48px);

    .content__desc {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.6rem;
    }

    .title {
        padding-top: 30px;
        font-size: 2.8rem;
        color: #fff;
    }

    .list {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;

        .item {
            display: flex;
            justify-content: center;
            align-items: center;

            .item__image {
                width: 60px;
                height: 60px;
                overflow: hidden;

                .image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .item__content {
                padding-left: 12px;

                .item__title {
                    color: #f9f9f9;
                    font-size: 1.8rem;
                }

                .item__desc {
                    color: #9ca4ab;
                    font-size: 1.4rem;
                }
            }
        }
    }

    .title__carousel {
        padding-top: 60px;
        font-size: 2.8rem;
        color: #fff;
    }

    .carousel {
        padding-top: 20px;
        cursor: pointer;

        &:hover .item {
            opacity: 0.6;
        }

        .item {
            display: block;
            width: 100%;
            height: 171px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            overflow: hidden;

            transform: scale(1);
            transition: all 0.3s ease-in-out;
            scroll-behavior: smooth;

            &:hover {
                opacity: 1;
                transform: translateY(-10px);
            }

            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

import styled from "styled-components";

export const StyledDiv = styled.div`
    padding-top: 64px;

    .container {
        width: 1340px;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(100% - 48px);

        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .title {
            padding-bottom: 19px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.8rem;
        }

        .company__desc,
        .help__desc {
            color: rgba(255, 255, 255, 0.5);
            font-size: 1.6rem;
            cursor: pointer;

            &:last-child {
                padding-top: 10px;
            }
        }
    }

    .view {
        .view__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 140px;
            height: 44px;
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            cursor: pointer;

            .view__desc {
                padding-right: 10px;
                color: rgba(255, 255, 255, 0.9);
                font-size: 1.8rem;
            }
        }
    }

    .social {
        .social__content {
            display: flex;
            align-items: center;
        }

        .social__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 44px;
            height: 44px;
            border-radius: 61px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
            cursor: pointer;

            &:first-child {
                margin-right: 14px;
            }
        }
    }

    .download {
        .download__wrapper {
            width: 150px;
            height: 48px;
            overflow: hidden;

            .download__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .divider {
        margin-top: 100px;
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .footer__link {
        padding: 24px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer__link-desc {
            display: flex;
            justify-content: center;
            align-items: center;

            color: rgba(255, 255, 255, 0.5);
            font-size: 1.6rem;

            &:not(:last-child) {
                padding-right: 40px;
            }
        }
    }

    .footer__image-wrapper {
        margin: 24px 0px;
        width: 120px;
        height: 27px;
        overflow: hidden;

        cursor: pointer;

        .footer__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

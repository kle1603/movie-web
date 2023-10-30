import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
    padding: 120px 0 40px 0;
    min-height: calc(100vh - 344px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgb(15, 15, 15, 1);

    .contact__heading {
        font-weight: 600;
        font-size: 5rem;
        line-height: 1.08;
        color: white;
    }

    .contact__desc {
        margin: 20px auto 0 auto;
        width: 436px;
        font-size: 1.6rem;
        line-height: 1.62;
        color: #676562;
    }

    .contact__form {
        margin-top: 50px;
    }

    .contact__form-group {
        display: flex;
        justify-content: center;
        column-gap: 30px;
    }

    .contact__form-group + .contact__form-group {
        margin-top: 24px;
    }

    .contact__form-textarea,
    .contact__form-input {
        padding: 22px 31px;
        background: #939393;
        outline: transparent;
        border: transparent;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.2;
        color: #fff;

        &::placeholder {
            color: #fff;
        }
    }

    .contact__form-input {
        min-width: 430px;
        height: 60px;
    }

    .contact__form-textarea {
        resize: none;
        width: 890px;
        height: 150px;
        max-height: 300px;
        cursor: auto;
    }

    .contact__form-submit {
        margin-top: 16px;
        outline: transparent;
        border: transparent;
    }

    .contact__form-submit:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    .button {
        display: inline-block;
        min-width: 158px;
        height: 62px;
        line-height: 62px;
        background: rgba(255, 255, 255, 0.2);
        font-weight: 500;
        font-size: 1.9rem;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            background: rgba(200, 200, 200, 0.2);
        }
    }
`;

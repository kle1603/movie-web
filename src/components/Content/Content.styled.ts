import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 1340px;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 48px);

    .content__header {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .MuiTypography-root {
            color: white;
            font-size: 2.8rem;
        }

        .button__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 120px;
            height: 30px;
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);

            cursor: pointer;

            .button__desc {
                color: white;
                font-size: 1.6rem;
            }

            .button__icon {
                margin-left: 6px;
                width: 6px;
                height: 11px;
            }
        }
    }
`;

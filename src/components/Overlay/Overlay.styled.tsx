import styled from 'styled-components';

export const Overlay = styled.div`
    .overlay {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.8);
        top: 0;
        -webkit-animation: fadein 0.3s linear forwards;
        animation: fadein 0.3s linear forwards;
    }

    @-webkit-keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

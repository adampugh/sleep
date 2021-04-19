import styled from 'styled-components';

export const ClearCloud = styled.div`
    .sun {
        color: #181c1d;
        background: #181c1d;
        position: absolute;
        width: 2.5em;
        margin: 0.8em;
        height: 2.5em;
        border-radius: 50%;
        box-shadow: 0 0 0 0.375em white;
    }

    .rays {
        position: relative;
        transform: translate(1.1em, -0.8em);
    }

    .ray {
        color: #181c1d;
        background: #181c1d;
        position: absolute;
        margin: 0.8em;
        width: 0.4em;
        height: 4.2em;
        box-shadow: 0 0.5em 0 0 white, 0 -0.5em 0 0 white;
    }

    .ray:nth-child(1) {
        animation: spin-0 10s infinite linear;
    }

    .ray:nth-child(2) {
        transform: rotate(45deg);
        animation: spin-45 10s infinite linear;
    }

    .ray:nth-child(3) {
        transform: rotate(90deg);
        animation: spin-90 10s infinite linear;
    }

    .ray:nth-child(4) {
        transform: rotate(135deg);
        animation: spin-135 10s infinite linear;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes spin-0 {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes spin-45 {
        100% {
            transform: rotate(405deg);
        }
    }
    @keyframes spin-90 {
        100% {
            transform: rotate(450deg);
        }
    }
    @keyframes spin-135 {
        100% {
            transform: rotate(495deg);
        }
    }
`;

import styled from 'styled-components';

export const RainCloud = styled.div`
    .icon {
        position: relative;
        display: inline-block;
        background-color: #181c1d;
        margin: 60px;
        width: 2em;
        height: 2em;
        font-size: 0.5em;
    }

    .cloud2 {
        color: #181c1d;
        background: #181c1d;
        position: absolute;
        width: 3.4875em;
        height: 3.4875em;
        border-radius: 50%;
        box-shadow: 2.0625em 0.9375em 0 -0.9375em, 0 0 0 0.375em white, 2.0625em 0.9375em 0 -0.5625em white;
    }

    .cloud2:after {
        color: #181c1d;
        background: #181c1d;
        content: '';
        position: absolute;
        bottom: 0;
        left: 1.8em;
        display: block;
        width: 2em;
        height: 1em;
        box-shadow: 0 0.4375em 0 -0.0625em white;
    }

    .thunder,
    .snow,
    .haze,
    .drizzle,
    .rain {
        transform: translate(1.3em, 2.2em);
        width: 2.8em;
        height: 2.5em;
        background: #181c1d;
        position: absolute;
    }

    .rain:after {
        content: '';
        position: absolute;
        display: block;
        z-index: 2;
        color: white;
        background: white;
        width: 0.3em;
        height: 1em;
        border-radius: 0.15em;
        transform: translate(0.4em, 0.2em) rotate(20deg);
        animation: rain 2s infinite ease-in-out;
        box-shadow: 0.6em 0.6em, 1.2em -0.2em, 1.2em 1.2em, 1.8em 0.2em;
    }

    @keyframes rain {
        0% {
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em rgba(255, 255, 255, 0.2),
                1.2em 1.2em rgba(255, 255, 255, 0.2), 1.8em 0.2em rgba(255, 255, 255, 0.2);
        }
        30% {
            background-color: white;
            box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em white, 1.2em 1.2em rgba(255, 255, 255, 0.2),
                1.8em 0.2em rgba(255, 255, 255, 0.2);
        }
        50% {
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0.6em 0.6em white, 1.2em -0.2em 0 rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2),
                1.8em 0.2em white;
        }
        80% {
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em white,
                1.8em 0.2em rgba(255, 255, 255, 0.2);
        }
        100% {
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em rgba(255, 255, 255, 0.2),
                1.2em 1.2em rgba(255, 255, 255, 0.2), 1.8em 0.2em rgba(255, 255, 255, 0.2);
        }
    }

    .bolt {
        z-index: 1;
        position: absolute;
        background: white;
        width: 2.5em;
        height: 2em;
        transform: translate(-0.1em, 0.2em) rotate(-45deg) scale(-0.8) skewX(-30deg);
        color: white;
        animation: lightning 5s infinite linear;
    }

    .bolt:before {
        content: '';
        z-index: 2;
        display: block;
        position: absolute;
        background: #181c1d;
        width: 1.3em;
        height: 1.3em;
        color: white;
        transform: translate(1.85em, 0.3em) rotate(45deg);
    }

    .bolt:after {
        content: '';
        position: absolute;
        display: block;
        z-index: 2;
        background: #181c1d;
        width: 1.3em;
        height: 1.3em;
        transform: translate(-0.65em, 0.3em) rotate(45deg);
    }

    .bolt:nth-child(2) {
        transform: translate(0.75em, 1.2em) scale(-0.3) rotate(-45deg) skewX(-30deg);
        animation: lightning 2s infinite linear;
    }

    @keyframes lightning {
        0% {
            background-color: white;
        }
        80% {
            background-color: rgba(255, 255, 255, 0.2);
        }
        85% {
            background-color: white;
        }
        90% {
            background-color: rgba(255, 255, 255, 0.2);
        }
        100% {
            background-color: white;
        }
    }

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

import styled from 'styled-components';

export const RainCloud = styled.div`
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
`;

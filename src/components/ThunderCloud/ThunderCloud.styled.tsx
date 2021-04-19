import styled from 'styled-components';

export const ThunderCloud = styled.div`
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
`;

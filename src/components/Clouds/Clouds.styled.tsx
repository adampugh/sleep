import styled from 'styled-components';

export const Clouds = styled.div`
    .icon {
        position: relative;
        display: inline-block;
        background-color: #181c1d;
        margin: 43px 41px 43px 27px;
        width: 2em;
        height: 2em;
        font-size: 0.5em;

        &:hover {
            cursor: pointer;
        }
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
`;

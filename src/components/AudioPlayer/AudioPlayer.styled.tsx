import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

export const AudioPlayerStyled = styled(AudioPlayer)`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #181c1d;

    .rhap_main.rhap_stacked {
        width: 600px;
        margin: 0 auto;
    }

    #rhap_current-time,
    .rhap_time.rhap_total-time {
        opacity: 0;
    }
`;

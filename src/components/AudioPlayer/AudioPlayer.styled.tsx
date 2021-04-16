import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

export const AudioPlayerStyled = styled(AudioPlayer)`
    position: absolute;
    bottom: 10px;
    width: 100%;
    background: #181c1d;
    // padding-left: 38px;

    .rhap_main.rhap_stacked {
        width: 600px;
        max-width: 100%;
        margin: 0 auto;
    }

    #rhap_current-time,
    .rhap_time.rhap_total-time {
        opacity: 0;
    }

    .rhap_additional-controls {
        display: none;
    }

    .rhap_controls-section {
        display: block !important;
    }

    .rhap_volume-controls {
        display: none;
    }

    .rhap_container {
        // padding-left: 15px !important;
    }
`;

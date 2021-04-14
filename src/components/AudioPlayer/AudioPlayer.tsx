import * as S from './AudioPlayer.styled';

interface AudioPlayerProps {
    audio: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio }) => {
    return (
        <S.AudioPlayerStyled
            autoPlay={false}
            src={audio}
            showSkipControls={true}
            showJumpControls={false}
            // onEnded={updateEpisode}
            // onClickNext={updateEpisode}
            // onClickPrevious={updateEpisode}
        />
    );
};

export default AudioPlayer;

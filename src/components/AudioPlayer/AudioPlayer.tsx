import * as S from './AudioPlayer.styled';

const AudioPlayer: React.FC = () => {
    return (
        <S.AudioPlayerStyled
            autoPlay={false}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            showSkipControls={true}
            showJumpControls={false}
            // onEnded={updateEpisode}
            // onClickNext={updateEpisode}
            // onClickPrevious={updateEpisode}
        />
    );
};

export default AudioPlayer;

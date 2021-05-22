import * as S from './AudioPlayer.styled';

interface AudioPlayerProps {
    audio: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio }) => (
    <S.AudioPlayerStyled autoPlay={false} src={audio} showSkipControls={true} showJumpControls={false} />
);

export default AudioPlayer;

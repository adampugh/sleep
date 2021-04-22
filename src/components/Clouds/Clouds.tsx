import RainCloud from '../RainCloud/RainCloud';
import ThunderCloud from '../ThunderCloud/ThunderCloud';
import ClearCloud from '../ClearCloud/ClearCloud';

import * as S from './Clouds.styled';
import { Cloud } from '../../types';

interface CloudProps {
    clouds: Cloud[];
    setAudio: (audio: string) => void;
}

const Clouds: React.FC<CloudProps> = ({ clouds, setAudio }) => (
    <S.Clouds>
        {clouds.map(({ id, audio }) => (
            <div key={id} className="icon" onClick={() => setAudio(audio)}>
                {id === 'rain' ? <RainCloud /> : id === 'thunder' ? <ThunderCloud /> : <ClearCloud />}
            </div>
        ))}
    </S.Clouds>
);

export default Clouds;

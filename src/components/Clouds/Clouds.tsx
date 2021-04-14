import { Cloud } from '../../types';

interface CloudProps {
    clouds: Cloud[];
    setAudio: (audio: string) => void;
}

const Clouds: React.FC<CloudProps> = ({ clouds, setAudio }) => {
    return (
        <div>
            {clouds.map(({ component, audio }) => (
                <div onClick={() => setAudio(audio)}>{component}</div>
            ))}
        </div>
    );
};

export default Clouds;

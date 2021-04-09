import { Cloud } from '../../types';

interface CloudProps {
    clouds: Cloud[];
    setAudio: any;
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

import { useState } from 'react';

import * as types from 'styled-components/cssprop';
import * as S from './App.styled';

import { Cloud } from '../types';

import Loading from '../components/Loading/Loading';
import TopBanner from '../components/TopBanner/TopBanner';
import RainCloud from '../components/RainCloud/RainCloud';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import Clouds from '../components/Clouds/Clouds';

const clouds: Cloud[] = [
    {
        audio: '123123',
        component: RainCloud,
    },
    {
        audio: '123123',
        component: RainCloud,
    },
];

const App: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [audio, setAudio] = useState('');

    return (
        <S.App>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <TopBanner />
                    <Clouds clouds={clouds} setAudio={setAudio} />
                    <RainCloud />
                    <AudioPlayer audio={audio} />
                </>
            )}
        </S.App>
    );
};

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line
import * as types from 'styled-components/cssprop';
import * as S from './App.styled';

import { Cloud, FetchedCloudData } from '../types';

import Loading from '../components/Loading/Loading';
import TopBanner from '../components/TopBanner/TopBanner';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import Clouds from '../components/Clouds/Clouds';

const initialCloudState: Cloud[] = [
    {
        id: 'rain',
        audio: '',
    },
    {
        id: 'thunder',
        audio: '',
    },
    {
        id: 'beach',
        audio: '',
    },
];

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [audio, setAudio] = useState('');
    const [clouds, setClouds] = useState(initialCloudState);

    useEffect(() => {
        getAudioFiles();
        setLoading(false);
    }, []);

    const getAudioFiles = async () => {
        const updatedCloudsObject = await Promise.all(
            clouds.map(async (cloud) => {
                const {
                    data: { audio },
                } = await axios.get<FetchedCloudData>('');
                return { ...cloud, audio };
            })
        );
        setClouds(updatedCloudsObject);
    };

    return (
        <S.App>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <TopBanner />
                    <Clouds clouds={clouds} setAudio={setAudio} />
                    <AudioPlayer audio={audio} />
                </>
            )}
        </S.App>
    );
};

export default App;

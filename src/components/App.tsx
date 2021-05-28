import { useState, useEffect } from 'react';
import firebase from '../firebase';
// allows storage to be accessed via firebase.storage
import 'firebase/storage';

// eslint-disable-next-line
import * as types from 'styled-components/cssprop';
import * as S from './App.styled';

import { Cloud } from '../types';

import Loading from '../components/Loading/Loading';
import TopBanner from '../components/TopBanner/TopBanner';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import Clouds from '../components/Clouds/Clouds';
import Overlay from '../components/Overlay/Overlay';
import { Loading } from './Loading/Loading.styled';

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
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        const getAudioFiles = async () => {
            const updatedCloudsObject = await Promise.all(
                clouds.map(async ({ id }) => {
                    const storage = firebase.storage();
                    const pathReference = storage.ref(`${id}.mp3`);
                    return await pathReference.getDownloadURL().then((url) => ({ id, audio: url }));
                })
            );
            setClouds(updatedCloudsObject);
        };
        getAudioFiles();
        setLoading(false);
    }, [clouds]);

    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseMove = () => {
        setInactive(false);
        clearTimeout(timeout);
        // set fade in and out
        timeout = setTimeout(() => setInactive(true), 60000);
    };

    return (
        <S.App onMouseMove={handleMouseMove}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <TopBanner />
                    <Clouds clouds={clouds} setAudio={setAudio} />
                    <AudioPlayer audio={audio} />
                    {inactive && <Overlay />}
                </>
            )}
        </S.App>
    );
};

export default App;

import { useState } from 'react';

import * as types from 'styled-components/cssprop';
import * as S from './App.styled';

// import Loading from '../components/Loading/Loading';
import TopBanner from '../components/TopBanner/TopBanner';
import RainCloud from '../components/RainCloud/RainCloud';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [audio, setAudio] = useState('');

    return (
        <S.App>
            {/* { loading ? <Loading /> : <div></div> } */}
            <TopBanner />
            <RainCloud />
            <AudioPlayer />
        </S.App>
    );
};

export default App;

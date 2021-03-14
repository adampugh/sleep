import { useState } from 'react';

import * as types from 'styled-components/cssprop';
import * as S from './App.styled';

// import Loading from '../components/Loading/Loading';
import RainCloud from '../components/RainCloud/RainCloud';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    return (
        <S.App>
            {/* { loading ? <Loading /> : <div></div> } */}
            <RainCloud />
        </S.App>
    );
};

export default App;

import { useState } from 'react';

import Loading from '../components/loading/loading';
import * as S from './App.styled';

const App: React.FC = () => {
	const [loading, setLoading] = useState(true)

	return (
		<S.App>
			{ loading ? <Loading /> : <div></div> }
		</S.App>
	)
}

export default App;

import * as S from './TopBanner.styled';

import SleepIcon from '../../assets/sleep logo.png';

const TopBanner: React.FC = () => (
    <S.TopBanner className="top-banner">
        <div className="top-banner__logo">
            <img className="top-banner__logo__img" src={SleepIcon} alt="sleep brand" />
        </div>
    </S.TopBanner>
);

export default TopBanner;

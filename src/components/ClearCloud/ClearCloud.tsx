import * as S from './ClearCloud.styled';

const ClearCloud: React.FC = () => (
    <S.ClearCloud>
        <div className="rays">
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
        </div>
        <div className="sun"></div>
    </S.ClearCloud>
);

export default ClearCloud;

import * as S from './RainCloud.styled';

const RainCloud: React.FC = () => {
    return (
        <S.RainCloud>
            <div className="icon">
                <div className="cloud2"></div>
                <div className="rain"></div>
            </div>

            <div className="icon">
                <div className="cloud2"></div>
                <div className="thunder">
                    <div className="bolt"></div>
                    <div className="bolt"></div>
                </div>
            </div>

            <div className="icon">
                <div className="rays">
                    <div className="ray"></div>
                    <div className="ray"></div>
                    <div className="ray"></div>
                    <div className="ray"></div>
                </div>
                <div className="sun"></div>
            </div>
        </S.RainCloud>
    );
};

export default RainCloud;

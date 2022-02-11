interface IGameHeader {
  stage: number;
  time: number;
  score: number;
}

const GameHeader: React.FC<IGameHeader> = ({ stage, time, score }) => {
  return (
    <header>
      스테이지: {stage}, 남은 시간: {time}, 점수: {score}
    </header>
  );
};

export default GameHeader;

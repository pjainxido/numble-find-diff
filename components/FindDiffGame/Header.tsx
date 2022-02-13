interface IHeader {
  stage: number;
  time: number;
  score: number;
}

const Header: React.FC<IHeader> = ({ stage, time, score }) => {
  return (
    <header>
      스테이지: {stage}, 남은 시간: {time}, 점수: {score}
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import GameHeader from "./GameHeader";

import styles from "./FindDiffGame.module.css";

interface IFindDiffGame {
  width: number;
  height: number;
  timePenalty: number;
  timePerStage: number;
}

const FindDiffGame: React.FC<IFindDiffGame> = ({ width, height, timePenalty, timePerStage }) => {
  const [stage, setStage] = useState<number>(4);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(0);
  const [blockArray, setBlockArray] = useState<string[]>([]);
  const [blockSize, setBlockSize] = useState<number>(0);

  const generateBlock= (blockCount: number) => {
    const color = getRandomColor();
    let tmp: string[] = Array.from({ length: blockCount }, () => color);

    function randomInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const answerIndex = randomInteger(0, blockCount - 1);
    setAnswer(answerIndex);
    tmp[answerIndex] = getRandomColor() ;
    console.log(tmp);


    setBlockArray(tmp);
  };

  useEffect(() => {
   
    setTimer(timePerStage);
    const blockRowCount = Math.round((stage + 0.5) / 2) + 1;

    setBlockSize(width / blockRowCount - 4);

    const totalBlockCount = Math.pow(blockRowCount, 2);
    generateBlock(totalBlockCount);
  }, [stage]);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <GameHeader stage={stage} time={timer} score={score} />
      <div className={styles.wrapper}>
        {blockArray.map((color, index) => (
          <div
            key={index}
            style={{ width: blockSize, margin: 2, height: blockSize, backgroundColor: color }}
          />
        ))}
      </div>
    </>
  );
};

export default FindDiffGame;

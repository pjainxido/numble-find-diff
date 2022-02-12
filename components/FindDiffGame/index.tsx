import { useState, useEffect, useReducer } from "react";
import { gameReducer, initialState } from "../../reducer";
import GameHeader from "./Header";
import Block from "./Block";

import styles from "./FindDiffGame.module.css";

interface IFindDiffGame {
  boardSide: number;
  timePenalty: number;
  timePerStage: number;
}

const FindDiffGame: React.FC<IFindDiffGame> = ({ boardSide, timePenalty, timePerStage }) => {
  const [{ isPlaying, stage, score, time, answer, defaultColor, answerColor }, dispatch] =
    useReducer(gameReducer, initialState);

  const blockRowCount = Math.round((stage + 0.5) / 2) + 1;
  const totalBlockCount = Math.pow(blockRowCount, 2);
  const blockSideLength = boardSide / blockRowCount - 4;

  const decreaseTime = (input: number) => {
    dispatch({ type: "TIME_DECREASE", time: input });
  };

  useEffect(() => {
    dispatch({ type: "START_STAGE", time: timePerStage });
    const timer = setInterval(() => {
      if (isPlaying) decreaseTime(1);
    }, 1000);
    return () => clearInterval(timer);
  }, [stage]);

  useEffect(() => {
    if (time < 1) {
      dispatch({ type: "GAME_OVER" });
      console.log("false");
    }
  }, [time]);

  const onSelect = (index: number) => {
    if (index === answer) {
      dispatch({ type: "CLEAR_STAGE" });
    } else decreaseTime(timePenalty);
  };

  return (
    <>
      <GameHeader stage={stage} time={time} score={score} />
      <div className={styles.wrapper}>
        {Array.from({ length: totalBlockCount }).map((_, index) => (
          <Block
            key={index}
            id={index}
            side={blockSideLength}
            color={index === answer ? answerColor : defaultColor}
            onSelect={onSelect}
          />
        ))}
      </div>
    </>
  );
};

export default FindDiffGame;

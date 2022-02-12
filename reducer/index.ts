import { getRandomInteger, getRandomPairColor } from "../lib/index";

type State = {
  isPlaying: boolean;
  stage: number;
  score: number;
  time: number;
  answer: number;
  defaultColor: string;
  answerColor: string;
};

type Action =
  | { type: "START_STAGE"; time: number }
  | { type: "CLEAR_STAGE" }
  | { type: "TIME_DECREASE"; time: number }
  | { type: "GAME_START" }
  | { type: "GAME_OVER" };

const initialState: State = {
  isPlaying: false,
  stage: 1,
  score: 0,
  time: 15,
  answer: 0,
  defaultColor: "",
  answerColor: "",
};

const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START_STAGE":
      const blockCount = Math.pow(Math.round((state.stage + 0.5) / 2) + 1, 2);
      const answerIndex = getRandomInteger(0, blockCount - 1);
      const { defaultColor, answerColor } = getRandomPairColor(1);
      return {
        ...state,
        isPlaying: true,
        answer: answerIndex,
        time: action.time,
        defaultColor: defaultColor,
        answerColor: answerColor,
      };
    case "CLEAR_STAGE":
      return {
        ...state,
        stage: state.stage + 1,
        score: state.score + Math.pow(state.stage, 3) * state.time,
      };
    case "TIME_DECREASE":
      return { ...state, time: state.time < action.time ? 0 : state.time - action.time };
    case "GAME_START":
      return { ...initialState, isPlaying: true };
    case "GAME_OVER":
      return { ...state, isPlaying: false };

    default:
      throw new Error("Action type error");
  }
};

export { gameReducer, initialState };

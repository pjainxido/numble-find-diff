function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusOrMinus() {
  return Math.random() < 0.5 ? -1 : 1;
}

function getRandomPairColor(stage: number) {
  const baseRgb: number[] = Array.from({ length: 3 }, () => getRandomInteger(0, 255));
  const matchDiff = Math.round(stage*0.2 + 0.5 / 2);
  const answerRgb: number[] = baseRgb.map((item) => {
    return item + plusOrMinus() * Math.floor(item / matchDiff);
  });

  const defaultColor: string = `rgb(${baseRgb[0]},${baseRgb[0]},${baseRgb[2]})`;
  const answerColor: string = `rgb(${answerRgb[0]},${answerRgb[0]},${answerRgb[2]})`;

  return { defaultColor, answerColor };
}

export { getRandomInteger, getRandomPairColor };

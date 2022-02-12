function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPairColor(diff: number) {
  const baseNumber: number = Math.random();
  const defaultColor: string = "#" + Math.floor(baseNumber * 16777215).toString(16);
  const answerColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return { defaultColor, answerColor };
}

export { getRandomInteger, getRandomPairColor};

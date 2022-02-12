function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPairColor(diff: number) {
  const baseNumber: number = Math.random();
  const defaultColor: string = `rgb(${getRandomInteger(0, 255)},${getRandomInteger(
    0,
    255
  )},${getRandomInteger(0, 255)})`;
  const answerColor: string = `rgb(${getRandomInteger(0, 255)},${getRandomInteger(
    0,
    255
  )},${getRandomInteger(0, 255)})`;

  return { defaultColor, answerColor };
}

export { getRandomInteger, getRandomPairColor };

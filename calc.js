import config from "./config.js";

const reps = (week) => {
  let percentages = [];
  let sets = [];
  switch (week) {
    case "5":
      percentages = [0.4, 0.5, 0.6, 0.65, 0.75, 0.85, 0.65];
      sets = [5, 5, 3, 5, 5, "5+", 5];
      break;
    case "3":
      percentages = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.7];
      sets = [5, 5, 3, 3, 3, "3+", 5];
      break;
    case "1":
      percentages = [0.4, 0.5, 0.6, 0.75, 0.85, 0.95, 0.75];
      sets = [5, 5, 3, 5, 3, "1+", 5];
      break;
    case "D":
      percentages = [0.4, 0.5, 0.6];
      sets = [5, 5, 5];
      break;
    default:
      break;
  }
  return { percentages, sets };
};

const round25 = (val) => Math.ceil(val / 2.5) * 2.5;

const calcPlates = (totalWeight) => {
  if (totalWeight <= config.bar) {
    return ["no plates"];
  }
  let oneSide = (totalWeight - config.bar) / 2;
  const result = [];
  for (let i = 0; i < config.plates.length; i++) {
    const plate = config.plates[i];
    if (oneSide < plate.weight) {
      continue;
    } else {
      let count = 0;
      let available = plate.count;
      while (count < Math.floor(oneSide / plate.weight)) {
        count++;
        result.push(plate.weight);
      }
      oneSide = oneSide % plate.weight;
    }
  }
  return result;
};

export const sets = (trainingWeight, week) => {
  const weight = round25(trainingWeight * 0.9);
  const { percentages, sets } = reps(week);
  return percentages.reduce((acc, p, i) => {
    const w = round25(weight * p);
    return [
      ...acc,
      {
        weight: w,
        reps: sets[i],
        plates: calcPlates(w),
      },
    ];
  }, []);
};

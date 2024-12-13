let yearlyExpences = [
  1500, 100, 390, 80000, 1980, 90, 15010, 1400, 300, 290, 4000, 1250,
];

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let Date1 = [];
for (let i = 0; i < expencesExamples.length; i++) {
  let yearlyExpences = new Object();
  for (let j = 0; j < expencesExamples[i].yearlyExpences.length; j++) {
    if (expencesExamples[i].yearlyExpences[j] <= 1000) {
      yearlyExpences[j] = expencesExamples[i].yearlyExpences[j];
    }
  }
  Date1.push(yearlyExpences);
}

const monthNames = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

Date1.forEach((array) => {
  for (let i = 0; i < 12; i++) {
    const date = new Date(2023, i);
    const monthName = monthNames[date.getMonth()];

    if (array[i] !== undefined) {
      array[monthName] = array[i];
      delete array[i];
    }
  }
});

console.log(Date1);

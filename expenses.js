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

function sum(yearlyExpences) {
  let sumOfYearlyExpences = 0;
  for (j = 0; j < yearlyExpences.length; j++) {
    if (yearlyExpences[j] > 1000) {
      sumOfYearlyExpences += yearlyExpences[j];
    }
  }
  return sumOfYearlyExpences;
}

console.log(sum(yearlyExpences));

testData = [40590, 148200, 25709];

testData.forEach((sumOfOneYear, indexOfYear) => {
  if (sum(expencesExamples[indexOfYear].yearlyExpences) === sumOfOneYear) {
    console.log(
      `Результат выполнения функции ${sum(
        expencesExamples[indexOfYear].yearlyExpences
      )} для года с индексом ${indexOfYear} равен расчетному ${sumOfOneYear}.`
    );
  }
});

let Date = new Object();
yearlyExpences.forEach((expencesOfMonth, indexOfMonth) => {
  if (expencesOfMonth <= 1000) {
    Date[indexOfMonth] = expencesOfMonth;
  }
  return Date;
});

console.log(Date);

function changeIndexToMonth(object) {
  if (object[0]) {
    object["январь"] = object[0];
    delete object[0];
  }
  if (object[1]) {
    object["февраль"] = object[1];
    delete object[1];
  }
  if (object[2]) {
    object["март"] = object[2];
    delete object[2];
  }
  if (object[3]) {
    object["апрель"] = object[3];
    delete object[3];
  }
  if (object[4]) {
    object["май"] = object[4];
    delete object[4];
  }
  if (object[5]) {
    object["июнь"] = object[5];
    delete object[5];
  }
  if (object[6]) {
    object["июль"] = object[6];
    delete object[6];
  }
  if (object[7]) {
    object["август"] = object[7];
    delete object[7];
  }
  if (object[8]) {
    object["сентябрь"] = object[8];
    delete object[8];
  }
  if (object[9]) {
    object["октябрь"] = object[9];
    delete object[9];
  }
  if (object[10]) {
    object["ноябрь"] = object[10];
    delete object[10];
  }
  if (object[11]) {
    object["декабрь"] = object[11];
    delete object[11];
  }
  return object;
}

console.log(changeIndexToMonth(Date));

// сначала расписала как отфильтровать месяца с затратами менее 1000 для expencesExamples,
// поняла, что намудрила, написала для обычного массива, но хочу оставить здесь, вдруг пригодиться

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

Date1.forEach((array) => {
  if (array[0]) {
    array["январь"] = array[0];
    delete array[0];
  }
  if (array[1]) {
    array["февраль"] = array[1];
    delete array[1];
  }
  if (array[2]) {
    array["март"] = array[2];
    delete array[2];
  }
  if (array[3]) {
    array["апрель"] = array[3];
    delete array[3];
  }
  if (array[4]) {
    array["май"] = array[4];
    delete array[4];
  }
  if (array[5]) {
    array["июнь"] = array[5];
    delete array[5];
  }
  if (array[6]) {
    array["июль"] = array[6];
    delete array[6];
  }
  if (array[7]) {
    array["август"] = array[7];
    delete array[7];
  }
  if (array[8]) {
    array["сентябрь"] = array[8];
    delete array[8];
  }
  if (array[9]) {
    array["октябрь"] = array[9];
    delete array[9];
  }
  if (array[10]) {
    array["ноябрь"] = array[10];
    delete array[10];
  }
  if (array[11]) {
    array["декабрь"] = array[11];
    delete array[11];
  }
});

console.log(Date1);

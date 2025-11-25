const currentYear = new Date().getFullYear();
const findTheOldest = function (people) {
  return people.sort((a, b) => {
    if (a.yearOfDeath === undefined) a.yearOfDeath = currentYear;
    if (b.yearOfDeath === undefined) b.yearOfDeath = currentYear;
    bage = b.yearOfDeath - b.yearOfBirth;
    aage = a.yearOfDeath - a.yearOfBirth;
    return bage - aage;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;

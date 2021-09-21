const findTheOldest = function (people) {
    const currentyYear = (new Date()).getFullYear();
    const ageOf = ({ yearOfBirth, yearOfDeath = currentyYear }) => yearOfDeath - yearOfBirth;
    const oldest = (person, other) => ageOf(person) > ageOf(other) ? person : other;

    return people.reduce(oldest);
};

// Do not edit below this line
module.exports = findTheOldest;

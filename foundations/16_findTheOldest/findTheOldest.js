const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldest = people.reduce((oldestPerson, person) => {
        const oldestAge = (oldestPerson.yearOfDeath ?? currentYear) - oldestPerson.yearOfBirth;
        const currentAge = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;

        return currentAge > oldestAge ? person : oldestPerson;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

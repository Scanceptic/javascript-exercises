const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    //console.log(currentYear)
    const peopleWithAges = people.map((person) => {
        let age = 0;
        if (person.yearOfDeath) {
            //console.log("Year of Death found")
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            //console.log("No Year of Death found")
            age = currentYear - person.yearOfBirth;
        };
        person.age = age;
        //console.log(person);
        return { ...person, age: age };
    });
    console.log(peopleWithAges);
    let maxAge = 0;
    let oldestPerson = undefined;

    peopleWithAges.map((person) => {
        if (person.age > maxAge) {
            maxAge = person.age;
            oldestPerson = person;
        };
    });
    console.log(maxAge);
    console.log("Oldest Person: "+oldestPerson);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

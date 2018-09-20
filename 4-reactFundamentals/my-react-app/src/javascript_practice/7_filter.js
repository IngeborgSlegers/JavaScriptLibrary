const instructors = [
    {name: 'Aaron', specialty: 'Entomology', medals: 7 },
    {name: 'Carolyn', specialty: 'Fencing', medals: 5 },
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 8},
    {name: 'Paul', specialty: 'Tuvan Throat Singin', medals: 4},
    {name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2},
    {name: 'Tom', specialty: 'Chemistry', medals: 3}
]

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);
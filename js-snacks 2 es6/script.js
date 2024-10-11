const teams = [
    {name: "Real Madrid", points: 0, fouls: 0},
    {name: "Bayern Munich", points: 0, fouls: 0},
    {name: "Inter", points: 0, fouls: 0}
];

// Generate a random numbers
teams.forEach(team => {
    team.points = Math.floor(Math.random() * 100);
    team.fouls = Math.floor(Math.random() * 50);
});

const newArray = teams.map(team => {
    return { name: team.name, points: team.points, fouls: team.fouls };
});

//Print 
console.log(newArray)


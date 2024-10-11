// Array objects
const bike = [
    {name: "bike 1"},
    {name: "bike 2"},
    {name: "bike 3"}
];

// Light bike
let light = bike[0]

for (let i= 1; i < bike.length; i++) {
    if (bike[i].name.length < light.name.length) {
        light = bike[i]
    }
}

console.log(light)


// Array objects
const bike = [
    { name: "bike 1", weight: 7.5 },
    { name: "bike 2", weight: 6.8 },
    { name: "bike 3", weight: 8.2 }
];

// Light bike
let light = bike[0]

for (let i= 1; i < bike.length; i++) {
    if (bike[i].weight < light.weight) {
        light = bike[i]
    }
}

console.log(light)


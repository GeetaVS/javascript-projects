// Declare and assign the variables below
let nameOfTheSpaceShuttle = "Determination";

console.log(nameOfTheSpaceShuttle);
let shuttleSpeed =17500;
console.log(shuttleSpeed);
let distanceToMars =225000000;
console.log(distanceToMars);
let distanceToMoon =384400;
console.log(distanceToMoon);
let milesPerKiloMeter =0.621;
console.log(milesPerKiloMeter);


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfTheSpaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKiloMeter);
// Calculate a space mission below
let milesToMars = distanceToMars*milesPerKiloMeter;

// Print the results of the space mission calculations below
console.log(milesToMars);
let hoursToGetToMars;
hoursToGetToMars= milesToMars/shuttleSpeed;
console.log(hoursToGetToMars);
let totaldaysToMars;
totaldaysToMars= hoursToGetToMars /24;
console.log(totaldaysToMars);
console.log(nameOfTheSpaceShuttle , "will take", totaldaysToMars, "days to reach Mars");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoon*milesPerKiloMeter;
console.log(milesToMoon);
let hoursToGetToMoon;
hoursToGetToMoon= milesToMoon/shuttleSpeed;
console.log(hoursToGetToMoon);
let totaldaysToMoon;
totaldaysToMoon= hoursToGetToMoon /24;
console.log(totaldaysToMoon);
// Print the results of the trip to the moon below
console.log(nameOfTheSpaceShuttle , "will take", totaldaysToMoon, "days to reach Moon");





console.log("Painting walls");

//no arguments
const paint = function () {
    console.log("The wall has been painted red");
};

paint();

//single argument
const paint1 = function (item) {
    console.log("The wall has been painted " + item);
};

const color1 = "red";
const color2 = "green";

paint1(color1);
paint1(color2);
//er gebeurt niets als er geen argument wordt gebruikt.

//multiple arguments
const wall = function (item1, item2) {
    console.log("The " + item1 + "wall has been painted " + item2);
};

const compass1 = "north";
const compass2 = "south";
const compass3 = "orange";
const compass4 = "grey";

wall(compass1, compass3);
wall(compass2, compass4);
//6 yes the order of arguments does matter when calling the function
//7 dan veranderd ook item1 en item2, dus eerst compass 3 en 4 en dan 1 en 2
//8 dan veranderd er niets




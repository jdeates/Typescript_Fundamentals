
// Utility Function - logs the return value of the corresponding Drill
function log(drillNum: number, input: any) {
    console.log(`\n Drill ${drillNum}: ${input}`);
}

//                     --- --- --- Explicit Types --- --- ---
// Drill 1
// Objective: implement Typing

// function greet() {
//     const x = "Hello"
//     const y = "World"
//
//     return `${x} ${y}`
// }
// log(1, greet());


// Drill 2
// Objective: implement Typing

// function doABarrelRoll(shouldI) {
//     const rotate = 180
//     const rotateMore = 180
//     const noRotate = 0
//
//     if(shouldI) {
//         return rotate + rotateMore
//     } else {
//         return noRotate
//     }
// }
// log(2, doABarrelRoll(false));
// log(2, doABarrelRoll(true));


// Drill 3
// Objective: Implement Union Types
// Example: let tomato: null | boolean

// function aFull360() {
//     let anEntire = "0%"
//
//     while(anEntire < 360) {
//         anEntire++;
//     }
//
//     anEntire = anEntire + "%"
//
//     return anEntire as string;
// }
// log(3, aFull360())

// Drill 4
// Objective: Implement enum and Typing
// enum response {
//     strongly_disagree = -2,
//     disagree,
//     neutral,
//     agree,
//     strongly_agree = "Yes"
// }
// function spaceGame(opinion: response){
//     switch (opinion) {
//         case -2:
//         case -1:
//             return 'Try again'
//         case 0:
//             return 'Hmm?'
//         case 1:
//             return 'Almost'
//         case "Yes":
//             return 'Correct!'
//         default:
//             return 'N/A';
//     }
// }
// log(4, spaceGame(response.strongly_disagree));
// log(4, spaceGame(response.agree));


//                     --- --- --- Interface & Type Alias --- --- ---
// Drill 5
// Objective: Refactor and implement type alias.

// interface fox = {name, height, weight};
// type message = {
// error: string
// }
// const starFox = {name: 'Star Fox', height: 'Short', weight: 20}
// function legitimateStarFoxChecker(notStarFox) {
//
//     const hasSameNameAsStarFox = starFox.name === notStarFox.name;
//
//     const hasSameWeightAndHeightAsStarFox = (starFox.height === notStarFox.height || starFox.height === notStarFox.weight);
//
//     if (hasSameNameAsStarFox) {
//         return {error: "No one can share a name with Star Fox", isStarFox: false, isOriginal: false}
//     } else if(hasSameWeightAndHeightAsStarFox) {
//     return {error: "Star Fox is the size of a human, impossible", isStarFox: false};
//     }
//     else{
//         return {error: "Not Star Fox", isStarFox: false}
//     }
// }
// log(5, legitimateStarFoxChecker({name: 'Star Fox', height: 'Short', weight: 20}))
// log(5, legitimateStarFoxChecker({name: 'Philip', height: 'Short', weight: 50}))
// log(5, legitimateStarFoxChecker({name: 'Other Philip', height: 'Tall', weight: 70}))


// Drill 6
// Objective: Refactor and implement interfaces & literal types

// interface System = {readonly name, version, weight}
// interface System = {name, version, weight, height}
// const gameSystem = {name: 'Nitendo64', version: 3.3, weight: 1}
// const gameSystemAsWell = {name: 'Xbox 1', version: 1.0, weight: 1}
// function consoleEvaluator(system) {
//     const name: string = system.name;
//     let consoles = ['Nintendo 64', "Xbox 1", "PS3", "PS2"]
//
//     switch (name) {
//         case consoles[0]:
//             system.name = 'NotNitendo64'
//             system.weight = false
//             return system.name
//         case[1]:
//             system.height = 'Fridge';
//             return system.height;
//         case[2]:
//             system.version = 'Five'
//             return system.version;
//         default:
//             const newConsole: typeof name = system.name + 2;
//             system.name = newConsole + '1'
//             return system
//     }
// }
// log(6, consoleEvaluator(gameSystem))
// log(6, consoleEvaluator(gameSystemAsWell))



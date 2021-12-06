
// Utility Function - logs the return value of the corresponding Drill
import {create} from "domain";

function log(drillNum: number, input: any) {
    console.log(`\n Drill ${drillNum}: ${input}`);
}

//                     --- --- --- Explicit Types --- --- ---
// Drill 1
// Objective: implement Typing

// function greet(): string {
//     const x: string = "Hello"
//     const y: string = "World";
//
//     return `${x} ${y}`
// }
// log(1, greet());
//
//
// // Drill 2
// // Objective: implement Typing
//
// function doABarrelRoll(shouldI: boolean): number {
//     const rotate: number = 180
//     const rotateMore: number = 180
//     const noRotate: number = 0
//
//     if(shouldI) {
//         return rotate + rotateMore
//     } else {
//         return noRotate
//     }
// }
// log(2, doABarrelRoll(false));
// log(2, doABarrelRoll(true));
//
//
// // Drill 3
// // Objective: Refactor & Implement Union Types
// // Example: let tomato: null | boolean
//
// function aFull360(): string {
//     let anEntire: number | string = 0
//
//     while(anEntire < 360) {
//         anEntire++;
//     }
//
//     anEntire = anEntire + "%"
//
//     return anEntire;
// }
// log(3, aFull360())
//
// // Drill 4
// // Objective: Implement enum & Typing
//
// enum response {
//     strongly_disagree = -2,
//     disagree,
//     neutral,
//     agree,
//     strongly_agree = "Yes"
// }
// function spaceGame(opinion: response): string{
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
//             return "N/A"
//     }
// }
// log(4, spaceGame(response.strongly_disagree));
// log(4, spaceGame(response.agree));
// log(4, spaceGame(response.strongly_agree));


//                     --- --- --- Interface & Type Alias --- --- ---
// Drill 5
// Objective: Refactor and implement type alias.

interface fox {
    name: string,
    height: string,
    weight: number
}
type message = {
    error: string,
    isStarFox: boolean,
    isOriginal?: boolean
}
const starFox: fox =  {name: 'Star Fox', height: 'Short', weight: 20}

function legitimateStarFoxChecker(notStarFox: fox): message {
    const hasSameNameAsStarFox: boolean = starFox.name === notStarFox.name;
    const hasSameWeightAndHeightAsStarFox: boolean = (starFox.height === notStarFox.height || starFox.weight === notStarFox.weight);
    let Message: message = {error: "Not Star Fox", isStarFox: false};

    if (hasSameNameAsStarFox) {
        Message = {error: "No one can share a name with Star Fox", isStarFox: false, isOriginal: false}
    }
    if(hasSameWeightAndHeightAsStarFox) {
        Message = {error: "Star Fox is the size of a human, impossible", isStarFox: false};
    }

    return Message
}
log(5, legitimateStarFoxChecker({name: 'Star Fox', height: 'Short', weight: 20}).error)
log(5, legitimateStarFoxChecker({name: 'Philip', height: 'Short', weight: 50}).error)
log(5, legitimateStarFoxChecker({name: 'Other Philip', height: 'Tall', weight: 70}).error)


// Drill 6
// Objective: Refactor and implement interfaces & literal types
enum consoles {
    'Nintendo 64',
    'NotNitendo64',
    "Xbox 1",
    "PS3",
    "PS2"
}
interface System {
    name: consoles,
    version: number | string,
    weight: number | boolean
}
interface System {
    height?: number | string
}

const gameSystem: System = {name: consoles["Nintendo 64"], version: 3.3, weight: 1}
const gameSystemAsWell: System = {name: consoles["Xbox 1"], version: 1.0, weight: 1}
const gameSystemAsWella: System = {name: consoles["PS2"], version: 21.0, weight: 1}

function consoleEvaluator(system: System) {
    const name: consoles = system.name;

    switch (name) {
        case 0:
            system.name = consoles.NotNitendo64
            system.weight = false
            return system.name
        case 1:
            system.height = 'Fridge';
            return system.name;
        case 2:
            system.version = 'Five'
            return system.name;
        default:
            const newConsole: typeof name = system.name;
            system.name = newConsole - 1
            return consoles[system.name]
    }
}
log(6, consoleEvaluator(gameSystem))
log(6, consoleEvaluator(gameSystemAsWell))
log(6, consoleEvaluator(gameSystemAsWella))


//                     --- --- --- Generic / Optional Functions --- --- ---
// Drill 7
// Objective: Implement & Type Functions
// type Props = {
//     firstArg: number | string,
//     secondArg: number | string,
//     thirdArg?: string
// }

function comparor<Type>(firstArg: Type, secondArg: Type, thirdArg?: Type): boolean {
    // const {firstArg, secondArg, thirdArg} = props;

    if(firstArg === secondArg || thirdArg && (firstArg === thirdArg))
        return true;

    return false;
}
// log(7, comparor({firstArg: 'kevin', secondArg: 'josh'}));
// log(7, comparor({firstArg: 'kevin', secondArg: 'josh', thirdArg: 'william'}));
// log(7, comparor({firstArg: 3, secondArg: 4}));
log(7, comparor('kevin', 'josh'));
log(7, comparor('kevin', 'josh', 'william'));
log(7, comparor(3, 4));

//                     --- --- --- Utility Types --- --- ---
// Drill 8
// Objective: Implement Partial Typing & Required Typing
// Example: Required<Type> && Partial<Type>

interface animal {
    name: string,
    weight: number,
    fur: boolean
}
interface mammal extends animal {
    legs?: number,
    arms?: number,
    bipedal?: boolean,
}
let fish = {name: 'Bass', weight: 30}
let phil = {name: 'Phil', legs: 2, arms: 2, bipedal: true}

function isFishorPhil(creature: Partial<mammal>){
    if(creature.name === "Phil" && typeof creature.bipedal === 'boolean' && creature.bipedal){
        return 'It is him'
    }
    return "It isn't"
}
log(8, isFishorPhil(fish));
log(8, isFishorPhil(phil));


// Drill 9
// Objective: Implement Intrinsic String Manipulation Types
// Uppercase<StringType> && Lowercase<StringType>

enum languages {
    en= "Bye!",
    fr= "AU REVIOR!",
    sp= "adiós!",
    po= "tchau"
}
function goodbye() {
    const english: Uncapitalize<languages.en> = 'bye!';
    const french: Lowercase<languages.fr> = "au revior!";
    const spanish: Uppercase<languages.sp> = "ADIÓS!";
    const portuguese: Capitalize<languages.po> = "Tchau";

    return `${english} ${french} ${spanish} ${portuguese}`
}
log(9, goodbye());
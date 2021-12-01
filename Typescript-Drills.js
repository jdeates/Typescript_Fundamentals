
//                     --- --- --- Explicit Types --- --- ---
// Drill 0
function log(drillNum, input){
    console.log(`Drill ${drillNum}: ${input}`);
}

// Drill 1
function greet() {
    const x = "Hello"
    const y = "World"

    return `${x} ${y}`
}

log(1, greet());


// Drill 2
function doABarrelRoll(shouldI) {
    const rotate = 180
    const rotateMore = 180
    const noRotate = 0

    if(shouldI) {
        return rotate + rotateMore
    } else {
        return noRotate
    }
}

log(2, doABarrelRoll(false));
log(2, doABarrelRoll(true));

//                     --- --- --- Interface Types --- --- ---
// Drill 3
// const fox = {name, height, weight};
const starFox = {name: 'Star Fox', height: 'Short', weight: 20}

function legitimateStarFoxChecker(notStarFox) {

    const hasSameNameAsStarFox = starFox.name === notStarFox.name;

    const hasSameWeightAndHeightAsStarFox = (starFox.height === notStarFox.height || starFox.height === notStarFox.weight);

    if (hasSameNameAsStarFox) {
        return {error: "No one can share a name with Star Fox", isStarFox: false}
    } else if(hasSameWeightAndHeightAsStarFox) {
        return {error: "Star Fox is the size of a human, impossible", isStarFox: false, isOriginal: false}
    }
    else{
        return {error: "Not Star Fox", isStarFox: false}
    }
}

log(3, legitimateStarFoxChecker({name: 'Star Fox', height: 'Short', weight: 20}).error)
log(3, legitimateStarFoxChecker({name: 'Philip', height: 'Short', weight: 50}).error)
log(3, legitimateStarFoxChecker({name: 'Other Philip', height: 'Tall', weight: 70}).error)


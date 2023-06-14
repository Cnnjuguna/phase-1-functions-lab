// Code your solution in this file!


    // let distance = 42;
    // let blockDistance = someValue - distance;
    
function distanceFromHqInBlocks(someValue){
    if (someValue > 42)
        return someValue - 42
    else if (someValue < 42){
        return  42 - someValue

    }
}



console.log (distanceFromHqInBlocks(24))

function distanceFromHqInFeet(someValue){
    
    return distanceFromHqInBlocks(someValue) * 264

}
  
console.log (distanceFromHqInFeet(50))

    
    
    

    


function distanceTravelledInFeet(start, destination){
    if (destination < start){
        return ((start - destination) * 264)

    } else {
        return((destination - start) * 264)
    }

    
}



function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
//     let feetTravelled = (destination - start) * 264;
    const firstFourHundred = 400;
    let freeSample = 0;
    let overTwoThousand = 25;
    let waiverRange = feetTravelled - firstFourHundred;

    if (feetTravelled > 2500){
        return 'cannot travel that far';

    } else if (feetTravelled > 2000){
        return overTwoThousand;

    } else if (feetTravelled < 400) {
        return freeSample;

    } else if (feetTravelled > 400 || feetTravelled === 2000) {
        return waiverRange * 0.02

    }


}
    
        
   
console.log(calculatesFarePrice(50, 58))

//     } else if (feetTravelled < 42) {
//          = (start - destination) * 264;
//         

//     }


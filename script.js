// console.log("HOMEWORK")

// // Exercise 1
// console.log("Exercise 1")
// let pi = Math.PI;
// let radius = 20;
// let areaOfCircle = (pi * radius * radius);
// console.log("Result:",areaOfCircle);

// // Exercise 2
// console.log("Exercise 2")
// let price = 119.95;
// let tax = 119.95 * (5 / 100);
// let totalPhones = 30;
// let fullPrice = (price + tax);
// let totalPrice = (totalPhones * fullPrice);
// console.log("Total price for 30 phones: $",totalPrice);


// Exercise 3


// let chineseZodiac = function (animalResult) {
//     if(animalResult()===false)  
//     {alert("Enter valid format for year");}    
//     else {alert("Your chinese Zodiac sign is " + animalResult());}};
// let animalResult = function () 
// {
//     if(year%12===0) {return "Rat";} 
//     else if (year%12===1) {return "Ox";}
//     else if (year%12===2) {return "Tiger";}
//     else if (year%12===3) {return "Rabbit";}
//     else if (year%12===4) {return "Dragon";}
//     else if (year%12===5) {return "Snake";}
//     else if (year%12===6) {return "Horse";}
//     else if (year%12===7) {return "Goat";}
//     else if (year%12===8) {return "Monkey";}
//     else if (year%12===9) {return "Rooster";}
//     else if (year%12===10) {return "Dog";}
//     else if (year%12===11) {return "Pig";} 
// };
// year = prompt("Enter a year to see which Cinese Zodiac sign you are:");
// chineseZodiac (animalResult)



console.log("The script is connected!")

let day = 5;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thuesday");
        break;
    case 3:
        console.log("Wednesday"); 
        break; 
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturdayy");
        break;
    case 7:
        console.log("Sunday");
        break;        
    default: 
        console.log("Not valid day");
        break;     
}

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Thuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("Not valid day");
}




let freeDay = "Monday";

switch(freeDay) {
    case "Monday":
    case "Wednesday":    
        console.log("We have JS classes");
        break;
    case "Thuesday":
    case "Thursday": 
    case "Friday":
        console.log("We are free today");
        break;
    case "Saturday":
    case "Sunday":    
        console.log("It's weekend"); 
        break;
    default: 
        console.log("Not valid day");
        break;     
}



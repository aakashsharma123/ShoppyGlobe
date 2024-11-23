const numbers = [1,2,3,4,5,6,7,8,9,10];

const totalNumber = numbers.reduce((accumalotor , currentvalue) => {
        return accumalotor + currentvalue
},0);

console.log("The Total value of the numbers is " , totalNumber);

///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let sumFuji = 0
for (let i = 0; i<fujiAcres.length; i++) {
    sumFuji += fujiAcres[i]
}

//console.log(sumFuji)

let sumGala = 0
for (let i = 0; i<galaAcres.length; i++) {
    sumGala += galaAcres[i]
}

//console.log(sumGala)

let sumPink = 0
for (let i = 0; i<pinkAcres.length; i++) {
    sumPink += pinkAcres[i]
}

//console.log(sumPink)

var totalAcres = sumFuji + sumGala + sumPink

console.log(totalAcres)

// COMMENTS: I looked up how to get the sum of an array of numbers, then I calculated the sum of each array and at the end
// I added all those arrays together to get the total number. 



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
// const galaAcres = [5, 2, 4, 3, 6, 2, 4]
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55

var averageDailyAcres = totalAcres / 7

console.log(averageDailyAcres)

//COMMENTS: I divided the total number of acres by 7 days a week in order to get the average number of acres per day.



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

 while (acresLeft > 0) {
     acresLeft -= averageDailyAcres
 days += 1
 }

console.log(days)

//COMMENT: This loop will start at 174 and stop once acresLeft equals 1 because of the while statement being 'acresLeft > 0'. For every subtraction of averageDailyAcres
//from acresLeft, it will add 1 in increments to the days variable. According to the output, there will be 20 days left until there are 0 acresLeft. When you actually calculate it,
//by the 19th day, there are 5 acresLeft. So on the 20th day, those last 5 acres are subtracted by the 9 averageDailyAcres, making acresLeft now 0 (technically a negative number), 
//which stops the while loop and leavs the days variable at a value of 20. 


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

 let fujiTons = []
 let galaTons = []
 let pinkTons = []

// const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
// const galaAcres = [5, 2, 4, 3, 6, 2, 4]
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55


let multiple = 6.5
for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(multiple * fujiAcres[i])
}

console.log(fujiTons)

for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(multiple * galaAcres[i])
}

console.log(galaTons)

for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(multiple * pinkAcres[i])
}

console.log(pinkTons)

// COMMENTS: I know I'm supposed to multiply 6.5 by each value in the original "const ___Acres" arrays and push the new values into the "let __Tons" arrays. My original code was 
// let multiple = 6.5
// for (let i = 0; i < fujiAcres.length; i++) {
//    fujiAcres[i] = multiple * fujiAcres[i]
//    fujiTons.push(fujiAcres)
//}
// BUT this was printing the new arrays 7 times because thats how many values are in the original array. I'm not really sure WHY this was happening. 
// To fix it, I decided to try to push the formula into the new array so that there would be only 1 array being printed. 



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 


// COMMENTS: First, I will use the same formula I used in problem 1 to get the sum of each array. 

//let sumFuji = 0
// for (let i = 0; i<fujiAcres.length; i++) {
//     sumFuji += fujiAcres[i]



let sumFujiTons = 0
for (let i = 0; i < fujiTons.length; i++) {
    sumFujiTons += fujiTons[i]
}




let sumGalaTons = 0
for (let i = 0; i < galaTons.length; i++) {
    sumGalaTons += galaTons[i]
}


let sumPinkTons = 0
for (let i = 0; i < pinkTons.length; i++) {
    sumPinkTons += pinkTons[i]
}

//COMMENTS: The sums in tons are as follows: sumFujiTons = 97.5, sumGalaTons = 169, sumpinkTons = 143. Now, to get the sum in pounds, I will multiply each of the tons by 2000 
// because there are 2000 pounds in a ton. 


let fujiPounds = (sumFujiTons * 2000)
console.log(fujiPounds)

let galaPounds = (sumGalaTons * 2000)
console.log(galaPounds)

let pinkPounds = (sumPinkTons * 2000)
console.log(pinkPounds)





// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds * fujiPrice)/100
console.log(fujiProfit)

let galaProfit = (galaPounds * galaPrice)/100
console.log(galaProfit)

let pinkProfit = (pinkPounds * pinkPrice)/100
console.log(pinkProfit)

// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55

//COMMENTS: To get the profit of each variety, I multiplied the price of each by the amount in pounds. That gave me the profit in cents, so I divided that by 100 to get the profit in dollars 
// because there are 100 cents in a dollar. 






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE//

// COMMENTS: To get the totalProfit, I just made a variable for it where within it, I added the individual profits I obtained in the last problem. 

 var totalProfit = fujiProfit + galaProfit + pinkProfit
 console.log(totalProfit)
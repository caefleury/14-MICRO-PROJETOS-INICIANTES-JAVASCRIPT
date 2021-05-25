// FizzBuzz

/* Fizz buzz is a group word game for children to teach them about division.
[1] Players take turns to count incrementally, 
replacing any number divisible by three with the word "fizz", 
and any number divisible by five with the word "buzz".
*/



function FizzBuzz(max){
    var myArray = []
    if(typeof max == "number"){
        for(i = 1; i <= max; i++){
            if (i % 3 == 0 && i % 5 == 0 ){
                myArray.push("FizzBuzz")
                continue
            } else if (i % 3 == 0){
                myArray.push("Fizz")
                continue
            } else if (i % 5 == 0){
                myArray.push("Buzz")
                continue
            } else {
                myArray.push(i)
                continue
            }
        }
    } else {
        return console.log("Not a number")
    }
    return console.log(myArray)
}

FizzBuzz(15)
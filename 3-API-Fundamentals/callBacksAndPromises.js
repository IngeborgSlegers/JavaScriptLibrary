// Callbacks

function first(){
    setTimeout(function(){
    console.log('this is the first function')
    }, 500)
}

function second(){
    console.log('this is the second function')
}

first()
second()

// callbacks are used to make things happen in a specific order
// for example, if I have two functions, and the second one relies on 
// information from the first, I want to only invoke the secon function
// after the first is done.

function secondFunction() {
    console.log("second function")
}

function firstFunction(callback) {
    setTimeout(function() {
        console.log('first function')
        callback()
    }, 500)
}

firstFunction(secondFunction)


//Promises
// Similar to callbacks - in that we can use them to make things happen in order asynchronously
// 3 status: pending, resolved, rejected
// instead of calling other functions as parameters, they do things, and then either resolve or reject
// Our next step is using ".then"
// Clearner syntac than callbacks

let one = new Promise(res => setTimeout(res("cat"), 500))

one
.then(
    (cat) => console.log("two")
)
.catch(
    err => console.log(err)
)

let concert = (boughtTickets) => new Promise(
    (resolve, reject) => {
        boughtTickets ? resolve("you can go to the concert!!") :
        reject("sorry, you need a ticket to get in!")
    }
)

concert(true)
.then(res => console.log(res))
.catch(rej => console.log("error: ", err))
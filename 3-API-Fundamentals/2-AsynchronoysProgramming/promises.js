let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (true) {
            resolve('success');
        } else {
            reject('failure :(');
        }
    }, 3000);
})

promise
    .then(newResult => {
        return newResult + ' we are returning from out first .then'
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

console.log('this code is after our promise & .then chain!');

//Prints:
// this code is after our promise & .then chain!
// (wait for 3 seconds)
// success we are returning from out first .then
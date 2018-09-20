class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back,' + this.name);
    }
    //Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
}

class TrialUser extends User {
    trialEnding() {
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

//Instance of User class
var anonDude = new User ("Anonymous");
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser {
    constructor(reason) {
        this.reason = reason;
        this.type = "Banned"
    }
    message(){
        console.log('You have been banned')
    }
}

var userOne = new BannedUser ("One");
userOne.message();

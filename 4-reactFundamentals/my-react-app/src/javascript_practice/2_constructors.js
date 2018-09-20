/*
Try writing a Player class with three properties of name, number, and average points. 
Or write a car class with make, model, and year.
*/

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let carOne = new Car("Volkswagen", "Tiguan", 2010);
console.log(carOne.make);
console.log(carOne.model);
console.log(carOne.year);
console.log(carOne);

class Book {
    constructor(author, title, genre) {
        this.author = author;
        this.title = title;
        this.genre = genre;
    }
}

let bestBook = new Book("Neil Gaiman", "Stardust", "fantasy");
console.log(bestBook.author);
console.log(bestBook.title);
console.log(bestBook.genre);
console.log(bestBook);
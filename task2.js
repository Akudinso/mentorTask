
//codebase example of instance method
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Instance method
    getCarDetails() {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getCarDetails());  // "Toyota Corolla"


//codebase example of a class method

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Instance method
    getCarDetails() {
        return `${this.make} ${this.model}`;
    }

    // Static method
    static getTotalCars() {
        return 100;  // Example of a static method that doesn't rely on instance data
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getCarDetails());  // "Toyota Corolla"

// Static method is accessed via the class, not an instance
console.log(Car.getTotalCars());  // 100



//Visibilty: Public method
// all methods are public by default unless specified otherwise.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Public method
    getCarDetails() {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getCarDetails());  // Output: "Toyota Corolla"



// Visibility: Private method
// You can make a method private by prefixing the method name with #

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Public method
    getCarDetails() {
        return this.#generateDetails();  // Calling a private method
    }

    // Private method (using #)
    #generateDetails() {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getCarDetails());  // Output: "Toyota Corolla"

// Error: Private method '#generateDetails' is not accessible outside the class
console.log(myCar.#generateDetails());  // Uncaught SyntaxError: Private field '#generateDetails' must be declared in an enclosing class

  





// Setters and getters
  
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter method
    get name() {
        return this._name;
    }

    // Setter method
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log('Name cannot be empty');
        }
    }

    // Getter method for age
    get age() {
        return this._age;
    }

    // Setter method for age
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.log('Age cannot be negative');
        }
    }
}

const person = new Person('John', 30);

console.log(person.name); // "John" (Accessing via getter)
person.name = 'Mike';     // Setting new name via setter
console.log(person.name); // "Mike" (After setter)

console.log(person.age);  // "30" (Accessing via getter)
person.age = 35;          // Setting new age via setter
console.log(person.age);  // "35" (After setter)
  
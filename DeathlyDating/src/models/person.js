/*
 * Class to describe a single Movie
 */

 /*
 Name,
 Picture,
 Age,
 Gender
 */

export class Person {
    constructor(firstName, lastName, img, age, gender, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.img = img;
        this.age = age;
        this.gender = gender;
        this.id = id;
    }

    getImg() {
        return this.img;
    }

    getFirstName() {
        return this.firstName;
    }

    
    getLastName() {
        return this.lastName;
    }

    getAge() {
        return this.age;
    }

    getId() {
        return this.id;
    }

    getGender() {
        return this.gender;
    }
}
/*
 * Class to describe a single Movie
 */

 /*
 Name,
 Picture,
 Age,
 Gender
 */

import bios from '../models/bios';


const houses = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'];
const houseImages = [require('../resources/gryffindor.png'), require('../resources/hufflepuff.png'), require('../resources/ravenclaw.png'), require('../resources/slytherin.png')];

export class Person {
    constructor(firstName, lastName, img, age, gender, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.img = img;
        this.age = age;
        this.gender = gender;
        this.id = id;
        this.bio = bios[Math.floor(Math.random() * bios.length)];
        let hogHouse = Math.floor(Math.random() * houses.length);
        this.house = houses[hogHouse];
        this.houseImg = houseImages[hogHouse];
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
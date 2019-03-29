/*
 * Class to describe a single Movie
 */

 /*
 Name,
 Picture,
 Age,
 Gender
 */

const samples = [
    'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend.',
    'Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying.',
    'The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.',
    'Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.'
];

export class Person {
    constructor(firstName, lastName, img, age, gender, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.img = img;
        this.age = age;
        this.gender = gender;
        this.id = id;
        this.bio = samples[this.age % 4]
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
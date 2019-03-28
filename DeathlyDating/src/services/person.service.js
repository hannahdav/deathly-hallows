//-------------------------------------------------------------------
//
// The purpose of this class is to provide a single location that the
// rest of the application can use to obtain URL routes for working with
// the backend API.
//
//-------------------------------------------------------------------
import apiService from './api.service';
import { Person } from '../models/person';

let PersonService = class PersonService {
	constructor() {
	}
    
    getPersonByGender(gender) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPersonByGender(gender))
            .then((response) => response.json())
            .then((response) => {
                let person = new Person(response[0].name.first, response[0].name.last, response[0].picture.large, response[0].dob.age, response[0].gender, response[0].id.value);
                resolve(person);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        })
    }

    getRandomPerson() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPerson())
            .then((response) => response.json())
            .then((response) => {
                let person = new Person(response[0].name.first, response[0].name.last, response[0].picture.large, response[0].dob.age, response[0].gender, response[0].id.value);
                resolve(person);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        })
    }

    getRandomPeople() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPeople())
            .then((response) => response.json())
            .then((response) => {
                let people = [];
                response.results.forEach(element => {
                    people.push(new Person(element.name.first, element.name.last, element.picture.large, element.dob.age, element.gender, element.id.value));
                    resolve(people);
                });
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        });
    }

    getPeopleByGender(gender) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPeopleByGender(gender))
            .then((response) => response.json())
            .then((response) => {
                let people = [];
                response.results.forEach(element => {
                    people.push(new Person(element.name.first, element.name.last, element.picture.large, element.dob.age, element.gender, element.id.value));
                    resolve(people);
                });
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        });
    }
};

// Create a Singleton
const personService = new PersonService();
export default personService;
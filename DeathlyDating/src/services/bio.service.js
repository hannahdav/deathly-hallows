import apiService from './api.service';
import { Person } from '../models/person';

let PersonService = class PersonService {
	constructor() {
	}
    
    getKanye(gender) {
        return new Promise((resolve, reject) => {
            fetch(apiService.fetchSomeKanye(gender))
            .then((response) => response.json())
            .then((response) => {
                console.error(response)
                let quote = response.quote;
                resolve(quote);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        })
    }

    getTrump(gender) {
        return new Promise((resolve, reject) => {
            fetch(apiService.fetchSomeTrump(gender))
            .then((response) => response.json())
            .then((response) => {
                console.error(response)
                let quote = response.message;
                resolve(quote);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            })
        })
    }

};

// Create a Singleton
const personService = new PersonService();
export default personService;
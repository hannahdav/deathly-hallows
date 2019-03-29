// 4d9e5edefb2bfa09a78f459a991f8a9f

let ApiService = class ApiService {
	constructor() {
		this.apiProtocol = 'https:';
    this.apiHost = 'randomuser.me/api';
    this.kanyeHost = 'api.kanye.rest';
    this.trumpHost = 'api.whatdoestrumpthink.com/api';
	}

	/*
	* Utility methods/properties
	*/
	get apiLocation() {
    return `${this.apiProtocol}//${this.apiHost}`;
  }

  getPersonByGender(gender) {
    return `${this.apiLocation}?gender=${gender}&nat=US`;
  }

  getPerson(){
    return `${this.apiLocation}`;
  }   

  getPeopleByGender(gender) {
    return `${this.apiLocation}?results=50&gender=${gender}&nat=US`;
  }

  getPeople() {
    return `${this.apiLocation}?results=50`;
  }

  get fetchSomeKanye() {
    return `${this.apiProtocol}//${this.kanyeHost}`;
  }

  get fetchSomeTrump() {
    return `${this.apiProtocol}//${this.trumpHost}/v1/quotes/random`;
  }
}

// Create a Singleton
const apiService = new ApiService();
export default apiService;
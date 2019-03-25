// 4d9e5edefb2bfa09a78f459a991f8a9f

let ApiService = class ApiService {
	constructor() {
		this.apiProtocol = 'https:';
    this.apiHost = 'randomuser.me//api';
	}

	/*
	* Utility methods/properties
	*/
	get apiLocation() {
    return `${this.apiProtocol}//${this.apiHost}`;
  }

  getPersonByGender(gender) {
    return `${this.apiLocation}//?gender=${gender}`;
  }

  getPerson(){
    return `${this.apiLocation}`;
  }   
}

// Create a Singleton
const apiService = new ApiService();
export default apiService;
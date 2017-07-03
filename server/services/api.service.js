'use strict';

export default class ApiService {

    constructor() {

    }

    static async test(data) {
        return new Promise(function(resolve, reject) {
          // Do something with data, ex. check credentials etc.
          setTimeout( () => {
            resolve({ success:true })
          }, 2000);
        });
    }
}

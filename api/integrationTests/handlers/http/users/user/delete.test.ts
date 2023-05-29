import axios from 'axios';

const endpoint = 'http://localhost:3000/dev/users';

describe('Get an Account with valid ID', () => {
    let response: {status: any, data: {}};
 
     beforeAll(async() => {
         response = await axios.delete(`${endpoint}/5`);
     }); 
 
     it('should return a status of 204(no Content)', () => {
         expect(response.status).toBe(204);
     });
 })
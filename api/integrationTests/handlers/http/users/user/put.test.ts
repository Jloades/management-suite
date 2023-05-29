import axios from 'axios';

const endpoint = 'http://localhost:3000/dev/users';

describe('Get an Account with valid ID', () => {
   let response: {status: any, data: {}};

   const body = { "id": 5, "name": 'test', "address": '123 testy St', "phone": '123-5325', "email": 'test@example.com' } 

    beforeAll(async() => {
        response = await axios.put(`${endpoint}/5`,body );
    }); 

    it('should return a status of 204(no Content)', () => {
        expect(response.status).toBe(204);
    });
})
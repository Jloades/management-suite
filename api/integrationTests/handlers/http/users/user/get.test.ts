import axios from 'axios';

const endpoint = 'http://localhost:3000/dev/users';

describe('Get an Account with valid ID', () => {
   let response: {status: any, data: {}};

   const expected = {results: { id: 5, name: 'John Bones', address: '123 alsotest St', phone: '555-6345', email: 'john.bones@example.com' } }

    beforeAll(async() => {
        response = await axios.get(`${endpoint}/5`);
    }); 

    it('should return a status of 200(OK)', () => {
        expect(response.status).toBe(200);
    });

    it('should return the correct data', () => {
        expect(response.data).toStrictEqual(expected);
    })
})
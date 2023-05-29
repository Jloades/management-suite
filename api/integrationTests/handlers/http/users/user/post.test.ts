import axios from 'axios';

const endpoint = 'http://localhost:3000/dev/users';

describe('Get an Account with valid ID', () => {
   let response: {status: any, data: {}};

   const body = { "id": 7, "name": 'test', "address": '123 testy St', "phone": '123-5325', "email": 'test@example.com' } 
   const expected = {"user": { "id": 7, "name": 'test', "address": '123 testy St', "phone": '123-5325', "email": 'test@example.com' } }

    beforeAll(async() => {
        response = await axios.post(endpoint,body );
    }); 

    it('should return a status of 201(created)', () => {
        expect(response.status).toBe(201);
    });

    it('should return new user',() =>{
        expect(response.data).toStrictEqual(expected);
    } )
})
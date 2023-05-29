import axios, { AxiosResponse } from 'axios';

const endpoint = 'http://localhost:3000/dev/users';

describe('Get an Account', () => {
   const ACCOUNT_ID = '5'
   let response: AxiosResponse<any>;

    beforeAll(async() => {
        response = await axios.get(`${endpoint}/${ACCOUNT_ID}`);
    }); 

    it('should get an account by ID', () => {
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        // Add additional assertions to verify the account details
      });
})
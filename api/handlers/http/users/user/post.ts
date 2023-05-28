import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { created, badRequest } from '../../httpResponses';
import { createUser } from '../../../../repositories/account';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {

    if (!event.body) {
        return badRequest('Request body is required.');
    }

    const requestBody = JSON.parse(event.body);

    const { accountId, name,address,phone, email } = requestBody;
    
    const newUser = await createUser(accountId, name, address, phone, email );

    return created({ user: newUser });
  } catch (error) {
    return badRequest(error.message);
  }
};

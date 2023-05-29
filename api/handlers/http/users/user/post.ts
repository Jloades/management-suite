import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { created, badRequest } from '../../httpResponses';
import { createUser } from '../../../../repositories/user';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (!event.body) {
        return badRequest('Request body is required.');
    }

    const requestBody = JSON.parse(event.body);

    const { name,address,phone, email } = requestBody;
    
    const newUser = await createUser(name, address, phone, email );

    return created({ user: newUser });
};

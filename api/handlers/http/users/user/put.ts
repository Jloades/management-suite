import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { badRequest, noContent, notFound } from '../../httpResponses';
import { updateUser } from '../../../../repositories/user';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const userId: number | undefined = event.pathParameters?.userId ? Number(event.pathParameters.userId) : undefined;

  if (!userId || !event.body) {
    return badRequest('Request missing Information');
  }

  const requestBody = JSON.parse(event.body);

  const { name,address,phone, email } = requestBody;

  try{
    const updatedUser = await updateUser(userId, name, address, phone, email);
    return noContent(updatedUser);
  }
  catch (error) {
    return notFound();
  }
  
};
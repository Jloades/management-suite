import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { getUsers } from '../../../repositories/account';
import { found } from '../httpResponses';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const accounts = await getUsers();
    return found({ results: accounts });
  } catch (err) {
    throw new Error(err.message);
  }
};
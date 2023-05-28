import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { found } from '../../httpResponses';
import { getUser } from '../../../../repositories/user';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const userId: number | undefined = event.pathParameters?.userId ? Number(event.pathParameters.userId) : undefined;

  if (!userId) {
    throw new Error('Account ID Required');
  }

  const account = await getUser(userId);

  return found({ results: account });
};
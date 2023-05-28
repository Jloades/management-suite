import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { found } from '../../httpResponses';
import { getAccountDetails } from '../../../../repositories/account';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const accountId: number | undefined = event.pathParameters?.accountId ? Number(event.pathParameters.accountId) : undefined;

  if (!accountId) {
    throw new Error('Account ID Required');
  }

  const account = await getAccountDetails(accountId);

  return found({ results: account });
};
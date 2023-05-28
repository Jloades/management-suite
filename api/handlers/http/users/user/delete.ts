import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { noContent, notFound } from '../../httpResponses';
import { deleteAccount } from '../../../../repositories/account';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const accountId: number | undefined = event.pathParameters?.accountId
    ? Number(event.pathParameters.accountId)
    : undefined;

  if (!accountId) {
    throw new Error('Account ID Required');
  }

  const deleted = await deleteAccount(accountId);

  if (deleted) {
    return noContent();
  } else {
    return notFound();
  }
};

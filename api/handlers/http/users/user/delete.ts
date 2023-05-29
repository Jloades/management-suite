import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { noContent, notFound } from '../../httpResponses';
import { deleteAccount } from '../../../../repositories/user';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userId: number | undefined = event.pathParameters?.userId
    ? Number(event.pathParameters.userId)
    : undefined;

  if (!userId) {
    throw new Error('User ID Required');
  }

  const deleted = await deleteAccount(userId);

  if (deleted) {
    return noContent();
  } else {
    return notFound();
  }
};

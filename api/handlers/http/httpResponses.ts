import type { APIGatewayProxyResult } from 'aws-lambda'

export const found = (body: unknown, headers = {}): APIGatewayProxyResult => ({
    statusCode: 200,
    headers,
    body: JSON.stringify(body),
});
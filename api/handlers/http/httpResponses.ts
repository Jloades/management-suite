import type { APIGatewayProxyResult } from 'aws-lambda'

export const found = (body: unknown, headers = {}): APIGatewayProxyResult => ({
    statusCode: 200,
    headers,
    body: JSON.stringify(body),
});

export const created = (body: unknown, headers = {}): APIGatewayProxyResult => ({
    statusCode: 201,
    headers,
    body: JSON.stringify(body),
});

export const badRequest = (message:string): APIGatewayProxyResult => ({
    statusCode: 400,
    body: JSON.stringify({message}),
})

export const noContent = (body: unknown): APIGatewayProxyResult => ({
    statusCode: 204,
    body: JSON.stringify(body),
});
export const notFound = (message = 'No resource found with this ID'): APIGatewayProxyResult => ({
    statusCode: 404,
    body:JSON.stringify({message})
});
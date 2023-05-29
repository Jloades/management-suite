"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.noContent = exports.badRequest = exports.created = exports.found = void 0;
const found = (body, headers = {}) => ({
    statusCode: 200,
    headers,
    body: JSON.stringify(body),
});
exports.found = found;
const created = (body, headers = {}) => ({
    statusCode: 201,
    headers,
    body: JSON.stringify(body),
});
exports.created = created;
const badRequest = (message) => ({
    statusCode: 400,
    body: JSON.stringify({ message }),
});
exports.badRequest = badRequest;
const noContent = (body) => ({
    statusCode: 204,
    body: JSON.stringify(body),
});
exports.noContent = noContent;
const notFound = (message = 'No resource found with this ID') => ({
    statusCode: 404,
    body: JSON.stringify({ message })
});
exports.notFound = notFound;

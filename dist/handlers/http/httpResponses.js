"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.noContent = exports.badRequest = exports.created = exports.found = void 0;
exports.found = (body, headers = {}) => ({
    statusCode: 200,
    headers,
    body: JSON.stringify(body),
});
exports.created = (body, headers = {}) => ({
    statusCode: 201,
    headers,
    body: JSON.stringify(body),
});
exports.badRequest = (message) => ({
    statusCode: 400,
    body: JSON.stringify({ message }),
});
exports.noContent = () => ({
    statusCode: 204,
    body: ''
});
exports.notFound = (message = 'No resource found with this ID') => ({
    statusCode: 404,
    body: JSON.stringify({ message })
});

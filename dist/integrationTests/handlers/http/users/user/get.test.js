"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const endpoint = 'http://localhost:3000/dev/users';
describe('Get an Account with valid ID', () => {
    let response;
    const expected = { results: { id: 5, name: 'John Bones', address: '123 alsotest St', phone: '555-6345', email: 'john.bones@example.com' } };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield axios_1.default.get(`${endpoint}/5`);
    }));
    it('should return a status of 200(OK)', () => {
        expect(response.status).toBe(200);
    });
    it('should return the correct data', () => {
        expect(response.data).toStrictEqual(expected);
    });
});
describe('Get an Account with invalid ID', () => {
    let response;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield axios_1.default.get(`${endpoint}/9`);
    }));
    it('should return a status of 404(Not Found)', () => {
        expect(response.status).toBe(404);
    });
});

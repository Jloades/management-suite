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
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("../../../../../handlers/http/users/user/get");
describe('Get an Account', () => {
    const ACCOUNT_ID = '5';
    let response;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield get_1.handler(5);
    }));
    it('should return the correct response code', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(response.status).toBe(200);
    }));
    it('should return an account ID', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(response.data.id).toBe(5);
    }));
    it('should return an account name', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(response.data.name).toBe('John Bones');
    }));
    it('should return an account email', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(response.data.email).toBe('john.bones@example.com');
    }));
});

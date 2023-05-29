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
exports.handler = void 0;
const httpResponses_1 = require("../../httpResponses");
const user_1 = require("../../../../repositories/user");
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!event.body) {
            return httpResponses_1.badRequest('Request body is required.');
        }
        const requestBody = JSON.parse(event.body);
        const { accountId, name, address, phone, email } = requestBody;
        const newUser = yield user_1.createUser(accountId, name, address, phone, email);
        return httpResponses_1.created({ user: newUser });
    }
    catch (error) {
        return httpResponses_1.badRequest(error.message);
    }
});

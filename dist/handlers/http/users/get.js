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
const user_1 = require("../../../repositories/user");
const httpResponses_1 = require("../httpResponses");
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield user_1.getUsers();
        return httpResponses_1.found({ results: accounts });
    }
    catch (err) {
        throw new Error(err.message);
    }
});

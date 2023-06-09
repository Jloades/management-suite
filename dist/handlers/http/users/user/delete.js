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
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = ((_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.userId)
        ? Number(event.pathParameters.userId)
        : undefined;
    if (!userId) {
        throw new Error('User ID Required');
    }
    const deleted = yield (0, user_1.deleteAccount)(userId);
    if (deleted) {
        return (0, httpResponses_1.noContent)({ results: deleted });
    }
    else {
        return (0, httpResponses_1.notFound)();
    }
});
exports.handler = handler;

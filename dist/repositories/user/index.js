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
exports.deleteAccount = exports.createUser = exports.getUsers = exports.updateUser = exports.getUser = void 0;
const accounts = [
    { id: 1, name: 'John Doe', address: '123 test St', phone: '555-1234', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', address: '456 test St', phone: '555-5678', email: 'jane.smith@example.com' },
    { id: 3, name: 'John Joe', address: '123 Main St', phone: '555-1263', email: 'john.joe@example.com' },
    { id: 4, name: 'Jane Jones', address: '456 Elm St', phone: '555-9532', email: 'jane.jones@example.com' },
    { id: 5, name: 'John Bones', address: '123 alsotest St', phone: '555-6345', email: 'john.bones@example.com' },
    { id: 6, name: 'Jane Doe', address: '456 also St', phone: '555-1453', email: 'jane.doe@example.com' }
];
function getUser(accountId) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = accounts.find(acc => acc.id === accountId);
        if (account) {
            return Promise.resolve(account);
        }
        else {
            throw new Error('Account not found');
        }
    });
}
exports.getUser = getUser;
function updateUser(accountId, name, address, phone, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountIndex = accounts.findIndex((acc) => acc.id === accountId);
        if (accountIndex !== -1) {
            const updatedAccount = Object.assign(Object.assign({}, accounts[accountIndex]), { name: name || accounts[accountIndex].name, address: address || accounts[accountIndex].address, phone: phone || accounts[accountIndex].phone, email: email || accounts[accountIndex].email });
            accounts[accountIndex] = updatedAccount;
            return Promise.resolve(updatedAccount);
        }
        else {
            throw new Error('Account not found');
        }
    });
}
exports.updateUser = updateUser;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve([...accounts]);
    });
}
exports.getUsers = getUsers;
function createUser(name, address, phone, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = {
            id: accounts.length + 1,
            name: name,
            address: address,
            phone: phone,
            email: email
        };d
        accounts.push(newUser);
        return newUser;
    });
}
exports.createUser = createUser;
function deleteAccount(accountId) {
    return __awaiter(this, void 0, void 0, function* () {
        const accountIndex = accounts.findIndex(acc => acc.id === accountId);
        if (accountIndex !== -1) {
            const deletedAccount = accounts.splice(accountIndex, 1)[0];
            return Promise.resolve(deletedAccount);
        }
        else {
            throw new Error('Account not found');
        }
    });
}
exports.deleteAccount = deleteAccount;

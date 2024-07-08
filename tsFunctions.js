"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this function only allowed to get input as a number and return number
function addTwo(num) {
    // return 'Hello'
    return num + 2;
}
// addTwo('ak')
addTwo(5);
var getVal = function (s) {
    return '';
};
// void because function not returning anything
function consoleError(msg) {
    console.log(msg);
}
// never because function not returning anything , but can user another like throw
function consoleErrors(msg) {
    // console.log(msg)
    throw new Error(msg);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};

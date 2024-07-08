"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = [1, 'hc'];
// tuple- for restrecting datatype as well as order 
var TUser;
TUser = ['hc', 131, true];
var newUser = [112, 'email'];
// Not restricting to change value also e can use all methods of array / DrawBack of TS tuple
newUser[1] = 'nn';

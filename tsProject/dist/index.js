"use strict";
// //keyword private and symbol # dose the same work, those variables are allowed to use in class only
// class User {
//     readonly email:string
//     name:string
//     private city:string=''
//     #pin?:string
//     constructor(email:string,name:string, city:string) {
//         this.email = email
//         this.name = name
//         this.city = city
//     }
// }
var _User_pin;
// const sarika = new User('s@p.com','sarika','dudhgaon')
// // sarika.city='bhilwadi';
//shortcut of above
class User {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        // name:string
        this.city = '';
        _User_pin.set(this, void 0);
        this._courseCount = 1;
        this.email = email;
        this.name = name;
        this.city = city;
    }
    deleteToken() {
        console.log('token deleted');
    }
}
_User_pin = new WeakMap();
const sarika = new User('s@p.com', 'sarika', 'dudhgaon');
// sarika.city='bhilwadi';
// getter and setter
get;
getAppleEmail();
string;
{
    return `apple${this.email}`;
}
get;
courseCount();
number;
{
    return this._courseCount;
}
//set con't have return value type like string, number
set;
courseCount(courseNum);
{
    if (false) {
        throw new Error("error");
    }
    this._courseCount = courseNum;
}
// can't access private members of inherited class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
}

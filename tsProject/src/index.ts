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

// const sarika = new User('s@p.com','sarika','dudhgaon')
// // sarika.city='bhilwadi';

//shortcut of above
class User {
    // name:string
    private city:string=''
    #pin?:string
    private _courseCount = 1
    constructor(public readonly email:string,public name:string, city:string) {
        this.email = email
        this.name = name
        this.city = city
    }
    private deleteToken(){
        console.log('token deleted')
    }
}

const sarika = new User('s@p.com','sarika','dudhgaon')
// sarika.city='bhilwadi';

// getter and setter
get getAppleEmail()string{
    return `apple${this.email}`
}

get courseCount ():number{
    return this._courseCount
}

//set con't have return value type like string, number
set courseCount(courseNum){
 if(false){
throw new Error("error")
 }
 this._courseCount = courseNum
}


// can't access private members of inherited class

class SubUser extends User{
    isFamily:boolean=true
}


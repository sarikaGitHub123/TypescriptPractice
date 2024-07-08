// type User {
//     email:string
//     userId:number
// }

interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrail?:()=>string  or
    startTrail?():string
    getCoupon?(couponName : string):number
}

const userInfo : User = {dbId:10, email:'sp@gmail.com', userId:2211, startTrail:()=>{ return 'hello'}}

interface User {
    githubToken? : string
}
const userInfo1 : User = {dbId:10,email:'sp@gmail.com', userId:2211,googleId:'101', getCoupon:(name:'first')=> {return 100},githubToken:'dsfc'}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const userInfo3 : Admin = {dbId:10,email:'sp@gmail.com', userId:2211,googleId:'101', getCoupon:(name:'first')=> {return 100},githubToken:'dsfc',role:'learner'}


export {}
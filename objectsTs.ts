const User = {
    name:'Sarika',
    email:'sarika.sagare@anveshak.com',
    isActive:true
}

type Users = {
    name:string;
    email:string;
    isActive:boolean
}

// Users is used as a type link string or number
function createUsers(user:Users){}

createUsers({name:'',email:'',isActive:true})

function createUser({name:string,isPaid:boolean}){

}

// function which restricted to return object only
function createCourse():{}{
    return {}
}

function createCourse1():{name:string,price:number}{
    return {name:'sarika', price:300000}
}




export {}
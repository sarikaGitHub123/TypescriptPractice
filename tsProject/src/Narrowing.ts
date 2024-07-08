function detectType(val:number | string){
    if(typeof(val)==='string'){
        return val.toLowerCase()
    }
    return val+3
}

function provideId(id:string | null){
    if(!id){
        console.log('please provide id')
        return
    }
    id.toLocaleLowerCase()
}


interface User{
    name:string,
    mail:string,
}
interface Admin{
    name:string,
    mail:string,
    isAdmin:boolean
}


function isAdminAccount(account:User|Admin){
   if("isAdmin" in account){
    return account.isAdmin
   } 
}

// instanceof


function logValue(x:Date | string){
   if(x instanceof Date){
    return x.toUTCString()
   }
   else{
    return x.toUpperCase
   }
}


type Fish={swim:()=>void}

type Bird = {fly:()=>void}

function isFish(pet:Fish|Bird): pet is Fish {
   return (pet as Fish).swim !==undefined
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return 'fish food'
    }
    else{
        pet
        return 'bird food'
    }
}


interface Circle{
   kind:"circle",
   radius:number
}

interface Square {
    kind:'square'
    side:number
}

interface Rectangle {
    kind:'rectangle',
    length:number,
    width:number
}

type Shape = Circle | Square

function getTrueShape(shape:Shape){
    if(shape.kind == 'circle'){
        return Math.PI * shape.radius **2
    }
    return shape.side * shape.side
}


function getArea (shape:Shape){
    switch(shape.kind){
        case 'circle':                    
            return Math.PI * shape.radius **2
        case 'square':
            return shape.side * shape.side
        default:
            const _defaultForShape: never = shape
            return _defaultForShape 
    }
    
}
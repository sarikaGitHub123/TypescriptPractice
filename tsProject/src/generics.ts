// generics
// array creation
const score: Array<number> = []

function identityOne(val:boolean | number):boolean | number{
     return val
}

function identityTwo(val:any):any{
  return val
}

// its almost like any but it locking value type
function identityThree<Type>(val:Type):Type{
    return val
  }

  identityThree(3)  

  //Type shortcut
  function identityFour<T>(val:T):T{
    return val
  }

  interface Bottle{
    brand:string
    type:number
  }

  identityFour<Bottle>({brand:'',type:10})

 // accepting array as a input of type T 
function getSearchProducts<T>(products:T[]):T{
    //some database operations
    const myIndex = 3
    return products[myIndex]
}

 // generic arrow function
const getMoreSearchProducts = <T,>(products:T[]):T => {
    //some database operations
    const myIndex = 5
    return products[myIndex]
}


interface Database{
  connection:string,
  username:string,
  password:string
}

// U means can provide multiple type params.

function nextGenFunc<T,U extends Database>(valueOne:T, valueTwo:U):object{
  return{
     valueOne,
     valueTwo
  }
  }

// function nextGenFunc<T,U extends number>(valueOne:T, valueTwo:U):object{
// return{
//    valueOne,
//    valueTwo
// }
// }

// nextGenFunc(3,{})

interface Quiz{
  name:string,
  type:string
}

interface Course{
  name:string,
  author:string,
  subject:string,
}

class Sellable<T>{
  public cart:T[]=[]
  addToCart(products:T){
    this.cart.push(products)
  }
}
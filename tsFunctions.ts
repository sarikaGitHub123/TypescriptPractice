// this function only allowed to get input as a number and return number
function addTwo(num:number):number{
    // return 'Hello'
    return num+2
}

// addTwo('ak')
addTwo(5)
const getVal = (s:string):string=>{
return ''
}

// void because function not returning anything
function consoleError(msg:string):void{
    console.log(msg)
}

// never because function not returning anything , but can user another like throw
function consoleErrors(msg:string):never{
    // console.log(msg)
    throw new Error(msg)
}



let loginUser = (name:string, email:string, isPaid:boolean = false)=>{

}
export {}
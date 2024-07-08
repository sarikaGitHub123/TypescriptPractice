const user:(string|number)[]=[1,'hc']
// tuple- for restrecting datatype as well as order 
let TUser : [string,number,boolean]

TUser=['hc',131,true]

type userTuple = [number,string]

const newUser : userTuple = [112,'email']

// Not restricting to change value also e can use all methods of array / DrawBack of TS tuple
newUser[1]='nn'

export {}
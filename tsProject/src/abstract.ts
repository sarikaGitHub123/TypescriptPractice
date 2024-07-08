

// can't use abstract class its like blueprint we can use it with extending other class


abstract class TakePhotos{
    constructor(
        public cameraMode : string,
        public filter : string
    ){}
    abstract getSepia():void
    getReelTime():number{
   //calculation
     return 7
    }
}



// classes get extend and interfaces gets implement 1 keyword difference
class Insta extends TakePhotos{
   constructor (
    public cameraMode:string,
    public filter:string,
    public burst:number
   ){
    super(cameraMode,filter)
   }

   getSepia(): void {
       console.log('abstract fun')
   }
}

const sarikaP = new Insta('test','test',10)

sarikaP.getReelTime()
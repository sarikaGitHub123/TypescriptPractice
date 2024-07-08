"use strict";
// can't use abstract class its like blueprint we can use it with extending other class
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //calculation
        return 7;
    }
}
// classes get extend and interfaces gets implement 1 keyword difference
class Insta extends TakePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('abstract fun');
    }
}
const sarikaP = new Insta('test', 'test', 10);
sarikaP.getReelTime();

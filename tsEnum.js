"use strict";
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
Object.defineProperty(exports, "__esModule", { value: true });
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
})(seatChoice || (seatChoice = {}));
var hcSeat = seatChoice.AISLE;

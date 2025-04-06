/* AND gate */

import { NAND } from "./NAND.mjs";

export class AND {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    Simulate () {
        let a = new NAND(this.a, this.b).Simulate();
        return new NAND(a, a).Simulate();
    } 
}
let and;
dotTst(and, AND)
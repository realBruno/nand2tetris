/* XOR gate */

import { NAND } from "./NAND.mjs";
import { AND } from "./AND.mjs";
import { OR } from "./OR.mjs";

class XOR {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    
    Simulate () {
        let a = new NAND(this.a, this.b).Simulate();
        let b = new OR(this.a, this.b).Simulate();
        return new AND(a, b).Simulate();
    }
}
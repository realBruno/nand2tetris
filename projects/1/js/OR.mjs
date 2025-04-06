/* OR gate */

import { NAND } from "./NAND.mjs";

export class OR {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

    Simulate () {
        let a = new NAND(this.a, this.a).Simulate();
        let b = new NAND(this.b, this.b).Simulate();
        return new NAND(a, b).Simulate();
    }
}
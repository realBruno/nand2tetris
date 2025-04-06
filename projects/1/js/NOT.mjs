/* NOT gate */

import { NAND } from "./NAND.mjs";

class NOT {
    constructor(a) {
        this.a = a;
    }

    Simulate () {
        return new NAND(this.a, this.a).Simulate();
    }
}
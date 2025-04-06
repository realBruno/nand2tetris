/* NOT gate */

import { NAND } from "./NAND.mjs";
import { dotTst } from "./dottst.mjs";


class NOT {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    Simulate () {
        return new NAND(this.a, this.a).Simulate();
    }
}
/* XOR gate */

import { NOT } from "./NOT.mjs";
import { AND } from "./AND.mjs";
import { OR } from "./OR.mjs";

class XOR {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

    Simulate () {
        let notA = new NOT(this.a).Simulate();
        let notB = new NOT(this.b).Simulate();
        let andA = new AND(this.a, notB).Simulate();
        let andB = new AND(notA, this.b).Simulate();
        return new OR(andA, andB).Simulate();
    }
}
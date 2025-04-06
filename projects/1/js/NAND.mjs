/* NAND gate */

export class NAND {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    Simulate () {
        if (!(this.a && this.b)) return 1;
        return 0;
    }
}
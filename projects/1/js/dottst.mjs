/* .tst-like function */

export function dotTst(gate, GATE) {
    let ab = [
        0, 0,        
        0, 1,
        1, 0,
        1, 1
    ];
    
    for (let i = 0, j = 1; i < ab.length; i += 2, j += 2) {
        gate = new GATE(ab[i], ab[j]);
        console.log(gate.Simulate());
    }
}
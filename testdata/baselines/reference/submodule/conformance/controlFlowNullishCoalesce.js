//// [tests/cases/conformance/controlFlow/controlFlowNullishCoalesce.ts] ////

//// [controlFlowNullishCoalesce.ts]
// assignments in shortcutting rhs
let a: number;
o ?? (a = 1);
a.toString();

// assignment flow
declare const o: { x: number } | undefined;
let x: { x: number } | boolean;
if (x = o ?? true) {
    x;
}



//// [controlFlowNullishCoalesce.js]
// assignments in shortcutting rhs
let a;
o !== null && o !== void 0 ? o : (a = 1);
a.toString();
let x;
if (x = o !== null && o !== void 0 ? o : true) {
    x;
}

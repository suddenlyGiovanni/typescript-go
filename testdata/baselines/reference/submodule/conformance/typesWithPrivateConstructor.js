//// [tests/cases/conformance/types/members/typesWithPrivateConstructor.ts] ////

//// [typesWithPrivateConstructor.ts]
class C {
    private constructor() { }
}

var c = new C(); // error C is private
var r: () => void = c.constructor;

class C2 {
    private constructor(x: number);
    private constructor(x: any) { }
}

var c2 = new C2(); // error C2 is private
var r2: (x: number) => void = c2.constructor;

//// [typesWithPrivateConstructor.js]
class C {
    constructor() { }
}
var c = new C(); // error C is private
var r = c.constructor;
class C2 {
    constructor(x) { }
}
var c2 = new C2(); // error C2 is private
var r2 = c2.constructor;


//// [typesWithPrivateConstructor.d.ts]
declare class C {
    private constructor();
}
declare var c: any; // error C is private
declare var r: () => void;
declare class C2 {
    private constructor();
}
declare var c2: any; // error C2 is private
declare var r2: (x: number) => void;

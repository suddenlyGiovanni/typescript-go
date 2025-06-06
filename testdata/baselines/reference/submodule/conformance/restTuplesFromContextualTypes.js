//// [tests/cases/conformance/types/rest/restTuplesFromContextualTypes.ts] ////

//// [restTuplesFromContextualTypes.ts]
declare const t1: [number, boolean, string];

(function (a, b, c){})(...t1);
(function (...x){})(...t1);
(function (a, ...x){})(...t1);
(function (a, b, ...x){})(...t1);
(function (a, b, c, ...x){})(...t1);

declare function f1(cb: (...args: typeof t1) => void): void;

f1((a, b, c) => {})
f1((...x) => {})
f1((a, ...x) => {})
f1((a, b, ...x) => {})
f1((a, b, c, ...x) => {})

declare const t2: [number, boolean, ...string[]];

(function (a, b, c){})(...t2);
(function (...x){})(...t2);
(function (a, ...x){})(...t2);
(function (a, b, ...x){})(...t2);
(function (a, b, c, ...x){})(...t2);

declare function f2(cb: (...args: typeof t2) => void): void;

f2((a, b, c) => {})
f2((...x) => {})
f2((a, ...x) => {})
f2((a, b, ...x) => {})
f2((a, b, c, ...x) => {})

declare const t3: [boolean, ...string[]];

(function (a, b, c){})(1, ...t3);
(function (...x){})(1, ...t3);
(function (a, ...x){})(1, ...t3);
(function (a, b, ...x){})(1, ...t3);
(function (a, b, c, ...x){})(1, ...t3);

declare function f3(cb: (x: number, ...args: typeof t3) => void): void;

f3((a, b, c) => {})
f3((...x) => {})
f3((a, ...x) => {})
f3((a, b, ...x) => {})
f3((a, b, c, ...x) => {})

function f4<T extends any[]>(t: T) {
    (function(...x){})(...t);
    (function(a, ...x){})(1, ...t);
    (function(a, ...x){})(1, 2, ...t);
    function f(cb: (x: number, ...args: T) => void) {}
    f((...x) => {});
    f((a, ...x) => {});
    f((a, b, ...x) => {});
}

declare function f5<T extends any[], U>(f: (...args: T) => U): (...args: T) => U;

let g0 = f5(() => "hello");
let g1 = f5((x, y) => 42);
let g2 = f5((x: number, y) => 42);
let g3 = f5((x: number, y: number) => x + y);
let g4 = f5((...args) => true);

declare function pipe<A extends any[], B, C>(f: (...args: A) => B, g: (x: B) => C): (...args: A) => C;

let g5 = pipe(() => true, b => 42);
let g6 = pipe(x => "hello", s => s.length);
let g7 = pipe((x, y) => 42, x => "" + x);
let g8 = pipe((x: number, y: string) => 42, x => "" + x);

// Repro from #25288

declare var tuple: [number, string];
(function foo(a, b){}(...tuple));

// Repro from #25289

declare function take(cb: (a: number, b: string) => void): void;

(function foo(...rest){}(1, ''));
take(function(...rest){});

// Repro from #29833

type ArgsUnion = [number, string] | [number, Error];
type TupleUnionFunc = (...params: ArgsUnion) => number;

const funcUnionTupleNoRest: TupleUnionFunc = (num, strOrErr) => {
  return num;
};

const funcUnionTupleRest: TupleUnionFunc = (...params) => {
  const [num, strOrErr] = params;
  return num;
};


//// [restTuplesFromContextualTypes.js]
(function (a, b, c) { })(...t1);
(function (...x) { })(...t1);
(function (a, ...x) { })(...t1);
(function (a, b, ...x) { })(...t1);
(function (a, b, c, ...x) { })(...t1);
f1((a, b, c) => { });
f1((...x) => { });
f1((a, ...x) => { });
f1((a, b, ...x) => { });
f1((a, b, c, ...x) => { });
(function (a, b, c) { })(...t2);
(function (...x) { })(...t2);
(function (a, ...x) { })(...t2);
(function (a, b, ...x) { })(...t2);
(function (a, b, c, ...x) { })(...t2);
f2((a, b, c) => { });
f2((...x) => { });
f2((a, ...x) => { });
f2((a, b, ...x) => { });
f2((a, b, c, ...x) => { });
(function (a, b, c) { })(1, ...t3);
(function (...x) { })(1, ...t3);
(function (a, ...x) { })(1, ...t3);
(function (a, b, ...x) { })(1, ...t3);
(function (a, b, c, ...x) { })(1, ...t3);
f3((a, b, c) => { });
f3((...x) => { });
f3((a, ...x) => { });
f3((a, b, ...x) => { });
f3((a, b, c, ...x) => { });
function f4(t) {
    (function (...x) { })(...t);
    (function (a, ...x) { })(1, ...t);
    (function (a, ...x) { })(1, 2, ...t);
    function f(cb) { }
    f((...x) => { });
    f((a, ...x) => { });
    f((a, b, ...x) => { });
}
let g0 = f5(() => "hello");
let g1 = f5((x, y) => 42);
let g2 = f5((x, y) => 42);
let g3 = f5((x, y) => x + y);
let g4 = f5((...args) => true);
let g5 = pipe(() => true, b => 42);
let g6 = pipe(x => "hello", s => s.length);
let g7 = pipe((x, y) => 42, x => "" + x);
let g8 = pipe((x, y) => 42, x => "" + x);
(function foo(a, b) { }(...tuple));
(function foo(...rest) { }(1, ''));
take(function (...rest) { });
const funcUnionTupleNoRest = (num, strOrErr) => {
    return num;
};
const funcUnionTupleRest = (...params) => {
    const [num, strOrErr] = params;
    return num;
};


//// [restTuplesFromContextualTypes.d.ts]
declare const t1: [number, boolean, string];
declare function f1(cb: (...args: typeof t1) => void): void;
declare const t2: [number, boolean, ...string[]];
declare function f2(cb: (...args: typeof t2) => void): void;
declare const t3: [boolean, ...string[]];
declare function f3(cb: (x: number, ...args: typeof t3) => void): void;
declare function f4<T extends any[]>(t: T): void;
declare function f5<T extends any[], U>(f: (...args: T) => U): (...args: T) => U;
declare let g0: () => string;
declare let g1: (x: any, y: any) => number;
declare let g2: (x: number, y: any) => number;
declare let g3: (x: number, y: number) => number;
declare let g4: (...args: any[]) => boolean;
declare function pipe<A extends any[], B, C>(f: (...args: A) => B, g: (x: B) => C): (...args: A) => C;
declare let g5: () => number;
declare let g6: (x: any) => number;
declare let g7: (x: any, y: any) => string;
declare let g8: (x: number, y: string) => string;
// Repro from #25288
declare var tuple: [number, string];
// Repro from #25289
declare function take(cb: (a: number, b: string) => void): void;
// Repro from #29833
type ArgsUnion = [number, string] | [number, Error];
type TupleUnionFunc = (...params: ArgsUnion) => number;
declare const funcUnionTupleNoRest: TupleUnionFunc;
declare const funcUnionTupleRest: TupleUnionFunc;

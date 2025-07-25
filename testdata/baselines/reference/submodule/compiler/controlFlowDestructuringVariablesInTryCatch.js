//// [tests/cases/compiler/controlFlowDestructuringVariablesInTryCatch.ts] ////

//// [controlFlowDestructuringVariablesInTryCatch.ts]
declare function f1(): string;
declare function f2(): [b: string];
declare function f3(): { c: string };

try {
    var a = f1();
    var [b] = f2();
    var { c } = f3();

    var [d = 1] = [];
    var { e = 1 } = { };
} catch {
    console.error("error");
}

a;
b;
c;
d;
e;


//// [controlFlowDestructuringVariablesInTryCatch.js]
try {
    var a = f1();
    var [b] = f2();
    var { c } = f3();
    var [d = 1] = [];
    var { e = 1 } = {};
}
catch (_a) {
    console.error("error");
}
a;
b;
c;
d;
e;

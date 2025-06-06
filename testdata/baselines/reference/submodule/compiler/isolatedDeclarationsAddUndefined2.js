//// [tests/cases/compiler/isolatedDeclarationsAddUndefined2.ts] ////

//// [isolatedDeclarationsAddUndefined2.ts]
// https://github.com/microsoft/TypeScript/issues/60123

export class Bar {
    constructor(private x?: Array | undefined) {}
}

export class Bar2 {
    constructor(private x?: Array) {}
}

export class Bar3 {
    constructor(private x: Array | undefined) {}
}

export class Bar4 {
    constructor(private x: Array) {}
}

export function test1(x?: Array | undefined): void {}

export function test2(x?: Unresolved | undefined): void {}

export function test3(x?: Unresolved): void {}


//// [isolatedDeclarationsAddUndefined2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar4 = exports.Bar3 = exports.Bar2 = exports.Bar = void 0;
exports.test1 = test1;
exports.test2 = test2;
exports.test3 = test3;
// https://github.com/microsoft/TypeScript/issues/60123
class Bar {
    x;
    constructor(x) {
        this.x = x;
    }
}
exports.Bar = Bar;
class Bar2 {
    x;
    constructor(x) {
        this.x = x;
    }
}
exports.Bar2 = Bar2;
class Bar3 {
    x;
    constructor(x) {
        this.x = x;
    }
}
exports.Bar3 = Bar3;
class Bar4 {
    x;
    constructor(x) {
        this.x = x;
    }
}
exports.Bar4 = Bar4;
function test1(x) { }
function test2(x) { }
function test3(x) { }


//// [isolatedDeclarationsAddUndefined2.d.ts]
// https://github.com/microsoft/TypeScript/issues/60123
export declare class Bar {
    private x?;
    constructor(x?: Array | undefined);
}
export declare class Bar2 {
    private x?;
    constructor(x?: Array);
}
export declare class Bar3 {
    private x;
    constructor(x: Array | undefined);
}
export declare class Bar4 {
    private x;
    constructor(x: Array);
}
export declare function test1(x?: Array | undefined): void;
export declare function test2(x?: Unresolved | undefined): void;
export declare function test3(x?: Unresolved): void;

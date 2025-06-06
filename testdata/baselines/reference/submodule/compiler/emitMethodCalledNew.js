//// [tests/cases/compiler/emitMethodCalledNew.ts] ////

//// [emitMethodCalledNew.ts]
// https://github.com/microsoft/TypeScript/issues/55075

export const a = {
  new(x: number) { return x + 1 }
}
export const b = {
  "new"(x: number) { return x + 1 }
}
export const c = {
  ["new"](x: number) { return x + 1 }
}


//// [emitMethodCalledNew.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = exports.b = exports.a = void 0;
// https://github.com/microsoft/TypeScript/issues/55075
exports.a = {
    new(x) { return x + 1; }
};
exports.b = {
    "new"(x) { return x + 1; }
};
exports.c = {
    ["new"](x) { return x + 1; }
};


//// [emitMethodCalledNew.d.ts]
// https://github.com/microsoft/TypeScript/issues/55075
export declare const a: {
    "new"(x: number): number;
};
export declare const b: {
    "new"(x: number): number;
};
export declare const c: {
    "new"(x: number): number;
};

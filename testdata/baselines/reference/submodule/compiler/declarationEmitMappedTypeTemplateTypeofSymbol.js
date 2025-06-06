//// [tests/cases/compiler/declarationEmitMappedTypeTemplateTypeofSymbol.ts] ////

//// [a.d.ts]
export declare const timestampSymbol: unique symbol;

export declare const Timestamp: {
    [TKey in typeof timestampSymbol]: true;
};

export declare function now(): typeof Timestamp;

//// [b.ts]
import * as x from "./a";
export const timestamp = x.now();

//// [c.ts]
import { now } from "./a";

export const timestamp = now();

//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = void 0;
const x = require("./a");
exports.timestamp = x.now();
//// [c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = void 0;
const a_1 = require("./a");
exports.timestamp = (0, a_1.now)();


//// [b.d.ts]
import * as x from "./a";
export declare const timestamp: {
    [x.timestampSymbol]: true;
};
//// [c.d.ts]
export declare const timestamp: {
    [timestampSymbol]: true;
};

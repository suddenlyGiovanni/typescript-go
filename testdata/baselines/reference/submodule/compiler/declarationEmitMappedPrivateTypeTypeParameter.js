//// [tests/cases/compiler/declarationEmitMappedPrivateTypeTypeParameter.ts] ////

//// [Helpers.ts]
export type StringKeyOf<TObj> = Extract<string, keyof TObj>;

//// [FromFactor.ts]
export type RowToColumns<TColumns> = {
    [TName in StringKeyOf<TColumns>]: any;
}

//// [Helpers.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// [FromFactor.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

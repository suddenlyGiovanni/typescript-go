//// [tests/cases/compiler/isolatedDeclarationErrorsExpressions.ts] ////

//// [isolatedDeclarationErrorsExpressions.ts]
declare function time(): bigint
export const numberConst = 1;
export const numberConstBad1 = 1 + 1;
export const numberConstBad2 = Math.random();
export const numberConstBad3 = numberConst;

export const bigIntConst = 1n;
export const bigIntConstBad1 = 1n + 1n;
export const bigIntConstBad2 = time();
export const bigIntConstBad3 = bigIntConst;

export const stringConst = "s";
export const stringConstBad = "s" + "s";

// These are just strings
export const templateConstOk1 = `s`;
export const templateConstNotOk2 = `s${1n}`;
export const templateConstNotOk3 = `s${1} - ${"S"}`;
export const templateConstNotOk4 = `s${1} - ${"S"} - ${false}`;
export const templateConstNotOk5 = `s${1 + 1} - ${"S"} - ${!false}`;

export let numberLet = 1;
export let numberLetBad1 = 1 + 1;
export let numberLetBad2 = Math.random();
export let numberLetBad3 = numberLet;

export let bigIntLet = 1n;
export let bigIntLetBad1 = 1n + 1n;
export let bigIntLetBad2 = time();
export let bigIntLetBad3 = bigIntLet;

export let stringLet = "s";
export let stringLetBad = "s" + "s";

export let templateLetOk1 = `s`;
export let templateLetOk2 = `s${1} - ${"S"}`;
export let templateLetOk3 = `s${1} - ${"S"} - ${false}`;
export let templateLetOk4 = `s${1 + 1} - ${"S"} - ${!false}`;

// As const

export let numberLetAsConst = 1 as const;

export let bigIntLetAsConst = 1n as const;

export let stringLetAsConst = "s" as const;

export let templateLetOk1AsConst = `s` as const;
export let templateLetOk2AsConst = `s${1} - ${"S"}` as const;
export let templateLetOk3AsConst = `s${1} - ${"S"} - ${false}` as const;
export let templateLetOk4AsConst = `s${1 + 1} - ${"S"} - ${!false}` as const;

export let arr = [1, 2, 3];
export let arrConst = [1, 2, 3] as const;
export let arrWithSpread = [1, 2, 3, ...arr] as const;

export class Exported {
    public numberLet = 1;
    public numberLetBad1 = 1 + 1;
    public numberLetBad2 = Math.random();
    public numberLetBad3 = numberLet;

    public bigIntLet = 1n;
    public bigIntLetBad1 = 1n + 1n;
    public bigIntLetBad2 = time();
    public bigIntLetBad3 = bigIntLet;

    public stringLet = "s";
    public stringLetBad = "s" + "s";

    public templateLetOk1 = `s`;
    public templateLetOk2 = `s${1} - ${"S"}`;
    public templateLetOk3 = `s${1} - ${"S"} - ${false}`;
    public templateLetOk4 = `s${1 + 1} - ${"S"} - ${!false}`;


    readonly numberConst = 1;
    readonly numberConstBad1 = 1 + 1;
    readonly numberConstBad2 = Math.random();
    readonly numberConstBad3 = numberConst;

    readonly bigIntConst = 1n;
    readonly bigIntConstBad1 = 1n + 1n;
    readonly bigIntConstBad2 = time();
    readonly bigIntConstBad3 = bigIntConst;

    readonly stringConst = "s";
    readonly stringConstBad = "s" + "s";

    readonly templateConstOk1 = `s`;
    readonly templateConstNotOk2 = `s${1} - ${"S"}`;
    readonly templateConstNotOk3 = `s${1} - ${"S"} - ${false}`;
    readonly templateConstNotOk4 = `s${1 + 1} - ${"S"} - ${!false}`;

    numberLetAsConst = 1 as const;

    bigIntLetAsConst = 1n as const;

    stringLetAsConst = "s" as const;

    templateLetOk1AsConst = `s` as const;
    templateLetOk2AsConst = `s${1} - ${"S"}` as const;
    templateLetOk3AsConst = `s${1} - ${"S"} - ${false}` as const;
    templateLetOk4AsConst = `s${1 + 1} - ${"S"} - ${!false}` as const;

}

export function numberParam(p = 1): void { }
export function numberParamBad1(p = 1 + 1): void { }
export function numberParamBad2(p = Math.random()): void { }
export function numberParamBad3(p = numberParam): void { }

export function bigIntParam(p = 1n): void { }
export function bigIntParamBad1(p = 1n + 1n): void { }
export function bigIntParamBad2(p = time()): void { }
export function bigIntParamBad3(p = bigIntParam): void { }

export function stringParam(p = "s"): void { }
export function stringParamBad(p = "s" + "s"): void { }

export function templateParamOk1(p = `s`): void { }
export function templateParamOk2(p = `s${1} - ${"S"}`): void { }
export function templateParamOk3(p = `s${1} - ${"S"} - ${false}`): void { }
export function templateParamOk4(p = `s${1 + 1} - ${"S"} - ${!false}`): void { }


export const { a } = { a: 1 };
export const [, , b = 1]: [number, number, number | undefined] = [0, 1, 2];

export function foo([, , b]: [
    number,
    number,
    number
] = [0, 1, 2]): void {

}

//// [isolatedDeclarationErrorsExpressions.js]
export const numberConst = 1;
export const numberConstBad1 = 1 + 1;
export const numberConstBad2 = Math.random();
export const numberConstBad3 = numberConst;
export const bigIntConst = 1n;
export const bigIntConstBad1 = 1n + 1n;
export const bigIntConstBad2 = time();
export const bigIntConstBad3 = bigIntConst;
export const stringConst = "s";
export const stringConstBad = "s" + "s";
// These are just strings
export const templateConstOk1 = `s`;
export const templateConstNotOk2 = `s${1n}`;
export const templateConstNotOk3 = `s${1} - ${"S"}`;
export const templateConstNotOk4 = `s${1} - ${"S"} - ${false}`;
export const templateConstNotOk5 = `s${1 + 1} - ${"S"} - ${!false}`;
export let numberLet = 1;
export let numberLetBad1 = 1 + 1;
export let numberLetBad2 = Math.random();
export let numberLetBad3 = numberLet;
export let bigIntLet = 1n;
export let bigIntLetBad1 = 1n + 1n;
export let bigIntLetBad2 = time();
export let bigIntLetBad3 = bigIntLet;
export let stringLet = "s";
export let stringLetBad = "s" + "s";
export let templateLetOk1 = `s`;
export let templateLetOk2 = `s${1} - ${"S"}`;
export let templateLetOk3 = `s${1} - ${"S"} - ${false}`;
export let templateLetOk4 = `s${1 + 1} - ${"S"} - ${!false}`;
// As const
export let numberLetAsConst = 1;
export let bigIntLetAsConst = 1n;
export let stringLetAsConst = "s";
export let templateLetOk1AsConst = `s`;
export let templateLetOk2AsConst = `s${1} - ${"S"}`;
export let templateLetOk3AsConst = `s${1} - ${"S"} - ${false}`;
export let templateLetOk4AsConst = `s${1 + 1} - ${"S"} - ${!false}`;
export let arr = [1, 2, 3];
export let arrConst = [1, 2, 3];
export let arrWithSpread = [1, 2, 3, ...arr];
export class Exported {
    numberLet = 1;
    numberLetBad1 = 1 + 1;
    numberLetBad2 = Math.random();
    numberLetBad3 = numberLet;
    bigIntLet = 1n;
    bigIntLetBad1 = 1n + 1n;
    bigIntLetBad2 = time();
    bigIntLetBad3 = bigIntLet;
    stringLet = "s";
    stringLetBad = "s" + "s";
    templateLetOk1 = `s`;
    templateLetOk2 = `s${1} - ${"S"}`;
    templateLetOk3 = `s${1} - ${"S"} - ${false}`;
    templateLetOk4 = `s${1 + 1} - ${"S"} - ${!false}`;
    numberConst = 1;
    numberConstBad1 = 1 + 1;
    numberConstBad2 = Math.random();
    numberConstBad3 = numberConst;
    bigIntConst = 1n;
    bigIntConstBad1 = 1n + 1n;
    bigIntConstBad2 = time();
    bigIntConstBad3 = bigIntConst;
    stringConst = "s";
    stringConstBad = "s" + "s";
    templateConstOk1 = `s`;
    templateConstNotOk2 = `s${1} - ${"S"}`;
    templateConstNotOk3 = `s${1} - ${"S"} - ${false}`;
    templateConstNotOk4 = `s${1 + 1} - ${"S"} - ${!false}`;
    numberLetAsConst = 1;
    bigIntLetAsConst = 1n;
    stringLetAsConst = "s";
    templateLetOk1AsConst = `s`;
    templateLetOk2AsConst = `s${1} - ${"S"}`;
    templateLetOk3AsConst = `s${1} - ${"S"} - ${false}`;
    templateLetOk4AsConst = `s${1 + 1} - ${"S"} - ${!false}`;
}
export function numberParam(p = 1) { }
export function numberParamBad1(p = 1 + 1) { }
export function numberParamBad2(p = Math.random()) { }
export function numberParamBad3(p = numberParam) { }
export function bigIntParam(p = 1n) { }
export function bigIntParamBad1(p = 1n + 1n) { }
export function bigIntParamBad2(p = time()) { }
export function bigIntParamBad3(p = bigIntParam) { }
export function stringParam(p = "s") { }
export function stringParamBad(p = "s" + "s") { }
export function templateParamOk1(p = `s`) { }
export function templateParamOk2(p = `s${1} - ${"S"}`) { }
export function templateParamOk3(p = `s${1} - ${"S"} - ${false}`) { }
export function templateParamOk4(p = `s${1 + 1} - ${"S"} - ${!false}`) { }
export const { a } = { a: 1 };
export const [, , b = 1] = [0, 1, 2];
export function foo([, , b] = [0, 1, 2]) {
}


//// [isolatedDeclarationErrorsExpressions.d.ts]
export declare const numberConst = 1;
export declare const numberConstBad1: number;
export declare const numberConstBad2: number;
export declare const numberConstBad3 = 1;
export declare const bigIntConst = 1n;
export declare const bigIntConstBad1: bigint;
export declare const bigIntConstBad2: bigint;
export declare const bigIntConstBad3 = 1n;
export declare const stringConst = "s";
export declare const stringConstBad: string;
// These are just strings
export declare const templateConstOk1 = "s";
export declare const templateConstNotOk2: string;
export declare const templateConstNotOk3 = "s1 - S";
export declare const templateConstNotOk4: string;
export declare const templateConstNotOk5: string;
export declare let numberLet: number;
export declare let numberLetBad1: number;
export declare let numberLetBad2: number;
export declare let numberLetBad3: number;
export declare let bigIntLet: bigint;
export declare let bigIntLetBad1: bigint;
export declare let bigIntLetBad2: bigint;
export declare let bigIntLetBad3: bigint;
export declare let stringLet: string;
export declare let stringLetBad: string;
export declare let templateLetOk1: string;
export declare let templateLetOk2: string;
export declare let templateLetOk3: string;
export declare let templateLetOk4: string;
// As const
export declare let numberLetAsConst: 1;
export declare let bigIntLetAsConst: 1n;
export declare let stringLetAsConst: "s";
export declare let templateLetOk1AsConst: "s";
export declare let templateLetOk2AsConst: "s1 - S";
export declare let templateLetOk3AsConst: "s1 - S - false";
export declare let templateLetOk4AsConst: `s${number} - S - true`;
export declare let arr: number[];
export declare let arrConst: readonly [1, 2, 3];
export declare let arrWithSpread: readonly [1, 2, 3, ...number[]];
export declare class Exported {
    numberLet: number;
    numberLetBad1: number;
    numberLetBad2: number;
    numberLetBad3: number;
    bigIntLet: bigint;
    bigIntLetBad1: bigint;
    bigIntLetBad2: bigint;
    bigIntLetBad3: bigint;
    stringLet: string;
    stringLetBad: string;
    templateLetOk1: string;
    templateLetOk2: string;
    templateLetOk3: string;
    templateLetOk4: string;
    readonly numberConst: number;
    readonly numberConstBad1: number;
    readonly numberConstBad2: number;
    readonly numberConstBad3: number;
    readonly bigIntConst: bigint;
    readonly bigIntConstBad1: bigint;
    readonly bigIntConstBad2: bigint;
    readonly bigIntConstBad3: bigint;
    readonly stringConst: string;
    readonly stringConstBad: string;
    readonly templateConstOk1: string;
    readonly templateConstNotOk2: string;
    readonly templateConstNotOk3: string;
    readonly templateConstNotOk4: string;
    numberLetAsConst: 1;
    bigIntLetAsConst: 1n;
    stringLetAsConst: "s";
    templateLetOk1AsConst: "s";
    templateLetOk2AsConst: "s1 - S";
    templateLetOk3AsConst: "s1 - S - false";
    templateLetOk4AsConst: `s${number} - S - true`;
}
export declare function numberParam(p?: number): void;
export declare function numberParamBad1(p?: number): void;
export declare function numberParamBad2(p?: number): void;
export declare function numberParamBad3(p?: typeof numberParam): void;
export declare function bigIntParam(p?: bigint): void;
export declare function bigIntParamBad1(p?: bigint): void;
export declare function bigIntParamBad2(p?: bigint): void;
export declare function bigIntParamBad3(p?: typeof bigIntParam): void;
export declare function stringParam(p?: string): void;
export declare function stringParamBad(p?: string): void;
export declare function templateParamOk1(p?: string): void;
export declare function templateParamOk2(p?: string): void;
export declare function templateParamOk3(p?: string): void;
export declare function templateParamOk4(p?: string): void;
export declare const a: number;
export declare const b: number;
export declare function foo([, , b]?: [
    number,
    number,
    number
]): void;

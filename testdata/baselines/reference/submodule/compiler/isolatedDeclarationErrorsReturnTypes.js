//// [tests/cases/compiler/isolatedDeclarationErrorsReturnTypes.ts] ////

//// [isolatedDeclarationErrorsReturnTypes.ts]
// Function Variables
export const fnExpressionConstVariable = function foo() { return 0;}
export const fnArrowConstVariable = () => "S";

export let fnExpressionLetVariable = function foo() { return 0;}
export let fnArrowLetVariable = () => "S";

export var fnExpressionVarVariable = function foo() { return 0;}
export var fnArrowVarVariable = () => "S";

// No Errors
export const fnExpressionConstVariableOk = function foo(): number { return 0;}
export const fnArrowConstVariableOk = (cb = function(){ }): string => "S";

export let fnExpressionLetVariableOk = function foo(): number { return 0;}
export let fnArrowLetVariableOk = (cb = function(){ }): string => "S";

export var fnExpressionVarVariableOk = function foo(): number { return 0;}
export var fnArrowVarVariableOk = (cb = function(){ }): string => "S";

// Not exported
const fnExpressionConstVariableInternal = function foo() { return 0;}
const fnArrowConstVariableInternal = () => "S";

let fnExpressionLetVariableInternal = function foo() { return 0;}
let fnArrowLetVariableInternal = () => "S";

var fnExpressionVarVariableInternal = function foo() { return 0;}
var fnArrowVarVariableInternal = () => "S";

// Function Fields
export class ExportedClass { 
    // Should Error
    fnExpression = function foo() { return 0; }
    fnArrow = () => "S";    
    protected fnExpressionProtected = function foo() { return 0; }
    protected fnArrowProtected = () => "S";

    static fnStaticExpression = function foo() { return 0; }
    static fnStaticArrow = () => "S";
    protected static fnStaticExpressionProtected = function foo() { return 0; }    
    protected static fnStaticArrowProtected = () => "S";

    // Have annotation, so ok 
    fnExpressionOk = function foo(): number { return 0; }
    fnArrowOK = (): string => "S";
    protected fnExpressionProtectedOk = function foo(): number { return 0; }
    protected fnArrowProtectedOK = (): string => "S";

    static fnStaticExpressionOk = function foo(): number { return 0; }
    static fnStaticArrowOk = (): string => "S";
    protected static fnStaticExpressionProtectedOk = function foo(): number { return 0; }    
    protected static fnStaticArrowProtectedOk = (): string => "S";
    

    // No Error not in declarations
    private fnExpressionPrivate = function foo() { return 0; }
    private fnArrowPrivate = () => "S";
    #fnArrow = () => "S";
    #fnExpression = function foo() { return 0;}
    private static fnStaticExpressionPrivate = function foo() { return 0; }
    private static fnStaticArrowPrivate = () => "S";
}

// Should error
class IndirectlyExportedClass { 
    fnExpression = function foo() { return 0; }
    fnArrow = () => "S";

    static fnStaticExpression = function foo() { return 0; }
    static fnStaticArrow = () => "S";
    
    protected static fnStaticExpressionProtected = function foo() { return 0; }    
    protected static fnStaticArrowProtected = () => "S";

    private fnExpressionPrivate = function foo() { return 0; }
    private fnArrowPrivate = () => "S";
    #fnArrow = () => "S";
    #fnExpression = function foo() { return 0;}
    private static fnStaticExpressionPrivate = function foo() { return 0; }
    private static fnStaticArrowPrivate = () => "S";
}
export const instance: IndirectlyExportedClass = new IndirectlyExportedClass();

// No Errors
class InternalClass { 
    fnExpression = function foo() { return 0; }
    fnArrow = () => "S";

    static fnStaticExpression = function foo() { return 0; }
    static fnStaticArrow = () => "S";
    
    protected static fnStaticExpressionProtected = function foo() { return 0; }    
    protected static fnStaticArrowProtected = () => "S";

    private fnExpressionPrivate = function foo() { return 0; }
    private fnArrowPrivate = () => "S";
    #fnArrow = () => "S";
    #fnExpression = function foo() { return 0;}
    private static fnStaticExpressionPrivate = function foo() { return 0; }
    private static fnStaticArrowPrivate = () => "S";
}
const internalInstance: InternalClass = new InternalClass();


// Function parameters

// In Function Variables - No annotations
export const fnParamExpressionConstVariable = function foo(cb = function(){ }) { return 0;}
export const fnParamArrowConstVariable = (cb = () => 1) => "S";

export let fnParamExpressionLetVariable = function foo(cb = function(){ }) { return 0;}
export let fnParamArrowLetVariable = (cb = () => 1) => "S";

export var fnParamExpressionVarVariable = function foo(cb = function(){ }) { return 0;}
export var fnParamArrowVarVariable = (cb = () => 1) => "S";

// In Function Variables - No annotations on parameter
export const fnParamExpressionConstVariableOwnerHasReturnType = function foo(cb = function(){ }): number { return 0;}
export const fnParamArrowConstVariableOwnerHasReturnType = (cb = function(){ }): string => "S";

export let fnParamExpressionLetVariableOwnerHasReturnType = function foo(cb = function(){ }): number { return 0;}
export let fnParamArrowLetVariableOwnerHasReturnType = (cb = function(){ }): string => "S";

export var fnParamExpressionVarVariableOwnerHasReturnType = function foo(cb = function(){ }): number { return 0;}
export var fnParamArrowVarVariableOwnerHasReturnType = (cb = function(){ }): string => "S";

// No Errors
export const fnParamExpressionConstVariableOk = function foo(cb = function(): void{ }): number { return 0;}
export const fnParamArrowConstVariableOk = (cb = function(): void{ }): string => "S";

export let fnParamExpressionLetVariableOk = function foo(cb = function(): void{ }): number { return 0;}
export let fnParamArrowLetVariableOk = (cb = function(): void{ }): string => "S";

export var fnParamExpressionVarVariableOk = function foo(cb = function(): void{ }): number { return 0;}
export var fnParamArrowVarVariableOk = (cb = function(): void{ }): string => "S";

export const fnParamExpressionConstVariableInternal = function foo(cb = function(){ }) { return 0;}
export const fnParamArrowConstVariableInternal = (cb = () => 1) => "S";

export let fnParamExpressionLetVariableInternal = function foo(cb = function(){ }) { return 0;}
export let fnParamArrowLetVariableInternal = (cb = () => 1) => "S";

export var fnParamExpressionVarVariableInternal = function foo(cb = function(){ }) { return 0;}
export var fnParamArrowVarVariableInternal = (cb = () => 1) => "S";


// In Function Fields
export class FnParamsExportedClass { 
    // Should Error
    fnExpression = function foo(cb = function(){ }) { return 0; }
    fnArrow = (cb = function(){ }) => "S";
    protected fnExpressionProtected = function foo(cb = function(){ }) { return 0; }
    protected fnArrowProtected = (cb = function(){ }) => "S";

    static fnStaticExpression = function foo(cb = function(){ }) { return 0; }
    static fnStaticArrow = (cb = function(){ }) => "S";
    protected static fnStaticExpressionProtected = function foo(cb = function(){ }) { return 0; }    
    protected static fnStaticArrowProtected = (cb = function(){ }) => "S";

    // Have annotation on owner
    fnExpressionMethodHasReturn = function foo(cb = function(){ }): number { return 0; }
    fnArrowMethodHasReturn = (cb = function(){ }): string => "S";
    protected fnExpressionProtectedMethodHasReturn = function foo(cb = function(){ }): number { return 0; }
    protected fnArrowProtectedMethodHasReturn = (cb = function(){ }): string => "S";

    static fnStaticExpressionMethodHasReturn = function foo(cb = function(){ }): number { return 0; }
    static fnStaticArrowMethodHasReturn = (cb = function(){ }): string => "S";
    protected static fnStaticExpressionProtectedMethodHasReturn = function foo(cb = function(){ }): number { return 0; }    
    protected static fnStaticArrowProtectedMethodHasReturn = (cb = function(){ }): string => "S";

    // Have annotation only on parameter
    fnExpressionOnlyOnParam = function foo(cb = function(): void { }) { return 0; }
    fnArrowOnlyOnParam = (cb = function(): void { }) => "S";
    protected fnExpressionProtectedOnlyOnParam = function foo(cb = function(): void { }) { return 0; }
    protected fnArrowProtectedOnlyOnParam = (cb = function(): void { }) => "S";

    static fnStaticExpressionOnlyOnParam = function foo(cb = function(): void{ }) { return 0; }
    static fnStaticArrowOnlyOnParam = (cb = function(): void{ }) => "S";
    protected static fnStaticExpressionProtectedOnlyOnParam = function foo(cb = function(): void{ }) { return 0; }    
    protected static fnStaticArrowProtectedOnlyOnParam = (cb = function(): void{ }) => "S";

    // Have annotation, so ok 
    fnExpressionOk = function foo(cb = function(): void { }): number { return 0; }
    fnArrowOK = (cb = function(): void { }): string => "S";
    protected fnExpressionProtectedOk = function foo(cb = function(): void { }): number { return 0; }
    protected fnArrowProtectedOK = (cb = function(): void { }): string => "S";

    static fnStaticExpressionOk = function foo(cb = function(): void{ }): number { return 0; }
    static fnStaticArrowOk = (cb = function(): void{ }): string => "S";
    protected static fnStaticExpressionProtectedOk = function foo(cb = function(): void{ }): number { return 0; }    
    protected static fnStaticArrowProtectedOk = (cb = function(): void{ }): string => "S";
    

    // No Error, not in declarations
    private fnExpressionPrivate = function foo(cb = function(){ }) { return 0; }
    private fnArrowPrivate = (cb = function(){ }) => "S";
    #fnArrow = (cb = function(){ }) => "S";
    #fnExpression = function foo(cb = function(){ }) { return 0;}
    private static fnStaticExpressionPrivate = function foo(cb = function(){ }) { return 0; }
    private static fnStaticArrowPrivate = (cb = function(){ }) => "S";
}


//// [isolatedDeclarationErrorsReturnTypes.js]
// Function Variables
export const fnExpressionConstVariable = function foo() { return 0; };
export const fnArrowConstVariable = () => "S";
export let fnExpressionLetVariable = function foo() { return 0; };
export let fnArrowLetVariable = () => "S";
export var fnExpressionVarVariable = function foo() { return 0; };
export var fnArrowVarVariable = () => "S";
// No Errors
export const fnExpressionConstVariableOk = function foo() { return 0; };
export const fnArrowConstVariableOk = (cb = function () { }) => "S";
export let fnExpressionLetVariableOk = function foo() { return 0; };
export let fnArrowLetVariableOk = (cb = function () { }) => "S";
export var fnExpressionVarVariableOk = function foo() { return 0; };
export var fnArrowVarVariableOk = (cb = function () { }) => "S";
// Not exported
const fnExpressionConstVariableInternal = function foo() { return 0; };
const fnArrowConstVariableInternal = () => "S";
let fnExpressionLetVariableInternal = function foo() { return 0; };
let fnArrowLetVariableInternal = () => "S";
var fnExpressionVarVariableInternal = function foo() { return 0; };
var fnArrowVarVariableInternal = () => "S";
// Function Fields
export class ExportedClass {
    // Should Error
    fnExpression = function foo() { return 0; };
    fnArrow = () => "S";
    fnExpressionProtected = function foo() { return 0; };
    fnArrowProtected = () => "S";
    static fnStaticExpression = function foo() { return 0; };
    static fnStaticArrow = () => "S";
    static fnStaticExpressionProtected = function foo() { return 0; };
    static fnStaticArrowProtected = () => "S";
    // Have annotation, so ok 
    fnExpressionOk = function foo() { return 0; };
    fnArrowOK = () => "S";
    fnExpressionProtectedOk = function foo() { return 0; };
    fnArrowProtectedOK = () => "S";
    static fnStaticExpressionOk = function foo() { return 0; };
    static fnStaticArrowOk = () => "S";
    static fnStaticExpressionProtectedOk = function foo() { return 0; };
    static fnStaticArrowProtectedOk = () => "S";
    // No Error not in declarations
    fnExpressionPrivate = function foo() { return 0; };
    fnArrowPrivate = () => "S";
    #fnArrow = () => "S";
    #fnExpression = function foo() { return 0; };
    static fnStaticExpressionPrivate = function foo() { return 0; };
    static fnStaticArrowPrivate = () => "S";
}
// Should error
class IndirectlyExportedClass {
    fnExpression = function foo() { return 0; };
    fnArrow = () => "S";
    static fnStaticExpression = function foo() { return 0; };
    static fnStaticArrow = () => "S";
    static fnStaticExpressionProtected = function foo() { return 0; };
    static fnStaticArrowProtected = () => "S";
    fnExpressionPrivate = function foo() { return 0; };
    fnArrowPrivate = () => "S";
    #fnArrow = () => "S";
    #fnExpression = function foo() { return 0; };
    static fnStaticExpressionPrivate = function foo() { return 0; };
    static fnStaticArrowPrivate = () => "S";
}
export const instance = new IndirectlyExportedClass();
// No Errors
class InternalClass {
    fnExpression = function foo() { return 0; };
    fnArrow = () => "S";
    static fnStaticExpression = function foo() { return 0; };
    static fnStaticArrow = () => "S";
    static fnStaticExpressionProtected = function foo() { return 0; };
    static fnStaticArrowProtected = () => "S";
    fnExpressionPrivate = function foo() { return 0; };
    fnArrowPrivate = () => "S";
    #fnArrow = () => "S";
    #fnExpression = function foo() { return 0; };
    static fnStaticExpressionPrivate = function foo() { return 0; };
    static fnStaticArrowPrivate = () => "S";
}
const internalInstance = new InternalClass();
// Function parameters
// In Function Variables - No annotations
export const fnParamExpressionConstVariable = function foo(cb = function () { }) { return 0; };
export const fnParamArrowConstVariable = (cb = () => 1) => "S";
export let fnParamExpressionLetVariable = function foo(cb = function () { }) { return 0; };
export let fnParamArrowLetVariable = (cb = () => 1) => "S";
export var fnParamExpressionVarVariable = function foo(cb = function () { }) { return 0; };
export var fnParamArrowVarVariable = (cb = () => 1) => "S";
// In Function Variables - No annotations on parameter
export const fnParamExpressionConstVariableOwnerHasReturnType = function foo(cb = function () { }) { return 0; };
export const fnParamArrowConstVariableOwnerHasReturnType = (cb = function () { }) => "S";
export let fnParamExpressionLetVariableOwnerHasReturnType = function foo(cb = function () { }) { return 0; };
export let fnParamArrowLetVariableOwnerHasReturnType = (cb = function () { }) => "S";
export var fnParamExpressionVarVariableOwnerHasReturnType = function foo(cb = function () { }) { return 0; };
export var fnParamArrowVarVariableOwnerHasReturnType = (cb = function () { }) => "S";
// No Errors
export const fnParamExpressionConstVariableOk = function foo(cb = function () { }) { return 0; };
export const fnParamArrowConstVariableOk = (cb = function () { }) => "S";
export let fnParamExpressionLetVariableOk = function foo(cb = function () { }) { return 0; };
export let fnParamArrowLetVariableOk = (cb = function () { }) => "S";
export var fnParamExpressionVarVariableOk = function foo(cb = function () { }) { return 0; };
export var fnParamArrowVarVariableOk = (cb = function () { }) => "S";
export const fnParamExpressionConstVariableInternal = function foo(cb = function () { }) { return 0; };
export const fnParamArrowConstVariableInternal = (cb = () => 1) => "S";
export let fnParamExpressionLetVariableInternal = function foo(cb = function () { }) { return 0; };
export let fnParamArrowLetVariableInternal = (cb = () => 1) => "S";
export var fnParamExpressionVarVariableInternal = function foo(cb = function () { }) { return 0; };
export var fnParamArrowVarVariableInternal = (cb = () => 1) => "S";
// In Function Fields
export class FnParamsExportedClass {
    // Should Error
    fnExpression = function foo(cb = function () { }) { return 0; };
    fnArrow = (cb = function () { }) => "S";
    fnExpressionProtected = function foo(cb = function () { }) { return 0; };
    fnArrowProtected = (cb = function () { }) => "S";
    static fnStaticExpression = function foo(cb = function () { }) { return 0; };
    static fnStaticArrow = (cb = function () { }) => "S";
    static fnStaticExpressionProtected = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowProtected = (cb = function () { }) => "S";
    // Have annotation on owner
    fnExpressionMethodHasReturn = function foo(cb = function () { }) { return 0; };
    fnArrowMethodHasReturn = (cb = function () { }) => "S";
    fnExpressionProtectedMethodHasReturn = function foo(cb = function () { }) { return 0; };
    fnArrowProtectedMethodHasReturn = (cb = function () { }) => "S";
    static fnStaticExpressionMethodHasReturn = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowMethodHasReturn = (cb = function () { }) => "S";
    static fnStaticExpressionProtectedMethodHasReturn = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowProtectedMethodHasReturn = (cb = function () { }) => "S";
    // Have annotation only on parameter
    fnExpressionOnlyOnParam = function foo(cb = function () { }) { return 0; };
    fnArrowOnlyOnParam = (cb = function () { }) => "S";
    fnExpressionProtectedOnlyOnParam = function foo(cb = function () { }) { return 0; };
    fnArrowProtectedOnlyOnParam = (cb = function () { }) => "S";
    static fnStaticExpressionOnlyOnParam = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowOnlyOnParam = (cb = function () { }) => "S";
    static fnStaticExpressionProtectedOnlyOnParam = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowProtectedOnlyOnParam = (cb = function () { }) => "S";
    // Have annotation, so ok 
    fnExpressionOk = function foo(cb = function () { }) { return 0; };
    fnArrowOK = (cb = function () { }) => "S";
    fnExpressionProtectedOk = function foo(cb = function () { }) { return 0; };
    fnArrowProtectedOK = (cb = function () { }) => "S";
    static fnStaticExpressionOk = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowOk = (cb = function () { }) => "S";
    static fnStaticExpressionProtectedOk = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowProtectedOk = (cb = function () { }) => "S";
    // No Error, not in declarations
    fnExpressionPrivate = function foo(cb = function () { }) { return 0; };
    fnArrowPrivate = (cb = function () { }) => "S";
    #fnArrow = (cb = function () { }) => "S";
    #fnExpression = function foo(cb = function () { }) { return 0; };
    static fnStaticExpressionPrivate = function foo(cb = function () { }) { return 0; };
    static fnStaticArrowPrivate = (cb = function () { }) => "S";
}


//// [isolatedDeclarationErrorsReturnTypes.d.ts]
// Function Variables
export declare const fnExpressionConstVariable: () => number;
export declare const fnArrowConstVariable: () => string;
export declare let fnExpressionLetVariable: () => number;
export declare let fnArrowLetVariable: () => string;
export declare var fnExpressionVarVariable: () => number;
export declare var fnArrowVarVariable: () => string;
// No Errors
export declare const fnExpressionConstVariableOk: () => number;
export declare const fnArrowConstVariableOk: (cb?: () => void) => string;
export declare let fnExpressionLetVariableOk: () => number;
export declare let fnArrowLetVariableOk: (cb?: () => void) => string;
export declare var fnExpressionVarVariableOk: () => number;
export declare var fnArrowVarVariableOk: (cb?: () => void) => string;
// Function Fields
export declare class ExportedClass {
    #private;
    // Should Error
    fnExpression: () => number;
    fnArrow: () => string;
    protected fnExpressionProtected: () => number;
    protected fnArrowProtected: () => string;
    static fnStaticExpression: () => number;
    static fnStaticArrow: () => string;
    protected static fnStaticExpressionProtected: () => number;
    protected static fnStaticArrowProtected: () => string;
    // Have annotation, so ok 
    fnExpressionOk: () => number;
    fnArrowOK: () => string;
    protected fnExpressionProtectedOk: () => number;
    protected fnArrowProtectedOK: () => string;
    static fnStaticExpressionOk: () => number;
    static fnStaticArrowOk: () => string;
    protected static fnStaticExpressionProtectedOk: () => number;
    protected static fnStaticArrowProtectedOk: () => string;
    // No Error not in declarations
    private fnExpressionPrivate;
    private fnArrowPrivate;
    private static fnStaticExpressionPrivate;
    private static fnStaticArrowPrivate;
}
// Should error
declare class IndirectlyExportedClass {
    #private;
    fnExpression: () => number;
    fnArrow: () => string;
    static fnStaticExpression: () => number;
    static fnStaticArrow: () => string;
    protected static fnStaticExpressionProtected: () => number;
    protected static fnStaticArrowProtected: () => string;
    private fnExpressionPrivate;
    private fnArrowPrivate;
    private static fnStaticExpressionPrivate;
    private static fnStaticArrowPrivate;
}
export declare const instance: IndirectlyExportedClass;
// Function parameters
// In Function Variables - No annotations
export declare const fnParamExpressionConstVariable: (cb?: () => void) => number;
export declare const fnParamArrowConstVariable: (cb?: () => number) => string;
export declare let fnParamExpressionLetVariable: (cb?: () => void) => number;
export declare let fnParamArrowLetVariable: (cb?: () => number) => string;
export declare var fnParamExpressionVarVariable: (cb?: () => void) => number;
export declare var fnParamArrowVarVariable: (cb?: () => number) => string;
// In Function Variables - No annotations on parameter
export declare const fnParamExpressionConstVariableOwnerHasReturnType: (cb?: () => void) => number;
export declare const fnParamArrowConstVariableOwnerHasReturnType: (cb?: () => void) => string;
export declare let fnParamExpressionLetVariableOwnerHasReturnType: (cb?: () => void) => number;
export declare let fnParamArrowLetVariableOwnerHasReturnType: (cb?: () => void) => string;
export declare var fnParamExpressionVarVariableOwnerHasReturnType: (cb?: () => void) => number;
export declare var fnParamArrowVarVariableOwnerHasReturnType: (cb?: () => void) => string;
// No Errors
export declare const fnParamExpressionConstVariableOk: (cb?: () => void) => number;
export declare const fnParamArrowConstVariableOk: (cb?: () => void) => string;
export declare let fnParamExpressionLetVariableOk: (cb?: () => void) => number;
export declare let fnParamArrowLetVariableOk: (cb?: () => void) => string;
export declare var fnParamExpressionVarVariableOk: (cb?: () => void) => number;
export declare var fnParamArrowVarVariableOk: (cb?: () => void) => string;
export declare const fnParamExpressionConstVariableInternal: (cb?: () => void) => number;
export declare const fnParamArrowConstVariableInternal: (cb?: () => number) => string;
export declare let fnParamExpressionLetVariableInternal: (cb?: () => void) => number;
export declare let fnParamArrowLetVariableInternal: (cb?: () => number) => string;
export declare var fnParamExpressionVarVariableInternal: (cb?: () => void) => number;
export declare var fnParamArrowVarVariableInternal: (cb?: () => number) => string;
// In Function Fields
export declare class FnParamsExportedClass {
    #private;
    // Should Error
    fnExpression: (cb?: () => void) => number;
    fnArrow: (cb?: () => void) => string;
    protected fnExpressionProtected: (cb?: () => void) => number;
    protected fnArrowProtected: (cb?: () => void) => string;
    static fnStaticExpression: (cb?: () => void) => number;
    static fnStaticArrow: (cb?: () => void) => string;
    protected static fnStaticExpressionProtected: (cb?: () => void) => number;
    protected static fnStaticArrowProtected: (cb?: () => void) => string;
    // Have annotation on owner
    fnExpressionMethodHasReturn: (cb?: () => void) => number;
    fnArrowMethodHasReturn: (cb?: () => void) => string;
    protected fnExpressionProtectedMethodHasReturn: (cb?: () => void) => number;
    protected fnArrowProtectedMethodHasReturn: (cb?: () => void) => string;
    static fnStaticExpressionMethodHasReturn: (cb?: () => void) => number;
    static fnStaticArrowMethodHasReturn: (cb?: () => void) => string;
    protected static fnStaticExpressionProtectedMethodHasReturn: (cb?: () => void) => number;
    protected static fnStaticArrowProtectedMethodHasReturn: (cb?: () => void) => string;
    // Have annotation only on parameter
    fnExpressionOnlyOnParam: (cb?: () => void) => number;
    fnArrowOnlyOnParam: (cb?: () => void) => string;
    protected fnExpressionProtectedOnlyOnParam: (cb?: () => void) => number;
    protected fnArrowProtectedOnlyOnParam: (cb?: () => void) => string;
    static fnStaticExpressionOnlyOnParam: (cb?: () => void) => number;
    static fnStaticArrowOnlyOnParam: (cb?: () => void) => string;
    protected static fnStaticExpressionProtectedOnlyOnParam: (cb?: () => void) => number;
    protected static fnStaticArrowProtectedOnlyOnParam: (cb?: () => void) => string;
    // Have annotation, so ok 
    fnExpressionOk: (cb?: () => void) => number;
    fnArrowOK: (cb?: () => void) => string;
    protected fnExpressionProtectedOk: (cb?: () => void) => number;
    protected fnArrowProtectedOK: (cb?: () => void) => string;
    static fnStaticExpressionOk: (cb?: () => void) => number;
    static fnStaticArrowOk: (cb?: () => void) => string;
    protected static fnStaticExpressionProtectedOk: (cb?: () => void) => number;
    protected static fnStaticArrowProtectedOk: (cb?: () => void) => string;
    // No Error, not in declarations
    private fnExpressionPrivate;
    private fnArrowPrivate;
    private static fnStaticExpressionPrivate;
    private static fnStaticArrowPrivate;
}
export {};

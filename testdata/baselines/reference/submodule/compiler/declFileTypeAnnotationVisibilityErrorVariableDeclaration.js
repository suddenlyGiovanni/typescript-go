//// [tests/cases/compiler/declFileTypeAnnotationVisibilityErrorVariableDeclaration.ts] ////

//// [declFileTypeAnnotationVisibilityErrorVariableDeclaration.ts]
module m {
    class private1 {
    }

    export class public1 {
    }

    // Directly using names from this module
    var x: private1;
    var y = new private1();

    export var k: private1;
    export var l = new private1();

    var x2: public1;
    var y2 = new public1();

    export var k2: public1;
    export var l2 = new public1();

    module m2 {
        export class public2 {
        }
    }

    var x3: m2.public2;
    var y3 = new m2.public2();

    export var k3: m2.public2;
    export var l3 = new m2.public2();
}


//// [declFileTypeAnnotationVisibilityErrorVariableDeclaration.js]
var m;
(function (m) {
    class private1 {
    }
    class public1 {
    }
    m.public1 = public1;
    // Directly using names from this module
    var x;
    var y = new private1();
    m.l = new private1();
    var x2;
    var y2 = new public1();
    m.l2 = new public1();
    let m2;
    (function (m2) {
        class public2 {
        }
        m2.public2 = public2;
    })(m2 || (m2 = {}));
    var x3;
    var y3 = new m2.public2();
    m.l3 = new m2.public2();
})(m || (m = {}));


//// [declFileTypeAnnotationVisibilityErrorVariableDeclaration.d.ts]
declare namespace m {
    class private1 {
    }
    export class public1 {
    }
    export var k: private1;
    export var l: private1;
    export var k2: public1;
    export var l2: public1;
    namespace m2 {
        class public2 {
        }
    }
    export var k3: m2.public2;
    export var l3: m2.public2;
    export {};
}

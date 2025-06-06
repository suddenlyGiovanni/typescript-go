//// [tests/cases/compiler/genericClasses4.ts] ////

//// [genericClasses4.ts]
// once caused stack overflow
class Vec2_T<A>
{
    constructor(public x: A, public y: A) { }
    fmap<B>(f: (a: A) => B): Vec2_T<B> {
        var x:B = f(this.x);
        var y:B = f(this.y);
        var retval: Vec2_T<B> = new Vec2_T(x, y);
        return retval;
    }
    apply<B>(f: Vec2_T<(a: A) => B>): Vec2_T<B> {
        var x:B = f.x(this.x);
        var y:B = f.y(this.y);
        var retval: Vec2_T<B> = new Vec2_T(x, y);
        return retval;
    }
}

//// [genericClasses4.js]
// once caused stack overflow
class Vec2_T {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    fmap(f) {
        var x = f(this.x);
        var y = f(this.y);
        var retval = new Vec2_T(x, y);
        return retval;
    }
    apply(f) {
        var x = f.x(this.x);
        var y = f.y(this.y);
        var retval = new Vec2_T(x, y);
        return retval;
    }
}

//// [tests/cases/compiler/arrayAssignmentTest5.ts] ////

//// [arrayAssignmentTest5.ts]
module Test {
    interface IState {
    }
    interface IToken {
        startIndex: number;
    }
    interface IStateToken extends IToken {
        state: IState;
    }
    interface ILineTokens {
        tokens: IToken[];
        endState: IState;
    }
    interface IAction {
    }
    interface IMode {
        onEnter(line:string, state:IState, offset:number):IAction;
        tokenize(line:string, state:IState, includeStates:boolean):ILineTokens;
    }
    export class Bug implements IMode {
        public onEnter(line:string, state:IState, offset:number):IAction {
            var lineTokens:ILineTokens= this.tokenize(line, state, true);
            var tokens:IStateToken[]= lineTokens.tokens;
            if (tokens.length === 0) {
                return this.onEnter(line, tokens, offset);        // <== this should produce an error since onEnter can not be called with (string, IStateToken[], offset)
            }
        }
        public tokenize(line:string, state:IState, includeStates:boolean):ILineTokens {
            return null;
        }
    }
}


//// [arrayAssignmentTest5.js]
var Test;
(function (Test) {
    class Bug {
        onEnter(line, state, offset) {
            var lineTokens = this.tokenize(line, state, true);
            var tokens = lineTokens.tokens;
            if (tokens.length === 0) {
                return this.onEnter(line, tokens, offset); // <== this should produce an error since onEnter can not be called with (string, IStateToken[], offset)
            }
        }
        tokenize(line, state, includeStates) {
            return null;
        }
    }
    Test.Bug = Bug;
})(Test || (Test = {}));

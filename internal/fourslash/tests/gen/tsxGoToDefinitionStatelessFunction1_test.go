package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestTsxGoToDefinitionStatelessFunction1(t *testing.T) {
	t.Parallel()

	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `//@Filename: file.tsx
// @jsx: preserve
// @noLib: true
 declare module JSX {
     interface Element { }
     interface IntrinsicElements {
     }
     interface ElementAttributesProperty { props; }
 }
 interface OptionPropBag {
     /*pt1*/propx: number
     propString: "hell"
     /*pt2*/optional?: boolean
 }
 declare function /*opt*/Opt(attributes: OptionPropBag): JSX.Element;
 let opt = <[|O/*one*/pt|] />;
 let opt1 = <[|Op/*two*/t|] [|pr/*p1*/opx|]={100} />;
 let opt2 = <[|Op/*three*/t|] propx={100} [|opt/*p2*/ional|] />;
 let opt3 = <[|Op/*four*/t|] wr/*p3*/ong />;`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineGoToDefinition(t, "one", "two", "three", "four", "p1", "p2")
}

<></>;function render() {

     let a: number;
     let b: number | undefined;
     let c: number = 123;c = __sveltets_any(c);;
;
<></>
return { props: {a: a , b: b , c: c} as {a: number, b: number | undefined, c?: number}, slots: {} }}

export default class {
    $$prop_def = render().props
    $$slot_def = render().slots
}

const sum = require("../core/sum")

test("test",()=>{

    const a=1;
    const b=2;
    const expected =3;

    r = sum(a,b)

    expected(r).toBe(expected);
});
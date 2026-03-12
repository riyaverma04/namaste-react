import sum from "../sum"

test("description of the test", ()=>{
    const result = sum(4,5);

    expect(result).toBe(9);

})
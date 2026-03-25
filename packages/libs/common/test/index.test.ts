describe("Default test", () => {
    test("1+1=2", () => {
        expect(1 + 1).toBe(2);
    })

    test("1+1 != 0", () => {
        expect(1 + 1).not.toBe(0);
    })
})
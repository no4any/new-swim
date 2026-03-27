import { ZodError } from "zod";
import { User } from "../../src"

describe("User tests", () => {
    test("{a:\"123\"} not to be validated as User", () => {
        expect(User.parseAsync({a: "123"})).rejects.toBeInstanceOf(ZodError);
    })
})
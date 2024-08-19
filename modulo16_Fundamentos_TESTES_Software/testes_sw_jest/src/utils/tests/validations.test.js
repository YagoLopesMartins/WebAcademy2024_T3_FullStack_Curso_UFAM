const {
    firstName,
} = require("../validations");

describe("firtName()", ()=>{
    it("should return the first name when the full name is given", ()=>{
        const fullName = "John Doe Etc";
        const result = firstName(fullName);
        expect(result).toBe("John");
    });
    it("should return the same name when no blank space is found", ()=>{
        const name = "Alice";
        const result = firstName(name);
        expect(result).toBe(name);
    });
    it("should return the first name correctly when theres blank space in the start", ()=>{
        const name = "Alice Test";
        const result = firstName(name);
        expect(result).toBe("Alice");
    });
    it("should return the first name correctly when theres blank space in the end", ()=>{
        const name = "Alice Test  ";
        const result = firstName(name);
        expect(result).toBe("Alice");
    });
});
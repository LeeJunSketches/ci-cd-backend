import * as Service from "./data-encryptor";

describe("Data encryptor service", () => {
    it("Should encrypt provided data correctly", () => {
        const data = { foods: ["apple", "hamburguer", "melon"], colors: ["green", "red", "blue", "purple"]};
        
        const encoded = Service.encryptData(data);

        const decoded = Service.decodeData(encoded);

        expect(decoded.data).toEqual(data);
    });

});

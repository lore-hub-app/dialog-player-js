import DialogReferenceContent from "./DialogReferenceContent";

describe("DialogReferenceContent.ctor", () => {
    it("correct data, should create", () => {
        // arrange
        const id = "8C3D3BCD-BCE3-49C4-8F52-9586FE1A31B9";
        const text = "value";
        const documentId = "1C3D3BCD-BCE3-49C4-8F52-9586FE1A31B9";

        // act
        const content = new DialogTextContent(id, text, documentId);

        // assert
        expect(content.id).toBe(id);
        expect(content.text).toBe(text);
        expect(content.documentId).toBe(documentId);
    });
});

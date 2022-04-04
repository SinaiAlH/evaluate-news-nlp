import { urlChecker } from '../src/client/js/urlChecker'

describe('Test: "checkUrl" should check URL to be a valid' , () => {
    it('should check URL to be valid', () => {
        const inputText = "https://orf.at/stories/3169924/";
        expect(checkUrl(inputText)).toBe(true);
    });
});
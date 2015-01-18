/**
 * Created by Moc Tran on 1/18/2015.
 */
'use strict';

describe("Test String Numbers", function () {
    it("take empty string and return 0", function () {
        var num = "";
        var expected = 0;

        var result = Add(num);

        expect(result).toBe(expected);
    });

    it("take 1 and return 1", function () {
        var num = "1";
        var expected = 1;

        var result = Add(num);

        expect(result).toBe(expected);
    });

    it("take 1,2 and return 3", function () {
        var num = "1,2";
        var expected = 3;

        var result = Add(num);

        expect(result).toBe(expected);
    });

    it("can handle new lines between numbers"), function () {
        var num = "1\n2,3";
        var expected = 6;

        var result = Add(num);

        expect(result).toBe(expected);
    }
});
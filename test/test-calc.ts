import {Calc} from "../src/calc";
import {expect} from "chai";
import "mocha";

describe('Hello function', () => {

    it('should return hello world', () => {
        const result = Calc.hash("Ivan");
        expect(result).to.equal(398);
    });

});
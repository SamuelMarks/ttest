"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const summary_1 = require("summary/summary");
const hypothesis_1 = require("../../hypothesis");
const equals_1 = require("../equals");
describe('welch', () => {
    it('testing not equal alternative', (done) => {
        const res = hypothesis_1.ttest([1, 2, 2, 2, 4], [0, 3, 3, 3, 2], {
            mu: 1,
            varEqual: false,
            alpha: 0.05,
            alternative: 'not equal'
        });
        equals_1.equals(res, {
            valid: true,
            freedom: 7.769053117782910966582,
            pValue: 0.23056556843894693,
            testValue: -1.313064328597225660644,
            confidence: [
                -1.80084417807539,
                1.80084417807539
            ]
        });
        done();
    });
    it('testing not equal alternative', (done) => {
        const res = hypothesis_1.ttest(new summary_1.Summary([1, 2, 2, 2, 4]), new summary_1.Summary([0, 3, 3, 3, 2]), {
            mu: 1,
            varEqual: false,
            alpha: 0.05,
            alternative: 'not equal'
        });
        equals_1.equals(res, {
            valid: true,
            freedom: 7.769053117782910966582,
            pValue: 0.23056556843894693,
            testValue: -1.313064328597225660644,
            confidence: [
                -1.80084417807539,
                1.80084417807539
            ]
        });
        done();
    });
    it('testing less alternative', (done) => {
        const res = hypothesis_1.ttest([1, 2, 2, 2, 4], [0, 3, 3, 3, 2], {
            mu: 1,
            varEqual: false,
            alpha: 0.05,
            alternative: 'less'
        });
        equals_1.equals(res, {
            valid: true,
            freedom: 7.769053117782910966582,
            pValue: 0.11528278421947352,
            testValue: -1.313064328597225660644,
            confidence: [
                -Infinity,
                1.4428680787589634
            ]
        });
        done();
    });
    it('testing greater alternative', (done) => {
        const res = hypothesis_1.ttest([1, 2, 2, 2, 4], [0, 3, 3, 3, 2], {
            mu: 1,
            varEqual: false,
            alpha: 0.05,
            alternative: 'greater'
        });
        equals_1.equals(res, {
            valid: true,
            freedom: 7.769053117782910966582,
            pValue: 0.8847172157805265,
            testValue: -1.313064328597225660644,
            confidence: [
                -1.4428680787589634,
                Infinity
            ]
        });
        done();
    });
});

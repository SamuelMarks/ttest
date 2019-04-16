"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const summary_1 = require("summary/summary");
const hypothesis_1 = require("../../hypothesis");
const equals_1 = require("../equals");
describe('one-data-set', () => {
    it('testing not equal alternative', (done) => {
        const res = hypothesis_1.ttest([1, 2, 2, 2, 4], {
            mu: 2,
            alpha: 0.05,
            alternative: 'not equal'
        });
        let e = undefined;
        try {
            equals_1.equals(res, {
                valid: true,
                freedom: 4,
                pValue: 0.703999999999999737099187768763,
                testValue: 0.408248290463863405808098150374,
                confidence: [
                    0.839825238683489017077477001294,
                    3.560174761316511560238495803787
                ]
            });
        }
        catch (err) {
            e = err;
        }
        finally {
            done(e);
        }
    });
    it('testing summary as argument', (done) => {
        const res = hypothesis_1.ttest(new summary_1.Summary([1, 2, 2, 2, 4]), {
            mu: 2,
            alpha: 0.05,
            alternative: 'not equal'
        });
        let e = undefined;
        try {
            equals_1.equals(res, {
                valid: true,
                freedom: 4,
                pValue: 0.703999999999999737099187768763,
                testValue: 0.408248290463863405808098150374,
                confidence: [
                    0.839825238683489017077477001294,
                    3.560174761316511560238495803787
                ]
            });
        }
        catch (err) {
            e = err;
        }
        finally {
            done(e);
        }
    });
    it('testing plain object as argument', (done) => {
        const sum = new summary_1.Summary([1, 2, 2, 2, 4]);
        const obj = ['mean', 'variance', 'size']
            .reduce((a, b) => Object.assign(a, { [b]: sum[b]() }), {});
        const res = hypothesis_1.ttest(obj, {
            mu: 2,
            alpha: 0.05,
            alternative: 'not equal'
        });
        let e = undefined;
        try {
            equals_1.equals(res, {
                valid: true,
                freedom: 4,
                pValue: 0.703999999999999737099187768763,
                testValue: 0.408248290463863405808098150374,
                confidence: [
                    0.839825238683489017077477001294,
                    3.560174761316511560238495803787
                ]
            });
        }
        catch (err) {
            e = err;
        }
        finally {
            done(e);
        }
    });
    it('testing less alternative', (done) => {
        const res = hypothesis_1.ttest([1, 2, 2, 2, 4], {
            mu: 2,
            alpha: 0.05,
            alternative: 'less'
        });
        let e = undefined;
        try {
            equals_1.equals(res, {
                valid: true,
                freedom: 4,
                pValue: 0.648000000000000131450406115619,
                testValue: 0.408248290463863405808098150374,
                confidence: [
                    -Infinity,
                    3.244387367258481980059059424093
                ]
            });
        }
        catch (err) {
            e = err;
        }
        finally {
            done(e);
        }
    });
    it('testing greater alternative', (done) => {
        const res = hypothesis_1.ttest([1, 2, 2, 2, 4], {
            mu: 2,
            alpha: 0.05,
            alternative: 'greater'
        });
        let e = undefined;
        try {
            equals_1.equals(res, {
                valid: true,
                freedom: 4,
                pValue: 0.351999999999999868549593884381,
                testValue: 0.408248290463863405808098150374,
                confidence: [
                    1.155612632741518375212308455957,
                    Infinity
                ]
            });
        }
        catch (err) {
            e = err;
        }
        finally {
            done(e);
        }
    });
});

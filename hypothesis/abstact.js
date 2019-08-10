"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractStudentT {
    constructor(_options) {
        this._options = _options;
    }
    testValue() {
        const diff = this._mean - this._options.mu;
        return diff / this._se;
    }
    pValue() {
        const t = this.testValue();
        switch (this._options.alternative) {
            case 1:
                return 1 - this._dist.cdf(t);
            case -1:
                return this._dist.cdf(t);
            case 0:
                return 2 * (1 - this._dist.cdf(Math.abs(t)));
        }
        return 0;
    }
    ;
    confidence() {
        let pm;
        switch (this._options.alternative) {
            case 1:
                pm = Math.abs(this._dist.inv(this._options.alpha)) * this._se;
                return [this._mean - pm, Infinity];
            case -1:
                pm = Math.abs(this._dist.inv(this._options.alpha)) * this._se;
                return [-Infinity, this._mean + pm];
            case 0:
                pm = Math.abs(this._dist.inv(this._options.alpha / 2)) * this._se;
                return [this._mean - pm, this._mean + pm];
        }
        return [0, 0];
    }
    ;
    valid() {
        return this.pValue() >= this._options.alpha;
    }
    freedom() {
        return this._df;
    }
}
exports.AbstractStudentT = AbstractStudentT;

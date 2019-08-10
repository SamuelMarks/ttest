import { Distribution } from 'distributions';
import { IOptions } from '../ttest.d';
export declare abstract class AbstractStudentT {
    private _options;
    _mean: number;
    _se: number;
    _df: number;
    _dist: Distribution;
    protected constructor(_options: IOptions);
    testValue(): number;
    pValue(): number;
    confidence(): [number, number];
    valid(): boolean;
    freedom(): number;
}

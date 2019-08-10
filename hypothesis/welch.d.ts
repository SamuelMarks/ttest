import { IData, IOptions } from '../ttest.d';
import { AbstractStudentT } from './abstact';
export declare class StudentT extends AbstractStudentT {
    constructor(left: IData, right: IData, options: IOptions);
}

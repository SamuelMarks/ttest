import { StudentT as OneDataSet } from './hypothesis/one-data-set';
import { StudentT as TwoDataSet } from './hypothesis/two-data-set.js';
import { IData, IOptions, ISummary } from './ttest';
import { ITestProperties } from './test/test';
export declare function ttest(left: IData | ISummary | number[] | ITestProperties, right: IData | ISummary | number[] | ITestProperties | IOptions | undefined, options?: IOptions): OneDataSet | TwoDataSet;

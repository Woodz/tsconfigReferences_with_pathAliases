import { bar } from 'bar/bar';
import { getLength } from '@common/util';

export function foo() {
    getLength(bar(true));
}
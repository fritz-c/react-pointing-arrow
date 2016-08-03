import {
    hello,
} from './my-component';

describe('getVisibleNodeCount', () => {
    it('should greet with fervor', () => {
        expect(hello('World')).toEqual('Hello World!');
    });
});

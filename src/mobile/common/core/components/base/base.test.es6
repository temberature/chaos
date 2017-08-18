import Base from './base.es6';
import chai from 'chai';

let expect = chai.expect;

describe('base 测试', function() {
    it('通过on监听事件后，callbackMap 会更新', function() {
        let instance = new Base();
        let fn = function () {};
        instance.on('event', fn);
        expect(instance.callbackMap['event'][0]).to.be.equal(fn);
    });
});
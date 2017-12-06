describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('weutils.isEmail("zhangxiaoshang66@163.com") should return true ', function () {
            assert(weutils.isEmail("zhangxiaoshang66@163.com"))
        });
        it('weutils.isEmail("zhangxiaoshang66.com") should return false ', function () {
            assert.notEqual(weutils.isEmail("zhangxiaoshang66.com"))
        });
    });

});
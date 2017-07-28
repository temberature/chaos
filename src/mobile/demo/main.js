/**
 * 页面模块入口
 * @auther 姓名
 */
require(['jquery', 'vue','mint-ui'], function($, Vue, MintUI) {
    'use strict';
    Vue.use(MintUI);
    var app = new Vue({
        el: '#app',
        data: {
            slots: [
                {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot1',
                    textAlign: 'right'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot3',
                    textAlign: 'left'
                }
            ],
            pickerValue: ''
        },
        methods: {
            handleClick: function() {
                this.$toast('Hello world!')
            },
            onValuesChange: function(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            },
            openPicker: function() {
                this.$refs.picker.open();
            }
        }
    })
    app.openPicker();
});

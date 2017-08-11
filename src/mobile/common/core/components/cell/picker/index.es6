import style1 from 'weui/style/widget/weui-tips/weui-mask.less';
import style2 from 'weui/style/widget/weui-picker/weui-picker.less';
import style3 from 'weui/style/widget/weui-animate/weui-animate.less';

import {picker, datePicker} from 'weui/js/picker/picker';
import $ from 'jquery';
import formatTime from 'core/js/formatTime';

style1.use();
style2.use();
style3.use();
let mainDatePicker = {};
$('.weui-cell_datePicker').on('click', function () {
    let me = this;
    mainDatePicker.default = datePicker({
        onChange: function(result){
            console.log(11);
            let timestamp = new Date(result[0].value, result[1].value-1, result[2].value);
            let pickerLabel = formatTime(timestamp, 'yyyy年M月dd日');
            $(me).find('.weui-input').text(pickerLabel);
            $(me).data('timestamp', timestamp);
        }
    });
    mainDatePicker.default.show();
});
let mainTimePicker = {};
$('.weui-cell_timePicker').on('click', function () {
    let me = this;
    mainTimePicker.default = timePicker({
        onChange: function (result) {
            let timestamp = new Date(0, 0, 0, result[0].value, result[1].value-1);
            let pickerLabel = formatTime(timestamp, 'hh时mm分');
            $(me).find('.weui-input').text(pickerLabel);
            $(me).data('timestamp', timestamp);
        }
    });
    mainTimePicker.default.show();
});

function timePicker(options) {
    const defaults = $.extend({
        id: 'timePicker',
        onChange: $.noop,
        onConfirm: $.noop,
        start: 0,
        end: 24
    }, options);

    let hours = [];
    for (let i = defaults.start; i < defaults.end; i++) {
        hours.push({
            label: i + '时',
            value: i
        })
    }
    let minutes = [];
    for (let i = 0; i < 60; i++) {
        minutes.push({
            label: i + '分',
            value: i
        })
    }
    return picker(hours, minutes, defaults);
}

export default {mainDatePicker};

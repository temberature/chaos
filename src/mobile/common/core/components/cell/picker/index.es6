import style1 from 'weui/style/widget/weui-tips/weui-mask.less';
import style2 from 'weui/style/widget/weui-picker/weui-picker.less';
import {picker, datePicker} from'weui/js/picker/picker';
import $ from 'jquery';

let mainDatePicker;
$('.datePicker').on('click', function () {
    let me = this;
    datePicker({
        onChange: function(result){
            console.log(11);
            $(me).find('.weui-input').text(result.join());
        }
    })
});
style1.use();
style2.use();
export default {picker, datePicker, mainDatePicker};

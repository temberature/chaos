
import Base from 'core/components/base/base'
import formatTime from 'core/js/formatTime';
import {Picker, DatePicker, TimePicker} from 'core/components/picker/picker';

class Cell extends Base {
    constructor(options = {}) {
        super();
        let me = this;
        me.parent = options.parent;
        me.options = options;
        if (options.method === 'enhance') {
            me.$body = options.$mountNode;
        }
    }
    render() {
        const me = this;

        const matches = me.$body.attr('class').match(/weui-cell_([^ ]*)/);
        if (matches) {
            me.type = matches[1];
        } else {
            me.type = 'base';
        }

        if (me.type === 'datePicker') {
            me.$input = me.$body.find('.weui-input');
            me.$body.on('click', function () {
                me.hideErrorTips();
                new DatePicker({
                    onChange: function(result){
                        me.date = result;
                    },
                    $mountNode: $('body'),
                    method: 'append'
                }).render().show();
            });
        } else if (me.type === 'timePicker') {
            me.$input = me.$body.find('.weui-input');
            me.$body.on('click', function () {
                me.hideErrorTips();
                new TimePicker({
                    onChange: function (result) {
                        me.time = result;
                    },
                    $mountNode: $('body'),
                    method: 'append'
                }).render().show();
            });
        } else if (me.type === 'switch') {
            me.$input = me.$body.find('input');
            me.$input.on('change', function () {
                me.emit('change');
            });
        } else {
            me.$input = me.$body.find('input');
            me.checkIfBlur();
        }

        return me;
    }
    validate() {
        const me = this;
        const callback = arguments[0] || me.showErrorTips.bind(me);
        if (me.$body.attr('required')) {
            let errorMsg;
            if (me.type === 'datePicker') {
                errorMsg = me.date ? false: 'empty';
            } else if (me.type === 'timePicker') {
                errorMsg = me.time ? false: 'empty';
            }else {
                errorMsg = me.$input.val() ? false: 'empty';
            }
            me.errorMsg = errorMsg;
            if (errorMsg) {
                callback(errorMsg);
                me.emit('error', {ele: me, msg: errorMsg});
                return false;
            }
        }
        return true;
    }
    showErrorTips(msg) {
        const me = this;
        const $ele = me.$body;
        const tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder') || "请输入"+$ele.find('.weui-label').text();
        if(tips) {
            me.parent.options.topTip.appear({content: tips, className: 'dwdw'});
        }

        if(me.$input.type == 'checkbox' || me.$input.type == 'radio') return;

        jQuery('body').scrollTop(me.$body.offset().top - 60);
        me.$body.addClass('weui-cell_warn');
    }
    checkIfBlur() {
        const me = this;
        if (me.$body.attr('required')) {
            me.$input
                .on('blur', function () {
                    // checkbox 和 radio 不做blur检测，以免误触发
                    if(this.type == 'checkbox' || this.type == 'radio') return;

                    const $this = $(this);
                    if($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

                    me.validate()
                })
                .on('focus', function () {
                    me.hideErrorTips();
                });
        }

        return this;
    }
    hideErrorTips() {
        const me = this;
        me.$body.removeClass('weui-cell_warn');
    }
    get value() {
        const me = this;
        let value;
        if (['datePicker', 'timePicker'].indexOf(me.type) !== -1) {
            value =  me.timestamp;
        } else if (me.type === 'switch') {
            value = me.$body.find('input').is(':checked');
        } else {
           value = me.$body.find('input').val();
        }
        return value;
    }
    set date(result) {

        let timestamp = new Date(result[0].value, result[1].value-1, result[2].value);
        let pickerLabel = formatTime(timestamp, 'yyyy年M月dd日');
        this.$input.text(pickerLabel);
        this.timestamp = timestamp;
    }
    get date() {
        return this.timestamp;
    }
    set time(result) {
        let timestamp = new Date(0, 0, 0, result[0].value, result[1].value-1);
        let pickerLabel = formatTime(timestamp, 'hh时mm分');
        this.$input.text(pickerLabel);
        this.timestamp = timestamp;
    }
    get time() {
        return this.timestamp;
    }
}
export default Cell

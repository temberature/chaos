/**
 * 页面模块入口
 * @auther 姓名
 */
require(['jquery', 'core', 'vue','mint-ui'], function($, Core, Vue, MintUI) {
	'use strict';
    Vue.use(MintUI);
    var app = new Vue({
        el: '#app',
        data: {
            startTime: {
                value: new Date(),
                error: false,
                tip: ''
            },
            endTime: {
                value: new Date('2017-08-01'),
                error: false,
                tip: ''
            },
            timePickerValue: new Date(),
            currentInput: '',
            title: {
                value: 'dwdw',
                error: false,
                tip: '请填写',
            },
            address: {
                value: 'caz',
                error: false,
                tip: '请填写',
            },
            event_url: {
                value: 'rwree',
                error: false,
                tip: '请填写',
            }
        },
        methods: {
            openTimePicker: function(type) {
                this.currentInput = type;

                this.$refs.timePicker.open();
            },
            postEvent: function () {
                var validateOptions = {
                    title: {
                        required: true
                    },
                    address: {
                        required: true
                    },
                    event_url: {
                        required: true
                    }
                };
                if (!this.validate(validateOptions)) {
                    return false;
                }
                app.$indicator.open();
                $.post('/web/bookhero/event/create', {
                    title: this.title.value,
                    startTime: Core.formatTime(this.startTime.value),
                    endTime: Core.formatTime(this.endTime.value),
                    address: this.address.value,
                    eventUrl: this.event_url.value
                }, function (rs) {
                    app.$indicator.close();
                    console.log(rs);
                    if (rs.retcode == 200) {
                        app.$messagebox.alert('活动发布成功。')
                            .then(function () {
                                document.location.reload();
                            })
                    } else {
                        app.$messagebox.alert(rs.retdesc);
                    }
                })
            },
            reset: function () {

            },
            validate: function (options) {
                for (var key in options) {
                    if (options.hasOwnProperty(key)) {
                        if (options[key].required) {
                            if (!this[key].value) {
                                this[key].error = true;
                                this[key].tip = '请填写';
                                return false;
                            }
                        }
                    }
                }
                if (!(this.startTime.value < this.endTime.value)) {
                    this.startTime.error = true;
                    this.startTime.tip = '开始时间需要小于结束时间';
                    return false;
                }
                return true;
            }
        },
        computed: {
            startTimeStr: function () {
                return Core.formatTime(this.startTime.value, 'yyyy-MM-dd hh:mm');
            },
            endTimeStr: function () {
                return Core.formatTime(this.endTime.value, 'yyyy-MM-dd hh:mm');
            }
        },
        watch: {
            timePickerValue: function (val) {
                if (this.currentInput == 'start') {
                    this.startTime.value = val;
                } else if (this.currentInput == 'end') {
                    this.endTime.value = val;
                }
            }
        }
    })
});

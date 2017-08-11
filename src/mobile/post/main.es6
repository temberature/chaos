'use strict';
// import $ from 'jquery';
import Core from 'core';
// import weui from 'weui/js/weui.min';

// weui.datePicker();
window.Core = Core;
let cellMap = Core.page.cellMap;

cellMap.get('repeat').on('change', function () {
    cellMap.get('frequency').toggle();
    cellMap.get('endDate').toggle();
});

$('.weui-btn').on('click', function () {
    if($(this).data('onclick') === 'postSeminar') {
        Core.form.validate('.creat-event-form', function () {
            
        });
        let title = cellMap.get('title').find('input').val();
        let cover = cellMap.get('cover').find('input').val();
        let note = cellMap.get('note').find('input').val();
        let club = cellMap.get('club').find('input').val();
        let startDate = cellMap.get('startDate').data('timestamp');
        let startTime = cellMap.get('startTime').data('timestamp');
        let endTime = cellMap.get('endTime').data('timestamp');
        let repeat = cellMap.get('repeat').find('input').is(':checked');
        let frequency = cellMap.get('frequency').find('select').val();
        let endDate = cellMap.get('endDate').find('.weui-input').val();
        let address = cellMap.get('address').find('input').val();
        let event_url = cellMap.get('event_url').find('input').val();

        if (startDate.getTime() < new Date().getTime()) {
            Core.form.showErrorTips({
                ele: cellMap.get('startDate')[0],
                msg: '活动日期不能为过去的日期'
            });
        }
        console.log(title);
        // $.post('/web/bookhero/event/create', {
        //     title: this.title.value,
        //     startTime: Core.formatTime(this.startTime.value),
        //     endTime: Core.formatTime(this.endTime.value),
        //     address: this.address.value,
        //     eventUrl: this.event_url.value
        // }, function (rs) {
        //     app.$indicator.close();
        //     console.log(rs);
        //     if (rs.retcode == 200) {
        //         app.$messagebox.alert('活动发布成功。')
        //             .then(function () {
        //                 document.location.reload();
        //             })
        //     } else {
        //         app.$messagebox.alert(rs.retdesc);
        //     }
        // })
    }
});

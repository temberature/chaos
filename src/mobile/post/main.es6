'use strict';
// import $ from 'jquery';
import Core from 'core';
// import weui from 'weui/js/weui.min';

// weui.datePicker();
window.Core = Core;
let form = Core.page.forms[0];
let cellMap = form.cellMap;

cellMap.get('repeat').on('change', function () {
    cellMap.get('frequency').$body.toggle();
    cellMap.get('endDate').$body.toggle();
});

$('.weui-btn').on('click', function () {
    if($(this).data('onclick') === 'postSeminar') {
        if (!form.isValid) {
            return;
        }

        let todayStart = new Date();
        todayStart.setHours(0);
        todayStart.setMinutes(0);
        todayStart.setSeconds(0);
        todayStart.setMilliseconds(0);


        if (cellMap.get('startDate').value < todayStart.getTime()) {
            cellMap.get('startDate').showErrorTips('earlier');
            return;
        }

        let pars = {};
        cellMap.forEach(function (cell, key) {
            pars[key] = cell.value;
        });
        pars.repeatFrequency = pars.repeat ? pars.frequency: 0;
        console.log($.param(pars));
        $.post('/web/bookhero/event/create', pars, function (rs) {
            // app.$indicator.close();
            console.log(rs);
            if (rs.retcode == 200) {
                alert('活动发布成功。')
            } else {
                alert(rs.retdesc);
            }
        })
    }
});

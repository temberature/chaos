import $ from  'jquery';
import {mainDatePicker as datePicker} from './picker';

let cellMap = new Map();

$.each($('.weui-cell'), function () {
    let classes = $(this).attr('class');
    let matches = classes.trim().match(/ (?!weui-)[^ ]*|^(?!weui-)[^ ]*/);

    if (matches&&matches[0]) {
        cellMap.set(matches[0], $(this));
    }

});

export default {cellMap, datePicker}

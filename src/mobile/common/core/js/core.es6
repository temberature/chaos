'use strict';
import formatTime from './formatTime';
import alert from '../components/alert';
import {picker, datePicker, mainDatePicker} from '../components/cell/picker';

let page = {
    datePicker: mainDatePicker
};
export default {formatTime, alert, datePicker, picker, page};
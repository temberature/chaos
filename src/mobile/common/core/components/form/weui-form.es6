/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

import Base from '../base/base'
import jQuery from 'jquery';
import Cell from './weui-cell/weui-cell'

class Form extends Base {
    constructor(options = {}) {
        super();
        const me = this;
        if (options.method === 'enhance') {
            me.$body = options.$mountNode;
        }

        this.options = options;
        return this;
    }
    render($mountNode, method) {
        const me = this;

        let cellMap = new Map();
        jQuery.each(me.$body.find('.weui-cell'), function () {
            let classes = jQuery(this).attr('class');
            let matches = classes.trim().match(/ (?!weui-)[^ ]*|^(?!weui-)[^ ]*/);

            if (matches&&matches[0]) {
                cellMap.set(matches[0], new Cell({
                    parent: me,
                    $mountNode: jQuery(this),
                    method: 'enhance'
                }).render());
            }

        });
        me.cellMap = cellMap;
        return this;
    }
    validate() {
        let me = this;
        let error = false;
        me.cellMap.forEach(function (cell) {
            if (!error) {
                error = !cell.validate();
            }
        });
        me.error = error;
        return me;
    }
    get isValid() {
        const me = this;
        me.validate();
        return !me.error;
    }
}

export default Form;

<#-- <#mock "mock.ftl.js"> -->
<#include "core/core.ftl">
<@docHead
	title = "发布活动"
	css = ["./main.css"]
/>
<#-- livereload -->
<@pageHead/>
<!-- 引入样式 -->
<!-- 引入组件库 -->

<div id="app">
<#-- 私有代码 -->
    <div class="creat-event-form">
        <div class="form-group">
            <label class="field">活动标题</label>
            <div class="text-input-wrapper">
                <input v-model="title.value" type="tel" class="text-input" placeholder="必填" autocomplete="off">
                <div v-show="title.error"class="tips error" v-cloak=""><span v-text="title.tip"></span></div>
            </div>

        </div>
        <div class="form-group">
            <label class="field">开始时间</label>
            <div class="text-input-wrapper">
                <div @click="openTimePicker('start')" v-text="startTimeStr" class="text-input">${fn_formatDateTime(.now, 'yyyy-MM-dd hh:mm')}</div>
                <div v-show="startTime.error" class="tips error" v-cloak=""><span v-text="startTime.tip"></span></div>
            </div>

        </div>
        <div class="form-group">
            <label class="field">结束时间</label>
            <div class="text-input-wrapper">
                <div @click="openTimePicker('end')" v-text="endTimeStr" class="text-input">${fn_formatDateTime(.now, 'yyyy-MM-dd hh:mm')}</div>
            </div>

        </div>
        <div class="form-group">
            <label class="field">活动地点</label>
            <div class="text-input-wrapper">
                <input v-model="address.value" type="text" class="text-input" placeholder="必填" autocomplete="off">
                <div v-show="address.error" class="tips error" v-cloak=""><span v-text="address.tip"></span></div>
            </div>


        </div>
        <div class="form-group">
            <label class="field">链接地址</label>
            <div class="text-input-wrapper">
                <input v-model="event_url.value" type="text" class="text-input" placeholder="选填" autocomplete="off">
                <div v-show="event_url.error" class="tips error" v-cloak=""><span v-text="event_url.tip"></span></div>
            </div>

        </div>
        <button @click="postEvent">发布活动</button>
    </div>
    <mt-datetime-picker
            ref="timePicker"
            type="datetime"
            v-model="timePickerValue">
    </mt-datetime-picker>
</div>


<@pageFoot />
<@docFoot js = ["./main.js" ] mockjax = ["./mock.ajax.js"] />

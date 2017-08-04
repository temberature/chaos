<#-- <#mock "mock.ftl.js"> -->
<#include "core/core.ftl">
<@docHead
	title = "发布活动-北京读书会"
	css = ["./main.css"]
/>
<#-- livereload -->
<@pageHead/>
<!-- 引入样式 -->
<!-- 引入组件库 -->
<div id="app">
<#-- 私有代码 -->
    <div class="creat-event-form">
        <div class="weui-cells weui-cells_form">
            <@input "阅读书籍" "必填"></@input>
            <@input "封面图片" "必填"></@input>
            <@input "活动标题" "必填"></@input>
        </div>
        <div class="weui-cells">
            <#assign options = ["奥林浦斯学院", "一起悦读俱乐部", "同道学园"]>
            <@select "发起组织" options></@select>
        </div>
        <div class="weui-cells weui-cells_form">
            <@datePicker "活动日期" "startDate"></@datePicker>
            <@timePicker "开始时间"></@timePicker>
            <@timePicker "结束时间"></@timePicker>
        </div>
        <div class="weui-cells weui-cells_form">
            <@switch "重复"></@switch>
            <#assign options = ["每周", "每两周", "每月"]>
            <@select "重复频率" options></@select>
            <@datePicker "结束日期" "endDate"></@datePicker>
        </div>
        <div class="weui-cells weui-cells_form">
            <@input "活动地点" "必填"></@input>
        </div>
        <div class="weui-cells weui-cells_form">
            <@input "链接地址" "必填"></@input>
        </div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">发布活动</a>
        </div>
</div>


<@pageFoot />
<@docFoot js = ["./main.js" ] mockjax = ["./mock.ajax.js"] />
<script>require(['./main.js#url']);</script>

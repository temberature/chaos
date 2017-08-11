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
            <@input "阅读书籍" "必填" "请输入阅读书籍" "title" "required" "《美国货币史》"></@input>
            <@input "封面图片" "必填" "请输入封面图片" "cover" "required" "https://img3.doubanio.com/lpic/s3552185.jpg"></@input>
            <@input "活动标题" "选填" "请输入活动标题" "note"></@input>
        </div>
        <div class="weui-cells">
            <@input "发起组织" "必填" "请输入阅读书籍" "club" "required" "梧桐读书沙龙"></@input>
        </div>
        <div class="weui-cells weui-cells_form">
            <@datePicker "活动日期" "startDate"></@datePicker>
            <@timePicker "开始时间" "startTime"></@timePicker>
            <@timePicker "结束时间" "endTime"></@timePicker>
            <@switch "重复" "repeat"></@switch>
            <#assign options = ["每周", "每两周", "每月"]>
            <@select "重复频率" options "frequency" "display: none;"></@select>
            <@datePicker "结束日期" "endDate" "display: none;"></@datePicker>
        </div>
        <div class="weui-cells weui-cells_form">
            <@input "活动地点" "必填" "请输入活动地点" "address" "required" "朝阳门"></@input>
        </div>
        <div class="weui-cells weui-cells_form">
            <@input "链接地址" "必填" "请输入链接地址" "event_url" "required" "https://www.douban.com/event/29217166/"></@input>
        </div>
        <div class="weui-btn-area">
            <a data-onclick="postSeminar" class="weui-btn weui-btn_primary" href="javascript:">发布活动</a>
        </div>
</div>


<@pageFoot />
<@docFoot js = ["./main.js" ] mockjax = ["./mock.ajax.js"] />
<script>require(['./main.js#url']);</script>

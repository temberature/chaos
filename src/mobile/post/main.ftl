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
    <div class="create-event-form weui-form">
        <div class="weui-cells weui-cells_form">
            <@input label="阅读书籍" placeholder="必填" class="title" value="《美国货币史》" propertys="required"></@input>
            <@input label="封面图片" placeholder="必填" class="cover" value="https://img3.doubanio.com/lpic/s3552185.jpg" propertys="required"></@input>
            <@input label="活动标题" placeholder="选填" class="note"></@input>
        </div>
        <div class="weui-cells">
            <@input label="发起组织" placeholder="必填" class="club" value="梧桐读书沙龙" propertys="required"></@input>
        </div>
        <div class="weui-cells weui-cells_form">
            <@datePicker label="活动日期" class="startDate" placeholder="年／月／日" propertys="required earlierTips='活动日期不能早于今天'"></@datePicker>
            <@timePicker label="开始时间" class="startTime" placeholder="时／分" propertys="required"></@timePicker>
            <@timePicker label="结束时间" class="endTime" placeholder="时／分"></@timePicker>
            <@switch label="重复" class="repeat"></@switch>
            <#assign options = ["每周", "每两周", "每月"]>
            <@select label="重复频率" options=options class="frequency" style="display: none;"></@select>
            <@datePicker label="结束日期" class="endDate" placeholder="年／月／日" style="display: none;"></@datePicker>
        </div>
        <div class="weui-cells weui-cells_form">
            <@input label="活动地点" placeholder="必填" class="address" value="朝阳门" propertys="required"></@input>
        </div>
        <div class="weui-cells weui-cells_form">
            <@input label="链接地址" placeholder="必填" class="event_url" value="https://www.douban.com/event/29217166/" propertys="required"></@input>
        </div>
        <div class="weui-btn-area">
            <a data-onclick="postSeminar" class="weui-btn weui-btn_primary" href="javascript:">发布活动</a>
        </div>
</div>


<@pageFoot />
<@docFoot js = ["./main.js" ] mockjax = ["./mock.ajax.js"] />
<script>require(['./main.js#url']);</script>

<#-- <#mock "mock.ftl.js"> -->
<#include "core/core.ftl">
<@docHead 
	title = "标题"
	css = ["./main.css"]
/>
<#-- livereload -->
<@pageHead/>

<#-- 私有代码 -->
内容
<img src="core/img/oglogo.png#url" alt="">
<div id="app">
    <mt-button @click.native="handleClick">按钮</mt-button>
    <mt-progress :value="20" :bar-height="5"></mt-progress>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    <mt-datetime-picker
            ref="picker"
            type="datetime"
            v-model="pickerValue">
    </mt-datetime-picker>
</div>
<@pageFoot />
<@docFoot js = [ "./main.js" ] mockjax = ["./mock.ajax.js"] />

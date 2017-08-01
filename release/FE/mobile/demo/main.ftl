<#-- <#mock "mock.ftl.js"> -->
<#include "../common/core/core.ftl">
<@docHead 
	title = "标题"
	css=["//60.205.223.68:8080/cdn/mobile/demo/main.d41d8cd98f.css"]
/>
<#-- livereload -->
<@pageHead/>

<#-- 私有代码 -->
内容
<img src="//60.205.223.68:8080/cdn/mobile/common/core/img/oglogo.dc2e89c228.png" alt="">
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
<@docFoot js=["//60.205.223.68:8080/cdn/mobile/demo/main.98b3bcdd15.js"] mockjax=["//60.205.223.68:8080/cdn/mobile/demo/mock.ajax.cb71dd68ed.js"] />

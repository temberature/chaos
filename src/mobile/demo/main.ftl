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
<@pageFoot />
<@docFoot js = [ "./main.js" ] mockjax = ["./mock.ajax.js"] />

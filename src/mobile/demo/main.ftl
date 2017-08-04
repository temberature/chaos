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
<a href="javascript:;" class="btn btn_default">发布活动</a>
<a href="javascript:;" class="btn btn_default btn_disabled">发布活动</a>
<a href="javascript:;" class="btn btn_primary">发布活动</a>
<a href="javascript:;" class="btn btn_primary btn_disabled">发布活动</a>
<@pageFoot />
<@docFoot js = [ "./main.js" ] mockjax = ["./mock.ajax.js"] />

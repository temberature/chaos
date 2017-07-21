<#-- <#mock "mock.ftl.js"> -->
<#include "../common/core/core.ftl">
<@docHead 
	title = "标题"
	css=["//60.205.223.68:8080/cdn/mobile/post/main.68a824300a.css"]
/>
<#-- livereload -->
<@pageHead/>

<#-- 私有代码 -->
<form class="creat-event-form" action="">
    <div class="form-group">
        <label class="field">活动标题</label>
        <input type="text" class="text-input" required="" placeholder="必填" autocomplete="off">
    </div>
    <div class="form-group">
        <label class="field">开始时间</label>
        <input type="text" class="text-input" required="" placeholder="必填" autocomplete="off">
    </div>
    <div class="form-group">
        <label class="field">结束时间</label>
        <input type="text" class="text-input" required="" placeholder="必填" autocomplete="off">
    </div>
    <div class="form-group">
        <label class="field">活动地点</label>
        <div>
            <select name="" id="">
                <option value="">北京</option>
                <option value="">2</option>
            </select>
            <select name="" id="">
                <option value="">北京</option>
                <option value="">2</option>
            </select>
            <input type="text" class="text-input" required="" placeholder="必填" autocomplete="off">
        </div>

    </div>
    <div class="form-group">
        <label class="field">链接地址</label>
        <input type="text" class="text-input" required="" placeholder="必填" autocomplete="off">
    </div>
    <button>创建活动</button>
</form>
<@pageFoot />
<@docFoot js=["//60.205.223.68:8080/cdn/mobile/post/main.b9dc976e9d.js"] mockjax=["//60.205.223.68:8080/cdn/mobile/post/mock.ajax.cb71dd68ed.js"] />

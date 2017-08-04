<#include "./picker/main.ftl">
<#macro input label placeholder>
<div class="weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">${label}</label></div>
    <div class="weui-cell__bd">
        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="${placeholder}">
    </div>
</div>
</#macro>
<#macro select label options>
<div class="weui-cell weui-cell_select weui-cell_select-after">
    <div class="weui-cell__hd">
        <label for="" class="weui-label">${label}</label>
    </div>
    <div class="weui-cell__bd">
        <select class="weui-select" name="select2">
            <#list options as option>
                <option value="${option?index}">${option}</option>
            </#list>
        </select>
    </div>
</div>
</#macro>
<#macro switch label>
<div class="weui-cell weui-cell_switch">
    <div class="weui-cell__bd">${label}</div>
    <div class="weui-cell__ft">
        <input class="weui-switch" type="checkbox">
    </div>
</div>
</#macro>
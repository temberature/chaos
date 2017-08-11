<#include "./picker/main.ftl">
<#macro input label placeholder emptyTips class="" required="" value="">
<div class="${class} weui-cell">
    <div class="weui-cell__hd"><label class="weui-label">${label}</label></div>
    <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="${placeholder}" ${required} emptyTips="${emptyTips}" value="${value}">
    </div>
</div>
</#macro>
<#macro select label options class="" style="">
<div class="${class} weui-cell weui-cell_select weui-cell_select-after" style="${style}">
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
<#macro switch label class=''>
<div class="${class} weui-cell weui-cell_switch">
    <div class="weui-cell__bd">${label}</div>
    <div class="weui-cell__ft">
        <input class="weui-switch" type="checkbox">
    </div>
</div>
</#macro>
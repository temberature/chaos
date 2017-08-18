<#macro input label placeholder emptyTips="" class="" propertys="" value="">
<div class="${class} weui-cell" ${propertys}>
    <div class="weui-cell__hd"><label class="weui-label">${label}</label></div>
    <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="${placeholder}" value="${value}">
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
<#macro datePicker label class='' placeholder="" propertys="" style="">
<div class="${class} weui-cell_datePicker weui-cell" ${propertys} style="${style}">
    <div class="weui-cell__hd"><label for="" class="weui-label">${label}</label></div>
    <div class="weui-cell__bd">
        <div class="weui-input">${placeholder}</div>
    </div>
</div>
</#macro>
<#macro timePicker label placeholder="" class='' propertys="" style="">
<div class="${class} weui-cell_timePicker weui-cell" ${propertys} style="${style}">
    <div class="weui-cell__hd"><label for="" class="weui-label">${label}</label></div>
    <div class="weui-cell__bd">
        <div class="weui-input">${placeholder}</div>
    </div>
</div>
</#macro>
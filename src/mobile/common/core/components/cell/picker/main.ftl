<#macro datePicker label name>
<div class="datePicker weui-cell">
    <div class="weui-cell__hd"><label for="" class="weui-label">${label}</label></div>
    <div class="weui-cell__bd">
        <div id="${name}" class="weui-input"></div>
    </div>
</div>
</#macro>
<#macro timePicker label>
<div class="weui-cell">
    <div class="weui-cell__hd"><label for="" class="weui-label">${label}</label></div>
    <div class="weui-cell__bd">
        <input class="weui-input" type="datetime-local" value="" placeholder="">
    </div>
</div>
</#macro>
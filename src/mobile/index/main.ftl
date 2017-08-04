<#-- <#mock "mock.ftl.js"> -->
<#include "core/core.ftl">
<@docHead
title =  "读书会"
css = ["./main.css"]
/>
<#-- livereload -->
<@pageHead/>
<link href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css" rel="stylesheet">
<#-- 私有代码 -->
<div class="m-header">
    <div class="area">
        <i class="material-icons">place</i>
        北京
    </div>
    <div class="today">
        <i class="material-icons">today</i>
    ${fn_formatDateTime(.now, "M月d日, E")}
    </div>
</div>

<#list data.weeks as week>
<div class="m-week">
    <div class="neo-category" data-path="3">
        <div>
            <div class="neo-category-content">
                <#if  week.order == 0>
                ${"本周"}
                <#elseif week.order == 1>
                ${"下周"}
                <#elseif week.order == 2>
                ${"下下周"}
                <#else>
                ${"＋" + week.order + "周"}
                </#if>
            </div>
        </div>
    </div>

    <#list week.days as day>
        <#if fn_formatDateTime(day.date, "yyyy-MM-dd") == fn_formatDateTime(.now, "yyyy-MM-dd")>
        <div class="m-day today">
        <#else>
        <div class="m-day">
        </#if>
        <div class="date">
        ${fn_formatDateTime(day.date, "M月dd日, E")}
        </div>
        <#list day.events as event>
            <a href="${event.eventUrl}">
                <div class="event">

                    <div class="detail">
                        <div class="title">
                        ${event.title}
                        </div>
                        <div class="note">
                            ${event.note}
                        </div>
                        <div class="club">
                            <img class="logo" src="${event.logo}" alt="">
                            ${event.club}
                        </div>
                        <div class="time">
                            <i class="material-icons">schedule</i>
                        ${fn_formatDateTime(event.startTime, "HH:mm")}-<#t>
                            <#if event.endTime??><#t>
                            ${fn_formatDateTime(event.endTime, "HH:mm")}<#t>
                            </#if>
                        </div>

                        <div class="place">
                            <i class="material-icons">place</i>
                        ${event.address}
                        </div>
                    </div>
                    <div class="cover">
                        <img src="${event.img}" alt="">
                    </div>
                </div>
            </a>
        </#list>
    </div>
    </#list>
</div>

</#list>






<@pageFoot />
<@docFoot js = [ "./main.js" ] mockjax = ["./mock.ajax.js"] useFtlData = true/>

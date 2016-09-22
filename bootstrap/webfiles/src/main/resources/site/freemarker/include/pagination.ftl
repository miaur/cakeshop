<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#include "../include/imports.ftl">
<#if pageable??>
<div class="clear"></div>
    <@hst.setBundle basename="essentials.pagination"/>
<div class="pages">
<#--<li class="disabled">-->
<#--<a href="#">${pageable.total}-->
<#--&nbsp;<@fmt.message key="results.indication" var="indication"/>${indication?html}</a>-->
<#--</li>-->
    <#if pageable.totalPages gt 1>
        <#list pageable.pageNumbersArray as pageNr>
            <@hst.renderURL var="pageUrl">
                <@hst.param name="page" value="${pageNr}"/>
                <@hst.param name="pageSize" value="${pageable.pageSize}"/>
            </@hst.renderURL>
            <@hst.renderURL var="pageUrlPrevious">
                <@hst.param name="page" value="${pageable.previousPage}"/>
                <@hst.param name="pageSize" value="${pageable.pageSize}"/>
            </@hst.renderURL>
            <@hst.renderURL var="pageUrlNext">
                <@hst.param name="page" value="${pageable.nextPage}"/>
                <@hst.param name="pageSize" value="${pageable.pageSize}"/>
            </@hst.renderURL>
            <#if (pageNr_index==0)>
                <#if pageable.previous>
                    <a class="prev" href="${pageUrlPrevious}"
                       alt="<@fmt.message key="page.previous" var="prev"/>${prev?html}">&nbsp;</a>
                <#else>
                    <a class="prev disabled" alt="<@fmt.message key="page.previous" var="prev"/>${prev?html}">&nbsp;</a>
                </#if>
            </#if>
            <#if pageable.currentPage == pageNr>
                <a class="selected" href="#">${pageNr}</a>
            <#else >
                <a href="${pageUrl}">${pageNr}</a>
            </#if>
            <#if !pageNr_has_next>
                <#if pageable.next>
                    <a class="next" href="${pageUrlNext}" alt="<@fmt.message key="page.next" var="next"/>${next?html}">
                        &nbsp;</a>
                <#else>
                    <a class="next disabled" alt="<@fmt.message key="page.next" var="next"/>${next?html}">&nbsp;</a>
                </#if>
            </#if>
        </#list>
    </#if>
</div>
</#if>


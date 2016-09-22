<#include "../include/imports.ftl">
<#assign  security=JspTaglibs["http://www.springframework.org/security/tags"] />
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="org.cakeshop.beans.Productdocument" -->
<#-- @ftlvariable name="servletRequest" type="javax.servlet.http.HttpServletRequest" -->

<div class="clear padding40"></div>
<section class="container clearfix">
    <header class="container page_info clearfix">
        <h1 class="regular brown bottom_line"><@fmt.message key="our.cakes.and.coockies"/></h1>
        <div class="clear"></div>
    </header>
<#if pageable?? && pageable.items?has_content>
    <div class="container">
        <#--<div class="toogle_box">-->
            <#--<div class="toggle opened_toggle">-->
                <#--<div class="icon"></div>-->
                <#--Filter-->
            <#--</div>-->
            <#--<div class="toggle_container">-->
                <#--<input type="text"/>-->
                <#--<select>-->
                    <#--<option>Cakes</option>-->
                    <#--<option>Icecreams</option>-->
                    <#--<option>Coockies</option>-->
                <#--</select>-->
                <#--<input type="text"/>-->
                <#--<input type="text"/>-->
                <#--<a class="button green">Search</a>-->
            <#--</div>-->
        <#--</div>-->
        <div class="filter">
            <ul>
                <li><a href="javascript:void(0);" id="all" class="selected"><@fmt.message key="everything"/></a></li>
                <li><a href="javascript:void(0);" id="cake"><@fmt.message key="cakes"/></a></li>
                <li><a href="javascript:void(0);" id="cookie"><@fmt.message key="coockies"/></a></li>
                <li><a href="javascript:void(0);" id="ice"><@fmt.message key="icecreams"/></a></li>
            </ul>
        </div>
    </div>
    <div class="clear padding20"></div>
    <div class="portfolio_1_4">
        <ul id="list">
            <#list pageable.items as item>
                <@hst.link var="link" hippobean=item/>
                <li id="id-${item_index + 1}" class="${item.typeofcookie}">
                    <span class="image">
                        <#if item.image??>
                            <@hst.link var="imgThumb" hippobean=item.image.portfoliofour />
                            <@hst.link var="img" hippobean=item.image />
                        </#if>
                        <a href="${img}" data-rel="prettyPhoto" class="img-thumb">
                            <img class="portfolio_image" src="${imgThumb}" alt=""/>
                        </a>
                    </span>
                    <span class="title"><a href="${link}">${item.title?html}</a></span>
                    <#if item.price??>
                        <div class="productpriceinfo">
                            <span class="price"><@fmt.message key="price" />: <@fmt.formatNumber value="${item.price}" type="currency" /></span>
                            <@security.authorize access="isAuthenticated()">
                                <span class="addtocart"><a class="button navy"><@fmt.message key="add.to.cart"/></a></span>
                            </@security.authorize>
                            <@security.authorize access="!isAuthenticated()">
                                <span class="addtocart"><a href="/login" class="button navy"><@fmt.message key="add.to.cart"/></a></span>
                            </@security.authorize>
                        </div>
                    <#else>
                        <div class="productpriceinfo"><span class="price"><@fmt.message key="out.of.stock"/></span></div>
                    </#if>
                    <span class="clear padding15"></span>
                </li>
            </#list>
        </ul>
        <div class="clear"></div>
    </div>

    <#if cparam.showPagination>
        <#include "../include/pagination.ftl">
    </#if>
    <@hst.headContribution category="htmlBodyEnd">
        <script type="text/javascript" src="<@hst.webfile path="/js/portfolio-filter.js"/>"></script>
    </@hst.headContribution>
    <@hst.headContributions categoryExcludes="htmlBodyEnd, scripts" xhtml=true/>
<#-- @ftlvariable name="editMode" type="java.lang.Boolean"-->
<#elseif editMode>
    <img src="<@hst.link path='/images/essentials/catalog-component-icons/generic-list.png'/>"> Click to edit list
</#if>

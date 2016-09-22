<#include "../include/imports.ftl">

<#-- @ftlvariable name="document" type="org.cakeshop.beans.Productdocument" -->
<#if document??>
    <@hst.cmseditlink hippobean=document/>
<div class="clear padding40"></div>
<section class="container clearfix">
    <header class="container page_info clearfix">
        <h1 class="regular brown bottom_line">${document.title?html}</h1>
        <div class="clear"></div>
    </header>
    <div class="content clearfix">
        <div class="portfolio_slider_container">
            <#if document.image??>
                <@hst.link var="img" hippobean=document.image />
                <img id="pp_full_res" src="${img}" alt=""/>
            <#else>

            </#if>
        </div>
        <div class="sidebar">
            <div class="padding10"></div>
            <h4 class="bottom_line regular">${document.typeofcookie?html}</h4>
            <div >
                <p>${document.description.content}</p>
            </div>
            <div class="clear padding10"></div>
            <h4 class="bottom_line regular">Compound:</h4>
            <p>${document.compound?html}</p>
            <div class="clear padding10"></div>
            <h4 class="bottom_line regular">Price:</h4>
            <p><@fmt.formatNumber value="${document.price}" type="currency" /></p>
            <div class="clear padding10"></div>
        </div>
        <div class="clear padding40"></div>
    </div>
<#-- @ftlvariable name="editMode" type="java.lang.Boolean"-->
<#elseif editMode>
    <img src="<@hst.link path="/images/essentials/catalog-component-icons/simple-content.png" />"> Click to edit Simple
    Content
    <#else>
    <#include "../cakeshopproject/pagenotfound-main.ftl">
</#if>
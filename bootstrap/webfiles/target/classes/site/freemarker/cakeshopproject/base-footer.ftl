<#include "../include/imports.ftl">

<#-- @ftlvariable name="menu" type="org.hippoecm.hst.core.sitemenu.HstSiteMenu" -->

<@hst.setBundle basename="essentials.global"/>
<@hst.include ref="container"/>
<footer class="footer_bg_bottom clearfix">
    <div class="footer_bottom container">
        <div class="col_2_3">
            <#--TODO make footer menu-->
        <#--<#if menu??>-->
            <#--<#if menu.siteMenuItems??>-->
                <#--<div class="menu">-->
                    <#--<ul>-->
                        <#--<#list menu.siteMenuItems as item>-->
                            <#--<li><a href="<@hst.link link=item.hstLink/>">${item.name?html}</a></li>-->
                        <#--</#list>-->
                    <#--</ul>-->
                <#--</div>-->
            <#--</#if>-->
        <#--</#if>-->
            <div class="clear padding20"></div>
            <p><@fmt.message key="footer.text" var="footer"/>${footer?html}</p>
        </div>
        <div class="clear padding20"></div>
    </div>
</footer>
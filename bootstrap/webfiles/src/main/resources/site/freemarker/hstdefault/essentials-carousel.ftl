<#include "../include/imports.ftl">

<#-- @ftlvariable name="item" type="org.cakeshop.beans.Banner" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="cparam" type="org.onehippo.cms7.essentials.components.info.EssentialsCarouselComponentInfo" -->
<#if pageable?? && pageable.items?has_content>
<div class="bannerbg">
    <div class="container clearfix">
        <div id="myCarousel" class="flexslider" data-ride="carousel" data-wrap="${cparam.cycle?string}">
            <ul class="slides">
                <#list pageable.items as item>
                    <li class="slides">
                        <img src="<@hst.link hippobean=item.image />" alt="${item.title?html}"/>
                        <#if item.title?? && item.title?length gt 0>
                            <p class="flex-caption">
                                <#if item.link??>
                                    <a href="<@hst.link hippobean=item.link/>">${item.title?html}</a>
                                <#else>
                                ${item.title?html}
                                </#if>
                                <#--<@hst.html hippohtml=item.content/>-->
                            </p>
                        </#if>
                    </li>
                </#list>
            </ul>
        </div>
    </div>
</div>

    <@hst.headContribution category="htmlHead">
    <link rel="stylesheet" href="<@hst.webfile  path="/css/flexslider.css"/>" type="text/css"/>
    </@hst.headContribution>

    <@hst.headContribution category="htmlBodyEnd">
    <script type="text/javascript" >
        $(window).load(function () {
            $('.flexslider').flexslider();
        });

        $(function () {
            $('#work').carouFredSel({
                width: '100%',
                auto: false,
                pagination: false,
                prev: '.prev_item',
                next: '.next_item',
                scroll: {
                    items: 1,
                    duration: ${cparam.interval?c},
                    <#if cparam.pause>
                        pauseOnHover: true
                    </#if>
                }
            });

            $("#work").touchwipe({
                wipeLeft: function () { $('.next_item').trigger('click'); },
                wipeRight: function () { $('.prev_item').trigger('click'); }
            });
        });
    </script>
    </@hst.headContribution>
<#elseif editMode>
<img src="<@hst.link path='/images/essentials/catalog-component-icons/carousel.png'/>"> Click to edit Carousel
</#if>

<#include "../include/imports.ftl">

<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="org.cakeshop.beans.Galleryimage" -->
<div class="clear padding40"></div>
<section class="container clearfix">
    <header class="container page_info clearfix">
        <h1 class="regular brown bottom_line"><@fmt.message key="gallery"/></h1>
        <div class="clear"></div>
    </header>
<#if pageable?? && pageable.items?has_content>
    <div class="clear padding20"></div>
    <div id="links" class="gallery_1_4">
        <ul id="list">
            <#list pageable.items as item>
                <@hst.link var="link" hippobean=item/>
                <li>
                    <span class="image">
                        <#if item.image??>
                            <@hst.link var="imgThumb" hippobean=item.image.portfoliofour />
                            <@hst.link var="img" hippobean=item.image />
                            <a data-gallery="" title="${item.title?html}" href="${img}" class="img-thumb">
                            <img class="portfolio_image" src="${imgThumb}" alt=""/>
                        </a>
                        </#if>
                    </span>
                    <span class="clear padding15"></span>
                </li>
            </#list>
        </ul>
        <div class="clear"></div>
    </div>
    <div id="blueimp-gallery" class="blueimp-gallery" data-use-bootstrap-modal="true">
        <!-- The container for the modal slides -->
        <div class="slides"></div>
        <!-- Controls for the borderless lightbox -->
        <h3 class="title"></h3>
        <a class="prev">‹</a>
        <a class="next">›</a>
        <a class="close">×</a>
        <a class="play-pause"></a>
        <ol class="indicator"></ol>
        <!-- The modal dialog, which will be used to wrap the lightbox content -->
        <div class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" aria-hidden="true">&times;</button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body next"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left prev">
                            <i class="glyphicon glyphicon-chevron-left"></i>
                            Previous
                        </button>
                        <button type="button" class="btn btn-primary next">
                            Next
                            <i class="glyphicon glyphicon-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <#if cparam.showPagination>
        <#include "../include/pagination.ftl">
    </#if>

    <!-- Gallery -->
    <@hst.headContribution category="htmlBodyEnd">
        <script type="text/javascript" src="<@hst.webfile path="/js/jquery.blueimp-gallery.min.js"/>"></script>
    </@hst.headContribution>
    <@hst.headContribution category="htmlBodyEnd">
        <script type="text/javascript" src="<@hst.webfile path="/js/bootstrap-image-gallery.js"/>"></script>
    </@hst.headContribution>
    <@hst.headContribution category="htmlBodyEnd">
        <script type="text/javascript" src="<@hst.webfile path="/js/forGallery/1.11.3/jquery.min.js"/>"></script>
    </@hst.headContribution>

    <@hst.headContribution category="htmlHead">
        <link rel="stylesheet" href="<@hst.webfile path="/css/blueimp-gallery.css"/>"/>
    </@hst.headContribution>
    <@hst.headContribution category="htmlHead">
        <link rel="stylesheet" href="<@hst.webfile path="/css/bootstrap.min.css"/>"/>
    </@hst.headContribution>
    <@hst.headContribution category="htmlHead">
        <link rel="stylesheet" href="<@hst.webfile path="/css/bootstrap-image-gallery.css"/>"/>
    </@hst.headContribution>
    <@hst.headContributions categoryExcludes="htmlBodyEnd, scripts, css" xhtml=true/>
    <!-- /Gallery -->
<#else>
    <#include "../cakeshopproject/pagenotfound-main.ftl">
</#if>
</section>
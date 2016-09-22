<#include "../include/imports.ftl">

<@hst.setBundle basename="essentials.pagenotfound"/>
<section class="container clearfix">
    <header class="container page_info clearfix">
        <h1 class="regular brown bottom_line">Page Not Found </h1>
        <div class="clear"></div>
    </header>
    <div class="padding20"></div>
    <div class="col_3_4">
        <img src="<@hst.webfile path="/images/404.png"/>" alt="" class="error_404">
        <div class="padding10"></div>
    </div>
</section>
<@hst.include ref="container"/>

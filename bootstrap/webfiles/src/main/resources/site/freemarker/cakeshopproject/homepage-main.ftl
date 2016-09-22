<#include "../include/imports.ftl">
<@hst.include ref="container"/>
<fmt:setBundle basename="org.example.app.Messages" />

<div class="clear padding40"></div>
<section class="container clearfix">
    <div class="col_1_3">
        <div class="features">
            <div class="title clearfix"><img src="<@hst.webfile path="/images/intuitive-icon.png"/>" alt="" class="alignleft">
                <h3><@fmt.message key="home.first.capt"/></h3>
            </div>
            <p>
                <@fmt.message key="home.first.val"/><br />
                <a class="button red" href="products"><@fmt.message key="read.more"/></a>
            </p>
        </div>
    </div>
    <div class="col_1_3">
        <div class="features">
            <div class="title clearfix"><img src="<@hst.webfile path="/images/intuitive-icon.png"/>" alt="" class="alignleft">
                <h3><@fmt.message key="home.second.capt"/></h3>
            </div>
            <p>
                <@fmt.message key="home.second.val"/><br />
                <a class="button red" href="gallery"><@fmt.message key="read.more"/></a>
            </p>
        </div>
    </div>
    <div class="col_1_3 last">
        <div class="features">
            <div class="title clearfix"><img src="<@hst.webfile path="/images/intuitive-icon.png"/>" alt="" class="alignleft">
                <h3><@fmt.message key="home.third.capt"/></h3>
            </div>
            <p>
                <@fmt.message key="home.third.val"/><br />
                <a class="button red" href="#"><@fmt.message key="read.more"/></a>
            </p>
        </div>
    </div>
</section>

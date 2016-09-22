<!doctype html>
<#include "../include/imports.ftl">
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="<@hst.webfile  path="/css/prettyPhoto.css"/>" type="text/css"/>
    <link rel="stylesheet" href="<@hst.webfile  path="/css/style.css"/>" type="text/css"/>

<#--<@hst.defineObjects/>-->
<#if hstRequest.requestContext.cmsRequest>
    <link rel="stylesheet" href="<@hst.webfile  path="/css/cms-request.css"/>" type="text/css"/>
</#if>
<@hst.headContribution>
    <script type="text/javascript" src="<@hst.webfile path="/js/jquery.min.js"/>"></script>
</@hst.headContribution>
<@hst.headContribution>
    <script type="text/javascript" src="<@hst.webfile path="/js/jquery.easing.1.3.js"/>"></script>
</@hst.headContribution>
<@hst.headContribution>
    <script type="text/javascript" src="<@hst.webfile path="/js/jquery-ui-1.8.16.custom.min.js"/>"></script>
</@hst.headContribution>
<@hst.headContribution>
    <script type="text/javascript" src="<@hst.webfile path="/js/all-in-one-min.js"/>"></script>
</@hst.headContribution>
<@hst.headContribution>
    <script type="text/javascript" src="<@hst.webfile path="/js/setup.js"/>"></script>
</@hst.headContribution>
<@hst.headContributions categoryExcludes="htmlBodyEnd, scripts" xhtml=true/>
</head>

<body>
    <@hst.include ref="menu"/>
    <@hst.include ref="main"/>
    <@hst.include ref="footer"/>
    <@hst.headContributions categoryIncludes="htmlBodyEnd, scripts" xhtml=true/>
</body>
</html>
<#include "../../include/imports.ftl">
<#assign  security=JspTaglibs["http://www.springframework.org/security/tags"] />


<div class="clear padding40"></div>
<section class="container clearfix">
    <header class="container page_info clearfix">
        <h1 class="regular brown bottom_line">Login</h1>
<@security.authorize access="!isAuthenticated()">
        <form action="/j_spring_security_check" name=f class="contact_form" method="POST">
            <p>
                <label for="login">Login: </label>
                <input class="inputText" type="text" id="login" name="username">
            </p>
            <div class="clear"></div>
            <p>
                <label for="pass">Password: </label>
                <input class="inputText" name="password" type="password" id="pass">
            </p>
            <div class="clear"></div>
            <p class="submit"> <input name="submit" class="button white" type="submit" value="<@fmt.message key="menu.login"/>"></p>
        </form>
</@security.authorize>
<@security.authorize access="isAuthenticated()">
    <label>You have been already authenticated.</label>
</@security.authorize>
        <div class="clear"></div>
    </header>
</section>

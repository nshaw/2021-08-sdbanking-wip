<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />sd-banking/static/js/2.7845a6fb.chunk.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/js/main.92dea5f1.chunk.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/js/runtime-main.b2880ffd.js"></script>

<link href="<@wp.resourceURL />sd-banking/static/css/2.de424728.chunk.css" rel="stylesheet">
<link href="<@wp.resourceURL />sd-banking/static/css/main.c1479df0.chunk.css" rel="stylesheet">

<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<@wp.info key="currentLang" var="currentLangVar" />
<@wp.currentWidget param="config" configParam="icon" var="iconString"/>
<@wp.currentWidget param="config" configParam="title" var="titleString"/>
<sd-alert-bar-icon locale="${currentLangVar}" icon="${iconString}" title="${titleString}"/>

<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />sd-banking/static/js/2.f8e874eb.chunk.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/js/main.d980080e.chunk.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/js/runtime~main.3441d7be.js"></script>


<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<@wp.info key="currentLang" var="currentLangVar" />
<@wp.currentWidget param="config" configParam="cardname" var="configName" />
<sd-seeds-card-details locale="${currentLangVar}" cardname="${configName}" />

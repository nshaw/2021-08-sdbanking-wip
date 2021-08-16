<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />sd-banking/static/seeds-card-widget/main-es2015.js?t=1001"></script>
<script src="<@wp.resourceURL />sd-banking/static/seeds-card-widget/polyfills-es2015.js?t=1001"></script>
<script src="<@wp.resourceURL />sd-banking/static/seeds-card-widget/runtime-es2015.js?t=1001"></script>
<script src="<@wp.resourceURL />sd-banking/static/seeds-card-widget/styles-es2015.js?t=1001"></script>
<script src="<@wp.resourceURL />sd-banking/static/seeds-card-widget/vendor-es2015.js?t=1001"></script>

<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<@wp.info key="currentLang" var="currentLangVar" />
<#--<@wp.currentWidget param="config" configParam="cardname" var="configName" />-->
<#--<sd-seeds-card-ng-details locale="${currentLangVar}" cardname="${configName}" />-->
<sd-seeds-card-details-ng locale="${currentLangVar}" cardname="checking" />

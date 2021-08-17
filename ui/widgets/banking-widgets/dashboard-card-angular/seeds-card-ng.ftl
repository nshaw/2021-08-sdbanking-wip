<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/main-es2015.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/polyfills-es2015.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/runtime-es2015.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/styles-es2015.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/vendor-es2015.js"></script>


<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<@wp.info key="currentLang" var="currentLangVar" />
<@wp.currentWidget param="config" configParam="cardname" var="configName" />
<sd-seeds-card-details-ng locale="${currentLangVar}" cardname="checking" />

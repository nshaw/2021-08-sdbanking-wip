<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/main-es2015.0e4007af42f69f51575e.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/main-es5.0e4007af42f69f51575e.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/polyfills-es2015.4c80bf6ff2b243e3f48f.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/polyfills-es5.79d4237275a85829e281.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/runtime-es2015.1eba213af0b233498d9d.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/runtime-es5.1eba213af0b233498d9d.js"></script>

<link href="<@wp.resourceURL />sd-banking/static/dashboard-card-angular/styles.0e4338761429b4eb16ac.css" rel="stylesheet">

<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<@wp.info key="currentLang" var="currentLangVar" />
<@wp.currentWidget param="config" configParam="cardname" var="configName" />
<sd-seeds-card-details-ng locale="${currentLangVar}" cardname="${configName}" />

<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />sd-banking/static/js/2.beb93da6.chunk.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/js/main.0ad8080d.chunk.js"></script>
<script src="<@wp.resourceURL />sd-banking/static/js/runtime~main.9698fbd6.js"></script>


<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<@wp.info key="currentLang" var="currentLangVar" />
<sd-seeds-card-transaction-table locale="${currentLangVar}" pagination-mode="pagination" />


# Endpoint Locations


Environment<br/>Classification | Communication<br/>Protocol | Version | URL
----------|----------|----------|----------
Dummy | SOAP | v1 | <a href="https://integration-pos.%domain%/soap/v1/TestService.svc?wsdl">https://integration-pos.%domain%/soap/v1/TestService.svc?wsdl</a>
Dummy | HTTP | v1 | <a href="https://integration-pos.%domain%/webapi/v1/Test">https://integration-pos.%domain%/webapi/v1/Test</a>
Sandbox | SOAP | v1 | <a href="https://integration-pos.%domain%/soap/v1/Service.svc?wsdl">https://integration-pos.%domain%/soap/v1/Service.svc?wsdl</a>
Sandbox | HTTP | v1 | <a href="https://integration-pos.%domain%/webapi/v1/">https://integration-pos.%domain%/webapi/v1/</a><br/><br/><em>See <a href="/pos/api_information/http_examples/">HTTP Examples</a> for a list of specific endpoints.</em>
PROD | SOAP | v1 | <a href="https://pos.%domain%/soap/v1/Service.svc?wsdl">https://pos.%domain%/soap/v1/Service.svc?wsdl</a>
PROD | HTTP | v1 | <a href="https://pos.%domain%/webapi/v1/">https://pos.%domain%/webapi/v1/</a>

For SOAP, both HTTP and TCP are supported and both must be secured over TLS - see <a href="/pos/security/transport_layer_security/">transport layer security</a> for more information. HTTP must also be HTTP over TLS.

All endpoints implement URL versioning, with the version included in the URL: <code>https://pos.%domain%/soap/<font style="background-color: yellow;">v1</font>/Service.svc?wsdl</code> (for SOAP) and <code>https://pos.%domain%/webapi/<font style="background-color: yellow;">v1</font>/operation</code> (for HTTP). Only v1 at this stage and a 404 "Not Found" response will be returned if no version is specified.


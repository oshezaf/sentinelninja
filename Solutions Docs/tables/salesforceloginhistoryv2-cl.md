# SalesforceLoginHistoryV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (25 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud%5CData%20Connectors%5CSalesforceAuditLogsConnector_CCF/SalesforceAuditLogs_SalesforceLoginHistoryV2_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ApiType | string | Indicates the API type, for example Soap Enterprise. |
| ApiVersion | string | Displays the API version used by the client. |
| Application | string | The application used to access the organization. |
| AuthenticationServiceId | string | The 18-character ID for an authentication service for a login event. |
| AuthMethodReference | string | The authentication method used by a third-party identification provider for an OpenID Connect single sign-on protocol. |
| Browser | string | The current browser version. |
| CipherSuite | string | The TLS cipher suite used for the login. |
| ClientVersion | string | Version of the API client. |
| CountryIso | string | The ISO 3166 code for the country where the user's IP address is physically located. |
| ForwardedForIp | string | The value in the X-Forwarded-For header of HTTP requests sent by the client. |
| LoginGeoId | string | The 18-character ID for the record of the geographic location of the user for a successful or unsuccessful login event. |
| LoginSubType | string | The type of login flow used. |
| LoginTime | datetime | Time zone is based on GMT. |
| LoginType | string | The type of login used to access the session. |
| LoginUrl | string | URL from which the login request is coming. |
| NetworkId | string | The ID of the Experience Cloud site that the user is logging in to. |
| OptionsIsGet | bool | The HTTP method used for the session login is a GET request. |
| OptionsIsPost | bool | The HTTP method used for the session login is a POST request. |
| Platform | string | Operating system on the login machine. |
| SalesforceDomain | string | Salesforce host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| SourceIp | string | The IP address of the incoming client request that first reaches Salesforce during a login. |
| Status | string | Displays the status of the attempted login. Status is either success or a reason for failure. |
| TimeGenerated | datetime | The timestamp (in UTC) when the log entry was generated. |
| TlsProtocol | string | The TLS protocol used for the login. |
| UserId | string | ID of the user logging in. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Salesforce Audit Logs (via Codeless Connector Framework)](../connectors/salesforceauditlogsconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SalesforceAuditLogs](../parsers/salesforceauditlogs.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# GraphApiAuditEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft Entra ID API requests made to Microsoft Graph API for resources in the tenant

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-graphapiauditevents-table) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/graphapiauditevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountObjectId | string | Unique identifier for the account making the request |
| ApiVersion | string | The API version of the event |
| ApplicationId | string | Unique identifier for the application |
| ClientRequestId | string | Identifier for the client request sent; if none is available, the operation identifier is used instead |
| EntityType | string | Type of object, such as a file, a process, a device, or a user |
| IdentityProvider | string | Identity provider that authenticated the subject of the token |
| IpAddress | string | IP address from which the request was made |
| Location | string | Name of the region that served the request |
| OperationId | string | Identifier for a batch of requests; the same identifier is used for all requests in a batch but if requests are non-batched, the identifier is unique per request |
| ReportId | string | Unique identifier for the event |
| RequestDuration | string | Duration of the request in milliseconds |
| RequestId | string | Unique identifier of the request |
| RequestMethod | string | HTTP method of the request |
| RequestUri | string | Uniform resource identifier (URI) of the request |
| ResponseSize | long | Size of the response in bytes |
| ResponseStatusCode | string | HTTP response status code for the request |
| Scopes | string | Scopes in token claims |
| ServicePrincipalId | string | Unique identifier of the service principal that performed the action |
| SourceSystem | string | Source system for the record |
| TargetWorkload | string | Target workload, such as Microsoft Exchange or Microsoft SharePoint, to which the API call was made |
| TenantId | string | Unique identifier representing the organization's instance of Microsoft Entra ID |
| TimeGenerated | datetime | Date and time when the record was generated |
| Timestamp | datetime | Date and time when the request was recorded |
| Type | string | Name of the table |
| UniqueTokenIdentifier | string | Unique identifier embedded in every access token and ID token that were issued |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [GraphApiAuditEvents Schema Reference (Defender XDR)](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-graphapiauditevents-table)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


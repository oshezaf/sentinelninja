# GraphApiAuditEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft Entra ID API requests made to Microsoft Graph API for resources in the tenant

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-graphapiauditevents-table) |

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/graphapiauditevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountObjectId | string | Unique identifier for the account making the request |
| ApiVersion | string | The API version of the event |
| ApplicationId | string | Unique identifier for the application |
| ClientRequestId | string | Identifier for the client request sent; if none is available, the operation identifier is used instead |
| EntityType | string | Type of object, such as a file, a process, a device, or a user, that made the request |
| IdentityProvider | string | Identity provider that authenticated the subject of the token |
| IPAddress | string | The IP address of the client from where the request was made |
| Location | string | Name of the region that served the request |
| OperationId | string | Identifier for a batch of requests; the same identifier is used for all requests in a batch but if requests are non-batched, the identifier is unique per request |
| RequestDuration | string | Duration of the request in milliseconds |
| RequestId | string | Unique identifier of the request |
| RequestMethod | string | HTTP method of the request |
| RequestUri | string | Uniform resource identifier (URI) of the request |
| ResponseSize | int | The size of the response in bytes |
| ResponseStatusCode | string | HTTP response status code for the request |
| Scopes | string | Scopes in token claims |
| ServicePrincipalId | string | The identifier for the Service Principal making the request |
| TargetWorkload | string | The target workload (for example, Microsoft.Exchange, Microsoft.SharePoint) the API call was made to |
| Timestamp | string | Date and time when the request was recorded |
| UniqueTokenIdentifier | string | Unique identifier embedded in every access token and ID token that were issued |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)


# Threat Essentials - Signins from Nord VPN Providers

This query looks for sign-in activity from NordVPN providers using the public feed leveraging the NordVPN API. Investigation of any unknown sign-in attempts from VPN providers such as Nord VPN unless it is commonly seen from users in the organization

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md) |
| **ID** | `1eaad895-7796-466b-8bf3-cec0fa78d0e4` |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityThreatEssentialSolution/Hunting%20Queries/Signins-from-NordVPN-Providers.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)


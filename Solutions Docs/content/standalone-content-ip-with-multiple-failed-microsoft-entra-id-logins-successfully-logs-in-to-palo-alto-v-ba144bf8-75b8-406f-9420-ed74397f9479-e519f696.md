# IP with multiple failed Microsoft Entra ID logins successfully logs in to Palo Alto VPN

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query creates a list of IP addresses with the number of failed login attempts to Entra ID  above a set threshold ( default of 5 ).  It then looks for any successful Palo Alto VPN logins from any of these IPs within the same timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `ba144bf8-75b8-406f-9420-ed74397f9479` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1110 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/AAD_PAVPN_Correlation.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)


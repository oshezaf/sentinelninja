# Azure Storage Access via AccountKey or SAS Token from First-Seen External IP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects Azure Blob Storage access using AccountKey or SAS token authentication from an external IP address not seen in the prior 7-day baseline for that storage account. Consistent with a stolen storage credential being used from attacker-controlled infrastructure.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md) |
| **ID** | `fed80b62-1836-4e06-a01f-7ec467d46e24` |
| **Tactics** | Exfiltration |
| **Techniques** | T1530 |
| **Required Connectors** | [AzureStorageAccount](../connectors/azurestorageaccount.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity/Hunting%20Queries/Exfiltration/StorageAccessFirstSeenExternalIP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | `CallerIpAddress startswith "10."`<br>`CallerIpAddress startswith "127."`<br>`CallerIpAddress startswith "169.254."`<br>`CallerIpAddress startswith "172."`<br>`CallerIpAddress startswith "192.168."`<br>`StatusCode in "200,206"`<br>`UserAgentHeader contains "rubrik"` | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)


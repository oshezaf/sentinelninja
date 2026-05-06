# AzureFirewallWorkbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Azure Firewall](../solutions/azure-firewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Firewall/Workbooks/AzureFirewallWorkbook.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category in "AzureFirewallApplicationRule,AzureFirewallDnsProxy,AzureFirewallNetworkRule"`<br>`Resource in ",{Resource:label}"`<br>`ResourceType == "AZUREFIREWALLS"`<br>`msg_s !has ". Rule Collection:"`<br>`msg_s !has ". Url"`<br>`msg_s !has "DNAT"`<br>`msg_s !has "No rule matched"`<br>`msg_s !has "Policy:"`<br>`msg_s !has "Reason:"`<br>`msg_s !has "Rule Collection"`<br>`msg_s !has "Rule Collection:"`<br>`msg_s !has "TLS extension was missing"`<br>`msg_s !has "Type="`<br>`msg_s !has "Url"`<br>`msg_s !has "Web Category:"`<br>`msg_s has ". No rule matched"`<br>`msg_s has ". Rule Collection:"`<br>`msg_s has ". Url"`<br>`msg_s has "DNAT"`<br>`msg_s has "Policy:"`<br>`msg_s has "Reason:"`<br>`msg_s has "Rule Collection Group"`<br>`msg_s has "Rule Collection:"`<br>`msg_s has "Type="`<br>`msg_s has "Url"`<br>`msg_s has "Web Category:"` | ? | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Azure Firewall](../solutions/azure-firewall.md)


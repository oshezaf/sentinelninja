# Azure Network Configuration Tampered by Compromised Identity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Hunts for successful Azure network configuration write and delete operations by user or service principal identities, including NSGs, firewall policies, route tables, VPN gateways, subnets, and role assignments, with UEBA and appliance-IP enrichment.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md) |
| **ID** | `455ffadf-ce55-4a0e-b339-fd3c2d67c71c` |
| **Tactics** | DefenseEvasion, Persistence, PrivilegeEscalation |
| **Techniques** | T1686.001, T1098 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md), [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity/Hunting%20Queries/DefenseEvasion/NetworkSecurityControlTampering.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) |  | ✓ | ✗ | ? |
| [`DeviceInfo`](../tables/deviceinfo.md) |  | ✓ | ✗ | ? |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)


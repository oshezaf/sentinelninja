# Check critical ports opened to the entire internet

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Discover all critical ports from a list having rules like 'Any' for sourceIp, which means that they are opened to everyone. Critial ports should not be opened to everyone, and should be filtered.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `66d494c0-233c-438a-9b1b-5fe839790d38` |
| **Tactics** | InitialAccess |
| **Required Connectors** | [WAF](../connectors/waf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AzureDiagnostics/CriticalPortsOpened.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | `Category == "NetworkSecurityGroupEvent"`<br>`conditions_destinationPortRange_s in "0-65535,137,137-137,138,138-138,139,139-139,1521,1521-1521,161,161-161,20,20-20,21,21-21,22,22-22,2483,2483-2483,25,25-25,27017,27017-27017,3020,3020-3020,3306,3306-3306,3389,3389-3389,389,389-389,445,445-445,53,53-53,5432,5432-5432"`<br>`conditions_sourceIP_s in "0.0.0.0/0,0.0.0.0/0,0.0.0.0/0"`<br>`conditions_sourcePortRange_s == "0-65535"`<br>`direction_s == "In"` | ✗ | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)


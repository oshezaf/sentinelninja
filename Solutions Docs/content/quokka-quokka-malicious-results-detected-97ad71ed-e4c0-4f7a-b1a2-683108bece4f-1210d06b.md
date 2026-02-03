# Quokka - Malicious Results Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects if there are any malicious results in the app events coming from organization devices.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Quokka](../solutions/quokka.md) |
| **ID** | `97ad71ed-e4c0-4f7a-b1a2-683108bece4f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, Discovery, Collection, CommandAndControl, Impact |
| **Techniques** | T1406, T1409, T1414, T1417, T1418, T1422, T1424, T1429, T1430, T1471, T1474, T1481, T1509, T1512, T1513, T1516, T1517, T1532, T1541, T1544, T1582, T1616, T1617, T1623, T1624, T1625, T1627, T1628, T1629, T1630, T1631, T1633, T1634, T1635, T1636, T1638, T1640, T1641, T1642, T1643 |
| **Required Connectors** | [QscoutAppEventsCCFDefinition](../connectors/qscoutappeventsccfdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Quokka/Analytic%20Rules/MaliciousResultsDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`QscoutAppEvents_CL`](../tables/qscoutappevents-cl.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Quokka](../solutions/quokka.md)


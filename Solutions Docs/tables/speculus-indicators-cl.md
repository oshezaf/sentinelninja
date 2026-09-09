# Speculus_Indicators_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (33 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence%5CData%20Connectors%5CSpeculusThreatIntel_CCF/Speculus_Table.json)

| Column Name | Type |
|:------------|:-----|
| Activity | string |
| Asn | string |
| Attribution | string |
| City | string |
| CloudProvider | dynamic |
| Confidence | int |
| ConnectionType | string |
| Country | string |
| CountryCode | string |
| Created | datetime |
| Description | string |
| FirstSeen | datetime |
| IndicatorTypes | string |
| IndicatorValue | string |
| IsBlacklisted | bool |
| IsDatacenter | bool |
| Isp | string |
| IsScanner | bool |
| IsTorNode | bool |
| IsVpnProxy | bool |
| Labels | string |
| LastSeen | datetime |
| Modified | datetime |
| Name | string |
| Org | string |
| Pattern | string |
| ResidentialProxy | dynamic |
| Risk | string |
| RiskScore | int |
| ScannerName | string |
| StixId | string |
| TimeGenerated | datetime |
| ValidFrom | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Speculus Threat Intelligence](../solutions/speculus-threat-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Speculus Threat Intelligence](../connectors/speculusthreatintel.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [Speculus Threat Intelligence](../solutions/speculus-threat-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Speculus - Network traffic to or from high-risk IP indicator](../content/speculus-threat-intelligence-speculus-network-traffic-to-or-from-high-risk-ip-indicator-a7c3f9e2-4d18-4b6a-9f0c-2e5d8b1a6c43-75ea8385.md) |  |
| [Speculus - Sign-in attempt from high-risk IP indicator](../content/speculus-threat-intelligence-speculus-sign-in-attempt-from-high-risk-ip-indicator-e1b8d4a6-9c27-45f3-8a1e-7f2c0d9b5e64-a9174920.md) |  |
| [Speculus - Threat intelligence feed outage](../content/speculus-threat-intelligence-speculus-threat-intelligence-feed-outage-c4f2a8d1-6e39-4c07-b5a2-1d8e3f7c9a25-431c164c.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


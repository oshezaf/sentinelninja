# Vaikora_SecurityAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Vaikora_SecurityAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActionType_s | string |
| AgentId_s | string |
| AlertId_s | string |
| AnomalyReason_s | string |
| AnomalyScore_d | real |
| ConfidenceScore_d | real |
| Description_s | string |
| DestinationHost_s | string |
| DestinationIP_s | string |
| FilePath_s | string |
| IsAnomaly_b | bool |
| LogHash_s | string |
| PolicyDecision_s | string |
| PolicyId_s | string |
| ProcessName_s | string |
| ResourceType_s | string |
| Severity_s | string |
| SourceHost_s | string |
| SourceIP | string |
| ThreatDetected_b | bool |
| TimeGenerated | datetime |
| Title_s | string |
| UserName_s | string |

## Solutions (1)

This table is used by the following solutions:

- [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md)

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [VaikoraSecurityCenter](../solutions/vaikorasecuritycenter.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Vaikora - Anomaly detection](../content/vaikorasecuritycenter-vaikora-anomaly-detection-c0984707-0855-430e-9c36-5e2d0d0ce56f-f798b3f0.md) |  |
| [Vaikora - Feed outage detection](../content/vaikorasecuritycenter-vaikora-feed-outage-detection-5f7789fa-0a6b-4dff-a2da-dfa4b682f3af-c7fc740b.md) |  |
| [Vaikora - High severity security alerts](../content/vaikorasecuritycenter-vaikora-high-severity-security-alerts-ac3ec787-fd49-4e93-88cc-aaa9b31061ac-e38a4327.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


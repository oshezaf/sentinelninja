# CommvaultAlertsCCF_CL

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

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ%5CData%20Connectors%5CCommvaultSecurityIQ_CCF/table_CommvaultAlertsCCF.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AnomalyType | int | Bitfield integer representing the type(s) of anomaly detected. Common bits: 64=Ransomware, 8192=VSA Attack. |
| ClientId | int | Numeric identifier of the Commvault client. |
| ClientName | string | Name of the Commvault client (endpoint) where the anomaly was detected. |
| CreateCount | int | Number of files created during the anomaly window. |
| DeleteCount | int | Number of files deleted during the anomaly window. |
| InfectedFilesCount | int | Number of files identified as infected. |
| Location | string | Location or region associated with the anomaly. |
| ModCount | int | Number of files modified during the anomaly window. |
| RefTime | long | Raw epoch timestamp (seconds) from the Commvault anomaly event. |
| RenameCount | int | Number of files renamed during the anomaly window. |
| TimeGenerated | datetime | Timestamp derived from the anomaly refTime field. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Commvault Security IQ](../solutions/commvault-security-iq.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Commvault Security IQ (via Codeless Connector Framework)](../connectors/commvaultsecurityiqconnector.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Commvault Security IQ](../solutions/commvault-security-iq.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Commvault Cloud Alert](../content/commvault-security-iq-commvault-cloud-alert-317e757e-c320-448e-8837-fc61a70fe609-276de419.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


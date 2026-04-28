# SOCPrimeAuditLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC%20Prime%20CCF%5CData%20Connectors%5CSOCPrime_ccp/SOCPrime_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| EventName | string | Event Name |
| EventProduct | string |  |
| EventType | string |  |
| EventVendor | string |  |
| HttpUserAgent | string |  |
| SourceIp | string |  |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| Uri | string |  |
| UserEmail | string |  |
| UserName | string |  |

## Solutions (1)

This table is used by the following solutions:

- [SOC Prime CCF](../solutions/soc-prime-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SOC Prime Platform Audit Logs Data Connector](../connectors/socprimeauditlogsdataconnector.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [SOC Prime CCF](../solutions/soc-prime-ccf.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Deleted a Custom Field Mapping profile](../content/soc-prime-ccf-deleted-a-custom-field-mapping-profile-a1b2c3d4-e5f6-4078-9012-3456789abcde-7649773b.md) |  |
| [Deleted a Tenant](../content/soc-prime-ccf-deleted-a-tenant-7d4a2b91-8e5c-4f2a-9d6b-3c1f0e4a5d8b-a3de424c.md) |  |
| [Successful logins to SOC Prime platform from bad IP addresses](../content/soc-prime-ccf-successful-logins-to-soc-prime-platform-from-bad-ip-addresses-f8e7d6c5-b4a3-4122-8110-0987654321fe-043a0380.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


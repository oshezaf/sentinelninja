# VMware_SDWAN_FirewallLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (36 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VMware_SDWAN_FirewallLogs_CL.json)

| Column Name | Type |
|:------------|:-----|
| actionTaken | string |
| application | string |
| attackSource | string |
| attackTarget | string |
| bytesReceived | int |
| bytesSent | int |
| category | string |
| closeReason | string |
| destination | string |
| destinationIp | string |
| destinationPort | int |
| domainName | string |
| edgeLogicalId | string |
| edgeName | datetime |
| enterpriseLogicalId | string |
| extensionHeader | string |
| firewallPolicyName | string |
| idsAlert | int |
| inputInterface | datetime |
| ipsAlert | int |
| logType | string |
| protocol | int |
| ruleId | string |
| ruleVersion | int |
| segmentLogicalId | string |
| segmentName | string |
| sessionDurationSecs | int |
| sessionId | int |
| severity | int |
| signature | string |
| signatureId | int |
| sourceIp | string |
| sourcePort | int |
| TimeGenerated | datetime |
| timestamp | datetime |
| verdict | string |

## Solutions (1)

This table is used by the following solutions:

- [VMware SASE](../solutions/vmware-sase.md)

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [VMware SASE](../solutions/vmware-sase.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VMware SD-WAN Edge - IDS/IPS Alert triggered (Search API)](../content/vmware-sase-vmware-sd-wan-edge-ids-ips-alert-triggered-search-api-44f78dbf-9f29-4ec0-aaca-ab5bf0b559af-837279e4.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)


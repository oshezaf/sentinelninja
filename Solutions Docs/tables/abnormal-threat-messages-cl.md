# ABNORMAL_THREAT_MESSAGES_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (38 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ABNORMAL_THREAT_MESSAGES_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| abxMessageId_d | real |
| abxPortalUrl_s | string |
| attachmentCount_d | real |
| attachmentNames_s | string |
| attackedParty_s | string |
| attackStrategy_s | string |
| attackType_s | string |
| attackVector_s | string |
| autoRemediated_b | bool |
| ccEmails_s | string |
| Computer | string |
| fromAddress_s | string |
| fromName_s | string |
| impersonatedParty_s | string |
| internetMessageId_s | string |
| ManagementGroupName | string |
| MG | string |
| postRemediated_b | bool |
| RawData | string |
| receivedTime_t | datetime |
| recipientAddress_s | string |
| remediationTimestamp_t | datetime |
| replyToEmails_s | string |
| returnPath_s | string |
| senderDomain_s | string |
| senderIpAddress_s | string |
| sentTime_t | datetime |
| SourceSystem | string |
| subject_s | string |
| summaryInsights_s | string |
| TenantId | string |
| threatId_g | string |
| TimeGenerated | datetime |
| toAddresses_s | string |
| Type | string |
| urlCount_d | real |
| urls_s | string |

## Solutions (1)

This table is used by the following solutions:

- [AbnormalSecurity](../solutions/abnormalsecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [AbnormalSecurity ](../connectors/abnormalsecurity.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


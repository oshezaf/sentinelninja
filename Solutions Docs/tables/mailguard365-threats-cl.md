# MailGuard365_Threats_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (32 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MailGuard365_Threats_CL.json)

| Column Name | Type |
|:------------|:-----|
| Action_s | string |
| Attachments_s | string |
| Category | string |
| CcHeader_s | string |
| CustomerTenantId_g | string |
| Email_s | string |
| ForefrontAntiSpam_s | string |
| HasAttachment_b | bool |
| HasImage_b | bool |
| HeaderMessageId_s | string |
| IsInBlackList_b | bool |
| IsInWhiteList_b | bool |
| MessageDate_t | datetime |
| MessageId_s | string |
| MessageSize_d | real |
| MicrosoftAntiSpam_s | string |
| OriginCountry_s | string |
| ReceivedDateTime_d | real |
| ReceivedHeaders_s | string |
| Recipients_s | string |
| Score_d | real |
| Sender_Domain_s | datetime |
| Sender_Email_s | real |
| SenderHeader_s | string |
| SourceSystem | string |
| Subject_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| ToHeader_s | guid |
| Type | string |
| UserId_g | string |
| Virus_b | bool |

## Solutions (1)

This table is used by the following solutions:

- [MailGuard 365](../solutions/mailguard-365.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [MailGuard 365](../connectors/mailguard365.md) |  |

---

## Content Items Using This Table (4)

### Hunting Queries (3)

**In solution [MailGuard 365](../solutions/mailguard-365.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MailGuard 365 - High Confidence Threats](../content/mailguard-365-mailguard-365-high-confidence-threats-5e3aa1a5-5b69-421e-a3ac-32b04cb10353-07810d8b.md) |  |
| [MailGuard 365 - Malware Threats](../content/mailguard-365-mailguard-365-malware-threats-daaae6ad-1fd0-4efa-b571-116689e67a20-d7393225.md) |  |
| [MailGuard 365 - Phishing Threats](../content/mailguard-365-mailguard-365-phishing-threats-ee15ed10-d355-474e-b8ad-a8bbb76f6d38-26ed447a.md) |  |

### Workbooks (1)

**In solution [MailGuard 365](../solutions/mailguard-365.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MailGuard365Dashboard](../content/mailguard-365-mailguard365dashboard-efc0fa81.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)


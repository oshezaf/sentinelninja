# MimecastEvents_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (6 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MimecastEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| mimecast_body | string |
| mimecastEventId | string |
| mimecastEventType | string |
| mimecastLogtype | string |
| mimecastSubtype | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (2)

This table is used by the following solutions:

- [Mimecast](../solutions/mimecast.md)
- [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Mimecast Security Events (via Codeless Connector Framework)](../connectors/mimecasteventsccfdefinition.md) |  |

---

## Content Items Using This Table (16)

### Analytic Rules (13)

**In solution [Mimecast](../solutions/mimecast.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast Audit - Logon Authentication Failed](../content/mimecast-mimecast-audit-logon-authentication-failed-f00197ab-491f-41e7-9e22-a7003a4c1e54-34f15bb0.md) |  |
| [Mimecast Data Leak Prevention - Hold](../content/mimecast-mimecast-data-leak-prevention-hold-8e52bcf1-4f50-4c39-8678-d9efad64e379-67109c1d.md) |  |
| [Mimecast Data Leak Prevention - Notifications](../content/mimecast-mimecast-data-leak-prevention-notifications-cfd67598-ad0d-430a-a793-027eb4dbe967-9d8dd373.md) |  |
| [Mimecast Secure Email Gateway - AV](../content/mimecast-mimecast-secure-email-gateway-av-33bf0cc9-e568-42bf-9571-c22adf7be66d-a67c05af.md) |  |
| [Mimecast Secure Email Gateway - Attachment Protect](../content/mimecast-mimecast-secure-email-gateway-attachment-protect-72bd7b0c-493c-4fa5-8a95-7f6376b6cfb2-e2569fc9.md) |  |
| [Mimecast Secure Email Gateway - Impersonation Protect](../content/mimecast-mimecast-secure-email-gateway-impersonation-protect-2ef77cef-439f-4d94-848f-3eca67510d2f-6b6e10df.md) |  |
| [Mimecast Secure Email Gateway - Internal Email Protect](../content/mimecast-mimecast-secure-email-gateway-internal-email-protect-d3bd7640-3600-49f9-8d10-6fe312e68b4f-be669a3d.md) |  |
| [Mimecast Secure Email Gateway - Spam Event Thread](../content/mimecast-mimecast-secure-email-gateway-spam-event-thread-0cda82c8-e8f0-4117-896e-a10f1b43e64a-0143cdf0.md) |  |
| [Mimecast Secure Email Gateway - URL Protect](../content/mimecast-mimecast-secure-email-gateway-url-protect-80f244cd-b0d6-404e-9aed-37f7a66eda9f-f7c07f28.md) |  |
| [Mimecast Secure Email Gateway - Virus](../content/mimecast-mimecast-secure-email-gateway-virus-d78d7352-fa5a-47d4-b48f-cb2c3252c0eb-2e268db1.md) |  |
| [Mimecast Targeted Threat Protection - Attachment Protect](../content/mimecast-mimecast-targeted-threat-protection-attachment-protect-617a55be-a8d8-49c1-8687-d19a0231056f-075f1f5f.md) |  |
| [Mimecast Targeted Threat Protection - Impersonation Protect](../content/mimecast-mimecast-targeted-threat-protection-impersonation-protect-c048fa06-0d50-4626-ae82-a6cea812d9c4-4b305002.md) |  |
| [Mimecast Targeted Threat Protection - URL Protect](../content/mimecast-mimecast-targeted-threat-protection-url-protect-952faed4-c6a6-4873-aeb9-b348e9ce5aba-ebe7c38c.md) |  |

### Workbooks (3)

**In solution [Mimecast](../solutions/mimecast.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Mimecast_Audit_Workbook](../content/mimecast-mimecast-audit-workbook-2c0dd88f.md) |  |
| [Mimecast_SEG_Workbook](../content/mimecast-mimecast-seg-workbook-c2026bf1.md) |  |
| [Mimecast_TTP_Workbook](../content/mimecast-mimecast-ttp-workbook-c40cabd0.md) |  |

## Parsers Using This Table (7)

### Other Parsers (7)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MimecastAudit](../parsers/mimecastaudit.md) | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |  |
| [MimecastCG](../parsers/mimecastcg.md) | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |  |
| [MimecastDLP](../parsers/mimecastdlp.md) | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |  |
| [MimecastEvents](../parsers/mimecastevents.md) | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |  |
| [MimecastTTPAttachment](../parsers/mimecastttpattachment.md) | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |  |
| [MimecastTTPImpersonation](../parsers/mimecastttpimpersonation.md) | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |  |
| [MimecastTTPUrl](../parsers/mimecastttpurl.md) | [MimecastEvents-CCF](../solutions/mimecastevents-ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


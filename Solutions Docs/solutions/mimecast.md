# Mimecast

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Mimecast.svg" alt="Mimecast Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Mimecast |
| **Support Tier** | Partner |
| **Support Link** | [https://mimecastsupport.zendesk.com/](https://mimecastsupport.zendesk.com/) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | Mimecast - dlapi@mimecast.com |
| **First Published** | 2024-09-10 |
| **Last Updated** | 2024-09-10 |
| **Solution Folder** | [Mimecast](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mimecast) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mimecastnorthamerica1584469118674.azure-sentinel-solution-mimecast) · Popularity: 🟢 High (85%) |

An Azure app to enable Mimecast data to be viewed using analytical tables and charts which are brought into Azure.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **5 data connector(s)**:

- [Mimecast Awareness Training](../connectors/mimecastatapi.md)
- [Mimecast Audit](../connectors/mimecastauditapi.md) 🔶
- [Mimecast Cloud Integrated](../connectors/mimecastciapi.md)
- [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md)
- [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Audit_CL`](../tables/audit-cl.md) | [Mimecast Audit](../connectors/mimecastauditapi.md) | Analytics, Workbooks |
| [`Awareness_Performance_Details_CL`](../tables/awareness-performance-details-cl.md) | [Mimecast Awareness Training](../connectors/mimecastatapi.md) | - |
| [`Awareness_SafeScore_Details_CL`](../tables/awareness-safescore-details-cl.md) | [Mimecast Awareness Training](../connectors/mimecastatapi.md) | Workbooks |
| [`Awareness_User_Data_CL`](../tables/awareness-user-data-cl.md) | [Mimecast Awareness Training](../connectors/mimecastatapi.md) | Workbooks |
| [`Awareness_Watchlist_Details_CL`](../tables/awareness-watchlist-details-cl.md) | [Mimecast Awareness Training](../connectors/mimecastatapi.md) | Workbooks |
| [`Cloud_Integrated_CL`](../tables/cloud-integrated-cl.md) | [Mimecast Cloud Integrated](../connectors/mimecastciapi.md) | Workbooks |
| [`Seg_Cg_CL`](../tables/seg-cg-cl.md) | [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md) | Analytics, Workbooks |
| [`Seg_Dlp_CL`](../tables/seg-dlp-cl.md) | [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md) | Analytics, Workbooks |
| [`Ttp_Attachment_CL`](../tables/ttp-attachment-cl.md) | [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) | Analytics, Workbooks |
| [`Ttp_Impersonation_CL`](../tables/ttp-impersonation-cl.md) | [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) | Analytics, Workbooks |
| [`Ttp_Url_CL`](../tables/ttp-url-cl.md) | [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) | Analytics, Workbooks |

## Content Items

This solution includes **30 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 13 |
| Parsers | 11 |
| Workbooks | 5 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Mimecast Audit - Logon Authentication Failed](../content/mimecast-mimecast-audit-logon-authentication-failed-f00197ab-491f-41e7-9e22-a7003a4c1e54-34f15bb0.md) | High | Discovery, InitialAccess, CredentialAccess | [`Audit_CL`](../tables/audit-cl.md) |
| [Mimecast Data Leak Prevention - Hold](../content/mimecast-mimecast-data-leak-prevention-hold-8e52bcf1-4f50-4c39-8678-d9efad64e379-67109c1d.md) | Informational | Exfiltration | [`Seg_Dlp_CL`](../tables/seg-dlp-cl.md) |
| [Mimecast Data Leak Prevention - Notifications](../content/mimecast-mimecast-data-leak-prevention-notifications-cfd67598-ad0d-430a-a793-027eb4dbe967-9d8dd373.md) | High | Exfiltration | [`Seg_Dlp_CL`](../tables/seg-dlp-cl.md) |
| [Mimecast Secure Email Gateway - AV](../content/mimecast-mimecast-secure-email-gateway-av-33bf0cc9-e568-42bf-9571-c22adf7be66d-a67c05af.md) | Informational | Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Attachment Protect](../content/mimecast-mimecast-secure-email-gateway-attachment-protect-72bd7b0c-493c-4fa5-8a95-7f6376b6cfb2-e2569fc9.md) | High | Collection, Exfiltration, Discovery, InitialAccess, Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Impersonation Protect](../content/mimecast-mimecast-secure-email-gateway-impersonation-protect-2ef77cef-439f-4d94-848f-3eca67510d2f-6b6e10df.md) | High | Discovery, LateralMovement, Collection | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Internal Email Protect](../content/mimecast-mimecast-secure-email-gateway-internal-email-protect-d3bd7640-3600-49f9-8d10-6fe312e68b4f-be669a3d.md) | High | LateralMovement, Persistence, Exfiltration | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Spam Event Thread](../content/mimecast-mimecast-secure-email-gateway-spam-event-thread-0cda82c8-e8f0-4117-896e-a10f1b43e64a-0143cdf0.md) | Low | Discovery | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - URL Protect](../content/mimecast-mimecast-secure-email-gateway-url-protect-80f244cd-b0d6-404e-9aed-37f7a66eda9f-f7c07f28.md) | High | InitialAccess, Discovery, Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Virus](../content/mimecast-mimecast-secure-email-gateway-virus-d78d7352-fa5a-47d4-b48f-cb2c3252c0eb-2e268db1.md) | Informational | Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Targeted Threat Protection - Attachment Protect](../content/mimecast-mimecast-targeted-threat-protection-attachment-protect-617a55be-a8d8-49c1-8687-d19a0231056f-075f1f5f.md) | High | InitialAccess, Discovery | [`Ttp_Attachment_CL`](../tables/ttp-attachment-cl.md) |
| [Mimecast Targeted Threat Protection - Impersonation Protect](../content/mimecast-mimecast-targeted-threat-protection-impersonation-protect-c048fa06-0d50-4626-ae82-a6cea812d9c4-4b305002.md) | High | Exfiltration, Collection, Discovery | [`Ttp_Impersonation_CL`](../tables/ttp-impersonation-cl.md) |
| [Mimecast Targeted Threat Protection - URL Protect](../content/mimecast-mimecast-targeted-threat-protection-url-protect-952faed4-c6a6-4873-aeb9-b348e9ce5aba-ebe7c38c.md) | High | InitialAccess, Discovery | [`Ttp_Url_CL`](../tables/ttp-url-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Mimecast_Audit_Workbook](../content/mimecast-mimecast-audit-workbook-2c0dd88f.md) | [`Audit_CL`](../tables/audit-cl.md) |
| [Mimecast_Awareness_Training_Workbook](../content/mimecast-mimecast-awareness-training-workbook-daf0a27a.md) | [`Awareness_SafeScore_Details_CL`](../tables/awareness-safescore-details-cl.md)<br>[`Awareness_User_Data_CL`](../tables/awareness-user-data-cl.md)<br>[`Awareness_Watchlist_Details_CL`](../tables/awareness-watchlist-details-cl.md) |
| [Mimecast_Cloud_Integrated_Workbook](../content/mimecast-mimecast-cloud-integrated-workbook-5bb9e2b3.md) | [`Cloud_Integrated_CL`](../tables/cloud-integrated-cl.md) |
| [Mimecast_SEG_Workbook](../content/mimecast-mimecast-seg-workbook-c2026bf1.md) | [`Seg_Cg_CL`](../tables/seg-cg-cl.md)<br>[`Seg_Dlp_CL`](../tables/seg-dlp-cl.md) |
| [Mimecast_TTP_Workbook](../content/mimecast-mimecast-ttp-workbook-c40cabd0.md) | [`Ttp_Attachment_CL`](../tables/ttp-attachment-cl.md)<br>[`Ttp_Impersonation_CL`](../tables/ttp-impersonation-cl.md)<br>[`Ttp_Url_CL`](../tables/ttp-url-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Mimecast-Data-Connector-Trigger-Sync](../content/mimecast-mimecast-data-connector-trigger-sync-a2cac6ba.md) | Playbook to sync timer trigger of all Mimecast data connectors. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Mimecast_AT_Performane_Detail](../parsers/mimecast-at-performane-detail.md) | - | - |
| [Mimecast_AT_Safe_Score](../parsers/mimecast-at-safe-score.md) | - | - |
| [Mimecast_AT_User_Data](../parsers/mimecast-at-user-data.md) | - | - |
| [Mimecast_AT_Watchlist](../parsers/mimecast-at-watchlist.md) | - | - |
| [Mimecast_Audit](../parsers/mimecast-audit.md) | - | - |
| [Mimecast_Cloud_Integrated](../parsers/mimecast-cloud-integrated.md) | - | - |
| [Mimecast_SEG_CG](../parsers/mimecast-seg-cg.md) | - | - |
| [Mimecast_SEG_DLP](../parsers/mimecast-seg-dlp.md) | - | - |
| [Mimecast_TTP_Attachment](../parsers/mimecast-ttp-attachment.md) | - | - |
| [Mimecast_TTP_Impersonation](../parsers/mimecast-ttp-impersonation.md) | - | - |
| [Mimecast_TTP_Url](../parsers/mimecast-ttp-url.md) | - | - |

## Release Notes

| **Version**   | **Date Modified**              | **Change History**                                                     |
|---------------|--------------------------------|------------------------------------------------------------------------|
| 3.1.0         | 29-10-2025                     | Added Log Ingestion API support in **Data Connectors**. Added Government button for support.                                                                                                                  |
| 3.0.1         | 12-02-2025                     | Updated default table for MimecastAudit to get the Connected label on **Data Connector** UI page.                                                     |
| 3.0.0         | 09-09-2024                     | Initial Solution Release                                               |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


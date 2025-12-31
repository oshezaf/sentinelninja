# Mimecast

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Mimecast |
| **Support Tier** | Partner |
| **Support Link** | [https://mimecastsupport.zendesk.com/](https://mimecastsupport.zendesk.com/) |
| **Categories** | domains |
| **First Published** | 2024-09-10 |
| **Last Updated** | 2024-09-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mimecast](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mimecast) |

## Data Connectors

This solution provides **5 data connector(s)**:

- [Mimecast Awareness Training](../connectors/mimecastatapi.md)
- [Mimecast Audit](../connectors/mimecastauditapi.md)
- [Mimecast Cloud Integrated](../connectors/mimecastciapi.md)
- [Mimecast Secure Email Gateway](../connectors/mimecastsegapi.md)
- [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md)

## Tables Reference

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
| [Mimecast Audit - Logon Authentication Failed](../content/f00197ab-491f-41e7-9e22-a7003a4c1e54.md) | High | Discovery, InitialAccess, CredentialAccess | [`Audit_CL`](../tables/audit-cl.md) |
| [Mimecast Data Leak Prevention - Hold](../content/8e52bcf1-4f50-4c39-8678-d9efad64e379.md) | Informational | Exfiltration | [`Seg_Dlp_CL`](../tables/seg-dlp-cl.md) |
| [Mimecast Data Leak Prevention - Notifications](../content/cfd67598-ad0d-430a-a793-027eb4dbe967.md) | High | Exfiltration | [`Seg_Dlp_CL`](../tables/seg-dlp-cl.md) |
| [Mimecast Secure Email Gateway - AV](../content/33bf0cc9-e568-42bf-9571-c22adf7be66d.md) | Informational | Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Attachment Protect](../content/72bd7b0c-493c-4fa5-8a95-7f6376b6cfb2.md) | High | Collection, Exfiltration, Discovery, InitialAccess, Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Impersonation Protect](../content/2ef77cef-439f-4d94-848f-3eca67510d2f.md) | High | Discovery, LateralMovement, Collection | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Internal Email Protect](../content/d3bd7640-3600-49f9-8d10-6fe312e68b4f.md) | High | LateralMovement, Persistence, Exfiltration | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Spam Event Thread](../content/0cda82c8-e8f0-4117-896e-a10f1b43e64a.md) | Low | Discovery | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - URL Protect](../content/80f244cd-b0d6-404e-9aed-37f7a66eda9f.md) | High | InitialAccess, Discovery, Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Secure Email Gateway - Virus](../content/d78d7352-fa5a-47d4-b48f-cb2c3252c0eb.md) | Informational | Execution | [`Seg_Cg_CL`](../tables/seg-cg-cl.md) |
| [Mimecast Targeted Threat Protection - Attachment Protect](../content/617a55be-a8d8-49c1-8687-d19a0231056f.md) | High | InitialAccess, Discovery | [`Ttp_Attachment_CL`](../tables/ttp-attachment-cl.md) |
| [Mimecast Targeted Threat Protection - Impersonation Protect](../content/c048fa06-0d50-4626-ae82-a6cea812d9c4.md) | High | Exfiltration, Collection, Discovery | [`Ttp_Impersonation_CL`](../tables/ttp-impersonation-cl.md) |
| [Mimecast Targeted Threat Protection - URL Protect](../content/952faed4-c6a6-4873-aeb9-b348e9ce5aba.md) | High | InitialAccess, Discovery | [`Ttp_Url_CL`](../tables/ttp-url-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Mimecast_Audit_Workbook](../content/mimecast-audit-workbook-mimecast.md) | [`Audit_CL`](../tables/audit-cl.md) |
| [Mimecast_Awareness_Training_Workbook](../content/mimecast-awareness-training-workbook-mimecast.md) | [`Awareness_SafeScore_Details_CL`](../tables/awareness-safescore-details-cl.md)<br>[`Awareness_User_Data_CL`](../tables/awareness-user-data-cl.md)<br>[`Awareness_Watchlist_Details_CL`](../tables/awareness-watchlist-details-cl.md) |
| [Mimecast_Cloud_Integrated_Workbook](../content/mimecast-cloud-integrated-workbook-mimecast.md) | [`Cloud_Integrated_CL`](../tables/cloud-integrated-cl.md) |
| [Mimecast_SEG_Workbook](../content/mimecast-seg-workbook-mimecast.md) | [`Seg_Cg_CL`](../tables/seg-cg-cl.md)<br>[`Seg_Dlp_CL`](../tables/seg-dlp-cl.md) |
| [Mimecast_TTP_Workbook](../content/mimecast-ttp-workbook-mimecast.md) | [`Ttp_Attachment_CL`](../tables/ttp-attachment-cl.md)<br>[`Ttp_Impersonation_CL`](../tables/ttp-impersonation-cl.md)<br>[`Ttp_Url_CL`](../tables/ttp-url-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Mimecast-Data-Connector-Trigger-Sync](../content/mimecast-data-connector-trigger-sync-mimecast.md) | Playbook to sync timer trigger of all Mimecast data connectors. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Mimecast_AT_Performane_Detail](../content/c6376b96-24ca-4113-932f-a069f1c62479.md) | - | - |
| [Mimecast_AT_Safe_Score](../content/06c97d41-652a-4ff0-9bf5-dca775126fff.md) | - | - |
| [Mimecast_AT_User_Data](../content/bf754aad-692b-46cd-b5b4-6f044bd105a4.md) | - | - |
| [Mimecast_AT_Watchlist](../content/7afbe4ec-9fa1-429d-9a25-6c3f0519330e.md) | - | - |
| [Mimecast_Audit](../content/679b2b50-2611-4358-9686-5948587cbb47.md) | - | - |
| [Mimecast_Cloud_Integrated](../content/c78aaea4-8a16-4e8b-9722-073e7181efd1.md) | - | - |
| [Mimecast_SEG_CG](../content/91267889-770d-451b-9ed8-d3ed260c48e3.md) | - | - |
| [Mimecast_SEG_DLP](../content/1cdd670a-dec9-4d15-97a1-75043a1e631a.md) | - | - |
| [Mimecast_TTP_Attachment](../content/aea16729-fdd1-43aa-84bd-9127c0c53d03.md) | - | - |
| [Mimecast_TTP_Impersonation](../content/50371940-df79-4db6-8bd9-267379ae0e31.md) | - | - |
| [Mimecast_TTP_Url](../content/275bacf7-edef-4436-9e5c-beee419aeb1a.md) | - | - |

## Release Notes

| **Version**   | **Date Modified**              | **Change History**                                                     |
|---------------|--------------------------------|------------------------------------------------------------------------|
| 3.1.0         | 29-10-2025                     | Added Log Ingestion API support in **Data Connectors**. Added Government button for support.                                                                                                                  |
| 3.0.1         | 12-02-2025                     | Updated default table for MimecastAudit to get the Connected label on **Data Connector** UI page.                                                     |
| 3.0.0         | 09-09-2024                     | Initial Solution Release                                               |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)

# MimecastSEG

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Mimecast.svg" alt="MimecastSEG Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The data connector for [Mimecast Secure Email Gateway](https://integrations.mimecast.com/tech-partners/microsoft-sentinel/) allows easy log collection from the Secure Email Gateway to surface email insight and user activity within Microsoft Sentinel. The data connector provides pre-created dashboards to allow analysts to view insight into email based threats, aid in incident correlation and reduce investigation response times coupled with custom alert capabilities. Mimecast products and features required: 
- Mimecast Secure Email Gateway 
- Mimecast Data Leak Prevention
 

Microsoft Sentinel Solutions provide a consolidated way to acquire Microsoft Sentinel content like data connectors, workbooks, analytics, and automations in your workspace with a single deployment step.

**NOTE: This integration is considered deprecated and has been replaced by the unified [Mimecast integration](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mimecastnorthamerica1584469118674.azure-sentinel-solution-mimecast?tab=Overview), which uses Mimecast's API 2.0 gateway. Please avoid using this version, and if already using it, migrate to the new integration. No further updates will be performed, and this version will be removed at a future date. For additional information, including the unified integration setup steps, go [here](https://integrations.mimecast.com/tech-partners/microsoft-sentinel).**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Mimecast |
| **Support Tier** | Partner |
| **Support Link** | [https://mimecastsupport.zendesk.com/](https://mimecastsupport.zendesk.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Mimecast - dlapi@mimecast.com |
| **First Published** | 2022-02-24 |
| **Last Updated** | 2022-02-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastSEG](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastSEG) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Mimecast Secure Email Gateway](../connectors/mimecastsiemapi.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MimecastDLP_CL`](../tables/mimecastdlp-cl.md) | [Mimecast Secure Email Gateway](../connectors/mimecastsiemapi.md) | Analytics |
| [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) | [Mimecast Secure Email Gateway](../connectors/mimecastsiemapi.md) | Analytics, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 9 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Mimecast Data Leak Prevention - Hold](../content/mimecastseg-mimecast-data-leak-prevention-hold-3e12b7b1-75e5-497c-ba01-b6cb30b60d7f-ff090522.md) | Informational | Exfiltration | [`MimecastDLP_CL`](../tables/mimecastdlp-cl.md) |
| [Mimecast Data Leak Prevention - Notifications](../content/mimecastseg-mimecast-data-leak-prevention-notifications-1818aeaa-4cc8-426b-ba54-539de896d299-b39fc5bc.md) | High | Exfiltration | [`MimecastDLP_CL`](../tables/mimecastdlp-cl.md) |
| [Mimecast Secure Email Gateway - AV](../content/mimecastseg-mimecast-secure-email-gateway-av-0f0dc725-29dc-48c3-bf10-bd2f34fd1cbb-b6da5aa5.md) | Informational | Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Attachment Protect](../content/mimecastseg-mimecast-secure-email-gateway-attachment-protect-72264f4f-61fb-4f4f-96c4-635571a376c2-c674cc1a.md) | High | Collection, Exfiltration, Discovery, InitialAccess, Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Impersonation Protect](../content/mimecastseg-mimecast-secure-email-gateway-impersonation-protect-7034abc9-6b66-4533-9bf3-056672fd9d9e-b1e81453.md) | High | Discovery, LateralMovement, Collection | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Internal Email Protect](../content/mimecastseg-mimecast-secure-email-gateway-internal-email-protect-5b66d176-e344-4abf-b915-e5f09a6430ef-0c1bbd94.md) | High | LateralMovement, Persistence, Exfiltration | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Spam Event Thread](../content/mimecastseg-mimecast-secure-email-gateway-spam-event-thread-df1b9377-5c29-4928-872f-9934a6b4f611-66673cf6.md) | Low | Discovery | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - URL Protect](../content/mimecastseg-mimecast-secure-email-gateway-url-protect-ea19dae6-bbb3-4444-a1b8-8e9ae6064aab-c57aa8c4.md) | High | InitialAccess, Discovery, Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Virus](../content/mimecastseg-mimecast-secure-email-gateway-virus-30f73baa-602c-4373-8f02-04ff5e51fc7f-9020a6da.md) | Informational | Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MimecastSEGworkbook](../content/mimecastseg-mimecastsegworkbook-d46e4786.md) | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 06-03-2025                     | Solution Deprecated   |
| 3.0.1       | 05-12-2023                     | Enhanced **Dataconnector** to use existing workspace and updated checkpoint mechanism |
| 3.0.0       | 23-08-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


# MimecastSEG

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Mimecast |
| **Support Tier** | Partner |
| **Support Link** | [https://mimecastsupport.zendesk.com/](https://mimecastsupport.zendesk.com/) |
| **Categories** | domains |
| **First Published** | 2022-02-24 |
| **Last Updated** | 2022-02-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastSEG](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastSEG) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Mimecast Secure Email Gateway](../connectors/mimecastsiemapi.md)

## Tables Reference

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
| [Mimecast Data Leak Prevention - Hold](../content/3e12b7b1-75e5-497c-ba01-b6cb30b60d7f.md) | Informational | Exfiltration | [`MimecastDLP_CL`](../tables/mimecastdlp-cl.md) |
| [Mimecast Data Leak Prevention - Notifications](../content/1818aeaa-4cc8-426b-ba54-539de896d299.md) | High | Exfiltration | [`MimecastDLP_CL`](../tables/mimecastdlp-cl.md) |
| [Mimecast Secure Email Gateway - AV](../content/0f0dc725-29dc-48c3-bf10-bd2f34fd1cbb.md) | Informational | Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Attachment Protect](../content/72264f4f-61fb-4f4f-96c4-635571a376c2.md) | High | Collection, Exfiltration, Discovery, InitialAccess, Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Impersonation Protect](../content/7034abc9-6b66-4533-9bf3-056672fd9d9e.md) | High | Discovery, LateralMovement, Collection | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Internal Email Protect](../content/5b66d176-e344-4abf-b915-e5f09a6430ef.md) | High | LateralMovement, Persistence, Exfiltration | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Spam Event Thread](../content/df1b9377-5c29-4928-872f-9934a6b4f611.md) | Low | Discovery | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - URL Protect](../content/ea19dae6-bbb3-4444-a1b8-8e9ae6064aab.md) | High | InitialAccess, Discovery, Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |
| [Mimecast Secure Email Gateway - Virus](../content/30f73baa-602c-4373-8f02-04ff5e51fc7f.md) | Informational | Execution | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MimecastSEGworkbook](../content/mimecastsegworkbook-mimecastseg.md) | [`MimecastSIEM_CL`](../tables/mimecastsiem-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 06-03-2025                     | Solution Deprecated   |
| 3.0.1       | 05-12-2023                     | Enhanced **Dataconnector** to use existing workspace and updated checkpoint mechanism |
| 3.0.0       | 23-08-2023                     | Initial Solution Release                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

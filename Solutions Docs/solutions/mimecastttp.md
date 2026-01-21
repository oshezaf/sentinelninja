# MimecastTTP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Mimecast.svg" alt="MimecastTTP Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The data connector for [Mimecast Targeted Threat Protection](https://integrations.mimecast.com/tech-partners/microsoft-sentinel/) provides customers with the visibility into security events related to the Targeted Threat Protection inspection technologies within Microsoft Sentinel. The data connector provides pre-created dashboards to allow analysts to view insight into email based threats, aid in incident correlation and reduce investigation response times coupled with custom alert capabilities.  
The Mimecast products included within the connector are: 
- URL Protect 
- Impersonation Protect 
- Attachment Protect


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
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastTTP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastTTP) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MimecastTTPAttachment_CL`](../tables/mimecastttpattachment-cl.md) | [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) | Analytics, Workbooks |
| [`MimecastTTPImpersonation_CL`](../tables/mimecastttpimpersonation-cl.md) | [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) | Analytics, Workbooks |
| [`MimecastTTPUrl_CL`](../tables/mimecastttpurl-cl.md) | [Mimecast Targeted Threat Protection](../connectors/mimecastttpapi.md) | Analytics, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Mimecast Targeted Threat Protection - Attachment Protect](../content/mimecastttp-mimecast-targeted-threat-protection-attachment-protect-aa75944c-a663-4901-969e-7b55bfa49a73-ccc92056.md) | High | InitialAccess, Discovery | [`MimecastTTPAttachment_CL`](../tables/mimecastttpattachment-cl.md) |
| [Mimecast Targeted Threat Protection - Impersonation Protect](../content/mimecastttp-mimecast-targeted-threat-protection-impersonation-protect-d8e7eca6-4b59-4069-a31e-a022b2a12ea4-d8d320d6.md) | High | Exfiltration, Collection, Discovery | [`MimecastTTPImpersonation_CL`](../tables/mimecastttpimpersonation-cl.md) |
| [Mimecast Targeted Threat Protection - URL Protect](../content/mimecastttp-mimecast-targeted-threat-protection-url-protect-9d5545bd-1450-4086-935c-62f15fc4a4c9-81f30fac.md) | High | InitialAccess, Discovery | [`MimecastTTPUrl_CL`](../tables/mimecastttpurl-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MimecastTTPWorkbook](../content/mimecastttp-mimecastttpworkbook-22b40acb.md) | [`MimecastTTPAttachment_CL`](../tables/mimecastttpattachment-cl.md)<br>[`MimecastTTPImpersonation_CL`](../tables/mimecastttpimpersonation-cl.md)<br>[`MimecastTTPUrl_CL`](../tables/mimecastttpurl-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 06-03-2025                     | Solution Deprecated   |
| 3.0.1       | 05-12-2023                     | Enhanced **Dataconnector** to use existing workspace and updated checkpoint mechanism |
| 3.0.0       | 23-08-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


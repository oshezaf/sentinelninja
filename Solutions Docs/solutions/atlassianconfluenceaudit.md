# AtlassianConfluenceAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="AtlassianConfluenceAudit Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Atlassian Confluence Audit](https://www.atlassian.com/software/confluence) solution provides the capability to ingest [Confluence Audit Records](https://support.atlassian.com/confluence-cloud/docs/view-the-audit-log/) into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

• [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-01-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 2 discovered⚠️):

- [Atlassian Confluence](../connectors/atlassianconfluence.md) ⚠️
- [[Deprecated] Atlassian Confluence Audit](../connectors/confluenceauditapi.md) ⚠️
- [ Atlassian Confluence Audit (via Codeless Connector Framework)](../connectors/confluenceauditccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AtlassianConfluenceNativePoller_CL`](../tables/atlassianconfluencenativepoller-cl.md) | [Atlassian Confluence](../connectors/atlassianconfluence.md) | - |
| [`ConfluenceAuditLogs_CL`](../tables/confluenceauditlogs-cl.md) | [ Atlassian Confluence Audit (via Codeless Connector Framework)](../connectors/confluenceauditccpdefinition.md) | - |
| [`Confluence_Audit_CL`](../tables/confluence-audit-cl.md) | [[Deprecated] Atlassian Confluence Audit](../connectors/confluenceauditapi.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ConfluenceAudit](../content/atlassianconfluenceaudit-confluenceaudit-91a64f79-c926-4b7f-a77e-b202f79fe4bf-d342acac.md) | - | [`Confluence_Audit_CL`](../tables/confluence-audit-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                    |
|-------------|--------------------------------|-------------------------------------------------------|
| 3.0.6       | 28-07-2025                     | Removed Deprecated **Data Connector**.  |
| 3.0.5       | 06-05-2025                     | Launching CCP **Data Connector** - *Atlassian Confluence Audit* from Public Preview to Global Availability.           |
| 3.0.4       | 16-04-2025                     | Updated **Parser** to support new and old table. <br/>Updated table name in **CCP Connector**.           |
| 3.0.3       | 21-02-2025                     | Added new CCP **Data Connector** 'Atlassian Confluence Audit'.<br/>Added new **Parser** 'ConfluenceAuditV2'.           |
| 3.0.2       | 09-09-2024                     | Updated the Python runtime version to 3.11 in **Data Connector** Function APP.            |
| 3.0.1       | 03-05-2024                     | Repackaged for **Parser** issue fix on reinstall.   	   |
| 3.0.0       | 19-07-2023                     | Updated to enable solution for **Azure government**.  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)


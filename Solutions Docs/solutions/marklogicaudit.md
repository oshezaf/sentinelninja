# MarkLogicAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="MarkLogicAudit Logo" width="75" height="75">

The MarkLogic Solution provides the capability to ingest [MarkLogic Audit](https://www.marklogic.com/) logs into Microsoft Sentinel. Refer to [MarkLogic documentation](https://docs.marklogic.com/guide/getting-started) for more information.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-08-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MarkLogicAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MarkLogicAudit) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] MarkLogic Audit](../connectors/marklogic.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) | [[Deprecated] MarkLogic Audit](../connectors/marklogic.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [MarkLogicAudit](../content/marklogicaudit-marklogicaudit-f2b2c4e3-a65b-44ba-81e9-03a79fa0fa84-280152ff.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.1       | 02-01-2025                     | Removed Deprecated **Data connector**                       |
| 3.0.0       | 12-08-2024                     | Deprecating data connector                                  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

# ⚠️ Microsoft Copilot

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Copilot_logo.svg" alt="Microsoft Copilot Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Microsoft Copilot](https://www.microsoft.com/en-us/microsoft-365/copilot) solution allows you to stream your Microsoft Copilot audit logs into Microsoft Sentinel in order to track your Copilot activities.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

- [Office Management API](https://docs.microsoft.com/office/office-365-management-api/office-365-management-apis-overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft |
| **First Published** | 2025-10-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Copilot) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Copilot](../connectors/microsoftcopilot.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CopilotActivity`](../tables/copilotactivity.md) | [Microsoft Copilot](../connectors/microsoftcopilot.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                |
|-------------|--------------------------------|---------------------------------------------------------------------------------------------------|
| 3.0.1       | 12-12-2025                     | Update copilot table name from LLMActivity to CopilotActivity.       |
| 3.0.0       | 10-09-2025                     | Releasing a new Microsoft Copilot connector solution in Content Hub and **Data Connector** gallery.   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)


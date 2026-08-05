# ⚠️ Hubspot

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Hubspot.svg" alt="Hubspot Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Tom Plant |
| **Support Tier** | Community |
| **Support Link** | [https://tplant.com.au](https://tplant.com.au) |
| **Categories** | Application |
| **Version** | 3.0.0 |
| **Author** | Tom Plant - tom.plant@devicie.com |
| **First Published** | 2025-12-15 |
| **Last Updated** | 2025-12-15 |
| **Solution Folder** | [Hubspot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hubspot) |

The unofficial [HubSpot](https://www.hubspot.com/) solution provides the capability to ingest [Hubspot account activity](https://developers.hubspot.com/docs/api-reference/account-audit-logs-v3/guide) into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:

a. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/en-us/azure/sentinel/create-custom-connector)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Hubspot (via Codeless Connector Framework)](../connectors/hubspotdefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`HubspotAuditLogs_CL`](../tables/hubspotauditlogs-cl.md) | [Hubspot (via Codeless Connector Framework)](../connectors/hubspotdefinition.md) | - |
| [`HubspotSecurityActivity_CL`](../tables/hubspotsecurityactivity-cl.md) | [Hubspot (via Codeless Connector Framework)](../connectors/hubspotdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|------------|-------------------------------|--------------------|
| 3.0.0      | 15-12-2025                    | Initial release with CCF connector |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


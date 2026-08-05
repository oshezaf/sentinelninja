# Atlassian Organization Audit

*Solution: AtlassianOrganizationAudit*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/atlassian.svg" alt="AtlassianOrganizationAudit Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-07-06 |
| **Last Updated** | 2026-07-20 |
| **Solution Folder** | [AtlassianOrganizationAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianOrganizationAudit) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-atlassianorganizationaudit) · Popularity: ⚪ Very Low (0%) |

The Atlassian Organization Audit solution for Microsoft Sentinel enables ingestion of organization audit events from Atlassian Cloud into Microsoft Sentinel through the Codeless Connector Framework (CCF). It provides comprehensive security monitoring and compliance auditing across Atlassian Cloud products including Jira, Confluence, Bitbucket, Trello, Opsgenie, Statuspage, and Loom. Audit events cover user management, authentication activity, group changes, product access modifications, administrative actions, and policy changes. For more information about the Atlassian Organization Events API, see the official Atlassian documentation: https://developer.atlassian.com/cloud/admin/organization/rest/

Underlying Microsoft Technologies used:
- Microsoft Sentinel
- Azure Monitor Logs
- Data Collection Rules (DCR)
- Codeless Connector Framework (CCF)

Dependencies:
- A valid Atlassian Cloud organization
- An Atlassian API key with the read-only `read:events:admin` OAuth scope
- API access to the Atlassian Organization Events API

## Data Connectors

This solution provides **1 data connector(s)**:

- [Atlassian Organization Audit Events (via Codeless Connector Framework)](../connectors/atlassianauditeventsconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AtlassianAuditEvents_CL`](../tables/atlassianauditevents-cl.md) | [Atlassian Organization Audit Events (via Codeless Connector Framework)](../connectors/atlassianauditeventsconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 06-07-2026 | First version of the Atlassian Organization Audit CCF Connector. <br/> Added Atlassian organization audit events ingestion support using CCF pollers, DCR, and parsers. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


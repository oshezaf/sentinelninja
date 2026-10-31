# ContraForce Events for Microsoft Sentinel

*Solution: ContraForce*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/contraforce.svg" alt="ContraForce Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ContraForce |
| **Support Tier** | Partner |
| **Support Link** | [https://www.contraforce.com/](https://www.contraforce.com/) |
| **Categories** | Security - Others |
| **Version** | 3.0.0 |
| **Author** | ContraForce - support@contraforce.com |
| **First Published** | 2026-08-07 |
| **Last Updated** | 2026-10-13 |
| **Solution Folder** | [ContraForce](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContraForce) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/contraforce1580881495588.azure-sentinel-solution-contraforce) · Popularity: ⚪ Very Low (0%) |

The [ContraForce](https://www.contraforce.com) solution for Microsoft Sentinel ingests security service delivery events from your ContraForce workspace: incident detections from every connected security platform, administrative access changes (role and member changes), machine credential activity, and destructive workspace actions. The packaged analytic rules create Microsoft Sentinel incidents for privileged access changes, machine credential activity, and destructive workspace actions, so you can monitor the security operations ContraForce performs on your workspace from inside your own Microsoft Sentinel.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [ContraForce Events](../connectors/contraforceevents.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ContraForceEvents_CL`](../tables/contraforceevents-cl.md) | [ContraForce Events](../connectors/contraforceevents.md) | Analytics |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [ContraForce - Destructive workspace action](../content/contraforce-contraforce-destructive-workspace-action-c5e9a1d7-4b2f-4e6c-8a9d-7f3b1c5e2a84-fe7a9bff.md) | High | Impact | [`ContraForceEvents_CL`](../tables/contraforceevents-cl.md) |
| [ContraForce - Machine credential activity](../content/contraforce-contraforce-machine-credential-activity-8a2c6e94-1b5d-4f7a-b3e8-2c9d4f6a1e52-dd3f34e0.md) | Medium | Persistence, CredentialAccess | [`ContraForceEvents_CL`](../tables/contraforceevents-cl.md) |
| [ContraForce - Privileged access change](../content/contraforce-contraforce-privileged-access-change-3f4bd2a1-7c58-4a83-9c2e-6d1f0a8b5c31-aef16169.md) | Medium | PrivilegeEscalation, Persistence | [`ContraForceEvents_CL`](../tables/contraforceevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                              |
|-------------|--------------------------------|-----------------------------------------------------------------|
| 3.0.0       | 07-08-2026                     | Initial solution release: ContraForce Events CCF data connector and three **Analytic rules** (privileged access change, machine credential activity, destructive workspace action). |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


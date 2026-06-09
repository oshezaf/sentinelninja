# Flare for Microsoft Sentinel

*Solution: Flare*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Flare.svg" alt="Flare Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Flare |
| **Support Tier** | Partner |
| **Support Link** | [https://flare.io/contact/](https://flare.io/contact/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.1.0 |
| **Author** | Flare - support@flare.io |
| **First Published** | 2021-10-20 |
| **Last Updated** | 2026-05-21 |
| **Solution Folder** | [Flare](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/flaresystmesinc1617114736428.flare-systems-firework-sentinel) · Rating: ★★★★★ 5.0/5 (1 ratings) · Popularity: 🟡 Low (43%) |

The Flare Systems [Firework](https://flare.io/platform/) solution allows you to receive data and intelligence from Firework on Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs. 

 a .[Azure Monitor HTTP Data Collector API ](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Flare Push Connector](../connectors/fireworkpush.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`FireworkV2_CL`](../tables/fireworkv2-cl.md) | [Flare Push Connector](../connectors/fireworkpush.md) | Analytics, Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Flare chat results](../content/flare-flare-chat-results-76210211-3ade-47b6-b7f2-c871cd05ec43-5e65d8c7.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare cloud bucket results](../content/flare-flare-cloud-bucket-results-9cb7c337-f172-4af6-b0e8-b6b7552d762d-2b70bb23.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare google dork results](../content/flare-flare-google-dork-results-9cb7c337-f174-4af6-b0e8-b6b7552d762d-298023cb.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare host results](../content/flare-flare-host-results-9cb7c337-f175-4af6-b0e8-b6b7552d762d-ffdb44ac.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare infected device results](../content/flare-flare-infected-device-results-9cb7c337-f176-4af6-b0e8-b6b7552d762d-d6cc2fc5.md) | Medium | CredentialAccess | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare leaked credentials results](../content/flare-flare-leaked-credentials-results-9cb7c337-f170-4af6-b0e8-b6b7552d762d-ae131a18.md) | Medium | CredentialAccess | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare lookalike domain results](../content/flare-flare-lookalike-domain-results-8e5ae0d6-7f2d-475e-ada3-ed33441deeba-8cc368fa.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare marketplace results](../content/flare-flare-marketplace-results-9265ae4d-6bb0-4c18-961d-f7aae67d1546-78fb8e2f.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare paste results](../content/flare-flare-paste-results-9cb7c337-f177-4af6-b0e8-b6b7552d762d-9f498bb5.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare source code results](../content/flare-flare-source-code-results-9cb7c337-f178-4af6-b0e8-b6b7552d762d-c8c5f322.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [FlareSystemsFireworkOverview](../content/flare-flaresystemsfireworkoverview-4ffe81de.md) | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [credential-warning](../content/flare-credential-warning-d8db989d.md) | **This playbook is deprecated and will be replaced in a future update. Functionality may be limited ... | - |

## Release Notes

# Release Notes

Release notes are available starting from version 2.2.0.
Earlier versions did not have published release notes.

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
| ----------- | ------------------------------ | ------------------------------------------------------------------------- |
| 3.1.0       | 21-04-2026                     | Updated Analytic Rules and Workbooks queries to be more accurate.<br>Added three new Analytic Rules and removed one.                                                     |
| 3.0.0       | 15-12-2025                     | New CFF connector that replaces deprecated Rest API connector.<br>New Polling config for CFF connector.<br>New DCR config for CFF connector.<br>Added Table definition for FireworkV2_CL.<br>Fixed Analytic Rules to handle missing columns using `column_ifexists()`.<br>Added `ReleaseNotes.md` file. |
| 1.0.0       | 21-10-2021                     | Initial Solution Release.                                                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


# Silent Push for Microsoft Sentinel

*Solution: SilentPush*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SilentPush.svg" alt="SilentPush Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SilentPush |
| **Support Tier** | Partner |
| **Support Link** | [https://www.silentpush.com](https://www.silentpush.com) |
| **Categories** | Security - Threat Intelligence,Security - Automation (SOAR) |
| **Version** | 3.1.0 |
| **Author** | SilentPush - support@silentpush.com |
| **First Published** | 2026-08-20 |
| **Last Updated** | 2026-10-09 |
| **Solution Folder** | [SilentPush](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SilentPush) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/silentpushinc1618175309468.azure-sentinel-solution-silentpush) · Popularity: 🔵 Medium (59%) |

The Silent Push platform focuses on proactive threat intelligence and threat hunting. It offers a comprehensive view of global internet-facing infrastructure, helping organizations detect and counteract cyber threats before they manifest.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [SilentPush Feeds](../connectors/silentpushfeedsconnectordefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SLP_Feeds_CL`](../tables/slp-feeds-cl.md) | [SilentPush Feeds](../connectors/silentpushfeedsconnectordefinition.md) | - |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 4 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SilentPush-DomainExportEnrichment-Full](../content/silentpush-silentpush-domainexportenrichment-full-12dc3b20.md) | Silent Push domains export with enrichment and TI upload | - |
| [SilentPush-DomainExportEnrichment-Sample](../content/silentpush-silentpush-domainexportenrichment-sample-a0489986.md) | Silent Push domains export with enrichment | - |
| [SilentPush-IPExportEnrichment-Full](../content/silentpush-silentpush-ipexportenrichment-full-dc1b4017.md) | Silent Push IPs export with enrichment and TI upload | - |
| [SilentPush-IPExportEnrichment-Sample](../content/silentpush-silentpush-ipexportenrichment-sample-c4239c43.md) | Silent Push IPs export with enrichment | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
| ---|---|---|
| 3.1.0 | 16-09-2026 | Added SilentPush Feeds Data Connector (Codeless/CCP) to ingest Silent Push threat-intel feed exports into SLP_Feeds_CL. |
| 3.0.0 | 20-08-2026 | Initial solution release. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


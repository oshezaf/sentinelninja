# WhoisFreaks Threat Intelligence for Microsoft Sentinel

*Solution: WhoisFreaks*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/whoisfreaks.svg" alt="WhoisFreaks Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | WhoisFreaks |
| **Support Tier** | Partner |
| **Support Link** | [https://whoisfreaks.com](https://whoisfreaks.com) |
| **Categories** | Security - Threat Intelligence,Security - Threat Protection |
| **Version** | 3.0.2 |
| **Author** | WhoisFreaks - support@whoisfreaks.com |
| **First Published** | 2026-09-30 |
| **Last Updated** | 2026-10-21 |
| **Solution Folder** | [WhoisFreaks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/jfreakssoftwaresolutions1791285163467.azure-sentinel-solution-whoisfreaks) · Popularity: 🔵 Medium (74%) |

The [WhoisFreaks](https://whoisfreaks.com/) solution for Microsoft Sentinel ingests commercial threat intelligence and newly registered domain (NRD) feeds through the Codeless Connector Framework into custom Log Analytics tables for hunting, detection, and investigation.

**Underlying Microsoft Technologies used:**

This solution depends on technologies that may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) or incur additional ingestion or operational costs:

a. [Azure Monitor data collection rules](https://learn.microsoft.com/azure/azure-monitor/data-collection/data-collection-rule-overview)

b. [Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/)

A WhoisFreaks API subscription and key entitled to the selected feeds are required.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [WhoisFreaks Threat & NRD Feeds (via Codeless Connector Framework)](../connectors/whoisfreaks.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`WhoisFreaksNRDNoWhois_CL`](../tables/whoisfreaksnrdnowhois-cl.md) | [WhoisFreaks Threat & NRD Feeds (via Codeless Connector Framework)](../connectors/whoisfreaks.md) | Analytics |
| [`WhoisFreaksNRD_CL`](../tables/whoisfreaksnrd-cl.md) | [WhoisFreaks Threat & NRD Feeds (via Codeless Connector Framework)](../connectors/whoisfreaks.md) | Analytics |
| [`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) | [WhoisFreaks Threat & NRD Feeds (via Codeless Connector Framework)](../connectors/whoisfreaks.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [WhoisFreaks - burst of newly registered domains](../content/whoisfreaks-whoisfreaks-burst-of-newly-registered-domains-9d79f28f-5d1d-4ca8-b3d3-4ab5f5513e8d-f1b5d916.md) | Low | ResourceDevelopment | [`WhoisFreaksNRDNoWhois_CL`](../tables/whoisfreaksnrdnowhois-cl.md)<br>[`WhoisFreaksNRD_CL`](../tables/whoisfreaksnrd-cl.md) |
| [WhoisFreaks - high confidence threat domains](../content/whoisfreaks-whoisfreaks-high-confidence-threat-domains-0eb4df70-418e-4f7d-9b5a-cfe35034ec11-010c476d.md) | High | InitialAccess, CommandAndControl | [`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) |
| [WhoisFreaks - newly registered domain seen in threat feed](../content/whoisfreaks-whoisfreaks-newly-registered-domain-seen-in-threat-feed-d2deed97-6c0c-4a57-95fd-675d3c6fb949-54db08c2.md) | High | InitialAccess, ResourceDevelopment | [`WhoisFreaksNRDNoWhois_CL`](../tables/whoisfreaksnrdnowhois-cl.md)<br>[`WhoisFreaksNRD_CL`](../tables/whoisfreaksnrd-cl.md)<br>[`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) |
| [WhoisFreaks - parked threat domains](../content/whoisfreaks-whoisfreaks-parked-threat-domains-3c6be532-dfa0-42ee-87ea-cf3d9e6772bb-7a1bd3b4.md) | Medium | ResourceDevelopment | [`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) |

## Additional Documentation

> 📄 *Source: [WhoisFreaks/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/README.md)*

This solution ingests WhoisFreaks threat intelligence and newly registered domain (NRD) feeds using the Microsoft Sentinel Codeless Connector Framework (CCF). Threat API fields are retained in `WhoisFreaksThreat_CL` (including `threat_type`); WHOIS NRD API fields are retained in `WhoisFreaksNRD_CL`; headerless no-WHOIS rows are written to `WhoisFreaksNRDNoWhois_CL` with the payload column `domain_name`. Both NRD tables include an `nrd_type` column (`gtld` or `cctld`) set by the DCR transform so gTLD and ccTLD rows can be distinguished without parsing the domain. `TimeGenerated` is the Log Analytics system ingestion timestamp. The connector UI lets users select feeds enabled by their subscription. The selection is a form and is not read back after the page reloads; the connector page's Data received chart shows one line per feed, so a feed with no line is not enabled. To change the enabled feeds, disconnect, reselect, and connect again. The two NRD tables are created with 30-day retention because the NRD analytic rules look back 7 and 8 days; the threat table is created with 4-day retention because its rules read at most the last six hours and the full threat feed is re-ingested daily. Workspaces that installed an earlier version keep their original table retention; raise the NRD tables with `az monitor log-analytics workspace table update --retention-time 30 --total-retention-time 30` for `WhoisFreaksNRD_CL` and `WhoisFreaksNRDNoWhois_CL`. The solution also includes four scheduled analytic rules.

## Prerequisites

- Azure CLI logged in to the target subscription (`az login`).
- A staging Microsoft Sentinel workspace for integration tests. Validate production changes in staging before deploying them to production.
- A WhoisFreaks API key entitled to each feed you enable.
- Workspace resource group and workspace name for checking deployed connector resources.

Do not commit API keys, generated parameter files containing secrets, or deployment outputs with secrets. Supply the key through a protected shell variable or a secret manager.

## Validation and Packaging

The source connector configuration is in `Data Connectors/WhoisFreaks_CCF/`. Validate and package the solution with the repository's V3 build-and-validation flow. The solution manifest lists the four analytic-rule YAML files so the generated package includes their templates.

The connector UI offers a multi-select feed list. Select only feeds included in the API subscription. Test in staging first; successful deployment and data ingestion depend on the target workspace and feed entitlements.

## Analytic Rule Testing

The four rule source files are in `Analytic Rules/`. Before packaging or deploying a rule:

1. Open Microsoft Sentinel **Logs** in the staging workspace.
2. Copy the `query` value from the rule YAML and run it as KQL. The query must compile; zero matches is valid when the data does not meet the detection condition.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.2 | 21-10-2026 | Fixed **Data Connector** feed selection, API key handling, duplicate fetches and table retention. Fixed **Analytic Rules** confidence threshold, NRD burst baseline, parked-domain flag and hourly re-alerting. |
| 3.0.1 | 16-10-2026 | Deployment UI now filters workspaces by the exact resource group and lets the workspace region be reviewed before deployment. |
| 3.0.0 | 09-10-2026 | Initial publication with the CCF threat and NRD feeds and four analytic-rule templates. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


# ⚠️ Speculus Threat Intelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/speculus_logo.svg" alt="Speculus Threat Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Speculus |
| **Support Tier** | Partner |
| **Support Link** | [https://speculus.co](https://speculus.co) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | Speculus - dev@speculus.co |
| **First Published** | 2026-07-01 |
| **Solution Folder** | [Speculus Threat Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence) |

The [Speculus Threat Intelligence](https://speculus.co) solution ingests STIX 2.1 IP indicators from the Speculus TAXII 2.1 server into Microsoft Sentinel using the Codeless Connector Framework (CCF). Indicators carry risk scoring, named attribution, scanner/Tor/proxy classification, and geo/network enrichment. The solution deploys a REST API poller connector, a custom log table, a data collection rule, analytics rules for matching indicators against network and sign-in telemetry, and an incident-enrichment playbook that looks up IP entities against the Speculus REST API on demand.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Speculus Threat Intelligence](../connectors/speculusthreatintel.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Speculus_Indicators_CL`](../tables/speculus-indicators-cl.md) | [Speculus Threat Intelligence](../connectors/speculusthreatintel.md) | Analytics |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Speculus - Network traffic to or from high-risk IP indicator](../content/speculus-threat-intelligence-speculus-network-traffic-to-or-from-high-risk-ip-indicator-a7c3f9e2-4d18-4b6a-9f0c-2e5d8b1a6c43-75ea8385.md) | High | CommandAndControl, InitialAccess | [`Speculus_Indicators_CL`](../tables/speculus-indicators-cl.md) |
| [Speculus - Sign-in attempt from high-risk IP indicator](../content/speculus-threat-intelligence-speculus-sign-in-attempt-from-high-risk-ip-indicator-e1b8d4a6-9c27-45f3-8a1e-7f2c0d9b5e64-a9174920.md) | High | InitialAccess, CredentialAccess | [`Speculus_Indicators_CL`](../tables/speculus-indicators-cl.md) |
| [Speculus - Threat intelligence feed outage](../content/speculus-threat-intelligence-speculus-threat-intelligence-feed-outage-c4f2a8d1-6e39-4c07-b5a2-1d8e3f7c9a25-431c164c.md) | Informational | Impact | [`Speculus_Indicators_CL`](../tables/speculus-indicators-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Speculus Incident Enrichment - Playbook](../content/speculus-threat-intelligence-speculus-incident-enrichment-playbook-9d6bf654.md) | Runs on a Microsoft Sentinel incident, looks up every IP entity against the Speculus REST API (singl... | - |

## Additional Documentation

> 📄 *Source: [Speculus Threat Intelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence/README.md)*

Ingests STIX 2.1 IP indicators from the Speculus TAXII 2.1 server into Microsoft Sentinel using the Codeless Connector Framework (CCF) — no Azure Functions or agents required.

## What this solution deploys

| Component | Name | Purpose |
|---|---|---|
| Data connector | Speculus Threat Intelligence | RestApiPoller against the Speculus TAXII 2.1 objects endpoint |
| Custom table | `Speculus_Indicators_CL` | Flattened STIX indicators with Speculus enrichment |
| Data collection rule | `dcr-speculus-indicators` | Filters the TAXII envelope to Indicator SDOs and flattens STIX + `x_speculus_*` fields |
| Analytics rules | 3 | High-risk IP match vs. `CommonSecurityLog`, high-risk IP match vs. `SigninLogs`, feed outage detection |
| Playbook | `pb-speculus-incident-enrichment` | On-demand: looks up every IP entity on a triggered incident against the Speculus REST API and posts full enrichment as an incident comment |

## How it works

The connector polls `{taxiiBaseUrl}/collections/{collectionId}/objects/` (TAXII 2.1) with `Authorization: Bearer <API key>`, using `added_after` for incremental collection and the TAXII envelope's `next` cursor / `more` flag for pagination. Each page's `objects` array contains STIX 2.1 SDOs (an Identity, then Indicators, plus Malware/Relationship objects when an indicator has named attribution). The data collection rule keeps only `type == "indicator"` objects — attribution is preserved on the indicator itself via `x_speculus_attribution` — and flattens the STIX fields and Speculus custom properties into `Speculus_Indicators_CL`.

## Prerequisites

- A Speculus API key with access to the IOC feed.
- Microsoft Sentinel workspace with permissions to deploy data connectors (Contributor on the workspace resource group).

## Configuration

1. Install the solution from Content Hub.
2. Open the **Speculus Threat Intelligence** data connector page.
3. Enter:
   - **TAXII Base URL (including API root)** — default `https://feed.speculus.co/api1`
   - **Collection ID** — default `f3a1c2d4-5b6e-4a7f-8c9d-0e1f2a3b4c5d` (the `speculus-ioc-feed` collection)
   - **API Key** — your Speculus API key
4. Click **Connect**. Indicators appear in `Speculus_Indicators_CL` within the first polling window (60 minutes).

## Incident enrichment playbook

`pb-speculus-incident-enrichment` runs per-incident rather than on a schedule: it reads the IP entities attached to a Sentinel incident, calls `GET {baseUrl}/v1/objects/{ip}` on the Speculus REST API for each one, and posts the full enrichment (risk score, activity, attribution, labels, scanner/Tor/blacklist flags, ISP/ASN, geo, and the verdict description) as an incident comment.

1. Deploy the playbook from the solution (it deploys **disabled**).
2. Open the playbook's API connections and authorize the `azuresentinel` connection (one-time, interactive).
3. Enable the Logic App.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                              |
|-------------|--------------------------------|-----------------------------------------------------------------|
| 3.0.0       | 28-07-2026                     | Initial release: CCF TAXII 2.1 poller data connector, `Speculus_Indicators_CL` custom table + DCR, 3 analytics rules, and `pb-speculus-incident-enrichment` playbook (on-demand IP entity lookup against the Speculus REST API, posted as an incident comment) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


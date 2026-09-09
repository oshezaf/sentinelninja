# ⚠️ PRODAFT USTA - IoC Threat Intelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PRODAFTUstaIoC.svg" alt="PRODAFT USTA - IoC Threat Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | PRODAFT |
| **Support Tier** | Partner |
| **Support Link** | [https://www.prodaft.com](https://www.prodaft.com) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | PRODAFT - integration@prodaft.com |
| **First Published** | 2026-07-08 |
| **Solution Folder** | [PRODAFT USTA - IoC Threat Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence) |

The **PRODAFT USTA - IoC Threat Intelligence** solution ingests indicators of compromise (malicious URLs, malware hashes, and phishing sites) from the PRODAFT USTA platform into Microsoft Sentinel **Threat Intelligence** as STIX 2.1 indicators via the Upload STIX Objects API. Ingestion is performed by import playbooks (one per IoC feed) using a system-assigned managed identity; resolved `ip_addresses` on a record are added to the same indicator as `ipv4-addr`/`ipv6-addr` observables; indicators appear in the Threat Intelligence blade and the `ThreatIntelIndicators` table under a per-feed `SourceSystem` (`PRODAFT USTA - Malicious URLs`, `PRODAFT USTA - Malware Hashes`, `PRODAFT USTA - Phishing Sites`), so `SourceSystem startswith 'PRODAFT USTA'` selects them all. Includes three TI-map analytic rules that match ingested indicators against your logs, an overview workbook, and an on-demand backfill playbook for loading historical indicators.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [PRODAFT USTA - IoC Threat Intelligence](../connectors/prodaftustaiocuploadindicators.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | - | Analytics |
| [`Syslog`](../tables/syslog.md) | - | Analytics |
| [`ThreatIntelObjects`](../tables/threatintelobjects.md) | [PRODAFT USTA - IoC Threat Intelligence](../connectors/prodaftustaiocuploadindicators.md) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [PRODAFT USTA - IoC Threat Intelligence](../connectors/prodaftustaiocuploadindicators.md) | Analytics, Playbooks, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 6 |
| Analytic Rules | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [PRODAFT USTA - TI map Domain to DnsEvents](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-ti-map-domain-to-dnsevents-c6f85aff-4ef0-4fde-b90e-e0ba1a9c3df6-268dc5e6.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [PRODAFT USTA - TI map File Hash to CommonSecurityLog](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-ti-map-file-hash-to-commonsecuritylog-9c2cef4e-c3a3-4be9-8923-a2f820d4face-8e66187e.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [PRODAFT USTA - TI map URL to Syslog](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-ti-map-url-to-syslog-99ae4d06-d352-4926-a1d7-9c28e25b1313-5b2b22cc.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PRODAFTUstaIoCOverview](../content/prodaft-usta-ioc-threat-intelligence-prodaftustaiocoverview-c05c3e08.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PRODAFT USTA - Backfill Malicious URLs](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-backfill-malicious-urls-4dfc7c81.md) | On-demand historical backfill for the PRODAFT USTA malicious-URL IoC feed. Pages the feed from Backf... | - |
| [PRODAFT USTA - Backfill Malware Hashes](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-backfill-malware-hashes-3f720674.md) | On-demand historical backfill for the PRODAFT USTA malware-hash IoC feed. Pages the feed from Backfi... | - |
| [PRODAFT USTA - Backfill Phishing Sites](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-backfill-phishing-sites-a323edfb.md) | On-demand historical backfill for the PRODAFT USTA phishing-site IoC feed. Pages the feed from Backf... | - |
| [PRODAFT USTA - Import Malicious URLs](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-import-malicious-urls-b406db8c.md) | Polls the PRODAFT USTA malicious-URL IoC feed hourly, maps each record to a STIX 2.1 indicator, and ... | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) *(read)* |
| [PRODAFT USTA - Import Malware Hashes](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-import-malware-hashes-3fd88ec8.md) | Polls the PRODAFT USTA malware-hash IoC feed hourly, maps each record to a STIX 2.1 file indicator (... | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) *(read)* |
| [PRODAFT USTA - Import Phishing Sites](../content/prodaft-usta-ioc-threat-intelligence-prodaft-usta-import-phishing-sites-9a061ecc.md) | Polls the PRODAFT USTA phishing-site IoC feed hourly, maps each record to a STIX 2.1 indicator, and ... | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) *(read)* |

## Additional Documentation

> 📄 *Source: [PRODAFT USTA - IoC Threat Intelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20IoC%20Threat%20Intelligence/README.md)*

Ingests **indicators of compromise** — malicious URLs, malware hashes, and phishing sites —
from the PRODAFT USTA Security Intelligence API into Microsoft Sentinel **Threat
Intelligence** as STIX 2.1 indicators. Unlike the other PRODAFT USTA solutions (which land
data in custom `_CL` tables via a codeless connector), this solution pushes indicators to
Sentinel's **Upload STIX Objects API**, so they appear in the **Threat Intelligence blade**
and the built-in `ThreatIntelIndicators` table. Each feed uploads under its own
`SourceSystem` — `PRODAFT USTA - Malicious URLs`, `PRODAFT USTA - Malware Hashes` and
`PRODAFT USTA - Phishing Sites` — so `SourceSystem startswith "PRODAFT USTA"` selects every
USTA indicator while each feed stays individually filterable in the Threat Intelligence blade.

## Contents

| Content | Items |
|---|---|
| Data connector | `PRODAFTUstaIoC_UploadIndicatorsAPI` — a documentation/health card; ingestion is performed by the playbooks below |
| Import playbooks | `PRODAFTUstaIoC-ImportMaliciousUrls`, `PRODAFTUstaIoC-ImportMalwareHashes`, `PRODAFTUstaIoC-ImportPhishingSites` — hourly, one per feed |
| Backfill playbooks | `PRODAFTUstaIoC-BackfillMaliciousUrls`, `PRODAFTUstaIoC-BackfillMalwareHashes`, `PRODAFTUstaIoC-BackfillPhishingSites` — on-demand historical load, one per feed (default 90 days) |
| Analytic rules | TI map URL → Syslog; TI map Domain → DnsEvents; TI map File Hash → CommonSecurityLog |
| Workbook | `PRODAFTUstaIoCOverview` |

## How it works

Each import playbook is a Logic App that, every hour:

1. Reads its own ingestion watermark — `max(Created)` for this feed's `SourceSystem` in
   `ThreatIntelIndicators`, minus a 5-minute overlap — and fetches everything created since,
   following the API's `next` link until the page set is exhausted. `LookBackHours` (default 2)
   is only the fallback for the first run, when no watermark exists yet. Because the watermark
   advances only after a **successful** upload, a failed run retries the same window rather
   than skipping indicators.
2. Maps each record to a **STIX 2.1 indicator** — `is_domain` chooses a `domain-name` vs
   `url` pattern; malware hashes become a `file:hashes` pattern (MD5/SHA-1/SHA-256); vendor
   `tags` become STIX `labels`; indicators are marked `TLP:AMBER`. When the record carries
   `ip_addresses`, each address is appended to the **same** indicator's pattern as its own
   observation expression — `ipv4-addr:value` or `ipv6-addr:value`, picked per address — so the
   URL/hash and its resolved IPs travel as one indicator sharing one validity window.
3. Uploads batches (≤100) to Microsoft Sentinel via the **Upload STIX Objects** action using the Logic
   App's **system-assigned managed identity**.

STIX ids are **deterministic** (the USTA record id for URLs/hashes; a stable UUID derived
from the integer id for phishing sites), so overlapping re-uploads **update**

*[Content truncated...]*

## Release Notes

# PRODAFT USTA - IoC Threat Intelligence — Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 08-07-2026                     | Initial Solution Release. Ingests PRODAFT USTA indicators of compromise (malicious URLs, malware hashes, phishing sites) into Microsoft Sentinel Threat Intelligence as STIX 2.1 indicators via the Upload STIX Objects API. Records that carry resolved `ip_addresses` also contribute `ipv4-addr`/`ipv6-addr` observables to the same indicator. Three **import Playbooks** (one per IoC feed, hourly, managed-identity), three on-demand **backfill Playbooks** (one per feed, 90 days by default), a **Data Connector** card, three **Analytic Rules** (TI-map URL/Domain/File-hash against the `ThreatIntelIndicators` table), and an overview **Workbook**. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


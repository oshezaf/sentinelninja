# ⚠️ Datazag

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Datazag.svg" alt="Datazag Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Datazag |
| **Support Tier** | Partner |
| **Support Link** | [https://datazag.com/support](https://datazag.com/support) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | Datazag - support@datazag.com |
| **First Published** | 2026-08-06 |
| **Last Updated** | 2026-08-06 |
| **Solution Folder** | [Datazag](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datazag) |

The [Datazag](https://datazag.com/) solution for Microsoft Sentinel delivers brand impersonation, platform impersonation and attacker-infrastructure indicators derived from Certificate Transparency, published as STIX 2.1 objects over a TAXII 2.1 server.\n\nIndicators are ingested using Microsoft Sentinel's built-in **Threat Intelligence - TAXII** data connector and land in the native **ThreatIntelIndicators** table. No custom table, data collection rule or workspace function is required, and indicators are available to analytic rules and hunting queries immediately. Because indicators are retained in the workspace, existing logs can also be retro-hunted against them. Datazag never queries your workspace: delivery is pull-only, on a schedule you control.\n\n**Before you install**\n\nYou need an active Datazag subscription. Contact support@datazag.com to obtain the username and password for your organisation, quoting the collections your subscription includes.\n\n**Connecting the feed**\n\nIn the Microsoft Defender portal, go to Microsoft Sentinel > Configuration > Data connectors, open **Threat Intelligence - TAXII**, select **Open connector page**, then **Add**. Enter a friendly name of your choosing, the API root URL and collection ID below, and the credentials issued by Datazag. A polling frequency of once an hour is recommended. Repeat for each collection your subscription includes; each is a separate TAXII server entry.\n\nAPI root URL: `https://taxii.datazag.com/api/`\n\n| Collection | ID |\n|---|---|\n| Platform impersonation | `c7ad8fef-c704-4b36-9526-5d7c3bd018c4` |\n| Attacker infrastructure | `eedf8709-5e4f-4ed4-b840-5eaafa236b70` |\n\nBrand impersonation collections are issued per organisation; Datazag will supply your collection ID with your credentials.\n\n**Prerequisites**\n\na. An active Datazag subscription and TAXII credentials, as above.\n\nb. The analytic rule and hunting query in this solution match indicators against DNS activity through the [Advanced Security Information Model (ASIM)](https://learn.microsoft.com/azure/sentinel/normalization). The ASIM DNS parsers must be deployed and the workspace must be receiving DNS telemetry for this content to return results.\n\nContent in this solution identifies Datazag indicators by their STIX `created_by_ref` rather than by `SourceSystem`, because `SourceSystem` reflects the friendly name you choose when adding the TAXII server.

## Contents

- [Data Connectors](#data-connectors)
- [Internal Tables](#internal-tables)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | Analytics, Hunting |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Hunting Queries | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Datazag - impersonation domain resolved in DNS](../content/datazag-datazag-impersonation-domain-resolved-in-dns-8f3c1a4e-6b52-4d19-9c07-2a5e8d0f7b41-8e84ed00.md) | High | InitialAccess, CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Datazag - retro-hunt historical DNS against impersonation indicators](../content/datazag-datazag-retro-hunt-historical-dns-against-impersonation-indicators-2d7b90c5-41ae-4f83-a6d2-9b1c5e3407fa-3796d418.md) | InitialAccess, CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 27-08-2026                     | Initial Datazag Threat Intelligence solution release. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


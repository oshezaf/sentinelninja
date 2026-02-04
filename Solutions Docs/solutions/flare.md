# Flare

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Flare.svg" alt="Flare Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Flare Systems [Firework](https://flare.io/platform/) solution allows you to receive data and intelligence from Firework on Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs. 

 a .[Azure Monitor HTTP Data Collector API ](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Flare |
| **Support Tier** | Partner |
| **Support Link** | [https://flare.io/contact/](https://flare.io/contact/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Flare - support@flare.io |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [Flare](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Flare) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Flare Push Connector](../connectors/fireworkpush.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`FireworkV2_CL`](../tables/fireworkv2-cl.md) | [Flare Push Connector](../connectors/fireworkpush.md) | Analytics, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 8 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Flare Cloud bucket result](../content/flare-flare-cloud-bucket-result-9cb7c337-f172-4af6-b0e8-b6b7552d762d-271a57e6.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare Google Dork result found](../content/flare-flare-google-dork-result-found-9cb7c337-f174-4af6-b0e8-b6b7552d762d-840d1848.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare Host result](../content/flare-flare-host-result-9cb7c337-f175-4af6-b0e8-b6b7552d762d-ff5f9a5f.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare Infected Device](../content/flare-flare-infected-device-9cb7c337-f176-4af6-b0e8-b6b7552d762d-3c772b70.md) | Medium | CredentialAccess | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare Leaked Credentials](../content/flare-flare-leaked-credentials-9cb7c337-f170-4af6-b0e8-b6b7552d762d-a455dcf6.md) | Medium | CredentialAccess | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare Paste result](../content/flare-flare-paste-result-9cb7c337-f177-4af6-b0e8-b6b7552d762d-18a2af71.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare SSL Certificate result](../content/flare-flare-ssl-certificate-result-9cb7c337-f179-4af6-b0e8-b6b7552d762d-0725723f.md) | Medium | ResourceDevelopment | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |
| [Flare Source Code found](../content/flare-flare-source-code-found-9cb7c337-f178-4af6-b0e8-b6b7552d762d-4e606f91.md) | Medium | Reconnaissance | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [FlareSystemsFireworkOverview](../content/flare-flaresystemsfireworkoverview-4ffe81de.md) | [`FireworkV2_CL`](../tables/fireworkv2-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [credential-warning](../content/flare-credential-warning-d8db989d.md) | This playbook monitors all data received from Firework looking for leaked credentials (email:passwor... | - |

## Release Notes

# Release Notes

Release notes are available starting from version 2.2.0.
Earlier versions did not have published release notes.

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
| ----------- | ------------------------------ | ------------------------------------------------------------------------- |
| 3.0.0       | 26-12-2025                     | Added new **CFF Data Connector** for this solution                        |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


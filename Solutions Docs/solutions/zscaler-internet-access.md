# Zscaler Internet Access

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zscaler |
| **Support Tier** | Partner |
| **Support Link** | [https://help.zscaler.com/submit-ticket-links](https://help.zscaler.com/submit-ticket-links) |
| **Categories** | domains |
| **First Published** | 2022-05-25 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Internet%20Access](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Internet%20Access) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md)
- [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md), [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) | Analytics, Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 4 |
| Playbooks | 4 |
| Analytic Rules | 2 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Discord CDN Risky File Download](../content/010bd98c-a6be-498c-bdcd-502308c0fdae.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Request for single resource on domain](../content/4d500e6d-c984-43a3-9f39-7edec8dcc04d.md) | Low | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZscalerFirewall](../content/zscalerfirewall-zscaler-internet-access.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ZscalerOffice365Apps](../content/zscaleroffice365apps-zscaler-internet-access.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ZscalerThreats](../content/zscalerthreats-zscaler-internet-access.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ZscalerWebOverview](../content/zscalerweboverview-zscaler-internet-access.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block URL - Zscaler](../content/block-url---zscaler-zscaler-internet-access.md) | This playbook allows blocks URLs in Zscaler by adding them to categories | - |
| [FileHash Enrichment - Zscaler](../content/filehash-enrichment---zscaler-zscaler-internet-access.md) | This playbook post a Zscaler Sandbox report for each FileHash found in the incident. | - |
| [FunctionApp](../content/functionapp-zscaler-internet-access.md) | - | - |
| [Zscaler API authentication](../content/zscaler-api-authentication-zscaler-internet-access.md) | This playbook generates access token in Zscaler API. Call this playbook as a step in functional Zsca... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ZScalerFW_Parser](../content/a4d32d94-2fb5-41f6-b871-47c71ffff167.md) | - | - |
| [ZScalerWeb_Parser](../content/fda3f601-8321-492e-ae77-e2ed6829be60.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.3       | 28-11-2024                     | Removed Deprecated **Data Connectors**         |
| 3.0.2       | 28-06-2024                     | Deprecating data connectors                    |
| 3.0.1       | 03-05-2024                     | Repackaged for parser issue fix on reinstall   |
| 3.0.0       | 16-02-2024                     | Addition of new Zscaler AMA **Data Connector** |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

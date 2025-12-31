# Nasuni

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Nasuni |
| **Support Tier** | Partner |
| **Support Link** | [https://github.com/nasuni-labs/Azure-Sentinel](https://github.com/nasuni-labs/Azure-Sentinel) |
| **Categories** | domains |
| **First Published** | 2023-07-07 |
| **Last Updated** | 2023-07-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Nasuni](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Nasuni) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Nasuni Edge Appliance](../connectors/nasuniedgeappliance.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Nasuni`](../tables/nasuni.md) | [[Deprecated] Nasuni Edge Appliance](../connectors/nasuniedgeappliance.md) | - |
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Nasuni Edge Appliance](../connectors/nasuniedgeappliance.md) | Analytics, Hunting |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Hunting Queries | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Ransomware Attack Detected](../content/6c8770fb-c854-403e-a64d-0293ba344d5f.md) | High | Impact | [`Syslog`](../tables/syslog.md) |
| [Ransomware Client Blocked](../content/0c96a5a2-d60d-427d-8399-8df7fe8e6536.md) | High | Impact | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Nasuni File Delete Activity](../content/64a3477e-d06f-4491-86a5-6f99702e267f.md) | Impact | [`Syslog`](../tables/syslog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3       |     03-01-2025                 | Removed Deprecated **Data connector**       |
| 3.0.2       |     18-07-2024                 | Deprecating data connectors                |
| 3.0.1       |     02-08-2023                 | Solution Id and Tier Updated                |
| 3.0.0       |     14-07-2023                 | Initial Solution Release                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)

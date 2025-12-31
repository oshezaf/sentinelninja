# Votiro

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Votiro |
| **Support Tier** | Partner |
| **Support Link** | [https://support.votiro.com/](https://support.votiro.com/) |
| **Categories** | domains |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Votiro](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Votiro) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md) | - |
| [`VotiroEvents`](../tables/votiroevents.md) | - | Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Votiro - File Blocked from Connector](../content/17bf3780-ae0d-4cd9-a884-5df8b687f3f5.md) | Low | DefenseEvasion, Discovery, Impact | - |
| [Votiro - File Blocked in Email](../content/0b8b91de-c63e-4bc2-b5f4-b15d3b379ec9.md) | Low | CommandAndControl, DefenseEvasion, Impact, InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Votiro Monitoring Dashboard](../content/votiro-monitoring-dashboard-votiro.md) | [`VotiroEvents`](../tables/votiroevents.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 01-07-2024                     |  Deprecating data connectors                                          |
| 3.0.0       | 22-07-2023                     |  Initial Solution Release                                          |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

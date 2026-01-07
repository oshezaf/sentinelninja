# SINEC Security Guard

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SSG.svg" alt="SINEC Security Guard Logo" width="75" height="75">

The SINEC Security Guard solution for Microsoft Sentinel allows you to ingest security events of your industrial networks from the [SINEC Security Guard](https://siemens.com/sinec-security-guard) into Microsoft Sentinel

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Siemens AG |
| **Support Tier** | Partner |
| **Support Link** | [https://siemens.com/sinec-security-guard](https://siemens.com/sinec-security-guard) |
| **Categories** | domains,verticals |
| **Version** | 3.0.3 |
| **Author** | Siemens AG |
| **First Published** | 2024-07-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SINEC%20Security%20Guard](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SINEC%20Security%20Guard) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [SINEC Security Guard](../connectors/ssg.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SINECSecurityGuard_CL`](../tables/sinecsecurityguard-cl.md) | [SINEC Security Guard](../connectors/ssg.md) | Analytics |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SSG_Security_Incidents](../content/sinec-security-guard-ssg-security-incidents-d41fa731-45a2-4b23-bb1d-29896fbc5298-8490c938.md) | HIGH | Impact | [`SINECSecurityGuard_CL`](../tables/sinecsecurityguard-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                |
|-------------|--------------------------------|-----------------------------------|
| 3.0.0       | 12-11-2024                     | Initial Solution Release          |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

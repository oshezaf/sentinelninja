# Red Canary

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Red Canary |
| **Support Tier** | Partner |
| **Support Link** | [https://www.redcanary.com](https://www.redcanary.com) |
| **Categories** | domains |
| **First Published** | 2022-03-04 |
| **Last Updated** | 2022-03-04 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Red%20Canary) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Red Canary Threat Detection](../connectors/redcanarydataconnector.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`RedCanaryDetections_CL`](../tables/redcanarydetections-cl.md) | [Red Canary Threat Detection](../connectors/redcanarydataconnector.md) | Analytics |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Red Canary Threat Detection](../content/red-canary-red-canary-threat-detection-6d263abb-6445-45cc-93e9-c593d3d77b89-44ff5a3e.md) ⚠️ | High | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, Impact, InitialAccess, LateralMovement, Persistence, PrivilegeEscalation | [`RedCanaryDetections_CL`](../tables/redcanarydetections-cl.md) |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

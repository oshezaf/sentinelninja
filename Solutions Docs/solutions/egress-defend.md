# Egress Defend

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | egress1589289169584 |
| **Support Tier** | Partner |
| **Support Link** | [https://support.egress.com/s/](https://support.egress.com/s/) |
| **Categories** | domains |
| **First Published** | 2023-07-27 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Egress Defend](../connectors/egressdefendpolling.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) | [Egress Defend](../connectors/egressdefendpolling.md) | Hunting |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Hunting Queries | 1 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Egress Defend - Dangerous Attachment Detected](../content/egress-defend-egress-defend---dangerous-attachment-detected-a0e55dd4-8454-4396-91e6-f28fec3d2cab.md) | Medium | Execution, InitialAccess, Persistence, PrivilegeEscalation | - |
| [Egress Defend - Dangerous Link Click](../content/egress-defend-egress-defend---dangerous-link-click-a896123e-03a5-4a4d-a7e3-fd814846dfb2.md) | Medium | Execution | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Dangerous emails with links clicked](../content/egress-defend-dangerous-emails-with-links-clicked-57ada8d5-7a26-4440-97fd-32c5c3fd0421.md) | Collection | [`EgressDefend_CL`](../tables/egressdefend-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DefendMetrics](../content/egress-defend-defendmetrics.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DefendAuditData](../content/egress-defend-defendauditdata-0d23aae5-6f59-47d8-902e-ba136b64a094.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 02-08-2023                     | Initial Solution Release.                   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

# Silverfort

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Silverfort |
| **Support Tier** | Partner |
| **Support Link** | [https://www.silverfort.com/customer-success/#support](https://www.silverfort.com/customer-success/#support) |
| **Categories** | domains |
| **First Published** | 2024-09-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Silverfort](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Silverfort) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Silverfort Admin Console](../connectors/silverfortama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Silverfort Admin Console](../connectors/silverfortama.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Silverfort - Certifried Incident](../content/9ae540c9-c926-4100-8f07-1eac22596292.md) | High | PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Log4Shell Incident](../content/d6abed70-4043-46da-9304-a98f3446fa5f.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - NoPacBreach Incident](../content/bdfd2c45-10a0-44e7-a90a-ba7b6bdd9ff2.md) | High | PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - UserBruteForce Incident](../content/46ff357b-9e98-465b-9e45-cd52fa4a7522.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SilverfortWorkbook](../content/silverfortworkbook-silverfort.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                |
|-------------|--------------------------------|-----------------------------------|
| 3.0.0       | 13-09-2024                     | Initial Solution Release          |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

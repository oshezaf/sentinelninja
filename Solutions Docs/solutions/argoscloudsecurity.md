# ARGOSCloudSecurity

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ARGOS Cloud Security |
| **Support Tier** | Partner |
| **Support Link** | [https://argos-security.io/contact-us](https://argos-security.io/contact-us) |
| **Categories** | domains |
| **First Published** | 2022-08-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ARGOSCloudSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ARGOSCloudSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [ARGOS Cloud Security](../connectors/argoscloudsecurity.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ARGOS_CL`](../tables/argos-cl.md) | [ARGOS Cloud Security](../connectors/argoscloudsecurity.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [ARGOS Cloud Security - Exploitable Cloud Resources](../content/a9bf1b8c-c761-4840-b9a8-7535ca68ca28.md) | High | InitialAccess | [`ARGOS_CL`](../tables/argos-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ARGOSCloudSecurityWorkbook](../content/argoscloudsecurityworkbook-argoscloudsecurity.md) | [`ARGOS_CL`](../tables/argos-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)

# ARGOSCloudSecurity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/ARGOSCloudSecurity/Workbooks/images/logos/argos-logo.svg" alt="ARGOSCloudSecurity Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The ARGOS Cloud Security integration for Microsoft Sentinel allows you to have all your important cloud security events in one place. This enables you to easily create dashboards, alerts, and correlate events across multiple systems. Overall this will improve your organization's security posture and security incident response.

Microsoft Sentinel Solutions provide a consolidated way to acquire Microsoft Sentinel content like data connectors, workbooks, analytics, and automations in your workspace with a single deployment step.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ARGOS Cloud Security |
| **Support Tier** | Partner |
| **Support Link** | [https://argos-security.io/contact-us](https://argos-security.io/contact-us) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | ARGOS Cloud Security - support@argos-security.io |
| **First Published** | 2022-08-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ARGOSCloudSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ARGOSCloudSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [ARGOS Cloud Security](../connectors/argoscloudsecurity.md)

## Tables Used

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
| [ARGOS Cloud Security - Exploitable Cloud Resources](../content/argoscloudsecurity-argos-cloud-security-exploitable-cloud-resources-a9bf1b8c-c761-4840-b9a8-7535ca68ca28-4146438c.md) | High | InitialAccess | [`ARGOS_CL`](../tables/argos-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ARGOSCloudSecurityWorkbook](../content/argoscloudsecurity-argoscloudsecurityworkbook-313e9d94.md) | [`ARGOS_CL`](../tables/argos-cl.md) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)


# ARGOS Cloud Security for Microsoft Sentinel

*Solution: ARGOSCloudSecurity*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/ARGOSCloudSecurity/Workbooks/images/logos/argos-logo.svg" alt="ARGOSCloudSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ARGOS Cloud Security |
| **Support Tier** | Partner |
| **Support Link** | [https://argos-security.io/contact-us](https://argos-security.io/contact-us) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | ARGOS Cloud Security - support@argos-security.io |
| **First Published** | 2022-08-16 |
| **Solution Folder** | [ARGOSCloudSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ARGOSCloudSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/argoscloudsecurity1605618416175.argos-sentinel) · Popularity: ⚪ Very Low (0%) |

The ARGOS Cloud Security integration for Microsoft Sentinel allows you to have all your important cloud security events in one place. This enables you to easily create dashboards, alerts, and correlate events across multiple systems. Overall this will improve your organization's security posture and security incident response.

Microsoft Sentinel Solutions provide a consolidated way to acquire Microsoft Sentinel content like data connectors, workbooks, analytics, and automations in your workspace with a single deployment step.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [ARGOS Cloud Security](../connectors/argoscloudsecurity.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ARGOS_CL`](../tables/argos-cl.md) 🔶 | [ARGOS Cloud Security](../connectors/argoscloudsecurity.md) | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


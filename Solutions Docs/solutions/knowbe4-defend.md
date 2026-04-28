# ⚠️ KnowBe4 Defend

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/KnowBe4-logo.svg" alt="KnowBe4 Defend Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | knowbe41678478380097 |
| **Support Tier** | Partner |
| **Support Link** | [https://support.knowbe4.com](https://support.knowbe4.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | KnowBe4 - support@knowbe4.com |
| **First Published** | 2025-02-05 |
| **Solution Folder** | [KnowBe4 Defend](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/KnowBe4%20Defend) |

KnowBe4 Defend for Microsoft Sentinel provides details of processed emails, including the type of phishing attack, payload type and information to show if the user interacted with the email in a positive (clicking on banners or submitting the phish sample) or negative (clicking on an unsafe URL) manner.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [KnowBe4 Defend](../connectors/knowbe4defendpolling.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) 🔶 | [KnowBe4 Defend](../connectors/knowbe4defendpolling.md) | Analytics, Workbooks |
| [`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) 🔶 | [KnowBe4 Defend](../connectors/knowbe4defendpolling.md) | Analytics, Hunting, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

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
| [KnowBe4 Defend - Dangerous Attachment Detected](../content/knowbe4-defend-knowbe4-defend-dangerous-attachment-detected-b75a4a7a-dedb-47be-b7e6-344f4d50af19-fa41ceab.md) | Medium | Execution, InitialAccess, Persistence, PrivilegeEscalation | [`EgressDefend_CL`](../tables/egressdefend-cl.md)<br>[`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) |
| [KnowBe4 Defend - Dangerous Link Click](../content/knowbe4-defend-knowbe4-defend-dangerous-link-click-af90173d-cc27-4166-a9b1-8c4347b1f4ac-18f4a752.md) | Medium | Execution | [`EgressDefend_CL`](../tables/egressdefend-cl.md)<br>[`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Dangerous emails with links clicked](../content/knowbe4-defend-dangerous-emails-with-links-clicked-40a3d172-79ec-4e46-95bd-21114ee0f863-eb38a85c.md) | Collection | [`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [KnowBe4DefendMetrics](../content/knowbe4-defend-knowbe4defendmetrics-2e05a83a.md) | [`EgressDefend_CL`](../tables/egressdefend-cl.md)<br>[`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DefendAuditData](../parsers/defendauditdata.md) | - | [`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 05-02-2026                     | Initial Solution Release.                   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


# ⚠️ FieldEffectMDR

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/FieldEffect_Logo.svg" alt="FieldEffectMDR Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Field Effect |
| **Support Tier** | Partner |
| **Support Link** | [https://support.fieldeffect.com/](https://support.fieldeffect.com/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Field Effect |
| **First Published** | 2026-02-14 |
| **Last Updated** | 2026-02-14 |
| **Solution Folder** | [FieldEffectMDR](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FieldEffectMDR) |

The [Field Effect](https://fieldeffect.com/) solution for Microsoft Sentinel enables you to ingest data from Field Effect's MDR solution into Microsoft Sentinel for centralized visibility and correlation.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Field Effect MDR Data Connector (via Codeless Connector Framework)](../connectors/fieldeffectccf.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`FieldEffectAROAlerts_CL`](../tables/fieldeffectaroalerts-cl.md) | [Field Effect MDR Data Connector (via Codeless Connector Framework)](../connectors/fieldeffectccf.md) | Analytics |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Field Effect MDR Alert: ARO Alert](../content/fieldeffectmdr-field-effect-mdr-alert-aro-alert-6d2d6b3f-7d7b-4d4a-9b2b-9f7f3b8c2a11-86e91283.md) | Medium | Execution, DefenseEvasion | [`FieldEffectAROAlerts_CL`](../tables/fieldeffectaroalerts-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [FieldEffect](../parsers/fieldeffect.md) | - | [`FieldEffectAROAlerts_CL`](../tables/fieldeffectaroalerts-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 16-04-2026                     | Initial release of Field Effect MDR **CCF connector**. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


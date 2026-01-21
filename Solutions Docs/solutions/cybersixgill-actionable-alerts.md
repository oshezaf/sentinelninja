# Cybersixgill-Actionable-Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cybersixgill.svg" alt="Cybersixgill-Actionable-Alerts Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Cybersixgill Actionable Alerts provides a premium automated customized threat intelligence feed from the deep and dark web. Monitor activity in the underground regarding your key assets (Names, IP Address, Domains, CVEs, Third party suppliers ) relevant to their brand, industry, and geolocation and receive real time alert notifications on incoming threats on your organization including: Contextual data, assessments and recommendations

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cybersixgill |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cybersixgill.com/](https://www.cybersixgill.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Cybersixgill |
| **First Published** | 2023-02-27 |
| **Last Updated** | 2024-09-24 |
| **Solution Folder** | [Cybersixgill-Actionable-Alerts](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybersixgill-Actionable-Alerts) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cybersixgill Actionable Alerts](../connectors/cybersixgillactionablealerts.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyberSixgill_Alerts_CL`](../tables/cybersixgill-alerts-cl.md) | [Cybersixgill Actionable Alerts](../connectors/cybersixgillactionablealerts.md) | Hunting, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |
| Playbooks | 2 |
| Hunting Queries | 1 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cybersixgill Actionable alerts](../content/cybersixgill-actionable-alerts-cybersixgill-actionable-alerts-532133dd-a8ed-4062-bf0d-f04dc97bb71a-f87f4c92.md) | - | [`CyberSixgill_Alerts_CL`](../tables/cybersixgill-alerts-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ActionableAlertsDashboard](../content/cybersixgill-actionable-alerts-actionablealertsdashboard-9c629610.md) | [`CyberSixgill_Alerts_CL`](../tables/cybersixgill-alerts-cl.md) |
| [ActionableAlertsList](../content/cybersixgill-actionable-alerts-actionablealertslist-16388c4a.md) | [`CyberSixgill_Alerts_CL`](../tables/cybersixgill-alerts-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Cybersixgill-Alert-Status-Update](../content/cybersixgill-actionable-alerts-cybersixgill-alert-status-update-4e8681e6.md) | This playbook will update status of Cybersixgill Alerts when respective incident status is updated i... | - |
| [Delete-Cybersixgill-Alert](../content/cybersixgill-actionable-alerts-delete-cybersixgill-alert-dcb0070c.md) | This playbook will delete Alert on Cybersixgill portal when resective Incident is deleted in Microso... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 02-09-2024                     | Updated the python runtime version to 3.11  |
| 3.0.0       | 20-02-2024                     | Replaced Hyperlinks with Shortlinks (aka.ms) in Data Connector |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


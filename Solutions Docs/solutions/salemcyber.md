# SalemCyber

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/salem_logo.svg" alt="SalemCyber Logo" width="75" height="75">

Salem, [AI Cyber analyst](https://salemcyber.com), **automatically investigates** Microsoft Sentinel alerts and escalates validated threats that require your attention. 

This Microsoft Sentinel integration allows you to send new Microsoft Sentinel alerts to Salem for analysis and reporting.

**Why Salem?** 

Most alerts are false positives. Salem automatically triages noisy cyber alerts to find a small number of threats that require your attention. 

Salem scales the impact of your cyber team by helping you respond well 24/7 to a wide range of security threats. 

Salem's AI learns from your team and customizes its analysis to your cyber relevant business context. 

**Get Started with Salem** 

You can find and install Salem, AI cyber analyst in the [Azure Marketplace](https%3A%2F%2Fazuremarketplace.microsoft.com%2Fen-us%2Fmarketplace%2Fapps%2Fsaleminc1627928803559.salemcyber%3Ftab%3DOverview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Salem Cyber |
| **Support Tier** | Partner |
| **Support Link** | [https://www.salemcyber.com/contact](https://www.salemcyber.com/contact) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Salem Cyber - support@salemcyber.com |
| **First Published** | 2023-07-21 |
| **Last Updated** | 2023-07-21 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SalemCyber](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SalemCyber) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`SalemAlerts_CL`](../tables/salemalerts-cl.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Playbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SalemDashboard](../content/salemcyber-salemdashboard-e693bdd8.md) | [`SalemAlerts_CL`](../tables/salemalerts-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Send-Sentinel-Alerts-to-Salem](../content/salemcyber-send-sentinel-alerts-to-salem-be5bcfdf.md) | Use this playbook to send Microsoft Sentinel alerts to Salem Virtual Cyber Analyst | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       |     14-07-2023                 | Initial Solution Release                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

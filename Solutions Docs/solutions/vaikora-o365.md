# ⚠️ Vaikora-O365

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/vaikora_logo.svg" alt="Vaikora-O365 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.data443.com](https://www.data443.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Data443 Risk Mitigation, Inc. - support@data443.com |
| **First Published** | 2026-05-13 |
| **Solution Folder** | [Vaikora-O365](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-O365) |

The [Vaikora](https://vaikora.com) for O365 solution ships the Microsoft Sentinel content that pairs with the Vaikora-O365 black-box Azure VM. The VM scans Microsoft 365 mailboxes via Microsoft Graph API, classifies messages with the CTASD inference engine, and writes quarantine events into a custom Log Analytics table (VaikoraO365_Quarantine_CL). This solution adds a Logic App playbook that turns each quarantine event into a Microsoft Sentinel incident, plus analytic rules over the custom table that fire on high-confidence phishing scores and tenant-wide quarantine rate anomalies.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`VaikoraO365_Quarantine_CL`](../tables/vaikorao365-quarantine-cl.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Vaikora - Engine offline](../content/vaikora-o365-vaikora-engine-offline-968b70c1-b468-418a-ac02-1eb74783a52a-92ff8909.md) | Medium | DefenseEvasion | [`VaikoraO365_Quarantine_CL`](../tables/vaikorao365-quarantine-cl.md) |
| [Vaikora - High score quarantine](../content/vaikora-o365-vaikora-high-score-quarantine-017031f6-be1d-4c68-b4d3-182fa84378cc-0e337c3a.md) | High | InitialAccess, CredentialAccess, Collection, Exfiltration | [`VaikoraO365_Quarantine_CL`](../tables/vaikorao365-quarantine-cl.md) |
| [Vaikora - Quarantine rate spike](../content/vaikora-o365-vaikora-quarantine-rate-spike-3b3eb1cd-578d-4198-9b7a-bd7253b0dc9f-a2e9d10e.md) | Medium | InitialAccess | [`VaikoraO365_Quarantine_CL`](../tables/vaikorao365-quarantine-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [VaikoraO365QuarantineDashboard](../content/vaikora-o365-vaikorao365quarantinedashboard-f059fd4f.md) | [`VaikoraO365_Quarantine_CL`](../tables/vaikorao365-quarantine-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Vaikora for O365 - Quarantine Incident Responder](../content/vaikora-o365-vaikora-for-o365-quarantine-incident-responder-2f2e4431.md) | This playbook responds to Microsoft Sentinel incidents raised from the VaikoraO365_Quarantine_CL cus... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 13-05-2026                     | Initial release. Vaikora for O365 quarantine solution pairing the customer-tenant Vaikora-O365 black-box Azure VM with Microsoft Sentinel. Ships one Sentinel-incident-triggered playbook (VaikoraO365ToQuarantine) and three analytic rules over the VaikoraO365_Quarantine_CL custom Log Analytics table: high-confidence phishing/suspected quarantine, abnormal quarantine rate spikes, and engine offline detection.|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


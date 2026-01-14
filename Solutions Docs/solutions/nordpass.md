# NordPass

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NordPass.svg" alt="NordPass Logo" width="75" height="75">

NordPass for Microsoft Sentinel enables you to automatically transfer Activity Log data from NordPass to Microsoft Sentinel and get real-time insights such as item activity, all login attempts, and security notifications. This allows you to stay informed by setting any needed alerts by your organization to monitor these security events.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NordPass |
| **Support Tier** | Partner |
| **Support Link** | [https://support.nordpass.com/](https://support.nordpass.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Nord Security Inc. |
| **First Published** | 2025-04-22 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [NordPass](../connectors/nordpass.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) | [NordPass](../connectors/nordpass.md) | Analytics, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 9 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [NordPass - Activity token revocation](../content/nordpass-nordpass-activity-token-revocation-800314a6-759a-4575-93e2-1e080b1d33f9-4469b0a8.md) | Medium | DefenseEvasion | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - Declined invitation](../content/nordpass-nordpass-declined-invitation-283d7506-f3c6-419a-ae9c-d9afe6a15d6d-905a2cf5.md) | Low | DefenseEvasion | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - Deleting items of deleted member](../content/nordpass-nordpass-deleting-items-of-deleted-member-0068dca4-dea0-46a3-a970-655e067a145f-3d5122fd.md) | High | Impact | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - Domain data detected in breach](../content/nordpass-nordpass-domain-data-detected-in-breach-e3f2b6c9-df0c-4b36-a376-bb2762e4dbdc-374248c3.md) | High | Exfiltration | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - Manual invitation, suspension, or deletion](../content/nordpass-nordpass-manual-invitation,-suspension,-or-deletion-693c5217-e840-427f-9661-3fa0ef266040-050ce107.md) | Medium | Persistence | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - User data detected in breach](../content/nordpass-nordpass-user-data-detected-in-breach-c4d2eb42-a4ab-4db6-a270-3d2ed7e057a0-7d9dfaf4.md) | High | Exfiltration | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - User deletes items in bulk](../content/nordpass-nordpass-user-deletes-items-in-bulk-f72f630f-c890-49fe-b747-80f4fb3b6348-63e3aff5.md) | High | Impact, Collection | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - User fails authentication](../content/nordpass-nordpass-user-fails-authentication-27b261dc-68f3-489a-944f-bc252e0c1960-90f54b58.md) | High | CredentialAccess | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |
| [NordPass - Vault export](../content/nordpass-nordpass-vault-export-c7f14b43-7625-4516-b137-30b7fda65bcf-aff9055e.md) | High | Exfiltration | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NordPass](../content/nordpass-nordpass-9080f186.md) | [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md) |

## Additional Documentation

> 📄 *Source: [NordPass/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/README.md)*

# NordPass Integration with Microsoft Sentinel

## Overview
This solution lets you monitor your organization’s user activities and track security incidents from NordPass’ Activity Log.

The benefits of this integration:
- **Enhanced Security Monitoring:** Detect unauthorized access and security risks.
- **Automated Threat Detection:** Receive real-time alerts on suspicious activities.
- **Centralized Activity Logging:** Maintain a comprehensive audit trail of user activities.

## Resources Created
Once you deploy the solution, the following Azure resources will be created:

<details>
<summary><strong>Azure Function</strong></summary>
An <strong>Azure Function</strong> is a serverless solution that synchronizes activity between NordPass and Microsoft Sentinel.
</details>

<details>
<summary><strong>Storage Account</strong></summary>
A <strong>Storage Account</strong> contains Azure Function settings and configurations.
</details>

<details>
<summary><strong>Custom Table</strong></summary>
A <strong>Log Analytics Table</strong> named <code>NordPassEventLogs_CL</code> will be created to store synchronized activity events from NordPass. This table serves as the central repository for all collected log data.
</details>

<details>
<summary><strong>Workbook</strong></summary>
A <strong>Workbook</strong> will be created to aggregate NordPass activity data for enhanced visualization and analysis. Dashboards in this workbook give insights into your user’s activity trends, security alerts, and compliance statuses.
</details>

<details>
<summary><strong>Analytic Rules</strong></summary>
Multiple <strong>Analytic Rules</strong> will be created to facilitate incident escalation, allowing security teams to respond to threats proactively. 

These rules include:
- Users declining invites
- Bulk deletion of items
- Deleted users items were reassigned
- Invites, suspensions, and deletions by Owners or Admins
- Revoking tokens
- Failed login attempts by users
- Users exporting their vault

These rules help automate security monitoring, creating actionable insights for your organization.
</details>

## Requirements
To deploy this integration, ensure you have the following:
- [NordPass Enterprise plan](https://nordpass.com/plans/business/).
- [Token for Microsoft Sentinel integration](https://support.nordpass.com/hc/en-us/articles/31972037289873)
- [Microsoft Azure](https://azure.microsoft.com/free).
- [Microsoft Sentinel](https://azure.microsoft.com/products/microsoft-sentinel/)

You must also be a Contributor with User Access Administrator role or Owner of the Microsoft Sentinel Resource Group. This is needed to assign the correct RBAC role to Function App’s managed identity

## Installation
You can easily install the NordPass Solution for Microsoft Sentinel in a few minutes. Click the button below to start the deployment wizard:

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-Nordpass-azuredeploy)

## Post-Deployment Configuration

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**        |
|-------------|--------------------------------|---------------------------|
| 3.0.1       | 25-08-2025                     | Added new Activity Logs   |
| 3.0.0       | 22-04-2025                     | Initial Solution Release. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)


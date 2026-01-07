# Microsoft Entra ID Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Entra-ID-protection_logo.svg" alt="Microsoft Entra ID Protection Logo" width="75" height="75">

The [Microsoft Entra ID Protection](https://docs.microsoft.com/azure/active-directory/identity-protection/overview-identity-protection) solution for Microsoft Sentinel allows you to ingest Security alerts reported in Microsoft Entra ID Protection for risky users and events in Microsoft Entra ID.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID%20Protection) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Entra ID Protection](../connectors/azureactivedirectoryidentityprotection.md)

## Tables Reference

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`IdentityInfo`](../tables/identityinfo.md) | - | Analytics |
| [`SecurityAlert`](../tables/securityalert.md) | [Microsoft Entra ID Protection](../connectors/azureactivedirectoryidentityprotection.md) | Analytics |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 5 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Correlate Unfamiliar sign-in properties & atypical travel alerts](../content/microsoft-entra-id-protection-correlate-unfamiliar-sign-in-properties-&-atypical-travel-alerts-a3df4a32-4805-4c6d-8699-f3c888af2f67-965fe5ef.md) | High | InitialAccess | *Internal use:*<br>[`IdentityInfo`](../tables/identityinfo.md)<br>[`SecurityAlert`](../tables/securityalert.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Confirm Microsoft Entra ID Risky User - Alert Triggered](../content/microsoft-entra-id-protection-confirm-microsoft-entra-id-risky-user-alert-triggered-4ddeaeeb.md) | This playbook will set the Risky User property in Microsoft Entra ID using Graph API. | - |
| [Confirm Microsoft Entra ID Risky User - Incident Triggered](../content/microsoft-entra-id-protection-confirm-microsoft-entra-id-risky-user-incident-triggered-654122c8.md) | For each account entity included in the incident, this playbook will set the Risky User property in ... | - |
| [Dismiss Microsoft Entra ID Risky User - Alert Triggered](../content/microsoft-entra-id-protection-dismiss-microsoft-entra-id-risky-user-alert-triggered-ed5d1fa8.md) | This playbook will dismiss the Risky User property in Microsoft Entra ID using Microsoft Entra ID Co... | - |
| [Dismiss Microsoft Entra ID Risky User – Incident Triggered](../content/microsoft-entra-id-protection-dismiss-microsoft-entra-id-risky-user-–-incident-triggered-717dd204.md) | This playbook will dismiss the Risky User property in Microsoft Entra ID using Microsoft Entra ID Co... | - |
| [Identity Protection response from Teams](../content/microsoft-entra-id-protection-identity-protection-response-from-teams-efd69271.md) | Run this playbook on incidents which contains suspicious Microsoft Entra ID identities. For each acc... | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 07-07-2025                     | To enhance functionality, improve entity mappings, and update **playbook** configurations. |
| 3.0.2       | 07-04-2025                     | Updated ConnectivityCriteria Type in **Data Connector**.				   |
| 3.0.1       | 01-18-2024                     | Updated mapping in **Analytic Rule** for better correlation   | 
| 3.0.0       | 09-11-2023                     | Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

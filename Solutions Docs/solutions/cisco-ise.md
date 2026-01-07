# Cisco ISE

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-07-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Cisco Identity Services Engine](../connectors/ciscoise.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Cisco Identity Services Engine](../connectors/ciscoise.md) | - |

## Content Items

This solution includes **25 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Playbooks | 3 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CiscoISE -  Command executed with the highest privileges from new IP](../content/cisco-ise-ciscoise----command-executed-with-the-highest-privileges-from-new-ip-1fa0da3e-ec99-484f-aadb-93f59764e158.md) | Medium | InitialAccess, Persistence, PrivilegeEscalation, DefenseEvasion, Execution | - |
| [CiscoISE - Attempt to delete local store logs](../content/cisco-ise-ciscoise---attempt-to-delete-local-store-logs-b6549a28-d61c-476e-b350-4404352ee427.md) | Medium | DefenseEvasion | - |
| [CiscoISE - Backup failed](../content/cisco-ise-ciscoise---backup-failed-4eddd44a-25e4-41af-930d-0c17218bec74.md) | Medium | Impact | - |
| [CiscoISE - Certificate has expired](../content/cisco-ise-ciscoise---certificate-has-expired-6107cba5-2974-4c22-8222-2a6f7bbea664.md) | Medium | CredentialAccess | - |
| [CiscoISE - Command executed with the highest privileges by new user](../content/cisco-ise-ciscoise---command-executed-with-the-highest-privileges-by-new-user-e71890a2-5f61-4790-b1ed-cf1d92d3e398.md) | Medium | InitialAccess, Persistence, PrivilegeEscalation, DefenseEvasion, Execution | - |
| [CiscoISE - Device PostureStatus changed to non-compliant](../content/cisco-ise-ciscoise---device-posturestatus-changed-to-non-compliant-548a2eda-d3eb-46cc-8d4b-1601551629e4.md) | Medium | PrivilegeEscalation, Persistence | - |
| [CiscoISE - Device changed IP in last 24 hours](../content/cisco-ise-ciscoise---device-changed-ip-in-last-24-hours-0c509e9b-121e-4951-9f9b-43722e052b4f.md) | Medium | CommandAndControl | - |
| [CiscoISE - ISE administrator password has been reset](../content/cisco-ise-ciscoise---ise-administrator-password-has-been-reset-e63b4d90-d0a8-4609-b187-babfcc7f86d7.md) | Medium | Persistence, PrivilegeEscalation | - |
| [CiscoISE - Log collector was suspended](../content/cisco-ise-ciscoise---log-collector-was-suspended-ce171782-1643-4f21-bbb7-fa954b1e6897.md) | Medium | DefenseEvasion | - |
| [CiscoISE - Log files deleted](../content/cisco-ise-ciscoise---log-files-deleted-21d3be4c-6088-4e76-b6eb-d25479019cb9.md) | Medium | DefenseEvasion | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [CiscoISE - Attempts to suspend the log collector](../content/cisco-ise-ciscoise---attempts-to-suspend-the-log-collector-abea259e-7d56-48d8-ae47-d159929eeed8.md) | DefenseEvasion | - |
| [CiscoISE - Authentication attempts to suspended user account](../content/cisco-ise-ciscoise---authentication-attempts-to-suspended-user-account-72f60667-2a6d-421d-b98d-3d7c3b37a0e5.md) | InitialAccess, CredentialAccess | - |
| [CiscoISE - Dynamic authorization failed](../content/cisco-ise-ciscoise---dynamic-authorization-failed-98d1384d-5aef-430c-875c-3b4434afb003.md) | InitialAccess | - |
| [CiscoISE - Expired certificate in the client certificates chain](../content/cisco-ise-ciscoise---expired-certificate-in-the-client-certificates-chain-c6ebac93-18af-43e3-b757-d6cb147a74b9.md) | - | - |
| [CiscoISE - Failed authentication events](../content/cisco-ise-ciscoise---failed-authentication-events-9cb9ef9e-4f4d-4437-8abe-249589e72931.md) | CredentialAccess | - |
| [CiscoISE - Failed login attempts via SSH CLI (users)](../content/cisco-ise-ciscoise---failed-login-attempts-via-ssh-cli-%28users%29-64b63d2d-a867-4451-bf74-f2310398498e.md) | LateralMovement | - |
| [CiscoISE - Guest authentication failed](../content/cisco-ise-ciscoise---guest-authentication-failed-3935b084-2fa1-461a-b920-1e20c1acff7b.md) | CredentialAccess | - |
| [CiscoISE - Guest authentication succeeded](../content/cisco-ise-ciscoise---guest-authentication-succeeded-377a4eb8-ced4-4e2b-a2f5-731db8f78275.md) | InitialAccess, Persistence, PrivilegeEscalation, DefenseEvasion | - |
| [CiscoISE - Rare or new useragent](../content/cisco-ise-ciscoise---rare-or-new-useragent-32abe28a-c1c8-4eb4-adfb-858abdbacbfe.md) | InitialAccess | - |
| [CiscoISE - Sources with high number of 'Failed Authentication' events](../content/cisco-ise-ciscoise---sources-with-high-number-of-'failed-authentication'-events-4fb45425-b758-41d8-80bc-843b5b0f119e.md) | CredentialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoISE](../content/cisco-ise-ciscoise.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoISE-False Positives Clear Policies](../content/cisco-ise-ciscoise-false-positives-clear-policies.md) | This playbook gets triggered when a new sentinel incident is created 1.For each MAC address (MACAddr... | - |
| [CiscoISE-SuspendGuestUser](../content/cisco-ise-ciscoise-suspendguestuser.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |
| [CiscoISE-TakeEndpointActionFromTeams](../content/cisco-ise-ciscoise-takeendpointactionfromteams.md) | When a new sentinel incident is created, this playbook gets triggered and performs the following act... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoISEEvent](../content/cisco-ise-ciscoiseevent-6c27521f-47f0-42b5-8be6-1503b8e42c65.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYY)** | **Change History**                              |
|-------------|-------------------------------|-------------------------------------------------|
| 3.0.3       | 20-05-2025                    | Updated **Parser** to parse new fields          |
| 3.0.2       | 04-12-2024                    | Removed Deprecated **Data connectors**          |
| 3.0.1       | 23-07-2024                    | Deprecated data connectors                      |
| 3.0.0       | 11-07-2023                    | **Parser** query optimization done		        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

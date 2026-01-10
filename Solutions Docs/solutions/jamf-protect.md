# Jamf Protect

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/jamf_logo.svg" alt="Jamf Protect Logo" width="75" height="75">

The [Jamf Protect](https://www.jamf.com/solutions/threat-prevention-remediation/) solution for Microsoft Sentinel enables you to ingest [Jamf Protect events](https://docs.jamf.com/jamf-protect/documentation/Data_Forwarding_to_a_Third_Party_Storage_Solution.html#task-4227) forwarded into Microsoft Sentinel using the Microsoft Sentinel Analytics Workspace.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Jamf Software, LLC |
| **Support Tier** | Partner |
| **Support Link** | [https://www.jamf.com/support/](https://www.jamf.com/support/) |
| **Categories** | domains |
| **Version** | 3.3.0 |
| **Author** | Thijs Xhaflaire - thijs.xhaflaire@jamf.com |
| **First Published** | 2022-10-10 |
| **Last Updated** | 2025-09-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Jamf%20Protect) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Jamf Protect Push Connector](../connectors/jamfprotectpush.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`jamfprotectalerts_CL`](../tables/jamfprotectalerts-cl.md) | [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) | Analytics, Workbooks |
| [`jamfprotecttelemetryv2_CL`](../tables/jamfprotecttelemetryv2-cl.md) | [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) | - |
| [`jamfprotectunifiedlogs_CL`](../tables/jamfprotectunifiedlogs-cl.md) | [Jamf Protect Push Connector](../connectors/jamfprotectpush.md) | - |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 5 |
| Analytic Rules | 3 |
| Playbooks | 3 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Jamf Protect - Alerts](../content/jamf-protect-jamf-protect-alerts-6098daa0-f05e-44d5-b5a0-913e63ba3179-38dbdadd.md) | High | - | [`jamfprotectalerts_CL`](../tables/jamfprotectalerts-cl.md) |
| [Jamf Protect - Network Threats](../content/jamf-protect-jamf-protect-network-threats-44da53c3-f3b0-4b70-afff-f79275cb9442-34cfd4a7.md) | Informational | InitialAccess | - |
| [Jamf Protect - Unified Logs](../content/jamf-protect-jamf-protect-unified-logs-9eb2f758-003b-4303-83c6-97aed4c03e41-73a1260b.md) | Informational | - | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [JamfProtectDashboard](../content/jamf-protect-jamfprotectdashboard-b0beeadb.md) | [`jamfprotectalerts_CL`](../tables/jamfprotectalerts-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Jamf Protect - Remote lock computer with Jamf Pro](../content/jamf-protect-jamf-protect-remote-lock-computer-with-jamf-pro-14be386b.md) | This Playbook can be used manually or in a Automation Rule to send an remote MDM command with Jamf P... | - |
| [Jamf Protect - Set Alert to In Progress](../content/jamf-protect-jamf-protect-set-alert-to-in-progress-81a20419.md) | This Jamf Protect Playbook can be used manually or in a Automation Rule to change the state of the A... | - |
| [Jamf Protect - Set Alert to Resolved](../content/jamf-protect-jamf-protect-set-alert-to-resolved-1a7def5b.md) | This Jamf Protect Playbook can be used manually or in a Automation Rule to change the state of the A... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [JamfProtectAlerts](../content/jamf-protect-jamfprotectalerts-b1044d58-6384-454e-b51d-5750fda0698c-cd2b688f.md) | - | - |
| [JamfProtectNetworkTraffic](../content/jamf-protect-jamfprotectnetworktraffic-374cd4de-269c-465e-93ac-b9ade4af4f28-b5e90150.md) | - | - |
| [JamfProtectTelemetry](../content/jamf-protect-jamfprotecttelemetry-d941b837-88fa-4c77-a4d8-76af0044cac0-17d14a57.md) | - | - |
| [JamfProtectThreatEvents](../content/jamf-protect-jamfprotectthreatevents-7950cddf-e280-423c-a2cd-a790ec54c085-861c2937.md) | - | - |
| [JamfProtectUnifiedLogs](../content/jamf-protect-jamfprotectunifiedlogs-a848f8db-4cf8-4a64-9bbc-58f4183f2bb1-c9bfd19c.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
|3.3.0        | 02-09-2025                     | Adding support for newly added event types in Telemetry, TCC_MODIFY,NETWORK_CONNECT, PTY_GRANT, PTY_CLOSE and some enhancements to mount and process object mapping.
|3.2.4        | 27-03-2025                     | Resolving issues related to the new Push Connector and the DCE/DCRs. Removing support for Telemetry Legacy in this newer Push Connector. Removing Hunting Queries as they were not relevant anymore. Updated Analytic Rules and Workbooks to work with the updated parsers, the single parser got split up to be more useful to customers that only use certain features. 
|3.2.1        | 24-02-2025                     | Adding support for the newly released `gatekeeper_user_override` event and removing totalRetentionInDays from the Push Connector.
| 3.2.0       | 04-02-2025                     | Added new CCP **Data Connector** to the Solution.
| 3.1.1       | 30-04-2024                     | Repackaged for parser issue fix while reinstall.
| 3.1.0       | 12-01-2024                     | Improved data normalization in the parser JamfProtect, ParentProcess is better mapped now, productVersion has been added and more. Added new macOS Hunting Queries including recent malware IOCs.
| 3.0.1       | 05-12-2023                     | Minor tweak to parser related to signerType
| 3.0.0       | 20-10-2023                     | Added **Parser** for parsing jamfprotect_CL raw logs.
|             |                                | Modified existing **Analytic Rules** & **Workbooks** to make use of newly added parser in this release.
|             |                                | Added macOS Threat Hunting **Hunting Queries** for hunting macOS specific threats retrospectivly
|             |                                | Added **Playbooks** for interacting with the Jamf Protect and Jamf Pro API's, including Remote Locking a computer, and changes Alert statusses based on a Microsoft Sentinel incident. 
| 2.1.1       | 03-03-2023                     | Updating **Analytic Rules** to include MITRE Tactics and Techniques.
| 2.1.0       | 10-02-2023                     | Added **Data Connector** for monitoring logs
|             |                                | Added **Analytics Rules** for automated incident creation within Microsoft Sentinel
|             |                                | Improved **Workbook** and added Endpoint Telemetry
| 2.0.0       | 12-10-2022                     | Initial Solution Release |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)


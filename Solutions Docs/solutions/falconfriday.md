# FalconFriday

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | FalconForce |
| **Support Tier** | Partner |
| **Support Link** | [https://www.falconforce.nl/en/](https://www.falconforce.nl/en/) |
| **Categories** | domains |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **9 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics |
| [`DeviceEvents`](../tables/deviceevents.md) | Analytics |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Analytics |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | Analytics |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | Analytics |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Analytics |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | Analytics |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | Analytics |

## Content Items

This solution includes **30 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 30 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [ASR Bypassing Writing Executable Content](../content/efe4efef-5ca7-4b51-a53e-0e96492ce97a.md) | Medium | DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Access Token Manipulation - Create Process with Token](../content/8df80270-b4fa-4a7a-931e-8d17c0b321ae.md) | Medium | PrivilegeEscalation, DefenseEvasion | [`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Beacon Traffic Based on Common User Agents Visiting Limited Number of Domains](../content/6345c923-99eb-4a83-b11d-7af0ffa75577.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Certified Pre-Owned - TGTs requested with certificate authentication](../content/b838a13c-052e-45b8-a5ac-7d3eb62efa11.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Certified Pre-Owned - backup of CA private key - rule 1](../content/aa5eaac7-1264-4833-b620-8f062be75541.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Certified Pre-Owned - backup of CA private key - rule 2](../content/88f8fbc0-345d-458e-85f6-f73921d5ef50.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Component Object Model Hijacking - Vault7 trick](../content/1aaff41f-4e18-45b1-bb34-de6eb4943cf2.md) | Medium | Persistence, PrivilegeEscalation | [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |
| [DCOM Lateral Movement](../content/d58035ff-0bac-4c61-a7f4-f58939ff9764.md) | Medium | LateralMovement | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect .NET runtime being loaded in JScript for code execution](../content/9f921513-65f3-48a2-ae7d-326c5901c55e.md) | Medium | Execution | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Detecting UAC bypass - ChangePK and SLUI registry tampering](../content/829a69ba-93e1-491f-8a1f-b19506e9d88a.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detecting UAC bypass - elevated COM interface](../content/2d5efc71-2e91-4ca2-8506-857eecb453ec.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detecting UAC bypass - modify Windows Store settings](../content/8b8fbf9c-35d4-474b-8151-a40173521293.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Disable or Modify Windows Defender](../content/20d52a04-b5d8-402d-88e2-7929d12cbdcd.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Excessive share permissions](../content/aba0b08c-aace-40c5-a21d-39153023dcaa.md) | Medium | Collection, Discovery | - |
| [Expired access credentials being used in Azure](../content/433c3b0a-7278-4d74-b137-963ac6f9a7e7.md) | Medium | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Hijack Execution Flow - DLL Side-Loading](../content/3084b487-fad6-4000-9544-6085b9657290.md) | Medium | Persistence, PrivilegeEscalation, DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Ingress Tool Transfer - Certutil](../content/f0be11a9-ec48-4df6-801d-479556044d4e.md) | Low | CommandAndControl, DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Match Legitimate Name or Location - 2](../content/dd22dc4f-ab7c-4d0a-84ad-cc393638ba31.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Microsoft Entra ID Rare UserAgent App Sign-in](../content/87d5cd18-211d-4fd4-9b86-65d23fed87ea.md) | Medium | DefenseEvasion | - |
| [Microsoft Entra ID UserAgent OS Missmatch](../content/6a638d80-f6b2-473b-9087-3cac78a84b40.md) | Medium | DefenseEvasion | - |
| [Office ASR rule triggered from browser spawned office process.](../content/30580043-2451-4d35-b49f-065728529f4a.md) | Medium | InitialAccess | [`DeviceEvents`](../tables/deviceevents.md) |
| [Oracle suspicious command execution](../content/e6c5ff42-0f42-4cec-994a-dabb92fe36e1.md) | Medium | LateralMovement, PrivilegeEscalation | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Password Spraying](../content/e00f72ab-fea1-4a31-9ecc-eea6397cd38d.md) | Medium | CredentialAccess | [`DeviceLogonEvents`](../tables/devicelogonevents.md) |
| [Remote Desktop Protocol - SharpRDP](../content/cc46e76c-0d04-40b0-9c8b-929aa40513e7.md) | Medium | LateralMovement | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Rename System Utilities](../content/335ddff8-b615-42cd-b593-86e419b45d78.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [SMB/Windows Admin Shares](../content/9da25366-2c77-41a5-a159-0da5e2f5fb90.md) | Medium | LateralMovement | - |
| [Suspicious Process Injection from Office application](../content/a4d8e681-6f30-440a-a2f3-c312bc1389d0.md) | Medium | Execution | [`DeviceEvents`](../tables/deviceevents.md) |
| [Suspicious named pipes](../content/ddf7c669-db26-4215-acaf-11e2953a04e6.md) | Medium | Execution, DefenseEvasion | [`DeviceEvents`](../tables/deviceevents.md) |
| [Suspicious parentprocess relationship - Office child processes.](../content/5ee34fa1-64ed-48c7-afa2-794b244f6c60.md) | Medium | InitialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Trusted Developer Utilities Proxy Execution](../content/5c2bb446-926f-4160-a233-21e335c2c290.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.0       | 24-06-2024                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID and Added missing AMA **Data Connector** reference in **Analytic rules**.   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

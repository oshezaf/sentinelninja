# FalconFriday

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/falconforce_logo.svg" alt="FalconFriday Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[FalconFriday](https://github.com/FalconForceTeam/FalconFriday/blob/master/README.md) is a blog post series by FalconForce providing the community with free detection content for various attacks seen and executed in the wild by FalconForce.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | FalconForce |
| **Support Tier** | Partner |
| **Support Link** | [https://www.falconforce.nl/en/](https://www.falconforce.nl/en/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | FalconForce - info@falconforce.nl |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [FalconFriday](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **11 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics |
| [`DeviceEvents`](../tables/deviceevents.md) | Analytics |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Analytics |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | Analytics |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) | Analytics |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Analytics |
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
| [ASR Bypassing Writing Executable Content](../content/falconfriday-asr-bypassing-writing-executable-content-efe4efef-5ca7-4b51-a53e-0e96492ce97a-78c522d8.md) | Medium | DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Access Token Manipulation - Create Process with Token](../content/falconfriday-access-token-manipulation-create-process-with-token-8df80270-b4fa-4a7a-931e-8d17c0b321ae-d1e3f3fd.md) | Medium | PrivilegeEscalation, DefenseEvasion | [`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Beacon Traffic Based on Common User Agents Visiting Limited Number of Domains](../content/falconfriday-beacon-traffic-based-on-common-user-agents-visiting-limited-number-of-domains-6345c923-99eb-4a83-b11d-7af0ffa75577-e0e2298a.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Certified Pre-Owned - TGTs requested with certificate authentication](../content/falconfriday-certified-pre-owned-tgts-requested-with-certificate-authentication-b838a13c-052e-45b8-a5ac-7d3eb62efa11-8b984753.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Certified Pre-Owned - backup of CA private key - rule 1](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-1-aa5eaac7-1264-4833-b620-8f062be75541-ac010cd6.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Certified Pre-Owned - backup of CA private key - rule 2](../content/falconfriday-certified-pre-owned-backup-of-ca-private-key-rule-2-88f8fbc0-345d-458e-85f6-f73921d5ef50-fbc7bd12.md) | Medium | DefenseEvasion | [`SecurityEvent`](../tables/securityevent.md) |
| [Component Object Model Hijacking - Vault7 trick](../content/falconfriday-component-object-model-hijacking-vault7-trick-1aaff41f-4e18-45b1-bb34-de6eb4943cf2-23d9ec72.md) | Medium | Persistence, PrivilegeEscalation | [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) |
| [DCOM Lateral Movement](../content/falconfriday-dcom-lateral-movement-d58035ff-0bac-4c61-a7f4-f58939ff9764-9dd841b7.md) | Medium | LateralMovement | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detect .NET runtime being loaded in JScript for code execution](../content/falconfriday-detect-.net-runtime-being-loaded-in-jscript-for-code-execution-9f921513-65f3-48a2-ae7d-326c5901c55e-fd9342fe.md) | Medium | Execution | [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Detecting UAC bypass - ChangePK and SLUI registry tampering](../content/falconfriday-detecting-uac-bypass-changepk-and-slui-registry-tampering-829a69ba-93e1-491f-8a1f-b19506e9d88a-8d651a60.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detecting UAC bypass - elevated COM interface](../content/falconfriday-detecting-uac-bypass-elevated-com-interface-2d5efc71-2e91-4ca2-8506-857eecb453ec-e0911a66.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Detecting UAC bypass - modify Windows Store settings](../content/falconfriday-detecting-uac-bypass-modify-windows-store-settings-8b8fbf9c-35d4-474b-8151-a40173521293-03123f75.md) | Medium | Impact | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Disable or Modify Windows Defender](../content/falconfriday-disable-or-modify-windows-defender-20d52a04-b5d8-402d-88e2-7929d12cbdcd-3b3084de.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Excessive share permissions](../content/falconfriday-excessive-share-permissions-aba0b08c-aace-40c5-a21d-39153023dcaa-6377fa2a.md) | Medium | Collection, Discovery | [`SecurityEvent`](../tables/securityevent.md) |
| [Expired access credentials being used in Azure](../content/falconfriday-expired-access-credentials-being-used-in-azure-433c3b0a-7278-4d74-b137-963ac6f9a7e7-965eac08.md) | Medium | CredentialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Hijack Execution Flow - DLL Side-Loading](../content/falconfriday-hijack-execution-flow-dll-side-loading-3084b487-fad6-4000-9544-6085b9657290-16d7660f.md) | Medium | Persistence, PrivilegeEscalation, DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |
| [Ingress Tool Transfer - Certutil](../content/falconfriday-ingress-tool-transfer-certutil-f0be11a9-ec48-4df6-801d-479556044d4e-e41d03ca.md) | Low | CommandAndControl, DefenseEvasion | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Match Legitimate Name or Location - 2](../content/falconfriday-match-legitimate-name-or-location-2-dd22dc4f-ab7c-4d0a-84ad-cc393638ba31-6d4321f9.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Microsoft Entra ID Rare UserAgent App Sign-in](../content/falconfriday-microsoft-entra-id-rare-useragent-app-sign-in-87d5cd18-211d-4fd4-9b86-65d23fed87ea-f1fc55a9.md) | Medium | DefenseEvasion | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Microsoft Entra ID UserAgent OS Missmatch](../content/falconfriday-microsoft-entra-id-useragent-os-missmatch-6a638d80-f6b2-473b-9087-3cac78a84b40-e6a7d745.md) | Medium | DefenseEvasion | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Office ASR rule triggered from browser spawned office process.](../content/falconfriday-office-asr-rule-triggered-from-browser-spawned-office-process.-30580043-2451-4d35-b49f-065728529f4a-65634609.md) | Medium | InitialAccess | [`DeviceEvents`](../tables/deviceevents.md) |
| [Oracle suspicious command execution](../content/falconfriday-oracle-suspicious-command-execution-e6c5ff42-0f42-4cec-994a-dabb92fe36e1-0ab82658.md) | Medium | LateralMovement, PrivilegeEscalation | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Password Spraying](../content/falconfriday-password-spraying-e00f72ab-fea1-4a31-9ecc-eea6397cd38d-9fc40186.md) | Medium | CredentialAccess | [`DeviceLogonEvents`](../tables/devicelogonevents.md) |
| [Remote Desktop Protocol - SharpRDP](../content/falconfriday-remote-desktop-protocol-sharprdp-cc46e76c-0d04-40b0-9c8b-929aa40513e7-7ea028f9.md) | Medium | LateralMovement | [`DeviceLogonEvents`](../tables/devicelogonevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Rename System Utilities](../content/falconfriday-rename-system-utilities-335ddff8-b615-42cd-b593-86e419b45d78-753d3370.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [SMB/Windows Admin Shares](../content/falconfriday-smb-windows-admin-shares-9da25366-2c77-41a5-a159-0da5e2f5fb90-2e2330d9.md) | Medium | LateralMovement | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Suspicious Process Injection from Office application](../content/falconfriday-suspicious-process-injection-from-office-application-a4d8e681-6f30-440a-a2f3-c312bc1389d0-f6ee7c3b.md) | Medium | Execution | [`DeviceEvents`](../tables/deviceevents.md) |
| [Suspicious named pipes](../content/falconfriday-suspicious-named-pipes-ddf7c669-db26-4215-acaf-11e2953a04e6-377a4889.md) | Medium | Execution, DefenseEvasion | [`DeviceEvents`](../tables/deviceevents.md) |
| [Suspicious parentprocess relationship - Office child processes.](../content/falconfriday-suspicious-parentprocess-relationship-office-child-processes.-5ee34fa1-64ed-48c7-afa2-794b244f6c60-081c16fa.md) | Medium | InitialAccess | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Trusted Developer Utilities Proxy Execution](../content/falconfriday-trusted-developer-utilities-proxy-execution-5c2bb446-926f-4160-a233-21e335c2c290-aac01cd9.md) | Medium | DefenseEvasion | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.0       | 24-06-2024                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID and Added missing AMA **Data Connector** reference in **Analytic rules**.   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagement` |
| **Built-in Parser** | `_ASim_UserManagement` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimUserManagement/CHANGELOG/ASimUserManagement.md)) |
| **Last Updated** | 06 Mar, 2024 |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagement.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagement.yaml) |

## Description

This ASIM parser supports normalizing User Management logs from all supported sources to the ASIM User Management normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Cisco ISE | [_ASim_UserManagement_CiscoISE](asimusermanagementciscoise.md) | [Syslog](../solutions/syslog.md) |
| Microsoft | [_ASim_UserManagement_LinuxAuthpriv](asimusermanagementlinuxauthpriv.md) | [Syslog](../solutions/syslog.md) |
| Microsoft Security Event | [_ASim_UserManagement_MicrosoftSecurityEvent](asimusermanagementmicrosoftsecurityevent.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft Windows Event | [_ASim_UserManagement_MicrosoftWindowsEvent](asimusermanagementmicrosoftwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_ASim_UserManagement_Native](asimusermanagementnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| SentinelOne | [_ASim_UserManagement_SentinelOne](asimusermanagementsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimUserManagementCiscoISE`](../asim/asimusermanagementciscoise.md) | ? | ? | ? |
| [`ASimUserManagementLinuxAuthpriv`](../asim/asimusermanagementlinuxauthpriv.md) | ? | ? | ? |
| [`ASimUserManagementMicrosoftSecurityEvent`](../asim/asimusermanagementmicrosoftsecurityevent.md) | ? | ? | ? |
| [`ASimUserManagementMicrosoftWindowsEvent`](../asim/asimusermanagementmicrosoftwindowsevent.md) | ? | ? | ? |
| [`ASimUserManagementNative`](../asim/asimusermanagementnative.md) | ? | ? | ? |
| [`ASimUserManagementSentinelOne`](../asim/asimusermanagementsentinelone.md) | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM UserManagement Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)


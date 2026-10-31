# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> User Management ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagement` (parameter-less) · `imUserManagement` (filtering) |
| **Built-in Parser** | `_ASim_UserManagement` (parameter-less) · `_Im_UserManagement` (filtering) |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.5 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimUserManagement/CHANGELOG/ASimUserManagement.md)) |
| **Last Updated** | Oct 26, 2026 |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagement.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagement.yaml) |

## Description

This ASIM parser supports normalizing User Management logs from all supported sources to the ASIM User Management normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| AWS Cloud Trail | [_ASim_UserManagement_AWSCloudTrail](asimusermanagementawscloudtrail.md) | [Amazon Web Services](../solutions/amazon-web-services.md) |
| Alibaba Cloud ActionTrail | [_ASim_UserManagement_AlibabaCloudActionTrail](asimusermanagementalibabacloudactiontrail.md) | [Alibaba Cloud ActionTrail](../solutions/alibaba-cloud-actiontrail.md) |
| Cisco ISE | [_ASim_UserManagement_CiscoISE](asimusermanagementciscoise.md) | [Syslog](../solutions/syslog.md) |
| CrowdStrike Falcon Data Replicator | [_ASim_UserManagement_CrowdStrikeFalconDataReplicator](asimusermanagementcrowdstrikefalcondatareplicator.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| Microsoft | [_ASim_UserManagement_LinuxAuthpriv](asimusermanagementlinuxauthpriv.md) | [Syslog](../solutions/syslog.md) |
| Microsoft Security Event | [_ASim_UserManagement_MicrosoftSecurityEvent](asimusermanagementmicrosoftsecurityevent.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft Windows Event | [_ASim_UserManagement_MicrosoftWindowsEvent](asimusermanagementmicrosoftwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_ASim_UserManagement_Native](asimusermanagementnative.md) | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| SentinelOne | [_ASim_UserManagement_SentinelOne](asimusermanagementsentinelone.md) | [SentinelOne (legacy connector)](../solutions/sentinelone.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM UserManagement Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)


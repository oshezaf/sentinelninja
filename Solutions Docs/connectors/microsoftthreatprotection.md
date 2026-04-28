# Microsoft Defender XDR

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MicrosoftThreatProtection` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **Collection Method** | [Native](../methods/native.md) |
| **Connector Definition Files** | [MicrosoftThreatProtection.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Data%20Connectors/MicrosoftThreatProtection.JSON) |

Microsoft Defender XDR is a unified, natively integrated, pre- and post-breach enterprise defense suite that protects endpoint, identity, email, and applications and helps you detect, prevent, investigate, and automatically respond to sophisticated threats.



Microsoft Defender XDR suite includes: 

- Microsoft Defender for Endpoint

- Microsoft Defender for Identity

- Microsoft Defender for Office 365

- Threat & Vulnerability Management

- Microsoft Defender for Cloud Apps



For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/p/?linkid=2220004&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Additional Information

📖 **Setup Guide:** [Microsoft Defender XDR connector](https://learn.microsoft.com/azure/sentinel/connect-microsoft-365-defender) - Connect Defender XDR data to Microsoft Sentinel

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AlertEvidence`](../tables/alertevidence.md) |  | ✓ | ✗ | ? |
| [`CloudAppEvents`](../tables/cloudappevents.md) |  | ✓ | ✗ | ? |
| [`DeviceEvents`](../tables/deviceevents.md) |  | ✓ | ✗ | ? |
| [`DeviceFileCertificateInfo`](../tables/devicefilecertificateinfo.md) |  | ✓ | ✗ | ? |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ | ? |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) |  | ✓ | ✗ | ? |
| [`DeviceInfo`](../tables/deviceinfo.md) |  | ✓ | ✗ | ? |
| [`DeviceLogonEvents`](../tables/devicelogonevents.md) |  | ✓ | ✗ | ? |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |  | ✓ | ✗ | ? |
| [`DeviceNetworkInfo`](../tables/devicenetworkinfo.md) |  | ✓ | ✗ | ? |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |  | ✓ | ✗ | ? |
| [`DeviceRegistryEvents`](../tables/deviceregistryevents.md) | `ActionType == "RegistryValueSet"` | ✓ | ✗ | ? |
| [`EmailAttachmentInfo`](../tables/emailattachmentinfo.md) |  | ✓ | ✗ | ? |
| [`EmailEvents`](../tables/emailevents.md) |  | ✓ | ✗ | ? |
| [`EmailPostDeliveryEvents`](../tables/emailpostdeliveryevents.md) |  | ✓ | ✗ | ? |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) |  | ✓ | ✗ | ? |
| [`IdentityDirectoryEvents`](../tables/identitydirectoryevents.md) |  | ✓ | ✗ | ? |
| [`IdentityLogonEvents`](../tables/identitylogonevents.md) |  | ✓ | ✗ | ? |
| [`IdentityQueryEvents`](../tables/identityqueryevents.md) |  | ✓ | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ | ? |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ? |
| [`UrlClickEvents`](../tables/urlclickevents.md) |  | ✓ | ✗ | ? |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Custom Permissions:**
- **License**: M365 E5, M365 A5 or any other Microsoft Defender XDR eligible license.

**Tenant Permissions:**
Requires GlobalAdmin, SecurityAdmin on the workspace's tenant

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect incidents & alerts**

Connect Microsoft Defender XDR incidents to your Microsoft Sentinel. Incidents will appear in the incidents queue.
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `MicrosoftThreatProtection`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

**2. Connect events**
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `MicrosoftDefenderATPEvents`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


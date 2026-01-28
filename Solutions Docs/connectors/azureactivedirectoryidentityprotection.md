# Microsoft Entra ID Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Entra-ID-protection_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AzureActiveDirectoryIdentityProtection` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Entra ID Protection](../solutions/microsoft-entra-id-protection.md) |
| **Collection Method** | Native |
| **Connector Definition Files** | [template_AzureActiveDirectoryIdentityProtection.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID%20Protection/Data%20Connectors/template_AzureActiveDirectoryIdentityProtection.JSON) |

Microsoft Entra ID Protection provides a consolidated view at risk users, risk events and vulnerabilities, with the ability to remediate risk immediately, and set policies to auto-remediate future events. The service is built on Microsoft’s experience protecting consumer identities and gains tremendous accuracy from the signal from over 13 billion logins a day. Integrate Microsoft Microsoft Entra ID Protection alerts with Microsoft Sentinel to view dashboards, create custom alerts, and improve investigation. For more information, see the [Microsoft Sentinel documentation ](https://go.microsoft.com/fwlink/p/?linkid=2220065&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).



[Get Microsoft Entra ID Premium P1/P2 ](https://aka.ms/asi-ipcconnectorgetlink)

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`SecurityAlert`](../tables/securityalert.md) | ✓ | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.

**Licenses:**
- Azure AD Premium P1/P2

**Tenant Permissions:**
Requires GlobalAdmin, SecurityAdmin on the workspace's tenant

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Microsoft Entra ID Protection alerts to Microsoft Sentinel**

Connect Microsoft Entra ID Protection to Microsoft Sentinel. 
            
> The alerts are sent to this Microsoft Sentinel workspace.
- Connect Microsoft Entra ID Protection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


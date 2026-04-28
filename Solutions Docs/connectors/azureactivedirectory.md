# Microsoft Entra ID

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/MicrosoftEntraID_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AzureActiveDirectory` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **Collection Method** | [Native](../methods/native.md) |
| **Connector Definition Files** | [template_AzureActiveDirectory.JSON](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Data%20Connectors/template_AzureActiveDirectory.JSON) |

Gain insights into Microsoft Entra ID by connecting Audit and Sign-in logs to Microsoft Sentinel to gather insights around Microsoft Entra ID scenarios. You can learn about app usage, conditional access policies, legacy auth relate details using our Sign-in logs. You can get information on your Self Service Password Reset (SSPR) usage, Microsoft Entra ID Management activities like user, group, role, app management using our Audit logs table. For more information, see the [Microsoft Sentinel documentation](https://go.microsoft.com/fwlink/?linkid=2219715&wt.mc_id=sentinel_dataconnectordocs_content_cnl_csasci).

## Additional Information

📖 **Setup Guide:** [Microsoft Entra connector](https://learn.microsoft.com/azure/sentinel/connect-azure-active-directory) - Connect Microsoft Entra ID logs to Microsoft Sentinel

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADManagedIdentitySignInLogs`](../tables/aadmanagedidentitysigninlogs.md) | ✓ | ✗ | ? |
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | ✓ | ✗ | ? |
| [`AADProvisioningLogs`](../tables/aadprovisioninglogs.md) | ✓ | ✗ | ? |
| [`AADRiskyServicePrincipals`](../tables/aadriskyserviceprincipals.md) | ✓ | ✗ | ? |
| [`AADRiskyUsers`](../tables/aadriskyusers.md) | ✓ | ✗ | ? |
| [`AADServicePrincipalRiskEvents`](../tables/aadserviceprincipalriskevents.md) | ✓ | ✗ | ? |
| [`AADServicePrincipalSignInLogs`](../tables/aadserviceprincipalsigninlogs.md) | ✓ | ✗ | ? |
| [`AADUserRiskEvents`](../tables/aaduserriskevents.md) | ✓ | ✗ | ? |
| [`ADFSSignInLogs`](../tables/adfssigninlogs.md) | ✓ | ✗ | ? |
| [`AuditLogs`](../tables/auditlogs.md) | ✓ | ✗ | ? |
| [`NetworkAccessTraffic`](../tables/networkaccesstraffic.md) | ✓ | ✗ | ? |
| [`SigninLogs`](../tables/signinlogs.md) | ✓ | ✗ | ? |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions.
- **Diagnostic Settings** (/providers/microsoft.aadiam): read and write permissions to AAD diagnostic settings.

**Tenant Permissions:**
Requires GlobalAdmin, SecurityAdmin on the workspace's tenant

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Microsoft Entra ID logs to Microsoft Sentinel**

Select Microsoft Entra ID log types:
**Select Microsoft Entra ID Data Types**

In the Microsoft Sentinel portal, select which data types to enable:

- ☐ **Sign-In Logs**
- ☐ **Audit Logs**
- ☐ **Non-Interactive User Sign-In Log**
- ☐ **Service Principal Sign-In Logs**
- ☐ **Managed Identity Sign-In Logs**
- ☐ **Provisioning Logs**
- ☐ **ADFS Sign-In Logs**
- ☐ **User Risk Events**
- ☐ **Risky Users**
- ☐ **Network Access Traffic Logs**
- ☐ **Risky Service Principals**
- ☐ **Service Principal Risk Events**

Each data type may have specific licensing requirements. Review the information provided for each type in the portal before enabling.

> 💡 **Portal-Only Feature**: Data type selection is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


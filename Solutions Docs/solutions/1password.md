# 1Password

<img src="https://raw.githubusercontent.com/azurekid/Azure-Sentinel/master/Logos/1password.svg" alt="1Password Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [1Password](https://www.1password.com) solution for Microsoft Sentinel enables you to ingest sign-in attempts, item usage, and audit events from your 1Password Business account using the [1Password Events Reporting API](https://developer.1password.com/docs/events-api). This allows you to monitor and investigate events in 1Password in Microsoft Sentinel along with the other applications and services your organization uses.

**Underlying Microsoft Technologies used:**

This solution depends on the following technologies, and some of which may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or may incur additional ingestion or operational costs:

a.  [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | 1Password |
| **Support Tier** | Partner |
| **Support Link** | [https://support.1password.com/](https://support.1password.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Rogier Dijkman (SecureHats) |
| **First Published** | 2023-12-01 |
| **Solution Folder** | [1Password](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 2 discovered⚠️):

- [1Password](../connectors/1password.md) ⚠️
- [1Password (Serverless)](../connectors/1password-serverless.md) ⚠️
- [1Password (Serverless)](../connectors/1passwordccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) | [1Password](../connectors/1password.md), [1Password (Serverless)](../connectors/1password-serverless.md), [1Password (Serverless)](../connectors/1passwordccpdefinition.md) | Analytics, Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | - | Workbooks |

## Content Items

This solution includes **19 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 18 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [1Password - Changes to SSO configuration](../content/1password-1password-changes-to-sso-configuration-9406f5ab-1197-4db9-8042-9f3345be061c-c5a1c84d.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Changes to firewall rules](../content/1password-1password-changes-to-firewall-rules-54e6bb8e-2935-422f-9387-dba1961abfd7-9690ea4a.md) | Medium | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Disable MFA factor or type for all user accounts](../content/1password-1password-disable-mfa-factor-or-type-for-all-user-accounts-92ab0938-1e7c-4671-9810-392e8b9714da-d13d6a77.md) | High | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Log Ingestion Failure](../content/1password-1password-log-ingestion-failure-bf9132c7-9d4d-4244-98c7-7d994703c208-217b4f7e.md) | Medium | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Manual account creation](../content/1password-1password-manual-account-creation-9a264487-bcb8-4c7f-a461-b289a46377b8-3f30b56e.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - New service account integration created](../content/1password-1password-new-service-account-integration-created-26daed54-cea5-469c-9b6e-0d85a40dc463-c480d628.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Non-privileged vault user permission change](../content/1password-1password-non-privileged-vault-user-permission-change-327e0579-7c03-4ec7-acf5-a29dcc4a12b6-b42d57cf.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Potential insider privilege escalation via group](../content/1password-1password-potential-insider-privilege-escalation-via-group-398a1cf1-f56f-4700-912c-9bf4c8409ebc-10242ec4.md) | Medium | PrivilegeEscalation | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Potential insider privilege escalation via vault](../content/1password-1password-potential-insider-privilege-escalation-via-vault-a00ffbd8-1d1c-47a3-b0a6-7d70bd8017ed-0695ae07.md) | Medium | PrivilegeEscalation | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Privileged vault permission change](../content/1password-1password-privileged-vault-permission-change-76e386eb-f51a-4600-97d1-f0db3b7e41f1-d7bf4cbc.md) | High | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Secret extraction post vault access change by administrator](../content/1password-1password-secret-extraction-post-vault-access-change-by-administrator-6711b747-16d7-4df4-9f61-8633617f45d7-a849665c.md) | High | CredentialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Service account integration token adjustment](../content/1password-1password-service-account-integration-token-adjustment-d54a3cf9-6169-449c-83f1-e7def3359702-00249edb.md) | Medium | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Successful anomalous sign-in](../content/1password-1password-successful-anomalous-sign-in-ceb20a5c-adce-4eba-9728-541361d47d87-0111372a.md) | Low | InitialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - User account MFA settings changed](../content/1password-1password-user-account-mfa-settings-changed-3c8140eb-e946-4bf2-8c61-03e4df56d400-944dedc7.md) | Medium | Persistence, DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - User added to privileged group](../content/1password-1password-user-added-to-privileged-group-849ea271-cd9c-4afe-a13b-ddbbac5fc6d3-de7a1516.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Vault export](../content/1password-1password-vault-export-dae4c601-51c9-47f5-83d3-e6eaef929cf6-0a4f08e7.md) | Low | CredentialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Vault export post account creation](../content/1password-1password-vault-export-post-account-creation-969e2e5c-9cc6-423c-a3de-514f7ad75fe7-d1a1cf0f.md) | Medium | CredentialAccess, Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Vault export prior to account suspension or deletion](../content/1password-1password-vault-export-prior-to-account-suspension-or-deletion-51617533-cf51-4415-9020-b15bd47d69d2-cff5f5fb.md) | Medium | CredentialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [1Password](../content/1password-1password-c64d377e.md) | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

## Additional Documentation

> 📄 *Source: [1Password/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/README.md)*

# 1Password (Preview)

## Overview

The key function of this Solution is to retrieve sign-in attempts, item usage, and audit events logs from your 1Password Business account using the 1Password Events Reporting API, and store it in an Azure Log Analytics Workspace using Microsoft cloud native features.

## Azure services needed

### Required

- [1Password Business account](https://1password.com/business)
- [1Password Events API key](https://support.1password.com/events-reporting/#appendix-issue-or-revoke-bearer-tokens)
- [Microsoft Azure](https://azure.microsoft.com/free)
- [Microsoft Sentinel](https://azure.microsoft.com/products/microsoft-sentinel/)
- Contributor role with User Access Administrator role on the Microsoft Sentinel Resource Group <br>
**or**
- Owner on the Microsoft Sentinel Resource Group 

## Automated Installation

Installing the 1Password Solution for Microsoft Sentinel is easy and can be completed in only a few minutes. 
Just click the button below to get started with the deployment wizard. <br>

[![Deploy To Azure](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazure.svg?sanitize=true)](https://aka.ms/sentinel-OnePassword-azuredeploy)

> NOTE: To deploy the solution, the Azure user account executing the deployment needs to have `Owner` permissions on the Microsoft Sentinel `Resource Group` in Azure.<br>
> This is required to assign the correct RBAC role to the managed identity of the FunctionApp!  

## Manual Installation using the ARM template

<details>

<summary>Deployment steps</summary>
<br/>

## Manual Installation using the ARM template

1. Install the data connector using the ARM template or use this link to skip the steps below

![Alt text](https://github.com/Azure/Azure-Sentinel/blob/f3655ba6a4891acdda67c3c3bf2414401de323b6/Solutions/1Password/images/image.png)

2. After the deployment of the template has completed open the Microsoft Sentinel portal and select the data connector

![Alt text](https://github.com/Azure/Azure-Sentinel/blob/f3655ba6a4891acdda67c3c3bf2414401de323b6/Solutions/1Password/images/dataconnector.png)

3. Select the `Open connector page` button to open the data connector configuration
4. click on the `Deploy to Azure` button<br>
This will open a new browser page containing a deployment wizard in Microsoft Azure.<br>
Fill in all the required fields and select `create` on the last page.

![Alt text](https://github.com/Azure/Azure-Sentinel/blob/fd9527ab432fa3e4e6115e4ee823ed5c2a92c163/Solutions/1Password/images/summary.png)

The required resources for the deployment will now be created.

</details>

## Deployed Resources

The 1Password Solution for Microsoft Sentinel is comprised of following Azure resources:

> Click on the topics below to fold them out.

<details>

<summary>Resource Group</summary>
<br/>

### **Resource Group**


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                     |
|-------------|--------------------------------|----------------------------------------|
| 3.0.2       | 17-09-2024                     | Added new CCP **Data Connector**.               | 
| 3.0.1       | 27-06-2024                     | Fixed typo error in **Analytic Rule**  1Password - Changes to SSO configuration.yaml. </br> Fixed Logo link and typo in CreateUI.              |
| 3.0.0       | 12-06-2024                     | Initial Solution Release.               |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


# 1Password

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | 1Password |
| **Support Tier** | Partner |
| **Support Link** | [https://support.1password.com/](https://support.1password.com/) |
| **Categories** | domains |
| **First Published** | 2023-12-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [1Password](../connectors/1password.md)
- [1Password (Serverless)](../connectors/1password%28serverless%29.md)
- [1Password (Serverless)](../connectors/1passwordccpdefinition.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) | [1Password](../connectors/1password.md), [1Password (Serverless)](../connectors/1password(serverless).md), [1Password (Serverless)](../connectors/1passwordccpdefinition.md) | Analytics, Workbooks |
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
| [1Password - Changes to SSO configuration](../content/9406f5ab-1197-4db9-8042-9f3345be061c.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Changes to firewall rules](../content/54e6bb8e-2935-422f-9387-dba1961abfd7.md) | Medium | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Disable MFA factor or type for all user accounts](../content/92ab0938-1e7c-4671-9810-392e8b9714da.md) | High | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Log Ingestion Failure](../content/bf9132c7-9d4d-4244-98c7-7d994703c208.md) | Medium | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Manual account creation](../content/9a264487-bcb8-4c7f-a461-b289a46377b8.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - New service account integration created](../content/26daed54-cea5-469c-9b6e-0d85a40dc463.md) | Medium | Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Non-privileged vault user permission change](../content/327e0579-7c03-4ec7-acf5-a29dcc4a12b6.md) | Medium | Persistence | - |
| [1Password - Potential insider privilege escalation via group](../content/398a1cf1-f56f-4700-912c-9bf4c8409ebc.md) | Medium | PrivilegeEscalation | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Potential insider privilege escalation via vault](../content/a00ffbd8-1d1c-47a3-b0a6-7d70bd8017ed.md) | Medium | PrivilegeEscalation | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Privileged vault permission change](../content/76e386eb-f51a-4600-97d1-f0db3b7e41f1.md) | High | Persistence | - |
| [1Password - Secret extraction post vault access change by administrator](../content/6711b747-16d7-4df4-9f61-8633617f45d7.md) | High | CredentialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Service account integration token adjustment](../content/d54a3cf9-6169-449c-83f1-e7def3359702.md) | Medium | DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Successful anomalous sign-in](../content/ceb20a5c-adce-4eba-9728-541361d47d87.md) | Low | InitialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - User account MFA settings changed](../content/3c8140eb-e946-4bf2-8c61-03e4df56d400.md) | Medium | Persistence, DefenseEvasion | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - User added to privileged group](../content/849ea271-cd9c-4afe-a13b-ddbbac5fc6d3.md) | Medium | Persistence | - |
| [1Password - Vault export](../content/dae4c601-51c9-47f5-83d3-e6eaef929cf6.md) | Low | CredentialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Vault export post account creation](../content/969e2e5c-9cc6-423c-a3de-514f7ad75fe7.md) | Medium | CredentialAccess, Persistence | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |
| [1Password - Vault export prior to account suspension or deletion](../content/51617533-cf51-4415-9020-b15bd47d69d2.md) | Medium | CredentialAccess | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [1Password](../content/1password-1password.md) | [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md)<br>[`SigninLogs`](../tables/signinlogs.md) |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

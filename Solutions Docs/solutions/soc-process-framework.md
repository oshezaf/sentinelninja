# SOC-Process-Framework

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-04-08 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC-Process-Framework](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC-Process-Framework) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **20 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Watchlists | 12 |
| Workbooks | 7 |
| Playbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Building_a_SOCLargeStaff](../content/building-a-soclargestaff-soc-process-framework.md) | - |
| [Building_a_SOCMediumStaff](../content/building-a-socmediumstaff-soc-process-framework.md) | - |
| [Building_a_SOCPartTimeStaff](../content/building-a-socparttimestaff-soc-process-framework.md) | - |
| [Building_a_SOCSmallStaff](../content/building-a-socsmallstaff-soc-process-framework.md) | - |
| [SOCIRPlanning](../content/socirplanning-soc-process-framework.md) | - |
| [SOCProcessFramework](../content/socprocessframework-soc-process-framework.md) | - |
| [UpdateSOCMaturityScore](../content/updatesocmaturityscore-soc-process-framework.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Get-SOC-Actions](../content/get-soc-actions-soc-process-framework.md) | This playbook uses the SOC Recommended Actions Watchlist to automatically enrich incidents generated... | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SOCDepartmental](../content/socdepartmental-soc-process-framework.md) | - | - |
| [SOCEmailDistribution](../content/socemaildistribution-soc-process-framework.md) | - | - |
| [SOCExternalContacts](../content/socexternalcontacts-soc-process-framework.md) | - | - |
| [SOCIRP](../content/socirp-soc-process-framework.md) | - | - |
| [SOCInternalContacts](../content/socinternalcontacts-soc-process-framework.md) | - | - |
| [SOCMA](../content/socma-soc-process-framework.md) | - | - |
| [SOCPager](../content/socpager-soc-process-framework.md) | - | - |
| [SOCUseCase](../content/socusecase-soc-process-framework.md) | - | - |
| [SOCcontacts](../content/soccontacts-soc-process-framework.md) | - | - |
| [SOCgeneralIT](../content/socgeneralit-soc-process-framework.md) | - | - |
| [SOCworkstations](../content/socworkstations-soc-process-framework.md) | - | - |
| [SocRA](../content/socra-soc-process-framework.md) | - | - |

## Additional Documentation

> 📄 *Source: [SOC-Process-Framework/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC-Process-Framework/README.md)*

## Author: Rin Ure

![SOC Process Framework](./SOCProcessFrameworkSolutionLanding.png)<br>

## Table of Contents

1. [Overview](#overview)
1. [Workbooks](#workbooks)
1. [Watchlists](#watchlists)
1. [Playbooks](#playbooks)
1. [Post Deployment Steps](#postdeployment)

<a name="overview">

## Overview
This Solution contains all resources for the SOC Process Framework Microsoft Sentinel Solution.
The SOC Process Framework Solution is built in order to easily integrate with Microsoft Sentinel and build a standard SOC Process and Procedure Framework within your Organization.

By deploying this solution, you'll be able to monitor progress within your SOC Operations and update the SOC CMMI Assessment Score.
This solution consists of the following resources:
- Integrated workbooks interconnected into a single workbook for single pane of glass operation.
- One Playbook for pushing SOC Actions to your Incidents.
- Multiple Watchlists helping you maintain and organize your SOC efforts, including IR Planning, SOC CMMI Assessment Score, and many more.

<a name="workbooks">

## Workbooks
The workbooks contained in this solution have visualizations about the SOC Progress, Procedures, and Activity and provides an overview of the overall SOC Maturity.
These workbooks and their dependances are deployed for you through this solution.

<a name="watchlists">

## Watchlists
The watchlists contained within this solution have information that pertain to Incident Response Planning, the SOC Maturity (CMMI) Scoring, Recommended SOC Actions, and more...
All of these watchlists give the customer ease of access to updating pertanant information regarding their SOC Operations and more.

<a name="playbooks">

## Playbooks
Currently the only Playbook in this solution is the Get-SOCActions Playbook for delivering custom Analyst Actions to take per Incident. This allows Organizations the ability to create/add their own scripted actions they want an Analyst to take. After deploying this Solution, please see the Post-Deployment Instructions before running the Playbook.

<a name="postdeployment">

### Post-Deployment Instructions
**1. After deploying the playbook, you must authorize the connections leveraged and assign permissions**

1. Visit the playbook resource.
2. Under "Development Tools" (located on the left), click "API Connections".
3. Ensure each connection has been authorized.

**2. Assign Microsoft Sentinel Responder Role to Playbook**

This playbook uses a managed identity, which must have the Microsoft Sentinel Responder role assigned in the Sentinel instances to enable adding actions.

1. Select the Playbook resource.
2. In the left menu, click Identity.
3. Under Permissions, click Azure role assignments.
4. Click Add role assignment (Preview).
5. Use the drop-down lists to select the resource group that your Sentinel Workspace is in. If multiple workspaces are used in different resource groups consider selecting subscription as a scope instead.

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 10-07-2025                     | Updates to the **playbook** description, prerequisites, and post-deployment instructions, as well as adjustments to variable naming conventions for consistency . |
| 3.0.1       | 24-07-2023                     | Update Table markdown from " : " to " - " in SOCProcessFramework **Workbook** . |
| 3.0.0       | 12-07-2023                     | Correction of **Logo** in the solution. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)

# SOC-Process-Framework

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SOC-Process-Framework Logo" width="75" height="75">

The Get-SOCActions Playbook with SocRA Watchlist gives SOCs the ability to onboard SOC Actions for their Analysts to follow that snap to the SOC Process Framework Workbook.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Rin Ure - rin.ure@microsoft.com |
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
| [Building_a_SOCLargeStaff](../content/soc-process-framework-building-a-soclargestaff-48143514.md) | - |
| [Building_a_SOCMediumStaff](../content/soc-process-framework-building-a-socmediumstaff-8a8cc226.md) | - |
| [Building_a_SOCPartTimeStaff](../content/soc-process-framework-building-a-socparttimestaff-8ef82164.md) | - |
| [Building_a_SOCSmallStaff](../content/soc-process-framework-building-a-socsmallstaff-4a5be90f.md) | - |
| [SOCIRPlanning](../content/soc-process-framework-socirplanning-18961eff.md) | - |
| [SOCProcessFramework](../content/soc-process-framework-socprocessframework-5c770df0.md) | - |
| [UpdateSOCMaturityScore](../content/soc-process-framework-updatesocmaturityscore-d96c410d.md) | - |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Get-SOC-Actions](../content/soc-process-framework-get-soc-actions-287c5e40.md) | This playbook uses the SOC Recommended Actions Watchlist to automatically enrich incidents generated... | - |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SOCDepartmental](../content/soc-process-framework-socdepartmental-0a699ff5.md) | - | - |
| [SOCEmailDistribution](../content/soc-process-framework-socemaildistribution-892eac6a.md) | - | - |
| [SOCExternalContacts](../content/soc-process-framework-socexternalcontacts-4a1a005e.md) | - | - |
| [SOCIRP](../content/soc-process-framework-socirp-aea3fd1d.md) | - | - |
| [SOCInternalContacts](../content/soc-process-framework-socinternalcontacts-72a64dc4.md) | - | - |
| [SOCMA](../content/soc-process-framework-socma-16c2d66a.md) | - | - |
| [SOCPager](../content/soc-process-framework-socpager-7c674671.md) | - | - |
| [SOCUseCase](../content/soc-process-framework-socusecase-0978b37d.md) | - | - |
| [SOCcontacts](../content/soc-process-framework-soccontacts-3893f7fa.md) | - | - |
| [SOCgeneralIT](../content/soc-process-framework-socgeneralit-cfa7937a.md) | - | - |
| [SOCworkstations](../content/soc-process-framework-socworkstations-b5789743.md) | - | - |
| [SocRA](../content/soc-process-framework-socra-406f9217.md) | - | - |

## Additional Documentation

> 📄 *Source: [SOC-Process-Framework/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC-Process-Framework/README.md)*

## Author: Rin Ure

![SOC Process Framework](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SOC-Process-Framework/SOCProcessFrameworkSolutionLanding.png)<br>

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
- [Content Index](../content/content-index.md)

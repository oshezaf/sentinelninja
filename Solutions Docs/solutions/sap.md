# ⚠️ SAP

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 2 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [workflow](../content/sap-workflow-3298b428.md) ⚠️ | < 🏡home | - |
| [workflow](../content/sap-workflow-20a8ae88.md) ⚠️ | < 🏡home | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [SAP/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/README.md)*

# Microsoft Azure Sentinel SAP Continuous Threat Monitoring - Preview

Please visit: [https://docs.microsoft.com/azure/sentinel/sap-deploy-solution](https://docs.microsoft.com/azure/sentinel/sap-deploy-solution)

See our playbooks built on Logic Apps (Standard) [here](./Playbooks/README.md).

## Release Notes

# Solution Releases

| Date issued | Version Number | Content |
| --- | --- | --- |
| 28/06/23 | 2.0.74 | SAP Audit Control Workbook |
| 18/09/23 | 2.0.76 | SAP Audit Control Workbook <br> Reflect alerts in addition to incidents <br> Added visualizations for better monitoring <br> Focus on SAP alerts by default <br> Exclude users using wildcards- The SAPUsersGetVIP function now supports excluding users using wildcards. For examples, can exclude all firefighters using FF*. <br> The “SAP - Security Audit Log Configuration Change” logic was modified so it will not alert on dummy changes that surface after system restart |
| 01/01/2024 | 3.0.1 | Content migrated to a content hub V3 protocol- to overcome the error of “Creating the resource of type Microsoft.Resources/templateSpecs would exceed the quota of ‘800’ resources of type Microsoft.Resources/templateSpecs per resource group” |
| 02/02/2024 | 3.0.3 | Updated and improved logic for these alert rules: <br> SAP - Execution of an Obsolete or an Insecure Function Module <br> SAP - Multiple Password Changes <br> SAP - Assignment of a sensitive role <br> SAP - Sensitive User's Password Change and Log in <br> SAP - Login from unexpected network <br> SAP - Sensitive privileged user makes a change in another user <br> Updated parsers: <br> SAPChangeDocsLog- support for blank workspaces, added SystemGuid <br> SAPJAVAFilesLogs- switch to SAPControl file-based logs <br> SAPSpoolLog, SAPSpoolOutputLog- handle different SpoolRequestNumber formats in different SAP releases <br> SAPTableDataLog- handle SidGuid, UpdatedOn fields <br> SAPUsersAssignments- inffer user master data changes in near realtime <br> SAPUsersGetPrivileged- allow SAP AS JAVA systems support |
| 06/03/2024 | 3.1.0 | New JAVA AS alert rules <br> SAP - (Preview) AS JAVA - Sensitive Privileged User Signed In <br> SAP - (Preview) AS JAVA - Sign-In from Unexpected Network <br> SAP - (Preview) AS JAVA - User Creates and Uses New User <br> SAP - Execution of an Obsolete or an Insecure Function Module- improved logic |
| 15/04/2024 | 3.1.4 | Bug fixes |
| 25/04/2024 | 3.1.5 | Fixes SAPCONTROL_CL error when using cross workspace feature|
| 16/06/2024 | 3.1.7 | Improved and simplified logic for 4 alert rules:  <br> SAP Data has Changed During Debugging Activity <br> SAP Execution of Sensitive Function Module <br> SAP Function module tested  <br> SAP Multiple Logons by IP. <br>  <br> Fixed bugs in parsers:  <br> SAPCRLog, SAPGetSystemParameter.   <br> <br> Added additionalData column to "SAP - Systems" watchlist
| 11/07/2024 | 3.1.13 | Handle the "Unknown function" error on queries using multiple parsers. <br>  Disable incident creation for low severity data collection health alerts. <br> Excluded SAPJAVAFilesLogs from being queried in SAPSystems and SAPUsers* parsers by default. <br> Updated "Audit Controls" workbook to support solution versions 3.X. <br> Updated workbooks to default to local workspace even when workspace is a fresh one. 
| 12/02/2024 | 3.2.02 | Added two new detections: SAP - (Preview) Dormant users detected, SAP - (Preview) Developer key assigned in a production system (Preview). Switched SAPAuditLog to be based on standard table ABAPAuditLog. Added support for SAP version 7.31 through 7.4 to reflect dialog users IP address using TableDataLog (DBTABLOG). Enable table logging for SAP table USR41 to enable this feature

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)


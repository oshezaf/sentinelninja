# Microsoft Sentinel solution for SAP® applications

*Solution: SAP*

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** |  |
| **Support Tier** |  |
| **Source Vendor** | SAP *(basis: override)* |
| **Last Updated** | 2026-06-03 |
| **Solution Folder** | [SAP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/sentinel4sap.sentinel4sap) · Rating: ★★★★★ 5.0/5 (2 ratings) · Popularity: 🔵 Medium (77%) |

Microsoft Sentinel solution for SAP® applications

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) 🔶
- [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md)

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **8 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ABAPAuditLog`](../tables/abapauditlog.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPAuditLog_CL`](../tables/abapauditlog-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |
| [`ABAPAuthorizationDetails`](../tables/abapauthorizationdetails.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPAuthorizationDetails_CL`](../tables/abapauthorizationdetails-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |
| [`ABAPChangeDocsLog`](../tables/abapchangedocslog.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPChangeDocsLog_CL`](../tables/abapchangedocslog-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |
| [`ABAPUserDetails`](../tables/abapuserdetails.md) | [Microsoft Sentinel for SAP applications - agentless](../connectors/sapcc.md) | - |
| [`ABAPUserDetails_CL`](../tables/abapuserdetails-cl.md) 🔶 | [Microsoft Sentinel for SAP](../connectors/microsoftsentinelsap.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **3 content item(s)** (0 in solution, 3 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Playbooks | 3 | 0 | 3 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SAP - Lock User (Agentless Basic)](../content/sap-sap-lock-user-agentless-basic-1dc6312e.md) ⚠️ | This playbook locks an SAP user when triggered by a Microsoft Sentinel incident. It dynamically find... | - |
| [workflow](../content/sap-workflow-3298b428.md) ⚠️ | < 🏡home | - |
| [workflow](../content/sap-workflow-20a8ae88.md) ⚠️ | < 🏡home | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [SAP/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/README.md)*

# Microsoft Azure Sentinel SAP Continuous Threat Monitoring

Please visit: [https://docs.microsoft.com/azure/sentinel/sap-deploy-solution](https://docs.microsoft.com/azure/sentinel/sap-deploy-solution)

See our playbooks built on Logic Apps (Standard) [here](./Playbooks/README.md).

## Release Notes

# Solution Releases

Agentless solution release notes can be found in the [Agentless README](./Agentless/README.md) file.

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


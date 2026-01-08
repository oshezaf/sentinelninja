# McAfee ePolicy Orchestrator

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/McAfee%20ePolicy%20Orchestrator/Workbooks/Images/Logo/mcafee_logo.svg" alt="McAfee ePolicy Orchestrator Logo" width="75" height="75">

The McAfee ePolicy Orchestrator solution provides the capability to ingest [McAfee ePO](https://www.mcafee.com/enterprise/en-us/products/epolicy-orchestrator.html) events into Microsoft Sentinel through the syslog. Refer to [documentation](https://docs.mcafee.com/bundle/epolicy-orchestrator-landing/page/GUID-0C40020F-5B7F-4549-B9CC-0E017BC8797F.html) for more information.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-03-25 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/McAfee%20ePolicy%20Orchestrator](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/McAfee%20ePolicy%20Orchestrator) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] McAfee ePolicy Orchestrator (ePO)](../connectors/mcafeeepo.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] McAfee ePolicy Orchestrator (ePO)](../connectors/mcafeeepo.md) | - |

## Content Items

This solution includes **26 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 14 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [McAfee ePO - Agent Handler down](../content/mcafee-epolicy-orchestrator-mcafee-epo-agent-handler-down-3c1425d3-93d4-4eaf-8aa0-370dbac94c82-ff3411b0.md) | Medium | DefenseEvasion | - |
| [McAfee ePO - Attempt uninstall McAfee agent](../content/mcafee-epolicy-orchestrator-mcafee-epo-attempt-uninstall-mcafee-agent-2eff5809-bf84-48e0-8288-768689672c37-dbc4435c.md) | Medium | DefenseEvasion | - |
| [McAfee ePO - Deployment failed](../content/mcafee-epolicy-orchestrator-mcafee-epo-deployment-failed-155243f4-d962-4717-8a7b-b15b6d112660-667499dd.md) | High | DefenseEvasion | - |
| [McAfee ePO - Error sending alert](../content/mcafee-epolicy-orchestrator-mcafee-epo-error-sending-alert-1e3bcd0f-10b2-4fbd-854f-1c6f33acc36a-ac2b2d79.md) | Medium | DefenseEvasion | - |
| [McAfee ePO - File added to exceptions](../content/mcafee-epolicy-orchestrator-mcafee-epo-file-added-to-exceptions-b9d9fdfe-bc17-45ce-a70d-67a5cfd119f4-bdad79ac.md) | Medium | DefenseEvasion | - |
| [McAfee ePO - Firewall disabled](../content/mcafee-epolicy-orchestrator-mcafee-epo-firewall-disabled-bd3cedc3-efba-455a-85bd-0cf9ac1b0727-52f5823f.md) | Medium | DefenseEvasion, CommandAndControl | - |
| [McAfee ePO - Logging error occurred](../content/mcafee-epolicy-orchestrator-mcafee-epo-logging-error-occurred-0c9243d6-d2ec-48e1-8593-e713859c8f3c-9205c165.md) | Medium | DefenseEvasion | - |
| [McAfee ePO - Multiple threats on same host](../content/mcafee-epolicy-orchestrator-mcafee-epo-multiple-threats-on-same-host-f53e5168-afdb-4fad-b29a-bb9cb71ec460-48b44b93.md) | Medium | InitialAccess, Persistence, DefenseEvasion, PrivilegeEscalation | - |
| [McAfee ePO - Scanning engine disabled](../content/mcafee-epolicy-orchestrator-mcafee-epo-scanning-engine-disabled-5223c1b8-75ef-4019-9076-a19b1ef3e5d1-6db57ca1.md) | Low | DefenseEvasion | - |
| [McAfee ePO - Spam Email detected](../content/mcafee-epolicy-orchestrator-mcafee-epo-spam-email-detected-ffc9052b-3658-4ad4-9003-0151515fde15-ea55c50d.md) | Medium | InitialAccess | - |
| [McAfee ePO - Task error](../content/mcafee-epolicy-orchestrator-mcafee-epo-task-error-3e397e31-7964-417e-a3e0-0acfaa2056f4-25f3e295.md) | Medium | DefenseEvasion | - |
| [McAfee ePO - Threat was not blocked](../content/mcafee-epolicy-orchestrator-mcafee-epo-threat-was-not-blocked-6d70a26a-c119-45b7-b4c6-44ac4fd1bcb7-299c7a2f.md) | High | InitialAccess, PrivilegeEscalation, DefenseEvasion | - |
| [McAfee ePO - Unable to clean or delete infected file](../content/mcafee-epolicy-orchestrator-mcafee-epo-unable-to-clean-or-delete-infected-file-9860e89f-72c8-425e-bac9-4a170798d3ea-aa3ef2fa.md) | High | DefenseEvasion | - |
| [McAfee ePO - Update failed](../content/mcafee-epolicy-orchestrator-mcafee-epo-update-failed-4f0c91c3-1690-48f0-b538-4282dd5417a4-9c8f9364.md) | Medium | DefenseEvasion | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [McAfee ePO - Agent Errors](../content/mcafee-epolicy-orchestrator-mcafee-epo-agent-errors-dff3c841-6e3e-432e-ad68-3ddd7326bc01-af48929b.md) | DefenseEvasion | - |
| [McAfee ePO - Applications blocked or contained](../content/mcafee-epolicy-orchestrator-mcafee-epo-applications-blocked-or-contained-e838519b-1f03-417f-863b-6c1a141677ee-1c08ae78.md) | InitialAccess, Execution | - |
| [McAfee ePO - Email Treats](../content/mcafee-epolicy-orchestrator-mcafee-epo-email-treats-851b63f1-cc5d-44d5-b505-9444a5e87076-d091dc76.md) | InitialAccess | - |
| [McAfee ePO - Infected Systems](../content/mcafee-epolicy-orchestrator-mcafee-epo-infected-systems-2e7a56fb-ffff-491c-bdee-e772f83c47e2-d206daf3.md) | InitialAccess | - |
| [McAfee ePO - Infected files by source](../content/mcafee-epolicy-orchestrator-mcafee-epo-infected-files-by-source-e83b72a0-60dd-4d65-b1c2-582766f2f181-692fcc32.md) | InitialAccess | - |
| [McAfee ePO - Long term infected systems](../content/mcafee-epolicy-orchestrator-mcafee-epo-long-term-infected-systems-a65e4129-d936-4165-bc08-699f9151aa26-808b025f.md) | InitialAccess, Persistence | - |
| [McAfee ePO - Objects not scanned](../content/mcafee-epolicy-orchestrator-mcafee-epo-objects-not-scanned-5be4adb7-52ee-4416-b39d-0c03cf0fb661-b8471301.md) | DefenseEvasion | - |
| [McAfee ePO - Scan Errors](../content/mcafee-epolicy-orchestrator-mcafee-epo-scan-errors-901e6982-39ed-4759-9451-de1a3826182f-f01964b9.md) | DefenseEvasion | - |
| [McAfee ePO - Sources with multiple threats](../content/mcafee-epolicy-orchestrator-mcafee-epo-sources-with-multiple-threats-1ef23489-a840-4b43-b33d-a921da24c85c-b0e3a338.md) | InitialAccess | - |
| [McAfee ePO - Threats detected and not blocked, cleaned or deleted](../content/mcafee-epolicy-orchestrator-mcafee-epo-threats-detected-and-not-blocked,-cleaned-or-deleted-80c5904d-6a36-4b7c-82d4-180023a1f8b4-c8a11efd.md) | Persistence, PrivilegeEscalation | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [McAfeeePOOverview](../content/mcafee-epolicy-orchestrator-mcafeeepooverview-aa678fa3.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [McAfeeEPOEvent](../content/mcafee-epolicy-orchestrator-mcafeeepoevent-b1038960-6b62-4d55-aed0-c55acb1ae408-8f7dd723.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.0.2       | 18-12-2024                     | Removed Deprecated **Data Connector**                                      |
| 3.0.1       | 24-07-2024                     | Deprecated data connectors                                                 |
| 3.0.0       | 16-07-2024                     | Updated **Data Connector** Description                                     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

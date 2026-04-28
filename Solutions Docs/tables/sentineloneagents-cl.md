# SentinelOneAgents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (69 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne%5CData%20Connectors%5CSentinelOne_ccp/table%20-%20Agents.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountId | string | The unique identifier for the account. |
| AccountName | string | The account name. |
| ActiveDirectory | string | Details about the active directory. |
| ActiveThreats | real | The number of active threats. |
| AgentVersion | string | The version of the agent. |
| AllowRemoteShell | bool | Indicates whether remote shell is allowed. |
| AppsVulnerabilityStatus | string | The vulnerability status of the applications. |
| ComputerName | string | The name of the computer. |
| ConsoleMigrationStatus | string | The status of the console migration. |
| CoreCount | real | The number of CPU cores. |
| CpuCount | real | The number of CPUs. |
| CpuId | string | The identifier of the CPU. |
| CreatedAt | datetime | The timestamp (UTC) when the object was created. |
| Domain | string | The domain of the object. |
| EncryptedApplications | bool | Indicates whether the applications are encrypted. |
| ExternalId | string | The external identifier associated with the object. |
| ExternalIp | string | The external IP address of the object. |
| FullDiskScanLastUpdatedAt | datetime | The timestamp (UTC) when the full disk scan was last updated. |
| GroupId | string | The unique identifier for the group. |
| GroupIp | string | The IP address of the group. |
| GroupName | string | The name of the group. |
| GroupUpdatedAt | datetime | The timestamp (UTC) when the group was last updated. |
| Id | string | The unique identifier for the object. |
| Infected | bool | Indicates whether the object is infected. |
| InRemoteShellSession | bool | Indicates whether the object is in a remote shell session. |
| InstallerType | string | The type of installer used. |
| IsActive | bool | Indicates whether the object is active. |
| IsDecommissioned | bool | Indicates whether the object is decommissioned. |
| IsPendingUninstall | bool | Indicates whether the object is pending uninstallation. |
| IsUninstalled | bool | Indicates whether the object is uninstalled. |
| IsUpToDate | bool | Indicates whether the object is up to date. |
| LastActiveDate | datetime | The timestamp (UTC) when the object was last active. |
| LastIpToMgmt | string | The last IP address used for management. |
| LastLoggedInUserName | string | The username of the last logged-in user. |
| LicenseKey | string | The license key associated with the object. |
| Locations | string | The locations associated with the object. |
| LocationType | string | The type of location. |
| MachineType | string | The type of machine. |
| MissingPermissions | string | Details of the missing permissions. |
| MitigationMode | string | The mitigation mode applied. |
| MitigationModeSuspicious | string | The suspicious mitigation mode applied. |
| ModelName | string | The model name of the object. |
| NetworkInterfaces | string | Details of the network interfaces. |
| NetworkQuarantineEnabled | bool | Is Network Quarantine Enabled on the device. |
| NetworkStatus | string | The network status of the object. |
| OperationalStateExpiration | string | Agent operational state. |
| OsArch | string | The OS architecture. |
| OsName | string | The name of the operating system. |
| OsRevision | string | The OS revision. |
| OsStartTime | datetime | The timestamp (UTC) when the operating system started. |
| OsType | string | The type of operating system. |
| OsUsername | string | The username associated with the operating system. |
| PolicyUpdatedAt | datetime | The timestamp (UTC) when the policy was last updated. |
| RangerStatus | string | The status of the ranger. |
| RangerVersion | string | The version of the ranger. |
| RegisteredAt | datetime | The timestamp (UTC) when the object was registered. |
| RemoteProfilingState | string | Agent remote profiling state. |
| ScanAbortedAt | datetime | The timestamp (UTC) when the scan was aborted. |
| ScanFinishedAt | datetime | The timestamp (UTC) when the scan was finished. |
| ScanStartedAt | datetime | The timestamp (UTC) when the scan was started. |
| ScanStatus | string | The scan status of the object. |
| SiteId | string | The unique identifier for the site. |
| SiteName | string | The name of the site. |
| ThreatRebootRequired | bool | Indicates whether a reboot is required due to a threat. |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| TotalMemory | real | The total memory available in MB. |
| UpdatedAt | datetime | The timestamp (UTC) when the object was last updated. |
| UserActionsNeeded | string | Details of the user actions needed. |
| Uuid | string | The unique identifier for the object. |

## Solutions (1)

This table is used by the following solutions:

- [SentinelOne](../solutions/sentinelone.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] SentinelOne (using Azure Function)](../connectors/sentinelone.md) |  |
| [SentinelOne (via Codeless Connector Framework)](../connectors/sentineloneccp.md) |  |

---

## Content Items Using This Table (22)

### Analytic Rules (11)

**In solution [SentinelOne](../solutions/sentinelone.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Sentinel One - Admin login from new location](../content/sentinelone-sentinel-one-admin-login-from-new-location-382f37b3-b49a-492f-b436-a4717c8c5c3e-e7ec747e.md) |  |
| [Sentinel One - Agent uninstalled from multiple hosts](../content/sentinelone-sentinel-one-agent-uninstalled-from-multiple-hosts-4ad87e4a-d045-4c6b-9652-c9de27fcb442-10a3603c.md) |  |
| [Sentinel One - Alert from custom rule](../content/sentinelone-sentinel-one-alert-from-custom-rule-5f37de91-ff2b-45fb-9eda-49e9f76a3942-7cb8d841.md) |  |
| [Sentinel One - Blacklist hash deleted](../content/sentinelone-sentinel-one-blacklist-hash-deleted-de339761-2298-4b37-8f1b-80ebd4f0b5f6-8fa631c1.md) |  |
| [Sentinel One - Exclusion added](../content/sentinelone-sentinel-one-exclusion-added-4224409f-a7bf-45eb-a931-922d79575a05-c94db4fe.md) |  |
| [Sentinel One - Multiple alerts on host](../content/sentinelone-sentinel-one-multiple-alerts-on-host-47e427e6-61bc-4e24-8d16-a12871b9f939-a9644e81.md) |  |
| [Sentinel One - New admin created](../content/sentinelone-sentinel-one-new-admin-created-e73d293d-966c-47ec-b8e0-95255755f12c-c6c1cb15.md) |  |
| [Sentinel One - Rule deleted](../content/sentinelone-sentinel-one-rule-deleted-e171b587-22bd-46ec-b96c-7c99024847a7-13809a6c.md) |  |
| [Sentinel One - Rule disabled](../content/sentinelone-sentinel-one-rule-disabled-84e210dd-8982-4398-b6f3-264fd72d036c-8dd4a965.md) |  |
| [Sentinel One - Same custom rule triggered on different hosts](../content/sentinelone-sentinel-one-same-custom-rule-triggered-on-different-hosts-5586d378-1bce-4d9b-9ac8-e7271c9d5a9a-6f74484f.md) |  |
| [Sentinel One - User viewed agent's passphrase](../content/sentinelone-sentinel-one-user-viewed-agent's-passphrase-51999097-60f4-42c0-bee8-fa28160e5583-1188d485.md) |  |

### Hunting Queries (10)

**In solution [SentinelOne](../solutions/sentinelone.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Sentinel One - Agent not updated](../content/sentinelone-sentinel-one-agent-not-updated-7fc83c11-1d80-4d1e-9d4b-4f48bbf77abe-d8920f73.md) |  |
| [Sentinel One - Agent status](../content/sentinelone-sentinel-one-agent-status-4b2ed4b6-10bf-4b2c-b31e-ae51b575dfd4-ecfcfb9d.md) |  |
| [Sentinel One - Alert triggers (files, processes, strings)](../content/sentinelone-sentinel-one-alert-triggers-files,-processes,-strings-660e92b5-1ef6-471f-b753-44a34af82c41-3e9fb5c4.md) |  |
| [Sentinel One - Deleted rules](../content/sentinelone-sentinel-one-deleted-rules-8d1ca735-e29a-4bea-a2ec-93162790b686-ccd750bf.md) |  |
| [Sentinel One - Hosts not scanned recently](../content/sentinelone-sentinel-one-hosts-not-scanned-recently-e45ff570-e8a6-4f8e-9c08-7ee92ef86060-f02435bd.md) |  |
| [Sentinel One - New rules](../content/sentinelone-sentinel-one-new-rules-9c3a38e4-0975-4f96-82ee-90ce68bec76a-83965701.md) |  |
| [Sentinel One - Scanned hosts](../content/sentinelone-sentinel-one-scanned-hosts-17c77743-8bdb-4d29-a3cb-a7a08676122f-33d8fd36.md) |  |
| [Sentinel One - Sources by alert count](../content/sentinelone-sentinel-one-sources-by-alert-count-acd0a127-461e-48c8-96fa-27d14595abe0-e0f215ff.md) |  |
| [Sentinel One - Uninstalled agents](../content/sentinelone-sentinel-one-uninstalled-agents-f3a7cedd-6fc3-4661-a0ad-c1738e531917-9f651695.md) |  |
| [Sentinel One - Users by alert count](../content/sentinelone-sentinel-one-users-by-alert-count-56500e23-4e64-45a5-a444-98a1acb2f700-01daf4b9.md) |  |

### Workbooks (1)

**In solution [SentinelOne](../solutions/sentinelone.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SentinelOne](../content/sentinelone-sentinelone-8f12ec76.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SentinelOne](../parsers/sentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


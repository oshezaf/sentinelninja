# VMwareWorkspaceOneDeviceApps_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | VMware *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Workspace%20ONE%5CData%20Connectors%5CVMwareWorkspaceOneConnector_CCF/table_VMwareWorkspaceOneDeviceApps.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ApplicationName | string | Display name of the installed application. |
| AppVersion | string | Installed application version string. |
| AssignmentStatus | string | UEM assignment status for the application (e.g., Assigned, Not Assigned). |
| BundleId | string | Application bundle/package identifier (e.g., com.microsoft.Office.Outlook). |
| DeviceId | string | Workspace ONE device UUID (links to VMwareWorkspaceOneDevices.DeviceUuid). Injected via item enrichment from the parent step placeholder. |
| InstallStatus | string | Installation status returned by Workspace ONE (e.g., Installed, Managed). |
| LatestUemAction | string | Most recent UEM action applied to this application (e.g., Install, Remove). |
| LatestUemActionTime | datetime | Timestamp of the most recent UEM action for this application. |
| SizeInBytes | long | Application binary size in bytes. |
| TimeGenerated | datetime | UTC timestamp when the record was ingested into Microsoft Sentinel. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [VMware Workspace ONE](../solutions/vmware-workspace-one.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware Workspace ONE (via Codeless Connector Framework)](../connectors/vmwareworkspaceoneconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> User Management ASIM parser for CrowdStrike Falcon Data Replicator

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimUserManagementCrowdStrikeFalconDataReplicator` |
| **Built-in Parser** | `_ASim_UserManagement_CrowdStrikeFalconDataReplicator` |
| **Schema** | UserManagement |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Data Replicator |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimUserManagement/CHANGELOG/ASimUserManagementCrowdStrikeFalconDataReplicator.md)) |
| **Last Updated** | Oct 26, 2026 |
| **Unifying Parser** | [ASimUserManagement](asimusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\ASimUserManagementCrowdStrikeFalconDataReplicator.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/ASimUserManagementCrowdStrikeFalconDataReplicator.yaml) |

## Description

Normalizes account creation, deletion, and group-membership events from CrowdStrike_User_Events_CL to ASIM UserManagement.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CrowdStrike_User_Events_CL`](../tables/crowdstrike-user-events-cl.md) |  | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CrowdStrikeFalconS3CCPDefinition](../connectors/crowdstrikefalcons3ccpdefinition.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |

**Solutions:** [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## References

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [CrowdStrike Falcon Data Replicator connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/CrowdStrikeS3FDR_ccp/DataConnectorDefinition.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)


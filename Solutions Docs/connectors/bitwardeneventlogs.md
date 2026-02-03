# Bitwarden Event Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Bitwarden.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BitwardenEventLogs` |
| **Publisher** | Bitwarden Inc |
| **Used in Solutions** | [Bitwarden](../solutions/bitwarden.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [definitions.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Bitwarden/Data%20Connectors/BitwardenEventLogs/definitions.json) |

This connector provides insight into activity of your Bitwarden organization such as user's activity (logged in, changed password, 2fa, etc.), cipher activity (created, updated, deleted, shared, etc.), collection activity, organization activity, and more.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`BitwardenEventLogs_CL`](../tables/bitwardeneventlogs-cl.md) | — | — |
| [`BitwardenGroups_CL`](../tables/bitwardengroups-cl.md) | — | — |
| [`BitwardenMembers_CL`](../tables/bitwardenmembers-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Bitwarden Client Id and Client Secret**: Your API key can be found in the Bitwarden organization admin console. Please see [Bitwarden documentation](https://bitwarden.com/help/public-api/#authentication) for more information.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Bitwarden Event Logs to Microsoft Sentinel**

Your API key can be found in the Bitwarden organization admin console.
Please see [Bitwarden documentation](https://bitwarden.com/help/public-api/#authentication) for more information.
Self-hosted Bitwarden servers may need to reconfigure their installation's URL.
- **Bitwarden Identity Url**: https://identity.bitwarden.com
- **Bitwarden Api Url**: https://api.bitwarden.com
- **OAuth Configuration**:
  - Client ID
  - Client Secret
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


# 🔍 1Password (Serverless)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/azurekid/Azure-Sentinel/master/Logos/1password.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `1Password(Serverless)` |
| **Publisher** | Unknown (ARM variable) |
| **Used in Solutions** | [1Password](../solutions/1password.md) |
| **Collection Method** | CCF |
| **Connector Definition Files** | [azuredeploy_1Password_poller_connector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/1Password/Data%20Connectors/1Password_ccpv2/azuredeploy_1Password_poller_connector.json) |

The 1Password CCP connector allows the user to ingest 1Password Audit, Signin & ItemUsage events into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`OnePasswordEventLogs_CL`](../tables/onepasswordeventlogs-cl.md) | — | — |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **1Password API token**: A 1Password API Token is required. See the [1Password documentation](https://support.1password.com/events-reporting/#appendix-issue-or-revoke-bearer-tokens) on how to create an API token.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. STEP 1 - Create a 1Password API token:**

Follow the [1Password documentation](https://support.1password.com/events-reporting/#appendix-issue-or-revoke-bearer-tokens) for guidance on this step.

**2. STEP 2 - Choose the correct base URL:**

There are multiple 1Password servers which might host your events. The correct server depends on your license and region. Follow the [1Password documentation](https://developer.1password.com/docs/events-api/reference/#servers) to choose the correct server. Input the base URL as displayed by the documentation (including 'https://' and without a trailing '/').

**3. STEP 3 - Enter your 1Password Details:**

Enter the 1Password base URL & API Token below:
- **Base Url**: Enter your Base Url
- **API Token**: (password field)
- Click 'connect' to establish connection

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


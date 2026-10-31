# Miro AI Interaction Logs (Beta) (Enterprise Plan + Enterprise Guard)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Miro.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MiroAIInteractionLogsDataConnector` |
| **Publisher** | Miro |
| **Used in Solutions** | [Miro](../solutions/miro.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [MiroAIInteractionLogs_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro/Data%20Connectors/MiroAIInteractionLogs_CCF/MiroAIInteractionLogs_DataConnectorDefinition.json) |
| **DCR Definition Files** | [MiroAIInteractionLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro/Data%20Connectors/MiroAIInteractionLogs_CCF/MiroAIInteractionLogs_DCR.json) |
| **CCF Configuration** | [MiroAIInteractionLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro/Data%20Connectors/MiroAIInteractionLogs_CCF/MiroAIInteractionLogs_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The [Miro AI Interaction Logs](https://developers.miro.com/reference/enterprise-get-ai-interaction-logs) data connector enables you to ingest AI interaction logs from Miro into Microsoft Sentinel. AI interaction logs capture user interactions with AI features in Miro: the prompt received from the user, the response returned to them, and the model and tool calls made in between.



This connector is in **Beta**: the AI interaction logs API may change before general availability.



**Key features:**

- Track AI interactions by user, session, and affected object.

- Follow each step of an interaction: input, model calls, tool calls, and output.

- Support compliance and eDiscovery requirements.



**Requirements:**

- **Miro Plan**: [Enterprise Plan](https://miro.com/pricing/) + **Enterprise Guard** add-on.

- **Collection enabled**: A Miro admin turns on **Collect AI interaction logs** in Admin console > Security > Audit logs > Settings. Only interactions after that are recorded. If the setting is not visible, contact your Miro account manager.

- **OAuth scope**: `aiinteractionlogs:read`.

- **Organization ID**: Your Miro organization identifier.



**Note:** The `details` column may contain unstructured data that could reveal information used in interactions with the LLM. Azure Monitor truncates any field value longer than 64 KB at ingestion, so a long `details` value can arrive cut off.



For detailed instructions, refer to the [documentation](https://help.miro.com/hc/en-us/articles/31325908249362).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MiroAIInteractionLogs_CL`](../tables/miroaiinteractionlogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Miro Enterprise Plan with Enterprise Guard**: Miro Enterprise Plan with Enterprise Guard add-on is required. AI interaction logs are not available on base Enterprise Plan or lower tiers.
- **AI interaction logs collection**: A Miro admin must turn on Collect AI interaction logs in Admin console > Security > Audit logs > Settings. Only interactions after that are recorded.
- **Miro OAuth Application**: Miro OAuth application with aiinteractionlogs:read scope is required.
- **Miro Organization ID**: Your Miro organization ID is required to access AI interaction logs.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**Step 1: Verify your Miro plan and enable collection**

1. Ensure your organization has [Miro Enterprise Plan](https://miro.com/pricing/) with **Enterprise Guard** add-on.
2. If you don't have Enterprise Guard yet, contact your [Miro account manager](https://miro.com/contact/sales/) to upgrade.
3. As a Miro admin, open Admin console > Security > Audit logs > Settings and turn on **Collect AI interaction logs**. Only interactions after that are recorded.
4. If the setting is not visible, contact your [Miro account manager](https://miro.com/contact/sales/).

**Step 2: Choose your setup option**

There are two ways to set up the Miro AI Interaction Logs connector.

**Option 1 (recommended):** Use Enterprise integrations
- Simplest setup with automatic token generation.
- Recommended for most users.
- See Option 1 below.

**Option 2 (alternative):** Create custom OAuth application
- More control over OAuth app configuration.
- For advanced users or custom integration needs.
- See Option 2 below.

**Note:** When using Option 1, the integration is automatically tied to the team with the largest number of users in your organization. When using Option 2, you can choose which team to install the app to. However, **the team selection does not affect which logs are collected**—both options provide organization-wide log access.

**Option 1: Enterprise integrations (recommended)**

1. Open [Miro Company Settings](https://miro.com/app/settings/).
2. Expand the **Apps and integrations** section.
3. Click **Enterprise integrations**.
4. Enable the **SIEM** toggle.
5. Copy the **Access Token** value that appears.
6. Get your **Organization ID** from the browser URL:
   - Look at the browser URL to find your Organization ID.
   - The URL format is: `https://miro.com/app/settings/company/{ORGANIZATION_ID}/`.
   - Copy your Organization ID from the URL (the numeric value).
7. **Important:** Store both the token and Organization ID securely—they provide full access to AI interaction logs.
8. The token will work until you disable the toggle.
9. Proceed to Step 3.

**One token for all Miro connectors:** the SIEM toggle creates one access token with every log scope your organization is entitled to: `auditlogs:read` (Enterprise Plan), `contentlogs:export` (Enterprise Guard add-on) and `aiinteractionlogs:read` (Enterprise Guard add-on with AI interaction logs). If the SIEM toggle was enabled before it offered these scopes, turn it off and on again to get a token that includes them, then update the token in every connector that uses it. Turning the toggle off invalidates its current token, so every connector that uses it fails to poll until it has the new token.

**Option 2: Custom OAuth application (alternative)**

1. Go to [Miro App Settings](https://miro.com/app/settings/user-profile/apps).
2. Click **Create new app**.
3. Select **Non-expiring access token** option during app creation.
4. Enable the OAuth scope: **`aiinteractionlogs:read`**.
5. Click **Install app and get OAuth token**.
6. Authorize the app to access your organization.
7. Copy the **Access Token** that is displayed.
8. Get your **Organization ID**:
   - Go to [Miro Company Settings](https://miro.com/app/settings/).
   - Look at the browser URL to find your Organization ID.
   - The URL format is: `https://miro.com/app/settings/company/{ORGANIZATION_ID}/`.
   - Copy your Organization ID from the URL (the numeric value).
9. **Important:** Store both the token and Organization ID securely—they provide full access to AI interaction logs.
10. The token will work until you uninstall the app.

**Step 3: Learn more**

For detailed information about Miro AI interaction logs:
- [Miro API reference](https://developers.miro.com/reference/enterprise-get-ai-interaction-logs)
- [Miro Enterprise Guard](https://miro.com/enterprise-guard/)
- [OAuth non-expiring tokens](https://developers.miro.com/reference/authorization-flow-for-expiring-access-tokens)

**6. Connect to Miro to start collecting AI interaction logs in Microsoft Sentinel.**

**Step 4: Connect to Miro**

Provide the required values below to complete the connection.
- **Organization ID**: Enter your Miro Organization ID
- **Access token**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


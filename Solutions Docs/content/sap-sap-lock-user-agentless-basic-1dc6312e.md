# SAP - Lock User (Agentless Basic)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook locks an SAP user when triggered by a Microsoft Sentinel incident. It dynamically finds SAP-specific alert details across all alerts in the incident, supporting complex multi-alert incidents from Defender XDR.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SAP](../solutions/sap.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/Basic-SAPLockUser/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Basic-SAPLockUser/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP/Playbooks/Basic-SAPLockUser/readme.md)*

# Lock SAP User from Teams - Basic (Consumption)

This playbook locks an SAP ERP user when triggered by a Microsoft Sentinel incident leveraging the SAP Integration Suite. It posts an adaptive card to a Teams channel, letting an analyst choose to **block the user** on SAP ERP (or flag as false positive).

Unlike a static approach that assumes the SAP alert is always the first alert, this playbook **dynamically searches all alerts** in the incident for SAP-specific Custom Details (`SAP_User`, `SidGuid`, `AgentGuid`). This makes it compatible with **complex, multi-alert incidents from Defender XDR**.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FBasic-SAPLockUser%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSAP%2FPlaybooks%2FBasic-SAPLockUser%2Fazuredeploy.json)

## Overview

| Item | Detail |
| --- | --- |
| **Logic App type** | Consumption |
| **Trigger** | Microsoft Sentinel incident |
| **Connectors** | Microsoft Sentinel (Managed Identity), Microsoft Teams |
| **SAP integration** | SAP Integration Suite (CPI) iFlow via OAuth2 client credentials |

### Flow summary

```
Incident trigger
  ├─ Filter all alerts → find SAP alert with Custom Details containing SAP_User
  ├─ No SAP alert found? → add incident comment, exit gracefully
  ├─ Post adaptive card to Teams (incident info + SAP user + block/flag)
  ├─ Block path:
  │     ├─ SAP ERP  → OAuth token → lock user via Integration Suite → notify + close incident
  │     ├─ Entra ID → placeholder (extend with Entra ID connector)
  │     └─ SAP BTP  → placeholder (extend with IAS/XSUAA REST call)
  ├─ Flag path: close incident as false positive
  └─ Error handlers: notify admin via Teams bot chat
```

## Prerequisites

1. **SAP Integration Suite** with the community [user lock/unlock iFlow](https://github.com/Azure-Samples/Sentinel-For-SAP-Community/tree/main/integration-artifacts/solution-packages/baseline-extension-package) deployed.
2. **OAuth2 client credentials** (client ID + secret) from the SAP Process Integration runtime.
3. **Microsoft Teams** channel for incident notifications (you'll need the Team ID and Channel ID).
4. **Microsoft Sentinel Responder** role assigned to the Logic App's managed identity on the Sentinel workspace.

## Deployment parameters

| Parameter | Description | Example |
| --- | --- | --- |
| `PlaybookName` | Name of the Logic App resource | `SAPLockUser-Basic` |
| `DefaultAdminEmail` | Admin UPN for error notifications via Teams bot | `admin@contoso.com` |
| `SAPOAuthTokenEndpoint` | OAuth2 token URL for SAP BTP | `https://<sub>.authentication.<region>.hana.ondemand.com/oauth/token` |
| `SAPOAuthClientId` | OAuth2 client ID (securestring) | — |
| `SAPOAuthClientSecret` | OAuth2 client secret (securestring) | — |
| `SAPClientId` | SAP MANDT / client number | `100` |
| `TeamsTeamId` | Teams Team ID | `626751d1-...` |
| `TeamsChannelId` | Teams Channel ID | `19:abc123...@thread.tacv2` |

> **Tip:** If you don't have the Teams IDs at deployment time, leave them empty and configure the `TeamsChannel` workflow parameter in the Logic App designer after deployment.

## Post-deployment steps

1. **Authorize the Teams connection** — open the Logic App in the Azure portal → API connections → `teams-*` → Edit API connection → Authorize.
2. **Assign Sentinel Responder role** — grant the Logic App's managed identity the *Microsoft Sentinel Responder* role on the Log Analytics workspace.
3. **Verify Teams channel** — ensure the `TeamsChannel` parameter has valid `teamID` and `channelID` values.
4. **Test** — create a test incident with SAP Custom Details (`SAP_User`, `SidGuid`, `AgentGuid`) and verify the adaptive card appears in Teams.

## Key differences from the Standard (STD) version

| Aspect | This playbook (Consumption) | STD version |
| --- | --- | --- |
| Logic App type | Consumption (pay-per-execution) | Standard (dedicated hosting) |
| VNet injection | Not supported | Supported |
| Alert handling | Dynamic — filters all alerts for SAP details | Static — uses `alerts[0]` |
| Defender XDR | ✅ Complex multi-alert incidents | ⚠️ Assumes SAP alert is first |
| SAP username | Dynamic from Custom Details | Hardcoded demo value |
| Unlock flow | Not included (add separately) | Included with timeout auto-unlock |
| Deployment | ARM template with Deploy to Azure button | ARM template for Standard + storage |

## Extending the playbook

- **Entra ID lock** — add the *Microsoft Entra ID* connector with a "Disable user" action in the `Case_AAD` branch.
- **BTP/IAS lock** — add an HTTP action calling SAP Cloud Identity Services SCIM API to set `active: false` in the `Case_BTP` branch.

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SAP](../solutions/sap.md)


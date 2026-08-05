# ⚠️ Tailscale Premium (CCF)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tailscale.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TailscalePremiumCCF` |
| **Publisher** | Community |
| **Used in Solutions** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [TailscalePremium_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Data%20Connectors/TailscalePremium_ccf/TailscalePremium_ConnectorDefinition.json) |
| **DCR Definition Files** | [TailscalePremium_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Data%20Connectors/TailscalePremium_ccf/TailscalePremium_DCR.json) |
| **CCF Configuration** | [TailscalePremium_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Data%20Connectors/TailscalePremium_ccf/TailscalePremium_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2` |

Comprehensive Tailscale telemetry for **Premium and Enterprise** tier tailnets. Polls every endpoint the Standard connector polls, **plus** Premium-only network flow logs and posture-integration inventory. Eleven endpoints in one Connect:



- `/logging/configuration` - configuration audit events

- `/logging/network` - **Premium** network flow logs (per-node traffic with src/dst/protocol/bytes)

- `/devices` - device inventory

- `/users` - user inventory

- `/keys?all=true` - auth keys + API tokens + OAuth clients

- `/webhooks` - webhook configuration

- `/dns/nameservers`, `/dns/preferences`, `/dns/searchpaths` - DNS state (merged into single `Tailscale_Dns_CL` table with `ConfigType` discriminator)

- `/settings` - tailnet settings flags

- `/posture/integrations` - **Premium** MDM/EDR integration inventory (Jamf, Kandji, Intune, Kolide, Microsoft Defender for Endpoint, CrowdStrike Falcon, SentinelOne, etc.)



**OAuth scopes required:** `logs:configuration:read`, `logs:network:read`, `devices:core:read`, `users:read`, `auth_keys:read`, `webhooks:read`, `dns:read`, `feature_settings:read` (or the bundled `all:read`).



**If your tailnet is Personal (Free) or Standard tier, install `Tailscale Standard (CCF)` instead - this Premium connector's network and posture pollers will return 403 on lower tiers.**

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) | ? | ✓ | ? |
| [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) | ? | ✓ | ? |
| [`Tailscale_Dns_CL`](../tables/tailscale-dns-cl.md) | ? | ✓ | ? |
| [`Tailscale_Keys_CL`](../tables/tailscale-keys-cl.md) | ? | ✓ | ? |
| [`Tailscale_Network_CL`](../tables/tailscale-network-cl.md) | ? | ✓ | ? |
| [`Tailscale_PostureIntegrations_CL`](../tables/tailscale-postureintegrations-cl.md) | ? | ✓ | ? |
| [`Tailscale_Settings_CL`](../tables/tailscale-settings-cl.md) | ? | ✓ | ? |
| [`Tailscale_Users_CL`](../tables/tailscale-users-cl.md) | ? | ✓ | ? |
| [`Tailscale_Webhooks_CL`](../tables/tailscale-webhooks-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read/Write on the workspace

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Tailscale (Premium)**

Generate an OAuth client at https://login.tailscale.com/admin/settings/oauth with these **Read** scopes: Logs > Configuration, Logs > Network (Premium), General > DNS, General > Users, Devices > Core, Keys > Auth Keys, Keys > Webhooks, Settings > Feature Settings (or tick `all:read`). Find your tailnet name on the Keys page.
- **Tailscale tailnet**: tail-XXXX.ts.net
- **OAuth Client ID**: k...
- **OAuth Client Secret**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


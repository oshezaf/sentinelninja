# ⚠️ Tailscale Standard (CCF)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tailscale.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TailscaleCCF` |
| **Publisher** | Community |
| **Used in Solutions** | [Tailscale (CCF)](../solutions/tailscale-ccf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Tailscale_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Data%20Connectors/TailscaleAuditLogs_ccf/Tailscale_ConnectorDefinition.json) |
| **DCR Definition Files** | [Tailscale_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Data%20Connectors/TailscaleAuditLogs_ccf/Tailscale_DCR.json) |
| **CCF Configuration** | [Tailscale_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tailscale%20%28CCF%29/Data%20Connectors/TailscaleAuditLogs_ccf/Tailscale_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2` |

Comprehensive Tailscale telemetry for **Personal (Free) and Standard** tier tailnets. Polls nine endpoints in one Connect:



- `/logging/configuration` - configuration audit events (includes ACL, DNS, tag/group, settings changes)

- `/devices` - device inventory (hostname, OS, IPs, tags, lastSeen, expiry)

- `/users` - user inventory (role, status, deviceCount, connection state)

- `/keys?all=true` - auth keys, API tokens, and OAuth client metadata

- `/webhooks` - webhook configuration

- `/dns/nameservers`, `/dns/preferences`, `/dns/searchpaths` - DNS state (merged into single `Tailscale_Dns_CL` table with `ConfigType` discriminator)

- `/settings` - tailnet settings flags (device approval, key duration, etc.)



Split-DNS state (per-domain DNS overrides) is captured via the audit log rather than a separate snapshot table - every change is recorded with the full before/after document and actor attribution, which is richer than a periodic snapshot.



**OAuth scopes required on the Tailscale client:** `logs:configuration:read`, `devices:core:read`, `users:read`, `auth_keys:read`, `webhooks:read`, `dns:read`, `feature_settings:read` (or the bundled `all:read`). For Premium and Enterprise tailnets that also need network flow logs and posture integrations, install **Tailscale Premium (CCF)** instead.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tailscale_Audit_CL`](../tables/tailscale-audit-cl.md) | ? | ✓ | ? |
| [`Tailscale_Devices_CL`](../tables/tailscale-devices-cl.md) | ? | ✓ | ? |
| [`Tailscale_Dns_CL`](../tables/tailscale-dns-cl.md) | ? | ✓ | ? |
| [`Tailscale_Keys_CL`](../tables/tailscale-keys-cl.md) | ? | ✓ | ? |
| [`Tailscale_Settings_CL`](../tables/tailscale-settings-cl.md) | ? | ✓ | ? |
| [`Tailscale_Users_CL`](../tables/tailscale-users-cl.md) | ? | ✓ | ? |
| [`Tailscale_Webhooks_CL`](../tables/tailscale-webhooks-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read/Write on the workspace

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Tailscale**

Generate an OAuth client at https://login.tailscale.com/admin/settings/oauth with these **Read** scopes: Logs > Configuration, General > DNS, General > Users, Devices > Core, Keys > Auth Keys, Keys > Webhooks, Settings > Feature Settings (or tick `all:read` to grant all read scopes at once). Find your tailnet name on the Keys page.
- **Tailscale tailnet**: tail-XXXX.ts.net
- **OAuth Client ID**: k...
- **OAuth Client Secret**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)


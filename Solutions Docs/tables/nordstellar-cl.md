# NordStellar_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Nord Security *(basis: projected)* |
| **Source Product** | Stellar *(basis: projected)* |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (9 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordStellar%5CData%20Connectors%5CNordStellar_ccf/table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AssetType | string | Asset type for leaked-data events (asset.type, e.g. EMAIL/DOMAIN/IP/PHONE), domain-permutation events (hardcoded to DOMAIN), or asset source kind for attack-surface events (source_type, e.g. WEB_APPLICATION/NETWORK_SERVICE/DNS). Empty for dark-web events whose target lives in type-specific fields inside Details. |
| AssetValue | string | Asset value: nested asset.value (leaked-data), original_domain (domain-permutation), or root-level asset_value (attack-surface). Empty for dark-web events. |
| Details | dynamic | Full NordStellar event payload as received in the webhook envelope's `event` field. Contains every type-specific field (queryable as `Details.<field>` or `Details['<field>']`) and, for convenience and forward compatibility, also includes the source values for the promoted columns above. |
| EventId | string | Unique NordStellar event identifier (GUID). |
| EventType | string | NordStellar event type, e.g. DATA_BREACH, COMBO_LIST, MALWARE_INFECTION, CONSUMER_CREDENTIAL, DARK_WEB_FORUM_POST, DARK_WEB_TELEGRAM_POST, DARK_WEB_RANSOMWARE_POST, DARK_WEB_MARKETPLACE_POST, DOMAIN_PERMUTATION, ATTACK_SURFACE_WEB_APPLICATION_VULNERABILITY, ATTACK_SURFACE_NETWORK_SERVICE_VULNERABILITY, ATTACK_SURFACE_DNS_VULNERABILITY. |
| Module | string | NordStellar source module: LEAKED_DATA, DARK_WEB_MONITORING, DOMAIN_SQUATTING, or ATTACK_SURFACE. |
| RiskLevel | string | NordStellar risk level: CRITICAL, HIGH, MEDIUM, LOW, or INFORMATIONAL. |
| Tags | dynamic | Tags attached to the event. |
| TimeGenerated | datetime | Timestamp when the event was ingested into Microsoft Sentinel. Derived from event.date_added (leaked-data, dark-web, domain-permutation), event.detected_at (attack-surface), or the envelope time field as fallback. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [NordStellar](../solutions/nordstellar.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [NordStellar (Push)](../connectors/nordstellarpush.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


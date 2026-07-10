# UtimacoESKMKmipServerLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Utimaco *(basis: projected)* |
| **Source Product** | Enterprise Secure Key Manager *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (11 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/UtimacoESKMKmipServerLogs.json)

| Column Name | Type |
|:------------|:-----|
| Action | string |
| Event | string |
| IP | string |
| Message | string |
| ObjectType | string |
| Operation | string |
| Reason | string |
| Result | string |
| TimeGenerated | datetime |
| User | string |
| UUID | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Utimaco Enterprise Secure Key Manager (ESKM)](../connectors/utimacoeskmconnector.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (3)

**In solution [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Utimaco ESKM - Burst of KMIP DESTROY operations by a single user](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-burst-of-kmip-destroy-operations-by-a-single-user-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a03-5fa2afcb.md) |  |
| [Utimaco ESKM - Multiple KMIP authentication failures from same IP](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-multiple-kmip-authentication-failures-from-same-ip-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a01-e75b8c05.md) |  |
| [Utimaco ESKM - PERMISSION_DENIED burst for a KMIP user](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-permission-denied-burst-for-a-kmip-user-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a02-43bc2ce7.md) |  |

### Hunting Queries (4)

**In solution [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Utimaco ESKM - After-hours KMIP activity](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-after-hours-kmip-activity-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b04-a52dd019.md) |  |
| [Utimaco ESKM - High-volume private key retrievals by user](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-high-volume-private-key-retrievals-by-user-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b03-edf3b4f9.md) |  |
| [Utimaco ESKM - New source IPs connecting to KMIP](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-new-source-ips-connecting-to-kmip-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b02-fce38bca.md) |  |
| [Utimaco ESKM - Rare KMIP users in the last 24 hours](../content/utimaco-enterprise-secure-key-manager-utimaco-eskm-rare-kmip-users-in-the-last-24-hours-9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b01-e7cc8841.md) |  |

### Workbooks (1)

**In solution [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ESKMworkbook](../content/utimaco-enterprise-secure-key-manager-eskmworkbook-845900db.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


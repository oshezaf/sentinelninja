# Illumio_Auditable_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (13 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Illumio_Auditable_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| action | dynamic |
| created_by | dynamic |
| event_type | string |
| href | string |
| notifications | dynamic |
| pce_fqdn | string |
| resource_changes | dynamic |
| severity | string |
| status | string |
| TenantId | string |
| TimeGenerated | datetime |
| version | int |

## Solutions (2)

This table is used by the following solutions:

- [IllumioSaaS](../solutions/illumiosaas.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Illumio SaaS](../connectors/illumiosaasdataconnector.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (6)

**In solution [IllumioSaaS](../solutions/illumiosaas.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Illumio Enforcement Change Analytic Rule](../content/illumiosaas-illumio-enforcement-change-analytic-rule-599fdc92-eb6d-4b54-8d79-2a3f740a846a-d2fd3adb.md) |  |
| [Illumio Firewall Tampering Analytic Rule](../content/illumiosaas-illumio-firewall-tampering-analytic-rule-e9e4e466-3970-4165-bc8d-7721c6ef34a6-c6814f6c.md) |  |
| [Illumio VEN Clone Detection Rule](../content/illumiosaas-illumio-ven-clone-detection-rule-b3c4b8f4-c12c-471e-9999-023c05852276-5f6d9aa6.md) |  |
| [Illumio VEN Deactivated Detection Rule](../content/illumiosaas-illumio-ven-deactivated-detection-rule-c18bd8c2-50f0-4aa2-8122-d449243627d7-09d7c76f.md) |  |
| [Illumio VEN Offline Detection Rule](../content/illumiosaas-illumio-ven-offline-detection-rule-ec07fcd3-724f-426d-9f53-041801ca5f6c-43578bfc.md) |  |
| [Illumio VEN Suspend Detection Rule](../content/illumiosaas-illumio-ven-suspend-detection-rule-7379f752-18a2-43ca-8b74-70747dd792f8-c5108207.md) |  |

### Workbooks (2)

**In solution [IllumioSaaS](../solutions/illumiosaas.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [IllumioAuditableEvents](../content/illumiosaas-illumioauditableevents-7d7e85b3.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (2)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventIllumioSaaSCore](../asim/asimauditeventillumiosaascore.md) | AuditEvent | Illumio Core |  |
| [ASimAuthenticationIllumioSaaSCore](../asim/asimauthenticationillumiosaascore.md) | Authentication | Illumio |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)


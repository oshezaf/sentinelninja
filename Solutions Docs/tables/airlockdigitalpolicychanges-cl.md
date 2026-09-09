# AirlockDigitalPolicyChanges_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/AirlockDigitalPolicyChanges_CL.json)

| Column Name | Type |
|:------------|:-----|
| AllowlistChanges | dynamic |
| BaselineChanges | dynamic |
| BlocklistChanges | dynamic |
| ChangeDescription | string |
| Checkpoint | string |
| ConnectorName | string |
| EventDateTime | string |
| ExtensionChanges | dynamic |
| GrandparentProcessChanges | dynamic |
| HashChanges | dynamic |
| MetaruleChanges | dynamic |
| ParentProcessChanges | dynamic |
| PathChanges | dynamic |
| PolicyGroup | string |
| PolicyId | string |
| PolicyVersion | string |
| PublisherChanges | dynamic |
| SettingsChanges | dynamic |
| TimeGenerated | datetime |
| User | string |
| UserReason | string |
| Uuid | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [AirlockDigital](../solutions/airlockdigital.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Airlock Digital (Push)](../connectors/airlockdigitalpush.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ASimAuditEventAirlockDigitalPolicyChange](../parsers/asimauditeventairlockdigitalpolicychange.md) | [AirlockDigital](../solutions/airlockdigital.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


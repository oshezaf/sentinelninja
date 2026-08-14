# spycloud_compassV2_CL

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

## Schema (28 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/spycloud_compassV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| AVSoftwares | dynamic |
| BreachCategory | string |
| BreachTitle | string |
| CountryCode | string |
| DisplayResolution | string |
| DocumentId | string |
| Domain | string |
| Email | string |
| EmailDomain | string |
| EmailUsername | string |
| InfectedMachineId | string |
| InfectedPath | string |
| InfectedTime | string |
| IPAddresses | dynamic |
| LogId | string |
| Password | string |
| PasswordPlaintext | string |
| PasswordType | string |
| Severity | int |
| SourceId | int |
| SpyCloudPublishDate | string |
| TargetDomain | string |
| TargetSubdomain | string |
| TargetUrl | string |
| TimeGenerated | datetime |
| TimeZone | string |
| UserOS | string |
| UserSysRegisteredOwner | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SpyCloud Enterprise Protection Connector](../connectors/spycloudenterpriseprotectionccf.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [get_spycloud_compass_data](../parsers/get-spycloud-compass-data.md) | [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


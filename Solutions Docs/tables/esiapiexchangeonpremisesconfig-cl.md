# ESIAPIExchangeOnPremisesConfig_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (25 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20On-Premises%5CData%20Connectors%5CESI-ModernExchangeOnPremisesCollector_ccf/ESI-ModernExchangeOnPremisesCollector_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| EntryDate_s | string | Date of the configuration entry |
| ESIEnvironment_s | string | Exchange environment identifier |
| ExecutionResult_s | string | Execution result |
| GenerationInstanceID_g | string | Unique identifier for the generation instance |
| Identity_Depth_d | real | Identity depth in the directory hierarchy |
| Identity_DistinguishedName_s | string | Identity distinguished name (LDAP DN) |
| Identity_DomainId_s | string | Identity domain identifier (serialized when object) |
| Identity_IsDeleted_b | bool | Indicates whether the identity is deleted |
| Identity_IsRelativeDn_b | bool | Indicates whether the DN is relative |
| Identity_Name_s | string | Identity name |
| Identity_ObjectGuid_g | string | Identity object GUID |
| Identity_Parent_s | string | Identity parent (serialized when object) |
| Identity_PartitionFQDN_s | string | Identity partition FQDN |
| Identity_PartitionGuid_g | string | Identity partition GUID |
| Identity_Rdn_s | string | Identity relative distinguished name (RDN, serialized when object) |
| Identity_s | string | Identity |
| IdentityString_s | string | Identity string |
| Name_s | string | Name |
| ProcessedByServer_s | string | Processed by server |
| PSCmdL_s | string | PowerShell cmdlet |
| RawData_s | string | Raw configuration data in JSON format |
| Section_s | string | Configuration section name |
| TimeGenerated | datetime | The timestamp when the log was generated |
| WhenChanged_t | datetime | When changed timestamp |
| WhenCreated_t | datetime | When created timestamp |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (2)

This table is used by the following solutions:

- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Exchange Security Insights On-Premises Collector (Azure Monitor)](../connectors/esi-modernexchangeonpremisescollector.md) |  |

---

## Content Items Using This Table (3)

### Workbooks (3)

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft Exchange Least Privilege with RBAC](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-least-privilege-with-rbac-b2849cd8.md) |  |
| [Microsoft Exchange Security Review](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-security-review-435fb5ce.md) |  |

**In solution [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft Exchange Security Review - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-security-review-online-bf15f919.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MESCompareDataMRA](../parsers/mescomparedatamra.md) | [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) |  |
| [MESCompareDataOnPMRA](../parsers/mescomparedataonpmra.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


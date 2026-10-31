# OneLoginEventsV2_CL

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

## Schema (53 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/OneLoginEventsV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| AccountId | real |
| ActorSystem | string |
| ActorUserId | real |
| ActorUserName | string |
| AdcId | real |
| AppId | real |
| AppName | string |
| AssumedBySuperadminOrReseller | real |
| AssumingActingUserId | real |
| BrowserFingerprint | string |
| CertificateId | real |
| ClientId | string |
| CustomMessage | string |
| DirectoryId | real |
| DirectorySyncRunId | real |
| ErrorDescription | string |
| EventId | real |
| EventTypeId | real |
| GroupId | real |
| GroupName | string |
| Ipaddr | string |
| LoginId | real |
| LoginName | string |
| MappingId | real |
| Notes | string |
| ObjectId | real |
| OperationName | string |
| OtpDeviceId | real |
| OtpDeviceName | string |
| Param | string |
| PolicyId | real |
| PolicyName | string |
| PolicyType | string |
| PrivilegeId | real |
| PrivilegeName | string |
| ProxyIp | string |
| RadiusConfigId | real |
| Resolution | real |
| ResolvedAt | string |
| ResourceTypeId | real |
| RiskCookieId | string |
| RiskReasons | string |
| RiskScore | real |
| RoleId | real |
| RoleName | string |
| ServiceDirectoryId | real |
| Solved | bool |
| TimeGenerated | datetime |
| TrustedIdpId | real |
| UserFieldId | real |
| UserId | real |
| UserName | string |
| Uuid | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [OneLoginIAM](../solutions/oneloginiam.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) |  |
| [OneLogin IAM Platform (via Codeless Connector Framework)](../connectors/oneloginiamlogsccpdefinition.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [OneLogin](../parsers/onelogin.md) | [OneLoginIAM](../solutions/oneloginiam.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


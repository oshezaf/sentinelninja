# AADServicePrincipalSignInLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADServicePrincipalSignInLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadserviceprincipalsigninlogs) |

## Solutions (6)

This table is used by the following solutions:

- [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)
- [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (7)

### Analytic Rules (2)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen TI IPAddress in IdentityLogonEvents](../content/lumen-defender-threat-feed-lumen-ti-ipaddress-in-identitylogonevents-a7cd18cd-1503-47ec-8dca-65d750540637-db253b1e.md) |  |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Suspicious Service Principal creation activity](../content/microsoft-entra-id-suspicious-service-principal-creation-activity-6852d9da-8015-4b95-8ecf-d9572ee0395d-57b7f81f.md) |  |

### Workbooks (5)

**In solution [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md):** `OperationName in "Add member to role,Add user,AzureFirewallIDSLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"`<br>`OperationName contains "create"`<br>`OperationName contains "delete"`<br>`OperationName contains "lockbox"`<br>`OperationName contains "remove"`<br>`OperationName contains "update"`

| Content Item |
|:-------------|
| [AzureSecurityBenchmark](../content/azuresecuritybenchmark-azuresecuritybenchmark-d011d364.md) |

**In solution [CybersecurityMaturityModelCertification(CMMC)2.0](../solutions/cybersecuritymaturitymodelcertification-cmmc-2.0.md):** `OperationName in "Add member to role,Add user,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "Add"`<br>`OperationName contains "Audit"`<br>`OperationName contains "Change"`<br>`OperationName contains "Create"`<br>`OperationName contains "Delete"`<br>`OperationName contains "Log"`<br>`OperationName contains "Monitor"`<br>`OperationName contains "PIM"`<br>`OperationName contains "Remove"`<br>`OperationName contains "Update"`<br>`OperationName contains "Write"`<br>`OperationName contains "reset"`

| Content Item |
|:-------------|
| [CybersecurityMaturityModelCertification_CMMCV2](../content/cybersecuritymaturitymodelcertification-cmmc-2.0-cybersecuritymaturitymodelcertification-cmmcv2-34fb58b0.md) |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):** `OperationName in "Add member to role,Add user,ApplicationGatewayFirewall,AzureFirewallIDSLog,Reset user password,Update user"`<br>`OperationName !contains "external"`<br>`OperationName !contains "invite"`<br>`OperationName !contains "licnense"`<br>`OperationName contains "group"`<br>`OperationName contains "member"`<br>`OperationName contains "principal"`<br>`OperationName contains "role"`<br>`OperationName contains "user"`

| Content Item |
|:-------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |

**In solution [Microsoft Entra ID](../solutions/microsoft-entra-id.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ConditionalAccessSISM](../content/microsoft-entra-id-conditionalaccesssism-90abe712.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationAADServicePrincipalSignInLogs](../asim/asimauthenticationaadserviceprincipalsigninlogs.md) | Authentication | Microsoft Entra ID |  |

## Selection Criteria Summary (3 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OperationName in "Add member to role,Add user,AzureFirewallIDSLog,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "PIM"`<br>`OperationName contains "create"`<br>`OperationName contains "delete"`<br>`OperationName contains "lockbox"`<br>`OperationName contains "remove"`<br>`OperationName contains "update"` | - | 1 | - | - | **1** |
| `OperationName in "Add member to role,Add user,NetworkSecurityGroupEvents,Reset user password,Update user"`<br>`OperationName contains "Add"`<br>`OperationName contains "Audit"`<br>`OperationName contains "Change"`<br>`OperationName contains "Create"`<br>`OperationName contains "Delete"`<br>`OperationName contains "Log"`<br>`OperationName contains "Monitor"`<br>`OperationName contains "PIM"`<br>`OperationName contains "Remove"`<br>`OperationName contains "Update"`<br>`OperationName contains "Write"`<br>`OperationName contains "reset"` | - | 1 | - | - | **1** |
| `OperationName in "Add member to role,Add user,ApplicationGatewayFirewall,AzureFirewallIDSLog,Reset user password,Update user"`<br>`OperationName !contains "external"`<br>`OperationName !contains "invite"`<br>`OperationName !contains "licnense"`<br>`OperationName contains "group"`<br>`OperationName contains "member"`<br>`OperationName contains "principal"`<br>`OperationName contains "role"`<br>`OperationName contains "user"` | - | 1 | - | - | **1** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### OperationName

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Add member to role` | - | 3 | - | - | **3** |
| `Add user` | - | 3 | - | - | **3** |
| `Reset user password` | - | 3 | - | - | **3** |
| `Update user` | - | 3 | - | - | **3** |
| `AzureFirewallIDSLog` | - | 2 | - | - | **2** |
| `NetworkSecurityGroupEvents` | - | 2 | - | - | **2** |
| `contains PIM` | - | 2 | - | - | **2** |
| `contains create` | - | 1 | - | - | **1** |
| `contains delete` | - | 1 | - | - | **1** |
| `contains lockbox` | - | 1 | - | - | **1** |
| `contains remove` | - | 1 | - | - | **1** |
| `contains update` | - | 1 | - | - | **1** |
| `contains Add` | - | 1 | - | - | **1** |
| `contains Audit` | - | 1 | - | - | **1** |
| `contains Change` | - | 1 | - | - | **1** |
| `contains Create` | - | 1 | - | - | **1** |
| `contains Delete` | - | 1 | - | - | **1** |
| `contains Log` | - | 1 | - | - | **1** |
| `contains Monitor` | - | 1 | - | - | **1** |
| `contains Remove` | - | 1 | - | - | **1** |
| `contains Update` | - | 1 | - | - | **1** |
| `contains Write` | - | 1 | - | - | **1** |
| `contains reset` | - | 1 | - | - | **1** |
| `ApplicationGatewayFirewall` | - | 1 | - | - | **1** |
| `!contains external` | - | 1 | - | - | **1** |
| `!contains invite` | - | 1 | - | - | **1** |
| `!contains licnense` | - | 1 | - | - | **1** |
| `contains group` | - | 1 | - | - | **1** |
| `contains member` | - | 1 | - | - | **1** |
| `contains principal` | - | 1 | - | - | **1** |
| `contains role` | - | 1 | - | - | **1** |
| `contains user` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# DragonCopilot

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DragonCopilot table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dragoncopilot) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (39 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dragoncopilot)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccessMethod | string | How the resource was accessed (Access records). |
| ArtifactType | string | Artifact category (ClinicalData / Session records). |
| AuthenticationMethod | string | How the caller authenticated (Access records). |
| ClientIP | string | Source client IP address. |
| DeniedPolicy | string | Policy that denied access, if applicable (Access records). |
| DisconnectReason | string | Reason a session ended (Session records). |
| EhrType | string | EHR system type when HostType=Ehr (Access records). |
| EnvironmentId | string | Dragon Copilot environment GUID. |
| ErrorType | string | Classification of any failure (Access records). |
| FeedbackType | string | User feedback category (ClinicalData records). |
| GenerationSource | string | Source of generated content (ClinicalData records). |
| HostType | string | Desktop / Ehr / Mobile / Web (Access records). |
| Id | string | Audit record GUID. |
| IntentType | string | Intent category (ClinicalData records). |
| Issuer | string | Token issuer (Access records). |
| ModifiedProperties | string | Array of {Name, OldValue, NewValue} for changed attributes (Admin update operations). |
| ObjectId | string | Object identifier (resource GUID). |
| Operation | string | Operation name. |
| OrganizationId | string | Tenant (organization) GUID. |
| PreviousValue | string | Previous value when an attribute changed (Access / Session records). |
| ProductType | string | Physician / Nursing / Radiology (Admin records, product-scoped operations). |
| PromptType | string | Prompt category (ClinicalData records). |
| RecordType | int | 454=Admin, 468=Access, 469=ClinicalData, 470=Session. |
| RecordTypeName | string | Friendly name for RecordType. |
| ResultStatus | string | Succeeded / Failed / PartiallySucceeded. |
| SessionType | string | Session classification (Access records). |
| SofState | string | SMART-on-FHIR state (Access records). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time the record was generated. |
| Type | string | The name of the table |
| UpdateAction | string | Update action performed (ClinicalData records). |
| UserAgent | string | HTTP User-Agent string (Access records). |
| UserId | string | UPN or identifier of the user. |
| UserKey | string | Microsoft Entra Object ID (raw GUID). |
| UserType | int | 0=Regular, 2=Admin, 4=System, 5=Application, 6=ServicePrincipal, 10=Guest. |
| Workload | string | Workload name (always DragonCopilot). |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [DragonCopilot Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dragoncopilot)

## Solutions (1)

This table is used by the following solutions:

- [DragonCopilot](../solutions/dragoncopilot.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dragon Copilot](../connectors/dragoncopilotnative.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# ContraForceEvents_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (13 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContraForce%5CData%20Connectors%5CContraForceEvents_ccp/ContraForceEvents_tables.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActivityAction | string | The activity action name, e.g. Update. |
| ActivityType | string | The activity type name, e.g. WorkspaceRoleChanged. |
| ActorEmail | string | The email of the actor, when recorded. |
| ActorId | string | The id of the user or agent that performed the activity. |
| ActorName | string | The display name of the actor, when recorded. |
| CfWorkspaceId | string | The ContraForce workspace the event belongs to. |
| Discriminator | string | The audit domain, e.g. WorkspaceManagement or IncidentInvestigation. |
| EventId | string | The audit entry's unique id. |
| Metadata | string | Activity-specific metadata as a JSON string including its $type discriminator; parse with parse_json in queries. |
| TargetResourceId | string | The id of the resource the activity targeted. |
| TargetResourceName | string | The human-readable name of the target resource, when recorded. |
| TargetResourceType | string | The type of the resource the activity targeted, e.g. Incident or User. |
| TimeGenerated | datetime | When the audited activity happened (UTC). |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ContraForce](../solutions/contraforce.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ContraForce Events](../connectors/contraforceevents.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [ContraForce](../solutions/contraforce.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [ContraForce - Destructive workspace action](../content/contraforce-contraforce-destructive-workspace-action-c5e9a1d7-4b2f-4e6c-8a9d-7f3b1c5e2a84-fe7a9bff.md) |  |
| [ContraForce - Machine credential activity](../content/contraforce-contraforce-machine-credential-activity-8a2c6e94-1b5d-4f7a-b3e8-2c9d4f6a1e52-dd3f34e0.md) |  |
| [ContraForce - Privileged access change](../content/contraforce-contraforce-privileged-access-change-3f4bd2a1-7c58-4a83-9c2e-6d1f0a8b5c31-aef16169.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


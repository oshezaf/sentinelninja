# PulumiAuditLogs_CL

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

## Schema (15 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs%5CData%20Connectors%5CPulumiAuditLogs_CCF/PulumiAuditLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActorName_s | string | Display name of a non-human actor (e.g., deploy token). |
| ActorUrn_s | string | Pulumi URN of a non-human actor. |
| AuthFailure_b | bool | Whether the event represents a failed authentication attempt. |
| Description_s | string | Human-readable description of the event. |
| Event_s | string | Audit log event type identifier (e.g., stack-created, member-added). |
| RequireOrgAdmin_b | bool | Whether the action required organization admin privileges. |
| RequireStackAdmin_b | bool | Whether the action required stack admin privileges. |
| SourceIP_s | string | IP address of the client that triggered the event. |
| TimeGenerated | datetime | The timestamp (UTC) when the audit log event occurred. |
| Timestamp_d | long | Original Unix epoch seconds of the event. |
| TokenID_s | string | ID of the access token used, if applicable. |
| TokenName_s | string | Name of the access token used, if applicable. |
| UserAvatarUrl_s | string | Avatar URL of the user who performed the action. |
| UserLogin_s | string | GitHub login of the user who performed the action. |
| UserName_s | string | Display name of the user who performed the action. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Pulumi Cloud Audit Logs](../connectors/pulumiauditlogsdefinition.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Pulumi Cloud - Excessive authentication failures](../content/pulumicloudauditlogs-pulumi-cloud-excessive-authentication-failures-0199390c-e96d-4119-b25c-83257f3c4738-ebb80d97.md) |  |
| [Pulumi Cloud - Organization membership change](../content/pulumicloudauditlogs-pulumi-cloud-organization-membership-change-b5e805a7-a6b5-4af5-9a23-a5ea92b744f5-924bdf41.md) |  |
| [Pulumi Cloud - Stack deleted](../content/pulumicloudauditlogs-pulumi-cloud-stack-deleted-bc489413-747f-41c7-bfe7-0ab66ded788e-9778b4fe.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


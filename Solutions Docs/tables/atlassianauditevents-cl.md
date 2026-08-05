# AtlassianAuditEvents_CL

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

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianOrganizationAudit%5CData%20Connectors%5CAtlassianOrganizationAuditConnector_CCF/table_AtlassianAuditEvents.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | Event action type - primary field for threat detection (e.g., user.access.granted, user.authentication.failed, policy.updated, api.token.created) |
| ActorEmail | string | Primary identity - email of user who performed the action |
| ActorId | string | Actor unique identifier for correlation across events |
| ActorName | string | Human-readable actor name for investigation |
| AppId | string | Third-party app monitoring - detects unauthorized app usage or OAuth token compromise |
| AuthTokenLabel | string | Token/app identification - critical for detecting compromised API keys or unauthorized integrations |
| AuthType | string | Authentication method - api-token, container-token, connect-token, OAuth (detects token vs interactive login) |
| CityName | string | City-level tracking - location-based alerting, regional access patterns |
| Container | dynamic | Scope context - organization, site, product where action occurred (multi-tenant environments) |
| Context | dynamic | Target identification - users, groups, policies affected by action (enables detailed investigation) |
| CountryName | string | Geo-analysis - impossible travel detection, geographic anomalies, country-based alerting |
| EventId | string | Unique identifier for the audit event - used for deduplication and correlation |
| EventMessage | string | Human-readable security event description for investigation |
| EventUrl | string | Investigation link - direct access to full event details in Atlassian API |
| OnBehalfOfEmail | string | Delegation detection - identifies impersonation or privilege escalation scenarios |
| ProcessedAt | datetime | Event processing timestamp - latency monitoring, detects API delays or event manipulation |
| SrcIpAddr | string | Network origin - suspicious IP detection, IP allowlist validation, impossible travel |
| TimeGenerated | datetime |  |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [AtlassianOrganizationAudit](../solutions/atlassianorganizationaudit.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Atlassian Organization Audit Events (via Codeless Connector Framework)](../connectors/atlassianauditeventsconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


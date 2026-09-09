# DatadogSecurityLogs_CL

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

## Schema (67 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datadog%5CData%20Connectors%5CDatadogConnector/table_DatadogSecurityLogs.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Attributes | dynamic | Full attributes object of the Datadog security signal |
| CloudEntities | dynamic | Cloud entities associated with the security signal |
| Datasets | dynamic | Datasets used to generate the security signal |
| DetectionMethod | string | Detection method used by the rule |
| DiscoveryTimestamp | datetime | Timestamp when Datadog discovered the security signal |
| Entities | dynamic | Entities associated with the security signal |
| EventId | string | Unique identifier of the Datadog security signal |
| EventName | dynamic | Event names represented in the security signal |
| EventsMatched | long | Number of events matched by the detection rule |
| EventSource | dynamic | Event sources represented in the security signal |
| EventTimestamp | string | Timestamp reported by Datadog for the security signal |
| EventTrackerId | string | Datadog event tracker identifier |
| EventType | string | Resource type of the event (always 'signal') |
| GroupByValuesHash | string | Hash of the values used to group the security signal |
| Host | string | Host associated with the security signal |
| HttpDetails | dynamic | HTTP details associated with the security signal |
| IngestSizeInBytes | long | Size of the ingested security signal in bytes |
| Message | string | Security signal message |
| NetworkDetails | dynamic | Network details associated with the security signal |
| Ocsf | dynamic | Open Cybersecurity Schema Framework data |
| OcsfActorUserId | dynamic | Actor user identifiers identified by OCSF |
| OcsfCategory | dynamic | OCSF event categories represented in the signal |
| OcsfClass | dynamic | OCSF event classes represented in the signal |
| OcsfCloudProvider | string | Cloud provider identified by OCSF |
| OcsfCloudRegion | dynamic | Cloud regions identified by OCSF |
| OcsfEntities | dynamic | OCSF-normalized entities associated with the security signal |
| OcsfSeverity | dynamic | OCSF severity values represented in the signal |
| OcsfSourceIp | dynamic | Source IP addresses identified by OCSF |
| OcsfStatus | dynamic | OCSF status values represented in the signal |
| Queries | dynamic | Queries evaluated for the security signal |
| ReducerSignalId | string | Identifier of the reduced security signal |
| RelatedQuery | dynamic | Query associated with the security signal |
| RuleId | string | Identifier of the detection rule |
| RuleName | string | Name of the detection rule |
| RuleType | string | Type of the detection rule |
| Samples | dynamic | Sample events associated with the security signal |
| Service | dynamic | Services associated with the security signal |
| Severity | long | Numeric severity of the security signal |
| SignalCasesHistory | dynamic | History of rule cases associated with the signal |
| SignalDetails | dynamic | Detection and workflow details associated with the security signal |
| SignalId | string | Datadog identifier stored in the signal attributes |
| SignalTitle | string | Title of the security signal |
| SignalVersion | long | Version of the Datadog security signal |
| Source | string | Source that produced the security signal |
| SourceFragmentId | string | Identifier of the source fragment |
| Status | string | Severity status of the security signal |
| TagDetails | dynamic | Structured tag values associated with the security signal |
| Tags | dynamic | Tags associated with the security signal |
| TimeGenerated | datetime |  |
| TriggerCaseName | string | Name of the rule case that triggered the signal |
| TriggerCaseStatus | string | Status of the rule case that triggered the signal |
| TriggerCondition | string | Condition that triggered the rule case |
| TriggeringLogId | string | Identifier of the log that triggered the security signal |
| TriggeringLogTimestamp | datetime | Timestamp of the log that triggered the security signal |
| TriggeringRuleCase | dynamic | Triggering rule case details |
| UserDetails | dynamic | Normalized user details associated with the signal |
| UserId | dynamic | User identifiers associated with the signal |
| UserIdentity | dynamic | Source identity details associated with the signal |
| UserIdentityAccessKeyId | dynamic | AWS access key identifiers associated with the source identity |
| UserIdentityAccountId | dynamic | AWS account identifiers associated with the source identity |
| UserIdentityArn | dynamic | AWS ARNs associated with the source identity |
| UserIdentityType | string | Type of source identity associated with the signal |
| UserName | dynamic | User names associated with the signal |
| Workflow | dynamic | Detection workflow and triage details |
| WorkflowFirstSeen | datetime | Timestamp when the matching activity was first seen |
| WorkflowLastSeen | datetime | Timestamp when the matching activity was last seen |
| WorkflowState | string | Current triage state of the security signal |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Datadog](../solutions/datadog.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Datadog Logs (via Codeless Connector Framework)](../connectors/datadogconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


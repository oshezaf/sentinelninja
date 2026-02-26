# ACSCallSurvey

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSCallSurvey table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallsurvey) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallsurvey)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AudioIssues | string | Comma separated audio issues reported by the participant. |
| AudioRatingScore | int | Audio experience rated by the participant. |
| AudioRatingScoreLowerBound | int | Minimum value of the AudioRatingScore scale. |
| AudioRatingScoreThreshold | int | The AudioRatingScore greater than this value indicates better quality. |
| AudioRatingScoreUpperBound | int | Maximum value of the AudioRatingScore scale. |
| CallId | string | The identifier of the call used to correlate. Can be used to identify correlated events between multiple tables. |
| CorrelationId | string | The ID for correlated events. This field contains the participant ID that allows call survey to be correlated with other calling logs. |
| OperationName | string | The operation associated with log record. |
| OperationVersion | string | The API-version associated with the operation or version of the operation (if there is no API version). |
| OverallCallIssues | string | Comma separated overall issues reported by the participant. |
| OverallRatingScore | int | Overall call experience rated by the participant. |
| OverallRatingScoreLowerBound | int | Minimum value of the OverallRatingScore scale. |
| OverallRatingScoreThreshold | int | The OverallRatingScore greater than this value indicates better quality. |
| OverallRatingScoreUpperBound | int | Maximum value of the OverallRatingScore scale. |
| ParticipantId | string | ID of the participant. |
| ScreenshareIssues | string | Comma separated screenshare issues reported by the participant. |
| ScreenshareRatingScore | int | Screenshare experience rated by the participant. |
| ScreenshareRatingScoreLowerBound | int | Minimum value of the ScreenshareRatingScore scale. |
| ScreenshareRatingScoreThreshold | int | The ScreenshareRatingScore greater than this value indicates better quality. |
| ScreenshareRatingScoreUpperBound | int | Maximum value of the ScreenshareRatingScore scale. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SurveyId | string | The ID of the survey uniquely identifies the call survey. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| VideoIssues | string | Comma separated video issues reported by the participant. |
| VideoRatingScore | int | Video experience rated by the participant. |
| VideoRatingScoreLowerBound | int | Minimum value of the VideoRatingScore scale. |
| VideoRatingScoreThreshold | int | The VideoRatingScore greater than this value indicates better quality. |
| VideoRatingScoreUpperBound | int | Maximum value of the VideoRatingScore scale. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


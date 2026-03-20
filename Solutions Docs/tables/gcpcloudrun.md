# GCPCloudRun

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPCloudRun table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcloudrun) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (91 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpcloudrun)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| GCPResourceType | string | The type of GCP resource (e.g., 'CloudRunService', 'CloudRunJob'). |
| InsertId | string | Unique identifier for the log entry. |
| JsonPayloadMessage | string | The message field extracted from the jsonPayload. |
| JsonPayloadRequest | string | The request field extracted from the jsonPayload. |
| Labels | string | Generic labels associated with the log entry. |
| LogName | string | The name of the log from which the entry originated. |
| PayloadAuthenticationInfoPrincipalSubject | string | The subject identifier of the authenticated principal. |
| PayloadAuthenticationInfoServiceAccountKeyName | string | The name of the service account key used for authentication. |
| PayloadAuthInfoPrincipalEmail | string | The email address of the principal (user or service account) that initiated the action. |
| PayloadAuthorizationInfo | dynamic | Detailed authorization information for the logged action, represented as a Dynamic (JSON) object. |
| PayloadMethodName | string | The name of the API method that was invoked. |
| PayloadRequestBuildpackBuildBaseImage | string | The base image used by the buildpack for the build process. |
| PayloadRequestBuildpackBuildEnableAutomaticUpdates | string | Indicates whether automatic updates are enabled for the buildpack build. |
| PayloadRequestDomainMappingApiVersion | string | The API version of the Cloud Run domain mapping in the request. |
| PayloadRequestDomainMappingKind | string | The 'kind' of the Cloud Run domain mapping (e.g., 'DomainMapping'). |
| PayloadRequestDomainMappingMetadataAnnotations | string | Annotations associated with the Cloud Run domain mapping's request metadata. |
| PayloadRequestDomainMappingMetadataName | string | The name of the Cloud Run domain mapping within the request metadata. |
| PayloadRequestDomainMappingMetadataNameSpace | string | The namespace of the Cloud Run domain mapping within the request metadata. |
| PayloadRequestDomainMappingSpec | string | The specification details of the Cloud Run domain mapping in the request. |
| PayloadRequestDomainMappingStatus | string | The status of the Cloud Run domain mapping in the request. |
| PayloadRequestImageUri | string | The URI of the container image used for the Cloud Run service. |
| PayloadRequestJobApiVersion | string | The API version of the Cloud Run job in the request. |
| PayloadRequestJobKind | string | The 'kind' of the Cloud Run job (e.g., 'Job'). |
| PayloadRequestJobMetadataAnnotations | string | Annotations associated with the Cloud Run job's request metadata. |
| PayloadRequestJobMetadataName | string | The name of the Cloud Run job within the request metadata. |
| PayloadRequestJobMetadataNameSpace | string | The namespace of the Cloud Run job within the request metadata. |
| PayloadRequestJobSpec | string | The specification details of the Cloud Run job in the request. |
| PayloadRequestLabelSelector | string | The label selector used in the request, typically for filtering resources. |
| PayloadrequestMetadataCallerIp | string | The IP address of the client that made the request. |
| PayloadrequestMetadatacallerSuppliedUserAgent | string | The user agent String provided by the caller. |
| PayloadrequestMetadataDestinationAttributes | string | Attributes related to the destination of the request. |
| PayloadrequestMetadatarequestAttributesAuth | string | Authentication attributes embedded within the request. |
| PayloadRequestMetadataRequestAttributesReason | string | The reason specified in the request attributes metadata. |
| PayloadrequestMetadatarequestAttributesTime | datetime | The timestamp associated with the request attributes. |
| PayloadRequestName | string | The name of the specific request. |
| PayloadRequestOptionsRequestedPolicyVersion | string | The requested policy version within the request options. |
| PayloadRequestParent | string | The parent resource of the request. |
| PayloadRequestRegion | string | The GCP region where the request originated or was processed. |
| PayloadRequestResource | string | The resource specified in the request. |
| PayloadRequestServiceApiVersion | string | The API version of the Cloud Run service in the request. |
| PayloadRequestServiceKind | string | The 'kind' of the Cloud Run service (e.g., 'Service'). |
| PayloadRequestServiceLatestRevision | string | The name of the latest revision for the Cloud Run service in the request status. |
| PayloadRequestServiceMetadataAnnotations | string | Annotations associated with the Cloud Run service's request metadata. |
| PayloadRequestServiceMetadataCreationTimestamp | string | The timestamp when the Cloud Run service in the request metadata was created. |
| PayloadRequestServiceMetadataGeneration | string | The generation number of the Cloud Run service in the request metadata. |
| PayloadRequestServiceMetadatalabels | string | Labels from the Cloud Run service metadata within the request. |
| PayloadRequestServiceMetadataName | string | The name of the Cloud Run service within the request metadata. |
| PayloadRequestServiceMetadataNameSpace | string | The namespace of the Cloud Run service within the request metadata. |
| PayloadRequestServiceMetadataResourceVersion | string | The resource version of the Cloud Run service in the request metadata. |
| PayloadRequestServiceMetadataSelfLink | string | The self-link URL for the Cloud Run service in the request metadata. |
| PayloadRequestServiceMetadataUID | string | The unique identifier (UID) of the Cloud Run service in the request metadata. |
| PayloadRequestServiceObservedGeneration | string | The observed generation of the Cloud Run service in the request status. |
| PayloadRequestServiceReadyRevision | string | The name of the ready revision for the Cloud Run service in the request status. |
| PayloadRequestServiceServiceURL | string | The URL of the Cloud Run service in the request status. |
| PayloadRequestServiceSpec | string | The specification details of the Cloud Run service in the request. |
| PayloadRequestServiceStatusConditions | string | Conditions indicating the current state of the Cloud Run service in the request status. |
| PayloadRequestServiceTraffic | string | Traffic distribution settings for the Cloud Run service in the request status. |
| PayloadRequestStorageSourceGeneration | string | The generation of the storage source used in the request. |
| PayloadRequestType | string | The type of request made to the Cloud Run service. |
| PayloadResourceLocationCurrentLocations | string | Current location(s) of the resource involved in the log entry. |
| PayloadResourceName | string | The name of the GCP resource relevant to the log entry. |
| PayloadResponseApiVersion | string | The API version of the response from the Cloud Run service. |
| PayloadResponseKind | string | The 'kind' of resource returned in the response (e.g., 'Service'). |
| PayloadResponseMetadataAnnotations | string | Annotations associated with the response metadata, typically key-value pairs. |
| PayloadResponseMetadataCreationTimestamp | string | The timestamp when the resource in the response metadata was created. |
| PayloadResponseMetadataGeneration | string | The generation number of the resource in the response metadata. |
| PayloadResponseMetadataName | string | The name of the resource within the response metadata. |
| PayloadResponseMetadataResourceVersion | string | The resource version of the resource in the response metadata, indicating its state. |
| PayloadResponseMetadataSelfLink | string | The self-link URL for the resource in the response metadata. |
| PayloadResponseMetadataUID | string | The unique identifier (UID) of the resource in the response metadata. |
| PayloadResponseNameSpace | string | The namespace of the resource within the response. |
| PayloadResponseServiceMetadatalabels | string | Labels from the service metadata within the response. |
| PayloadResponseSpec | string | The specification details of the resource in the response. |
| PayloadResponseStatus | string | The status of the operation or resource in the response. |
| PayloadResponseType | string | The type of response received from the Cloud Run service. |
| PayloadServiceName | string | The name of the GCP service involved in the log entry. |
| PayloadType | string | The type of payload contained within the log entry. |
| ReceiveTimestamp | datetime | The timestamp when the log entry was received by Log Analytics. |
| ResourceLabelsConfigurationName | string | The name of the associated Cloud Run configuration. |
| ResourceLabelsJobName | string | The name of the associated Cloud Run job. |
| ResourceLabelslocation | string | The GCP location of the Cloud Run resource. |
| ResourceLabelsProjectId | string | The GCP project ID where the Cloud Run resource resides. |
| ResourceLabelsRevisionName | string | The name of the associated Cloud Run revision. |
| ResourceLabelsServiceName | string | The name of the associated Cloud Run service. |
| Severity | string | The severity level of the log entry (e.g., INFO, WARNING, ERROR). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the log entry was originally generated in GCP. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Cloud Run](../solutions/google-cloud-platform-cloud-run.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GCP Cloud Run (via Codeless Connector Framework)](../connectors/gcpcloudrunlogs-connectordefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# SailPointIDN_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (66 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SailPointIDN_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| action_s | string |
| actor_name_g | string |
| actor_name_s | string |
| attributes_accessItemId_g | string |
| attributes_accessItemName_s | string |
| attributes_accessItemType_s | string |
| attributes_accessProfileIds_after_s | string |
| attributes_accessProfileIds_before_s | string |
| attributes_accountActivityId_g | string |
| attributes_accountName_s | string |
| attributes_appId_g | string |
| attributes_approvalSchemes_after_s | string |
| attributes_approvalSchemes_before_s | string |
| attributes_attributeName_s | string |
| attributes_attributeValue_s | string |
| attributes_cloudAppName_s | string |
| attributes_comment_s | string |
| attributes_comments_s | string |
| attributes_disabled_after_s | string |
| attributes_disabled_before_s | string |
| attributes_displayName_after_s | string |
| attributes_displayName_before_s | string |
| attributes_errors_s | string |
| attributes_flow_s | string |
| attributes_hostName_s | string |
| attributes_IdnAccessRequestAttributes_s | string |
| attributes_info_g | string |
| attributes_info_s | string |
| attributes_interface_s | string |
| attributes_operation_s | string |
| attributes_org_s | string |
| attributes_pod_s | string |
| attributes_preventativeSODResultsJSON_s | string |
| attributes_previousValue_s | string |
| attributes_provisioningResult_s | string |
| attributes_requestable_after_s | string |
| attributes_requestable_before_s | string |
| attributes_requestedAppId_s | string |
| attributes_requestedAppName_s | string |
| attributes_requestedAppRoleId_g | string |
| attributes_requestedObjectType_s | string |
| attributes_reviewerComment_s | string |
| attributes_sourceId_s | string |
| attributes_sourceName_s | string |
| attributes_synchronizeFrom_s | string |
| attributes_synchronizeTo_s | string |
| attributes_taskResultId_g | string |
| attributes_userId_s | string |
| created_t | datetime |
| details_g | string |
| details_s | string |
| id_g | string |
| name_s | string |
| objects_s | string |
| operation_s | string |
| org_s | string |
| pod_s | string |
| stack_s | string |
| status_s | string |
| synced_t | datetime |
| target_name_g | string |
| target_name_s | string |
| technicalName_s | string |
| TimeGenerated | datetime |
| trackingNumber_g | string |
| type_s | string |

## Solutions (1)

This table is used by the following solutions:

- [SailPointIdentityNow](../solutions/sailpointidentitynow.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SailPoint IdentityNow](../connectors/sailpointidentitynow.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (5)

**In solution [SailPointIdentityNow](../solutions/sailpointidentitynow.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SailPointIdentityNowEventType](../content/sailpointidentitynow-sailpointidentitynoweventtype-48bb92e2-bad4-4fd4-9684-26cb188299b7-bbc83429.md) |  |
| [SailPointIdentityNowEventTypeTechnicalName](../content/sailpointidentitynow-sailpointidentitynoweventtypetechnicalname-2151e8ea-4838-4c74-be12-4d6a950dde7a-679f873f.md) |  |
| [SailPointIdentityNowFailedEvents](../content/sailpointidentitynow-sailpointidentitynowfailedevents-c3835197-fd07-447e-a0ac-7540d51a1f64-dc29bee3.md) |  |
| [SailPointIdentityNowFailedEventsBasedOnTime](../content/sailpointidentitynow-sailpointidentitynowfailedeventsbasedontime-175b79ef-0fc3-4b27-b92a-89b2db6c85c2-086ffffa.md) |  |
| [SailPointIdentityNowUserWithFailedEvent](../content/sailpointidentitynow-sailpointidentitynowuserwithfailedevent-2a215222-bfc5-4858-a530-6d4088ebfa15-2928054a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


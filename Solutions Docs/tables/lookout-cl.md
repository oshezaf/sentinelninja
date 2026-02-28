# Lookout_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (35 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Lookout_CL.json)

| Column Name | Type |
|:------------|:-----|
| actor_id_g | string |
| actor_type_s | string |
| changeType_s | string |
| details_action_s | string |
| details_activationStatus_s | string |
| details_applicationName_s | string |
| details_assessments_s | dynamic |
| details_attributeChanges_s | dynamic |
| details_classifications_s | dynamic |
| details_description_s | string |
| details_fileName_s | string |
| details_id_g | string |
| details_packageName_s | string |
| details_packageSha_s | string |
| details_path_s | string |
| details_pcpDeviceResponse_s | string |
| details_pcpReportingReason_s | string |
| details_protectionStatus_s | string |
| details_securityStatus_s | string |
| details_severity_s | string |
| details_type_s | string |
| eventTime_t | datetime |
| id_s | string |
| SourceSystem | string |
| target_emailAddress_s | string |
| target_id_g | string |
| target_manufacturer_s | string |
| target_model_s | string |
| target_osVersion_s | string |
| target_platform_s | string |
| target_type_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| type_s | string |
| updatedDetails_s | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Lookout](../solutions/lookout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] Lookout](../connectors/lookoutapi.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Lookout](../solutions/lookout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lookout - New Threat events found.](../content/lookout-lookout-new-threat-events-found.-7593cc60-e294-402d-9202-279fb3c7d55f-4c60e079.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


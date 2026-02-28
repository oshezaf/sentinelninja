# FncEventsObservation_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (55 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/FncEventsObservation_CL.json)

| Column Name | Type |
|:------------|:-----|
| Category | string |
| class_s | string |
| confidence_s | string |
| context_s | string |
| customer_id_s | string |
| description_s | string |
| dst_ip_enrichments_annotations_applications_s | string |
| dst_ip_enrichments_annotations_environments_s | string |
| dst_ip_enrichments_annotations_locations_s | string |
| dst_ip_enrichments_annotations_owners_s | string |
| dst_ip_enrichments_annotations_roles_s | string |
| dst_ip_enrichments_annotations_tags_s | string |
| dst_ip_enrichments_asn_asn_d | int |
| dst_ip_enrichments_asn_asn_org_s | string |
| dst_ip_enrichments_asn_isp_s | string |
| dst_ip_enrichments_asn_org_s | string |
| dst_ip_enrichments_geo_city_s | string |
| dst_ip_enrichments_geo_country_s | string |
| dst_ip_enrichments_geo_location_lat_d | real |
| dst_ip_enrichments_geo_location_lon_d | real |
| dst_ip_enrichments_geo_subdivision_s | string |
| dst_ip_enrichments_internal_b | bool |
| dst_ip_s | string |
| event_type_s | string |
| evidence_end_timestamp_t | datetime |
| evidence_iql_s | string |
| evidence_start_timestamp_t | datetime |
| geo_distance_d | real |
| intel_s | string |
| observation_uuid_g | string |
| sensor_id_s | string |
| sensor_ids_s | string |
| source_s | string |
| src_ip_enrichments_annotations_applications_s | string |
| src_ip_enrichments_annotations_environments_s | string |
| src_ip_enrichments_annotations_locations_s | string |
| src_ip_enrichments_annotations_owners_s | string |
| src_ip_enrichments_annotations_roles_s | string |
| src_ip_enrichments_annotations_tags_s | string |
| src_ip_enrichments_asn_asn_d | int |
| src_ip_enrichments_asn_asn_org_s | string |
| src_ip_enrichments_asn_isp_s | string |
| src_ip_enrichments_asn_org_s | string |
| src_ip_enrichments_geo_city_s | string |
| src_ip_enrichments_geo_country_s | string |
| src_ip_enrichments_geo_location_lat_d | real |
| src_ip_enrichments_geo_location_lon_d | real |
| src_ip_enrichments_geo_subdivision_s | string |
| src_ip_enrichments_internal_b | bool |
| src_ip_s | string |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| title_s | string |
| Type | string |
| uuid_g | string |

## Solutions (1)

This table is used by the following solutions:

- [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Fortinet FortiNDR Cloud](../connectors/fortinetfortindrclouddataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [FortinetFortiNdrCloudWorkbook](../content/fortinet-fortindr-cloud-fortinetfortindrcloudworkbook-9c938d85.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Fortinet_FortiNDR_Cloud](../parsers/fortinet-fortindr-cloud.md) | [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# FncEventsSuricata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (81 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/FncEventsSuricata_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_category_s | string |
| alert_rev_d | int |
| alert_severity_d | int |
| alert_signature_id_d | int |
| alert_signature_s | string |
| customer_id_s | string |
| dest_ip_s | string |
| dest_port_d | real |
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
| event_type_s | string |
| geo_distance_d | real |
| http_hostname_enrichments_domain_enrichments_domain_entropy_d | real |
| http_hostname_enrichments_ip_enrichments_annotations_applications_s | string |
| http_hostname_enrichments_ip_enrichments_annotations_environments_s | string |
| http_hostname_enrichments_ip_enrichments_annotations_locations_s | string |
| http_hostname_enrichments_ip_enrichments_annotations_owners_s | string |
| http_hostname_enrichments_ip_enrichments_annotations_roles_s | string |
| http_hostname_enrichments_ip_enrichments_annotations_tags_s | string |
| http_hostname_enrichments_ip_enrichments_asn_asn_d | int |
| http_hostname_enrichments_ip_enrichments_asn_asn_org_s | string |
| http_hostname_enrichments_ip_enrichments_asn_isp_s | string |
| http_hostname_enrichments_ip_enrichments_asn_org_s | string |
| http_hostname_enrichments_ip_enrichments_geo_city_s | string |
| http_hostname_enrichments_ip_enrichments_geo_country_s | string |
| http_hostname_enrichments_ip_enrichments_geo_location_lat_d | real |
| http_hostname_enrichments_ip_enrichments_geo_location_lon_d | real |
| http_hostname_enrichments_ip_enrichments_geo_subdivision_s | string |
| http_hostname_enrichments_ip_enrichments_internal_b | bool |
| http_hostname_s | string |
| http_http_content_type_s | string |
| http_http_method_s | string |
| http_http_refer_s | string |
| http_http_user_agent_s | string |
| http_length_d | int |
| http_protocol_s | string |
| http_redirect_s | string |
| http_status_d | int |
| http_url_s | string |
| http_xtf_s | string |
| intel_s | string |
| payload_s | string |
| proto_s | string |
| sensor_id_s | string |
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
| src_port_d | real |
| TimeGenerated | datetime |
| timestamp_t | datetime |
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)


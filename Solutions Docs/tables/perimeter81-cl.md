# Perimeter81_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (72 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Perimeter81_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| account_company_s | string |
| account_name_s | string |
| account_tenantId_s | string |
| addressCountry_s | string |
| amount_d | real |
| application_alias_cname_s | string |
| application_endpoint_s | string |
| application_name_s | string |
| application_type_s | string |
| applicationName_s | string |
| Computer | string |
| emails_s | string |
| enabled_b | string |
| error_message_s | string |
| event_eventName_s | string |
| event_eventVersion_s | string |
| event_integrationIdentifier_s | string |
| event_ip_s | string |
| event_originalTenantId_s | string |
| event_releasedBy_email_s | string |
| event_releasedFrom_tenantId_s | string |
| event_tenantId_s | string |
| eventName_s | string |
| eventVersion_s | string |
| geoPoint_accuracy_radius_d | real |
| geoPoint_latitude_d | real |
| geoPoint_longitude_d | real |
| geoPoint_metro_code_d | real |
| geoPoint_time_zone_s | string |
| group_name_s | string |
| idpName_s | string |
| installation_installationId_g | string |
| installation_installationId_s | string |
| integrationIdentifier_s | string |
| integrationName_s | string |
| ip_s | string |
| ManagementGroupName | string |
| MG | string |
| network_dns_s | string |
| network_name_s | string |
| networkName_s | string |
| newPlan_name_s | string |
| newPlan_planWeight_d | string |
| oldPlan_name_s | string |
| oldPlan_planWeight_d | real |
| oldRole_displayName_s | string |
| originalTenantId_s | string |
| paymentInfo_s | string |
| planId_s | string |
| planName_s | string |
| policy_name_s | string |
| RawData | string |
| regions_s | string |
| releasedBy_email_s | string |
| releasedBy_firstName_s | string |
| releasedBy_lastName_s | string |
| releasedBy_roleName_s | string |
| releasedBy_tenantId_s | string |
| releasedFrom_company_s | string |
| releasedFrom_name_s | string |
| releasedFrom_tenantId_s | string |
| role_displayName_s | string |
| SourceSystem | string |
| TenantId |  |
| TimeGenerated | datetime |
| Type | string |
| user_email_s | string |
| user_firstName_s | string |
| user_lastName_s | string |
| user_tenantId_s | string |
| vpnLocation_name_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Perimeter 81](../solutions/perimeter-81.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Perimeter 81 Activity Logs](../connectors/perimeter81activitylogs.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Perimeter 81](../solutions/perimeter-81.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Perimeter81OverviewWorkbook](../content/perimeter-81-perimeter81overviewworkbook-167f2993.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Perimeter81OverviewWorkbook](../content/github-only-perimeter81overviewworkbook-c7882438.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


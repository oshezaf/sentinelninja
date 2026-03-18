# SpyCloudBreachDataWatchlist_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (28 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SpyCloudBreachDataWatchlist.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| Document_Id_g | guid |
| Domain_s | string |
| Email_s | string |
| Infected_Machine_Id | string |
| Infected_Machine_Id_g | guid |
| Infected_Path_s | string |
| Infected_Time_t | datetime |
| IP_Address_s | string |
| ManagementGroupName | string |
| MG | string |
| Password_Plaintext_s | string |
| Password_s | string |
| RawData | string |
| Severity_s | string |
| Source_Id_s | string |
| SourceSystem | string |
| SpyCloud_Publish_Date_t | datetime |
| Target_Domain_s | string |
| Target_SubDomain_s | string |
| Target_URL_s | string |
| TenantID | string |
| TimeGenerated | datetime |
| Type | string |
| User_Hostname_s | string |
| User_OS_s | string |
| Username_s | string |

## Solutions (1)

This table is used by the following solutions:

- [SpyCloud Enterprise Protection](../solutions/spycloud-enterprise-protection.md)

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [SpyCloud Enterprise Protection](../solutions/spycloud-enterprise-protection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [SpyCloud Enterprise Breach Detection](../content/spycloud-enterprise-protection-spycloud-enterprise-breach-detection-cb410ad5-6e9d-4278-b963-1e3af205d680-3a6c6446.md) |  |
| [SpyCloud Enterprise Malware Detection](../content/spycloud-enterprise-protection-spycloud-enterprise-malware-detection-7ba50f9e-2f94-462b-a54b-8642b8c041f5-a8afd941.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# VMware vCenter

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="VMware vCenter Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-29 |
| **Solution Folder** | [VMware vCenter](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20vCenter) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-vcenter) · Popularity: 🟢 High (81%) |
| **Pre-requisites** | [CustomLogsAma](customlogsama.md) |

The [VMware vCenter Server](https://www.vmware.com/products/vcenter-server.html) solution allows you ingest logs from your vCenter platform using Syslog into Microsoft Sentinel.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **1 other solution(s)**:

| Solution |
|:---------|
| [CustomLogsAma](customlogsama.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] VMware vCenter](../connectors/vmwarevcenter.md) ⚠️

Connectors from dependency solutions:

- [Custom logs via AMA](../connectors/customlogsviaama.md) 🔶 *(dependency on [CustomLogsAma](customlogsama.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **16 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Tomcat_CL`](../tables/tomcat-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`ZPA_CL`](../tables/zpa-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`meraki_CL`](../tables/meraki-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`vcenter_CL`](../tables/vcenter-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency), [[Deprecated] VMware vCenter](../connectors/vmwarevcenter.md) | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [VMware vCenter - Root login](../content/vmware-vcenter-vmware-vcenter-root-login-03e8a895-b5ba-49a0-aed3-f9a997d92fbe-e2c012c8.md) | High | InitialAccess, PrivilegeEscalation | [`vcenter_CL`](../tables/vcenter-cl.md) |
| [vCenter - Root impersonation](../content/vmware-vcenter-vcenter-root-impersonation-f1fcb22c-b459-42f2-a7ee-7276b5f1309c-9fa02551.md) | Medium | PrivilegeEscalation | [`vcenter_CL`](../tables/vcenter-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [vCenter](../content/vmware-vcenter-vcenter-167665a0.md) | [`vcenter_CL`](../tables/vcenter-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [vCenter](../parsers/vcenter.md) | - | [`vcenter_CL`](../tables/vcenter-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.5       | 13-06-2025                     | Updating **Parser** to improve data parsing logic and adjusts entity mappings.  |
| 3.0.4       | 03-12-2024                     | Removed Deprecated **Data Connector**.       |
| 3.0.3       | 18-11-2024                     | Modified **Parser** vCenter.yaml for better parsing.                 |
| 3.0.2       | 09-08-2024                     | Deprecating **Data Connectors**.                 |
| 3.0.1       | 27-05-2024                     | Updated the **Data Connector** instructions. | 
| 3.0.0       | 27-07-2023                     | Corrected the links in the solution.         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


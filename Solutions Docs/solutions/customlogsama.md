# Custom Logs AMA

*Solution: CustomLogsAma*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="CustomLogsAma Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-07-21 |
| **Solution Folder** | [CustomLogsAma](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CustomLogsAma) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-customlogsviaama) · Rating: ★★★☆☆ 3.0/5 (1 ratings) · Popularity: 🟢 High (94%) |

Many applications log information to text or JSON files instead of standard logging services, such as Windows Event logs, Syslog or CEF. The Custom Logs solution allows you to collect events from files on both Windows and Linux computers and stream them to custom logs tables you created. While streaming the data you can parse and transform the contents using the DCR. After collecting the data, you can apply analytic rules, hunting, searching, threat intelligence, enrichments and more.

**NOTE: Use this connector for the following devices:** Cisco Meraki, Zscaler Private Access (ZPA), VMware vCenter, Apache HTTP server, Apache Tomcat, Jboss Enterprise application platform, Juniper IDP, MarkLogic Audit, MongoDB Audit, Nginx HTTP server, Oracle Weblogic server, PostgreSQL Events, Squid Proxy, Ubiquiti UniFi, SecurityBridge Threat detection SAP and AI vectra stream.

## Data Connectors

This solution provides **1 data connector(s)**:

- [Custom logs via AMA](../connectors/customlogsviaama.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **16 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`Tomcat_CL`](../tables/tomcat-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`ZPA_CL`](../tables/zpa-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`meraki_CL`](../tables/meraki-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`vcenter_CL`](../tables/vcenter-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                         |
|-------------|--------------------------------|------------------------------------------------------------|
| 3.0.0 	    | 08-08-2024 				        	   | Initial Solution Release                										|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


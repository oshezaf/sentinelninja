# CustomLogsAma

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="CustomLogsAma Logo" width="75" height="75">

Many applications log information to text or JSON files instead of standard logging services, such as Windows Event logs, Syslog or CEF. The Custom Logs solution allows you to collect events from files on both Windows and Linux computers and stream them to custom logs tables you created. While streaming the data you can parse and transform the contents using the DCR. After collecting the data, you can apply analytic rules, hunting, searching, threat intelligence, enrichments and more.

**NOTE: Use this connector for the following devices:** Cisco Meraki, Zscaler Private Access (ZPA), VMware vCenter, Apache HTTP server, Apache Tomcat, Jboss Enterprise application platform, Juniper IDP, MarkLogic Audit, MongoDB Audit, Nginx HTTP server, Oracle Weblogic server, PostgreSQL Events, Squid Proxy, Ubiquiti UniFi, SecurityBridge Threat detection SAP and AI vectra stream.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-07-21 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CustomLogsAma](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CustomLogsAma) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Custom logs via AMA](../connectors/customlogsviaama.md)

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
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`Tomcat_CL`](../tables/tomcat-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`ZPA_CL`](../tables/zpa-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`meraki_CL`](../tables/meraki-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |
| [`vcenter_CL`](../tables/vcenter-cl.md) | [Custom logs via AMA](../connectors/customlogsviaama.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                         |
|-------------|--------------------------------|------------------------------------------------------------|
| 3.0.0 	    | 08-08-2024 				        	   | Initial Solution Release                										|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)


# CiscoMeraki

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CiscoMeraki/Connector/MerakiConnector/logo.jpg" alt="CiscoMeraki Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

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
| **First Published** | 2021-09-08 |
| **Solution Folder** | [CiscoMeraki](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoMeraki) |
| **Pre-requisites** | [CustomLogsAma](customlogsama.md) |

The Cisco Meraki solution allows you to easily connect your Cisco Meraki (MX/MR/MS) logs with Microsoft Sentinel. This gives you more insight into your organization's network and improves your security operation capabilities.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

**Additional Information**

📖 **Vendor Documentation:** [Cisco Meraki Syslog Events](https://documentation.meraki.com/General_Administration/Monitoring_and_Reporting/Syslog_Event_Types_and_Log_Samples) - Syslog event types and log samples

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)
- [Additional Documentation](#additional-documentation)

## Pre-requisites

This solution depends on **1 other solution(s)**:

| Solution |
|:---------|
| [CustomLogsAma](customlogsama.md) |

## Data Connectors

This solution has **3 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) ⚠️ 🔶
- [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) ⚠️ 🔶
- [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) ⚠️ 🔶

Connectors from dependency solutions:

- [Custom logs via AMA](../connectors/customlogsviaama.md) 🔶 *(dependency on [CustomLogsAma](customlogsama.md))*

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **18 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) | Workbooks |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Syslog`](../tables/syslog.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) | Workbooks |
| [`Tomcat_CL`](../tables/tomcat-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`ZPA_CL`](../tables/zpa-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`meraki_CL`](../tables/meraki-cl.md) 🔶 | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) | Workbooks |
| [`vcenter_CL`](../tables/vcenter-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | - | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 5 |
| Workbooks | 1 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoMerakiWorkbook](../content/ciscomeraki-ciscomerakiworkbook-efe4feca.md) | [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`meraki_CL`](../tables/meraki-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block Device Client - Cisco Meraki](../content/ciscomeraki-block-device-client-cisco-meraki-fea770b6.md) | This playbook checks if malicious device client is blocked by Cisco Meraki network. | - |
| [Block IP Address - Cisco Meraki](../content/ciscomeraki-block-ip-address-cisco-meraki-3665b3f6.md) | This playbook checks if malicious IP address is blocked or unblocked by Cisco Meraki MX network. | - |
| [Block URL - Cisco Meraki](../content/ciscomeraki-block-url-cisco-meraki-cdb1ce6f.md) | This playbook checks if malicious URL is blocked in Cisco Meraki network. | - |
| [IP Address Enrichment - Cisco Meraki](../content/ciscomeraki-ip-address-enrichment-cisco-meraki-af9705f2.md) | This playbook checks if malicious IP address is blocked or unblocked by Cisco Meraki MX network. | - |
| [URL Enrichment - Cisco Meraki](../content/ciscomeraki-url-enrichment-cisco-meraki-b58e2089.md) | This playbook checks if malicious URL is blocked or unblocked by Cisco Meraki network. | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoMeraki](../parsers/ciscomeraki.md) | - | [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md) *(read)*<br>[`Syslog`](../tables/syslog.md) *(read)*<br>[`meraki_CL`](../tables/meraki-cl.md) *(read)* |

## Additional Documentation

> 📄 *Source: [CiscoMeraki/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoMeraki/README.md)*

# Cisco Meraki Logic Apps Custom Connector and Playbook Templates

![meraki](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoMeraki/Connector/MerakiConnector/logo.jpg)


## Table of Contents

1. [Overview](#overview)
1. [Deploy Custom Connector + 5 Playbook templates](#deploy)
1. [Authentication](#authentication)
1. [Prerequisites](#prerequisites)
1. [Deployment](#deployment)
1. [Post Deployment Steps](#postdeployment)
1. [References](#references)
1. [Limitations](#limitations)


<a name="overview">

# Overview
Cisco Meraki connector connects to Cisco Meraki Dashboard API service endpoint and programmatically manages and monitors Meraki networks at scale.


<a name="deploy">

# Deploy Custom connector + 5 Playbook templates
This package includes:
* Custom connector for Cisco Meraki.
* Five playbook templates leverage Cisco Meraki custom connector.

You can choose to deploy the whole package : Connector + all five playbook templates, or each one seperately from it's specific folder.

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCiscoMeraki%2FConsolidatedTemplate.json)
[![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCiscoMeraki%2FConsolidatedTemplate.json)



# Cisco Meraki documentation 

<a name="authentication">

# Authentication
API Key Authentication

<a name="prerequisites">

# Prerequisites for using and deploying Custom connector + 5 playbooks
1. Cisco Meraki API Key should be known to establish a connection with Cisco Meraki Custom Connector. [Refer here](https://developer.cisco.com/meraki/api-v1/#!getting-started/authorization)
2. Cisco Meraki Dashboard API service endpoint should be known. (e.g. https://{CiscoMerakiDomain}/api/{VersionNumber}) [Refer here](https://developer.cisco.com/meraki/api-v1/#!schema)
3. Organization name should be known. [Refer here](https://developer.cisco.com/meraki/api-v1/#!getting-started/find-your-organization-id) 
4. Network name should be known.[Refer here](https://developer.cisco.com/meraki/api-v1/#!getting-started/find-your-network-id)
5. Network Group Policy name should be known. [Refer here](https://developer.cisco.com/meraki/api-v1/#!get-network-group-policy)

<a name="deployment">

# Deployment instructions 
1. Deploy the Custom connector and playbooks by clicking on "Deploy to Azure" button. This will take you to deploying an ARM Template wizard.
2. Fill in the required parameters for deploying custom connector and playbooks

| Parameter  | Description |
| ------------- | ------------- |
|**For Playbooks**|                 |
|**Block Device Client Playbook Name** | Enter the Block Device Client playbook name without spaces |

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.5       | 22-01-2026                     | Correct name shown on **Data Types** to match query used & Updated the Cisco Meraki Custom Connector Default Service End-point.  |
| 3.0.4       | 23-07-2025                     | **Workbook** updated with new ThreatIntelIndicators table.  |
| 3.0.3       | 02012-2024                     | Removed Deprecated **Data Connectors**                      |
| 3.0.2       | 12-08-2024                     | Deprecating data connector                                  |
| 3.0.1       | 26-07-2023                     | Updated **Workbook** template to remove unused variables.   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Solutions Index](../solutions-index.md)


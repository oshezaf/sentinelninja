# PaloAltoCDL

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/PaloAltoCDL/logo/Palo-alto-logo.png" alt="PaloAltoCDL Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Palo Alto Networks CDL](https://www.paloaltonetworks.com/cortex/cortex-data-lake) solution provides the capability to ingest [CDL logs](https://docs.paloaltonetworks.com/strata-logging-service/log-reference/log-forwarding-schema-overview) into Microsoft Sentinel.

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-23 |
| **Solution Folder** | [PaloAltoCDL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoCDL) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via Legacy Agent](../connectors/paloaltocdl.md) ⚠️
- [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md), [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via Legacy Agent](../connectors/paloaltocdl.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [PaloAlto - Dropping or denying session with traffic](../content/paloaltocdl-paloalto-dropping-or-denying-session-with-traffic-ba663b74-51f4-11ec-bf63-0242ac130002-787fad5d.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - File type changed](../content/paloaltocdl-paloalto-file-type-changed-9150ad68-51c8-11ec-bf63-0242ac130002-87204344.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Forbidden countries](../content/paloaltocdl-paloalto-forbidden-countries-9fcc7734-4d1b-11ec-81d3-0242ac130003-c36b5bad.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Inbound connection to high risk ports](../content/paloaltocdl-paloalto-inbound-connection-to-high-risk-ports-b2dd2dac-51c9-11ec-bf63-0242ac130002-b7141df6.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - MAC address conflict](../content/paloaltocdl-paloalto-mac-address-conflict-976d2eee-51cb-11ec-bf63-0242ac130002-2f4d2b9d.md) | Low | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Possible attack without response](../content/paloaltocdl-paloalto-possible-attack-without-response-b6d54840-51d3-11ec-bf63-0242ac130002-a8b30694.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Possible flooding](../content/paloaltocdl-paloalto-possible-flooding-feb185cc-51f4-11ec-bf63-0242ac130002-88d2e10c.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Possible port scan](../content/paloaltocdl-paloalto-possible-port-scan-3575a9c0-51c9-11ec-bf63-0242ac130002-2090332d.md) | High | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Put and post method request in high risk file type](../content/paloaltocdl-paloalto-put-and-post-method-request-in-high-risk-file-type-f12e9d10-51ca-11ec-bf63-0242ac130002-6fe08e13.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - User privileges was changed](../content/paloaltocdl-paloalto-user-privileges-was-changed-38f9e010-51ca-11ec-bf63-0242ac130002-ec13ffe8.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [PaloAlto - Agent versions](../content/paloaltocdl-paloalto-agent-versions-555bf415-e171-4ad2-920f-1a4a96a9644c-135ba2b4.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Critical event result](../content/paloaltocdl-paloalto-critical-event-result-97760cb0-511e-11ec-bf63-0242ac130002-764139e8.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Destination ports by IPs](../content/paloaltocdl-paloalto-destination-ports-by-ips-a8887944-4c72-11ec-81d3-0242ac130003-ef950548.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - File permission with PUT or POST request](../content/paloaltocdl-paloalto-file-permission-with-put-or-post-request-2af5e154-511f-11ec-bf63-0242ac130002-e4067896.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Incomplete application protocol](../content/paloaltocdl-paloalto-incomplete-application-protocol-7cbd46ce-5121-11ec-bf63-0242ac130002-58301333.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Multiple Deny result by user](../content/paloaltocdl-paloalto-multiple-deny-result-by-user-04456860-5122-11ec-bf63-0242ac130002-a8059a9f.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Outdated config vesions](../content/paloaltocdl-paloalto-outdated-config-vesions-6e4b6758-23a5-409b-a444-9bdef78e9dcc-e81f22ee.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Rare application layer protocols](../content/paloaltocdl-paloalto-rare-application-layer-protocols-0a18756a-5123-11ec-bf63-0242ac130002-c1608dc2.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Rare files observed](../content/paloaltocdl-paloalto-rare-files-observed-93ae5df2-4c74-11ec-81d3-0242ac130003-29632ba9.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Rare ports by user](../content/paloaltocdl-paloalto-rare-ports-by-user-ce9d58ce-51cd-11ec-bf63-0242ac130002-386d6508.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PaloAltoCDL](../content/paloaltocdl-paloaltocdl-00280c2a.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PaloAltoCDLEvent](../content/paloaltocdl-paloaltocdlevent-51643a38-679c-4989-9341-2c01a2bf478c-e16bd5b6.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 12-11-2024                     | Removed Deprecated **Data Connector**                              |
| 3.0.2       | 12-07-2024                     | Deprecated **Data Connector**                                      |
| 3.0.1       | 12-06-2024                     | Optimized parser                                                   |
| 3.0.0       | 25-09-2023                     | Addition of new PaloAltoCDL AMA **Data Connector**                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)


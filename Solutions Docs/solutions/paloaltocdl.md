# PaloAltoCDL

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-10-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoCDL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PaloAltoCDL) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via Legacy Agent](../connectors/paloaltocdl.md)
- [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via AMA](../connectors/paloaltocdlama.md), [[Deprecated] Palo Alto Networks Cortex Data Lake (CDL) via Legacy Agent](../connectors/paloaltocdl.md) | - |

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
| [PaloAlto - Dropping or denying session with traffic](../content/paloaltocdl-paloalto---dropping-or-denying-session-with-traffic-ba663b74-51f4-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [PaloAlto - File type changed](../content/paloaltocdl-paloalto---file-type-changed-9150ad68-51c8-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [PaloAlto - Forbidden countries](../content/paloaltocdl-paloalto---forbidden-countries-9fcc7734-4d1b-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | - |
| [PaloAlto - Inbound connection to high risk ports](../content/paloaltocdl-paloalto---inbound-connection-to-high-risk-ports-b2dd2dac-51c9-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [PaloAlto - MAC address conflict](../content/paloaltocdl-paloalto---mac-address-conflict-976d2eee-51cb-11ec-bf63-0242ac130002.md) | Low | InitialAccess | - |
| [PaloAlto - Possible attack without response](../content/paloaltocdl-paloalto---possible-attack-without-response-b6d54840-51d3-11ec-bf63-0242ac130002.md) | High | InitialAccess | - |
| [PaloAlto - Possible flooding](../content/paloaltocdl-paloalto---possible-flooding-feb185cc-51f4-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |
| [PaloAlto - Possible port scan](../content/paloaltocdl-paloalto---possible-port-scan-3575a9c0-51c9-11ec-bf63-0242ac130002.md) | High | Reconnaissance | - |
| [PaloAlto - Put and post method request in high risk file type](../content/paloaltocdl-paloalto---put-and-post-method-request-in-high-risk-file-type-f12e9d10-51ca-11ec-bf63-0242ac130002.md) | High | InitialAccess | - |
| [PaloAlto - User privileges was changed](../content/paloaltocdl-paloalto---user-privileges-was-changed-38f9e010-51ca-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [PaloAlto - Agent versions](../content/paloaltocdl-paloalto---agent-versions-555bf415-e171-4ad2-920f-1a4a96a9644c.md) | InitialAccess | - |
| [PaloAlto - Critical event result](../content/paloaltocdl-paloalto---critical-event-result-97760cb0-511e-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [PaloAlto - Destination ports by IPs](../content/paloaltocdl-paloalto---destination-ports-by-ips-a8887944-4c72-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [PaloAlto - File permission with PUT or POST request](../content/paloaltocdl-paloalto---file-permission-with-put-or-post-request-2af5e154-511f-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [PaloAlto - Incomplete application protocol](../content/paloaltocdl-paloalto---incomplete-application-protocol-7cbd46ce-5121-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [PaloAlto - Multiple Deny result by user](../content/paloaltocdl-paloalto---multiple-deny-result-by-user-04456860-5122-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [PaloAlto - Outdated config vesions](../content/paloaltocdl-paloalto---outdated-config-vesions-6e4b6758-23a5-409b-a444-9bdef78e9dcc.md) | InitialAccess | - |
| [PaloAlto - Rare application layer protocols](../content/paloaltocdl-paloalto---rare-application-layer-protocols-0a18756a-5123-11ec-bf63-0242ac130002.md) | InitialAccess | - |
| [PaloAlto - Rare files observed](../content/paloaltocdl-paloalto---rare-files-observed-93ae5df2-4c74-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [PaloAlto - Rare ports by user](../content/paloaltocdl-paloalto---rare-ports-by-user-ce9d58ce-51cd-11ec-bf63-0242ac130002.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PaloAltoCDL](../content/paloaltocdl-paloaltocdl.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PaloAltoCDLEvent](../content/paloaltocdl-paloaltocdlevent-51643a38-679c-4989-9341-2c01a2bf478c.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 12-11-2024                     | Removed Deprecated **Data Connector**                              |
| 3.0.2       | 12-07-2024                     | Deprecated **Data Connector**                                      |
| 3.0.1       | 12-06-2024                     | Optimized parser                                                   |
| 3.0.0       | 25-09-2023                     | Addition of new PaloAltoCDL AMA **Data Connector**                 |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)

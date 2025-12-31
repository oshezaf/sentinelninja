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
| [PaloAlto - Dropping or denying session with traffic](../content/ba663b74-51f4-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - File type changed](../content/9150ad68-51c8-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Forbidden countries](../content/9fcc7734-4d1b-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Inbound connection to high risk ports](../content/b2dd2dac-51c9-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - MAC address conflict](../content/976d2eee-51cb-11ec-bf63-0242ac130002.md) | Low | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Possible attack without response](../content/b6d54840-51d3-11ec-bf63-0242ac130002.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Possible flooding](../content/feb185cc-51f4-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Possible port scan](../content/3575a9c0-51c9-11ec-bf63-0242ac130002.md) | High | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Put and post method request in high risk file type](../content/f12e9d10-51ca-11ec-bf63-0242ac130002.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - User privileges was changed](../content/38f9e010-51ca-11ec-bf63-0242ac130002.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [PaloAlto - Agent versions](../content/555bf415-e171-4ad2-920f-1a4a96a9644c.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Critical event result](../content/97760cb0-511e-11ec-bf63-0242ac130002.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Destination ports by IPs](../content/a8887944-4c72-11ec-81d3-0242ac130003.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - File permission with PUT or POST request](../content/2af5e154-511f-11ec-bf63-0242ac130002.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Incomplete application protocol](../content/7cbd46ce-5121-11ec-bf63-0242ac130002.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Multiple Deny result by user](../content/04456860-5122-11ec-bf63-0242ac130002.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Outdated config vesions](../content/6e4b6758-23a5-409b-a444-9bdef78e9dcc.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Rare application layer protocols](../content/0a18756a-5123-11ec-bf63-0242ac130002.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Rare files observed](../content/93ae5df2-4c74-11ec-81d3-0242ac130003.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [PaloAlto - Rare ports by user](../content/ce9d58ce-51cd-11ec-bf63-0242ac130002.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [PaloAltoCDL](../content/paloaltocdl-paloaltocdl.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [PaloAltoCDLEvent](../content/51643a38-679c-4989-9341-2c01a2bf478c.md) | - | - |

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

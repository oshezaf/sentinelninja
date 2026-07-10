# W3CIISLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for W3CIISLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Virtual Machines |
| **Source Vendor** | Microsoft *(basis: projected)* |
| **Source Product** | Exchange Logs and |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/w3ciislog) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)
- [Resource Types](#resource-types)

## Schema (44 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/w3ciislog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AzureDeploymentID | string | Azure deployment ID of the cloud service the log belongs to. Only populated when events are collected using Azure Diagnostics agent when data is pulled from Azure storage. |
| cIP | string | IP address of the client that accessed the web server. |
| Computer | string | Name of the computer that the event was collected from. |
| Confidence | string | Only populated for IIS logs collected from Azure Cloud Services through Azure Diagnostics Extension. |
| csBytes | long | Number of bytes that the server received. |
| csCookie | string | Content of the cookie sent or received if any. |
| csHost | string | Host header name if any. |
| csMethod | string | Method of the request such as GET or POST. |
| csReferer | string | Site that the user last visited. This site provided a link to the current site. |
| csUriQuery | string | The query if any that the client was trying to perform. A Universal Resource Identifier (URI) query is necessary only for dynamic pages. |
| csUriStem | string | Target of the action such as a web page for example Default.htm. |
| csUserAgent | string | Browser type of the client. |
| csUserName | string | Name of the authenticated user that accessed the server. Anonymous users are indicated by a hyphen. |
| csVersion | string | Protocol version that the client used. |
| Description | string | Only populated for IIS logs collected from Azure Cloud Services (through Azure Diagnostics Extension). |
| FirstReportedDateTime | string | Only populated for IIS logs collected from Azure Cloud Services (through Azure Diagnostics Extension). |
| IndicatorThreatType | string | Only populated for IIS logs collected from Azure Cloud Services (through Azure Diagnostics Extension). |
| IsActive | string | Only populated for IIS logs collected from Azure Cloud Services (through Azure Diagnostics Extension). |
| LastReportedDateTime | string | Only populated for IIS logs collected from Azure Cloud Services (through Azure Diagnostics Extension). |
| MaliciousIP | string | Only populated for IIS logs collected from Azure Cloud Services (through Azure Diagnostics Extension). |
| ManagementGroupName | string | Name of the management group for Operations Manager agents. For other agents this is AOI-&lt;workspace ID&gt;. |
| RemoteIPCountry | string | Country/region of the IP address of the client. |
| RemoteIPLatitude | real | Latitude of the client IP address. |
| RemoteIPLongitude | real | Longitude of the client IP address. |
| Role | string | Role instance of the cloud service the log belongs to. Only populated when events are collected using Azure Diagnostics agent and data is pulled from Azure storage. |
| RoleInstance | string | Role of the cloud service the log belongs to. Only populated when events are collected using Azure Diagnostics agent and data is pulled from Azure storage. |
| scBytes | long | Number of bytes that the server sent. |
| scStatus | string | HTTP status code. |
| scSubStatus | string | Substatus error code. |
| scWin32Status | string | Windows status code. |
| Severity | int | Only populated for IIS logs collected from Azure Cloud Services through Azure Diagnostics Extension. |
| sIP | string | IP address of the server on which the log file entry was generated. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| sPort | int | Server port number that is configured for the service. |
| sSiteName | string | Name of the IIS site. |
| StorageAccount | string | Only populated for IIS logs collected from Azure Cloud Services through Azure Diagnostics Extension. |
| TimeGenerated | datetime | Date and time the record was created. |
| TimeTaken | long | Length of time to process the request in milliseconds. |
| TLPLevel | string | Only populated for IIS logs collected from Azure Cloud Services through Azure Diagnostics Extension. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [W3CIISLog Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/w3ciislog)

## Solutions (7)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) |  |
| [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) |  |

---

## Content Items Using This Table (13)

### Analytic Rules (7)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [New UserAgent observed in last 24 hours](../content/network-threat-protection-essentials-new-useragent-observed-in-last-24-hours-b725d62c-eb77-42ff-96f6-bdc6745fc6e0-a94f1913.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):** `cIP !startswith "127."`<br>`cIP !startswith "::"`<br>`cIP !startswith "fe80"`

| Analytic Rule |
|:-------------|
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-ti-map-ip-entity-to-w3ciislog-5e45930c-09b1-4430-b2d1-cc75ada0dc0f-b8687c20.md) |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):** `cIP !startswith "127."`<br>`cIP !startswith "::"`<br>`cIP !startswith "fe80"`

| Analytic Rule |
|:-------------|
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-new-ti-map-ip-entity-to-w3ciislog-888c4736-e604-48eb-b2c7-3462356d9510-ad1df7ff.md) |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Malicious web application requests linked with Microsoft Defender for Endpoint (formerly Microsoft Defender ATP) alerts](../content/web-shells-threat-protection-malicious-web-application-requests-linked-with-microsoft-defender-for-endpo-fbfbf530-506b-49a4-81ad-4030885a195c-8a9494a2.md) |  |
| [SUPERNOVA webshell](../content/web-shells-threat-protection-supernova-webshell-2acc91c3-17c2-4388-938e-4eac2d5894e8-79d870d5.md) | `csMethod == "GET"`<br>`csUriQuery contains "args"`<br>`csUriQuery contains "clazz"`<br>`csUriQuery contains "codes"`<br>`csUriQuery contains "method"`<br>`csUriStem contains "logoimagehandler.ashx"` |

### Hunting Queries (3)

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Exploit and Pentest Framework User Agent](../content/network-threat-protection-essentials-exploit-and-pentest-framework-user-agent-df75ac6c-7b0b-40d2-82e4-191c012f1a07-77056d12.md) |  |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Web Shell Activity](../content/web-shells-threat-protection-web-shell-activity-e0c947c3-fe83-46ff-bbda-a43224a785fd-524bd9eb.md) |  |
| [Webshell Detection](../content/web-shells-threat-protection-webshell-detection-cc087e7c-4db0-4bf9-9e48-287a9c9c3fbc-b4d60786.md) | `csMethod == "GET"`<br>`csReferer has "whoami"`<br>`csUriQuery has "whoami"`<br>`csUriStem has "whoami"` |

### Workbooks (3)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimWebSessionIIS](../asim/asimwebsessioniis.md) | WebSession | Internet Information Services (IIS) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

## Selection Criteria Summary (3 criteria, 4 total references)

References by type: 0 connectors, 4 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `cIP !startswith "127."`<br>`cIP !startswith "::"`<br>`cIP !startswith "fe80"` | - | 2 | - | - | **2** |
| `csMethod == "GET"`<br>`csUriQuery contains "args"`<br>`csUriQuery contains "clazz"`<br>`csUriQuery contains "codes"`<br>`csUriQuery contains "method"`<br>`csUriStem contains "logoimagehandler.ashx"` | - | 1 | - | - | **1** |
| `csMethod == "GET"`<br>`csReferer has "whoami"`<br>`csUriQuery has "whoami"`<br>`csUriStem has "whoami"` | - | 1 | - | - | **1** |
| **Total** | **0** | **4** | **0** | **0** | **4** |

### cIP

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!startswith 127.` | - | 2 | - | - | **2** |
| `!startswith ::` | - | 2 | - | - | **2** |
| `!startswith fe80` | - | 2 | - | - | **2** |

### csMethod

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `GET` | - | 2 | - | - | **2** |

### csReferer

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `has whoami` | - | 1 | - | - | **1** |

### csUriQuery

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains args` | - | 1 | - | - | **1** |
| `contains clazz` | - | 1 | - | - | **1** |
| `contains codes` | - | 1 | - | - | **1** |
| `contains method` | - | 1 | - | - | **1** |
| `has whoami` | - | 1 | - | - | **1** |

### csUriStem

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `contains logoimagehandler.ashx` | - | 1 | - | - | **1** |
| `has whoami` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


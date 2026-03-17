# W3CIISLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for W3CIISLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Virtual Machines |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/w3ciislog) |

## Schema (44 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/w3ciislog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
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
| ManagementGroupName | string | Name of the management group for Operations Manager agents. For other agents this is AOI-<workspace ID>. |
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
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| sPort | int | Server port number that is configured for the service. |
| sSiteName | string | Name of the IIS site. |
| StorageAccount | string | Only populated for IIS logs collected from Azure Cloud Services through Azure Diagnostics Extension. |
| TimeGenerated | datetime | Date and time the record was created. |
| TimeTaken | long | Length of time to process the request in milliseconds. |
| TLPLevel | string | Only populated for IIS logs collected from Azure Cloud Services through Azure Diagnostics Extension. |
| Type | string | The name of the table |

## Solutions (8)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)
- [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [Standalone Content](../solutions/standalone-content.md)
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

## Content Items Using This Table (38)

### Analytic Rules (15)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |
| [User agent search for log4j exploitation attempt](../content/apache-log4j-vulnerability-detection-user-agent-search-for-log4j-exploitation-attempt-29283b22-a1c0-4d16-b0a9-3460b655a46a-d67cde36.md) |  |

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [New UserAgent observed in last 24 hours](../content/network-threat-protection-essentials-new-useragent-observed-in-last-24-hours-b725d62c-eb77-42ff-96f6-bdc6745fc6e0-a94f1913.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-ti-map-ip-entity-to-w3ciislog-5e45930c-09b1-4430-b2d1-cc75ada0dc0f-b8687c20.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-new-ti-map-ip-entity-to-w3ciislog-888c4736-e604-48eb-b2c7-3462356d9510-ad1df7ff.md) |  |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Malicious web application requests linked with Microsoft Defender for Endpoint (formerly Microsoft Defender ATP) alerts](../content/web-shells-threat-protection-malicious-web-application-requests-linked-with-microsoft-defender-for-endpo-fbfbf530-506b-49a4-81ad-4030885a195c-8a9494a2.md) |  |
| [SUPERNOVA webshell](../content/web-shells-threat-protection-supernova-webshell-2acc91c3-17c2-4388-938e-4eac2d5894e8-79d870d5.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Anomalous User Agent connection attempt](../content/standalone-content-anomalous-user-agent-connection-attempt-f845881e-2500-44dc-8ed7-b372af3e1e25-29a3ec02.md) |  |
| [Exchange SSRF Autodiscover ProxyShell - Detection](../content/standalone-content-exchange-ssrf-autodiscover-proxyshell-detection-968358d6-6af8-49bb-aaa4-187b3067fb95-9f834a08.md) |  |
| [Exchange Worker Process Making Remote Call](../content/standalone-content-exchange-worker-process-making-remote-call-2c701f94-783c-4cd4-bc9b-3b3334976090-ea016158.md) |  |
| [High count of connections by client IP on many ports](../content/standalone-content-high-count-of-connections-by-client-ip-on-many-ports-44a555d8-ecee-4a25-95ce-055879b4b14b-ec2b57ee.md) |  |
| [High count of failed attempts from same client IP](../content/standalone-content-high-count-of-failed-attempts-from-same-client-ip-19e01883-15d8-4eb6-a7a5-3276cd668388-e4e52bb9.md) |  |
| [High count of failed logons by a user](../content/standalone-content-high-count-of-failed-logons-by-a-user-884c4957-70ea-4f57-80b9-1bca3890315b-2a0ac893.md) |  |
| [Malformed user agent](../content/standalone-content-malformed-user-agent-a357535e-f722-4afe-b375-cff362b2b376-cf52b023.md) |  |
| [Silk Typhoon Suspicious Exchange Request](../content/standalone-content-silk-typhoon-suspicious-exchange-request-23005e87-2d3a-482b-b03d-edbebd1ae151-e396d92c.md) |  |

### Hunting Queries (16)

**In solution [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Exploit and Pentest Framework User Agent](../content/network-threat-protection-essentials-exploit-and-pentest-framework-user-agent-df75ac6c-7b0b-40d2-82e4-191c012f1a07-77056d12.md) |  |

**In solution [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Web Shell Activity](../content/web-shells-threat-protection-web-shell-activity-e0c947c3-fe83-46ff-bbda-a43224a785fd-524bd9eb.md) |  |
| [Webshell Detection](../content/web-shells-threat-protection-webshell-detection-cc087e7c-4db0-4bf9-9e48-287a9c9c3fbc-b4d60786.md) |  |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Potential IIS brute force](../content/standalone-content-potential-iis-brute-force-934011da-1fe6-4507-aadb-d3914c877bcd-a771ce72.md) |  |
| [Potential IIS code injection attempt](../content/standalone-content-potential-iis-code-injection-attempt-96977c95-74b4-4cc2-b1a7-6a3ab17bd3f9-83c60a16.md) |  |
| [Rare User Agent strings](../content/standalone-content-rare-user-agent-strings-3de523b5-9608-43d5-801e-732c741dd82e-fcfe2bac.md) |  |
| [Same IP address with multiple csUserAgent](../content/standalone-content-same-ip-address-with-multiple-csuseragent-4edbb420-2df7-4089-9906-c335f065803e-844fb539.md) |  |
| [Suspect Mailbox Export on IIS/OWA](../content/standalone-content-suspect-mailbox-export-on-iis-owa-a523786c-8382-4029-80e9-f1a7ecd067c1-c99d7e83.md) |  |
| [Tracking Privileged Account Rare Activity](../content/standalone-content-tracking-privileged-account-rare-activity-431cccd3-2dff-46ee-b34b-61933e45f556-2c02c0bd.md) |  |
| [URI requests from single client](../content/standalone-content-uri-requests-from-single-client-a787a819-40df-4c9f-a5ae-850d5a2a0cf6-02dc8d65.md) |  |
| [Web shell command alert enrichment](../content/standalone-content-web-shell-command-alert-enrichment-d2e6f31b-add1-4f44-b54d-1975a5605c1d-5ffaf047.md) |  |
| [Web shell file alert enrichment](../content/standalone-content-web-shell-file-alert-enrichment-d0a3cb7b-375e-402d-9827-adafe0ce386d-3eb9e2e3.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Exchange Server ProxyLogon URIs](../content/github-only-exchange-server-proxylogon-uris-bcbebbae-d59a-4692-b138-93434bccf3db-59863ca0.md) |  |
| [Exchange Server Suspicious URIs Visited](../content/github-only-exchange-server-suspicious-uris-visited-3122423d-6c33-43c8-bc10-6d27b4350176-f62a3505.md) |  |
| [Exchange Servers and Associated Security Alerts](../content/github-only-exchange-servers-and-associated-security-alerts-84026aa0-7020-45d0-9f85-d526e43de2ab-6ad26286.md) |  |
| [Suspected ProxyToken Exploitation](../content/github-only-suspected-proxytoken-exploitation-141a3be6-be08-4519-9698-2fc908f6761c-6b9da17e.md) |  |

### Workbooks (7)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4jPostCompromiseHunting](../content/apache-log4j-vulnerability-detection-log4jpostcompromisehunting-8811d292.md) |  |

**In solution [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft Exchange Admin Activity](../content/microsoft-exchange-security-exchange-on-premises-microsoft-exchange-admin-activity-dd1fad82.md) |  |

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ExchangeCompromiseHunting](../content/github-only-exchangecompromisehunting-4fe3c3f0.md) |  |
| [Log4jPostCompromiseHunting](../content/github-only-log4jpostcompromisehunting-7193cd47.md) |  |
| [SecurityStatus](../content/github-only-securitystatus-c79b09ad.md) |  |
| [UserMap](../content/github-only-usermap-db59dcfa.md) |  |

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

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


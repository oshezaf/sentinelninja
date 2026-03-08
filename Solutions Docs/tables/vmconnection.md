# VMConnection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for VMConnection table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | VMinsights |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/vmconnection) |

## Schema (44 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/vmconnection)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AgentId | string | Unique agent GUID for the agent reporting data on the server. |
| BytesReceived | long | Total number of bytes that have been received during the reporting time window. |
| BytesSent | long | Total number of bytes that have been sent during the reporting time window. |
| Computer | string | Name of the server from the ServiceMapComputer_CL table. |
| Confidence | string | Values are 0 - 100. |
| ConnectionId | string | Unique Id for the connection record. |
| Description | string | Description of the observed threat. |
| DestinationIp | string | IP address of the destination. |
| DestinationPort | int | Port number of the destination. |
| Direction | string | Direction of the connection value is inbound or outbound |
| FirstReportedDateTime | string | The first time the provider reported the indicator. |
| IndicatorThreatType | string | Threat indicator detected. Possible values are Botnet C2 CryptoMining Darknet DDos MaliciousUrl Malware Phishing Proxy PUA Watchlist. |
| IsActive | string | The last time the indicator was seen by Interflow. |
| LastReportedDateTime | string | Indicates indicators are deactivated with True or False value. |
| LinksEstablished | long | Number of physical network connections that have been established during the reporting time window. |
| LinksFailed | long | Number of physical network connections that have failed during the reporting time window. This information is currently available only for outbound connections. |
| LinksLive | long | Number of physical network connections that were open at the end of the reporting time window. |
| LinksTerminated | long | Number of physical network connections that have been terminated during the reporting time window. |
| Machine | string | FQDN of the computer. |
| MaliciousIp | string | Remote IP address. |
| Process | string | Identity of process or groups of processes initiating or accepting the connection. |
| ProcessName | string | Unique identifier for the process in the ServiceMapProcess_CL table. |
| Protocol | string | Protocol used for the connection. Only possible value is tcp. |
| RemoteClassification | string | A classification of the remote endpoint based on its ip and dns names and the corresponding Azure service. |
| RemoteCountry | string | Name of the country or region hosting RemoteIp. |
| RemoteDnsCanonicalNames | string | A JSON array of canonical names that came back from the DNS server. For example when using traffic manager you issue a question to foo.trafficmanage.net and get a canonical name as something.myservice.com together with an ip address. |
| RemoteDnsQuestions | string | A JSON array of DNS questions (lookups) that were performed on the machine and resolved to the RemoteIp listed in the record. |
| RemoteIp | string | The IP address of the remote end of a connection is included in the RemoteIp property. For inbound connections RemoteIp is the same as SourceIp while for outbound connections it is the same as DestinationIp. |
| RemoteLatitude | real | Geolocation latitude. An example would be 47.68. |
| RemoteLongitude | real | Geolocation longitude. An example would be -122.12. |
| Responses | long | Number of responses observed during the reporting time window. |
| ResponseTimeMax | long | Largest response time observed during the reporting time window in milliseconds. If no value the property is blank. |
| ResponseTimeMin | long | Smallest response time observed during the reporting time windowin milliseconds. If no value the property is blank. |
| ResponseTimeSum | long | Sum of all response times observed during the reporting time window in milliseconds. If no value the property is blank. |
| Severity | int | Possible values are 0 - 5 where 5 is the most severe and 0 is not severe at all. Default value is 3. |
| SourceIp | string | IP address of the source. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime | Date and time the record was created. |
| TLPLevel | string | Traffic Light Protocol (TLP) Level. Possible values are White Green Amber Red. |
| Type | string | The name of the table |

## Solutions (10)

This table is used by the following solutions:

- [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md)
- [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [SOC Handbook](../solutions/soc-handbook.md)
- [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)
- [Zinc Open Source](../solutions/zinc-open-source.md)

---

## Content Items Using This Table (13)

### Analytic Rules (5)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Log4j vulnerability exploit aka Log4Shell IP IOC](../content/apache-log4j-vulnerability-detection-log4j-vulnerability-exploit-aka-log4shell-ip-ioc-6e575295-a7e6-464c-8192-3e1d8fd6a990-c6cdb809.md) |  |

**In solution [SecurityThreatEssentialSolution](../solutions/securitythreatessentialsolution.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Threat Essentials - Time series anomaly for data size transferred to public internet](../content/securitythreatessentialsolution-threat-essentials-time-series-anomaly-for-data-size-transferred-to-publi-b49a1093-cbf6-4973-89ac-2eef98f533c6-bc9cced1.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to VMConnection](../content/threat-intelligence-ti-map-ip-entity-to-vmconnection-9713e3c0-1410-468d-b79e-383448434b2d-c87f4032.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map IP Entity to VMConnection](../content/threat-intelligence-new-ti-map-ip-entity-to-vmconnection-aed70d71-adb2-4f73-becd-02150b13950b-4964d0d5.md) |  |

**In solution [Zinc Open Source](../solutions/zinc-open-source.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) |  |

### Hunting Queries (5)

**In solution [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Malicious Connection to LDAP port for CVE-2021-44228 vulnerability](../content/apache-log4j-vulnerability-detection-malicious-connection-to-ldap-port-for-cve-2021-44228-vulnerability-19abc034-139e-4e64-a05d-cb07ce8b003b-ea04e1a2.md) |  |

**In solution [Attacker Tools Threat Protection Essentials](../solutions/attacker-tools-threat-protection-essentials.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cobalt Strike DNS Beaconing](../content/attacker-tools-threat-protection-essentials-cobalt-strike-dns-beaconing-dde206fc-3f0b-4175-bb5d-42d2aae9d4c9-35f15bcd.md) |  |

**In solution [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) |  |

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map File Entity to VMConnection Event](../content/threat-intelligence-ti-map-file-entity-to-vmconnection-event-172a321b-c46b-4508-87c6-e2691c778107-debef4d0.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI Map File Entity to VMConnection Event](../content/threat-intelligence-new-ti-map-file-entity-to-vmconnection-event-f231cbcd-66d9-45be-a6a3-4a915e53d46c-00450027.md) |  |

### Workbooks (3)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SecurityStatus](../content/soc-handbook-securitystatus-93651545.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimNetworkSessionVMConnection](../asim/asimnetworksessionvmconnection.md) | NetworkSession | VMConnection |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)


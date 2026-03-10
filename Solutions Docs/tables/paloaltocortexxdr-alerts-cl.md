# PaloAltoCortexXDR_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (111 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cortex%20XDR%5CData%20Connectors%5CCortexXDR_ccp/table_alerts.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | Action taken in response to the alert (e.g., block, quarantine, notify). |
| ActionCountry | string | Country in which the action was taken. |
| ActionExternalHostname | string | External hostname associated with the action. |
| ActionFileMacroSha256 | string | SHA256 hash of the file macro involved in the action. |
| ActionFileMd5 | string | MD5 hash of the file involved in the action. |
| ActionFileName | string | Name of the file involved in the action. |
| ActionFilePath | string | Path to the file involved in the action. |
| ActionFileSha256 | string | SHA256 hash of the file involved in the action. |
| ActionLocalIp | string | Local IP address associated with the action. |
| ActionLocalIpV6 | string | Local IPv6 address associated with the action. |
| ActionLocalPort | int | Local port associated with the action. |
| ActionPretty | string | Human-readable version of the action taken for the alert. |
| ActionProcessCausalityId | string | Causality ID of the action process. |
| ActionProcessImageCommandLine | string | Command line used by the action process's image. |
| ActionProcessImageName | string | Name of the action process's image. |
| ActionProcessImageSha256 | string | SHA256 hash of the action process's image. |
| ActionProcessInstanceId | string | Instance ID of the action process. |
| ActionProcessSignatureStatus | string | Signature status of the action process. |
| ActionProcessSignatureVendor | string | Vendor of the signature for the action process. |
| ActionRegistryData | dynamic | Dynamic object containing registry data for the action. |
| ActionRegistryFullKey | string | Full registry key associated with the action. |
| ActionRegistryKeyName | string | Name of the registry key associated with the action. |
| ActionRegistryValueName | string | Name of the registry value associated with the action. |
| ActionRemoteIp | string | Remote IP address associated with the action. |
| ActionRemoteIpV6 | string | Remote IPv6 address associated with the action. |
| ActionRemotePort | int | Remote port associated with the action. |
| ActorCausalityId | string | Causality ID associated with the actor. |
| ActorProcessCausalityId | string | Causality ID of the actor's process. |
| ActorProcessCommandLine | string | Command line used by the actor's process. |
| ActorProcessImageMd5 | string | MD5 hash of the actor's process image. |
| ActorProcessImageName | string | Name of the image used by the actor's process. |
| ActorProcessImagePath | string | Path to the actor's process image. |
| ActorProcessImageSha256 | string | SHA256 hash of the actor's process image. |
| ActorProcessInstanceId | string | Instance ID of the actor's process. |
| ActorProcessOsPid | int | OS process ID of the actor's process. |
| ActorProcessSignatureStatus | string | Signature status of the actor's process. |
| ActorProcessSignatureVendor | string | Vendor of the signature for the actor's process. |
| ActorThreadThreadId | string | Thread ID of the actor's thread. |
| AgentDataCollectionStatus | bool | Status indicating whether the agent is actively collecting data (true/false). |
| AgentFQDN | string | Fully qualified domain name (FQDN) of the endpoint device where the alert originated. |
| AgentOSType | string | Operating system type of the agent (e.g., Windows, macOS, Linux). |
| AgentVersion | string | Version of the Cortex XDR agent that generated the alert. |
| AlertDomain | string | Domain associated with the alert. |
| AlertId | string | Unique identifier for the alert in Cortex XDR. |
| AttemptCounter | int | Number of attempts to match this alert with detection rules. |
| BiocIndicator | string | Indicator or behavior related to the alert, stored as a dynamic object (behavioral IOC data). |
| Category | string | Category or classification of the alert (e.g., malware, suspicious activity). |
| CausalityActorCausalityId | string | Causality ID of the actor involved. |
| CausalityActorProcessCommandLine | string | Command line used by the causality actor's process. |
| CausalityActorProcessImageMd5 | string | MD5 hash of the causality actor's process image. |
| CausalityActorProcessImageName | string | Name of the causality actor's process image. |
| CausalityActorProcessImagePath | string | Path to the causality actor's process image. |
| CausalityActorProcessImageSha256 | string | SHA256 hash of the causality actor's process image. |
| CausalityActorProcessSignatureStatus | string | Signature status of the causality actor's process. |
| CloudProvider | string | Cloud provider associated with the log entry. |
| ClusterName | string | Name of the cluster involved. |
| ContainerId | string | Identifier for the container. |
| ContainerName | string | Name of the container. |
| Description | string | Detailed description of the alert or detection. |
| DetectionTimestamp | datetime | Timestamp when the detection occurred, in Unix epoch format. |
| DnsQueryName | string | DNS query name associated with the log entry. |
| DstActionExternalHostname | string | Destination external hostname for the action. |
| DstActionExternalPort | int | Destination external port for the action. |
| EndMatchAttempt | datetime | Timestamp of the last match attempt in Unix epoch format. |
| EndpointId | string | Unique identifier for the endpoint where the alert was detected. |
| EventId | string | Unique identifier for the event. |
| EventTimestamp | datetime | Timestamp for when the event occurred. |
| EventType | string | Type of the event being logged. |
| ExternalId | string | Unique identifier for the alert in the external system (Cortex XDR). |
| FwEmailRecipient | string | Email recipient in the firewall log. |
| FwEmailSender | string | Email sender in the firewall log. |
| FwEmailSubject | string | Subject line of the email in the firewall log. |
| FwIsPhishing | bool | Indicates if the firewall log entry is related to phishing. |
| FwRule | string | Description of the firewall rule. |
| FwRuleId | string | Identifier for the firewall rule. |
| FwUrlDomain | string | Domain of the URL in the firewall log. |
| HostIp | string | IP address of the host machine where the alert was generated, represented as a dynamic object. |
| HostName | string | Name of the host machine where the alert was generated. |
| IdentityType | string | Type of identity associated with the entry. |
| ImageId | string | Identifier for the image. |
| ImageName | string | Name of the image involved. |
| LocalInsert | datetime | Local timestamp of when the alert was inserted into the system in Unix epoch format. |
| MacAddress | string | MAC address of the endpoint device, represented as a dynamic object. |
| MaliciousUrls | dynamic | Dynamic object containing malicious URLs related to the entry. |
| MatchingServiceRuleId | string | ID of the matching rule or service used to trigger the alert. |
| MatchingStatus | string | Status of matching detection logic (e.g., matched or not matched). |
| MitreTacticIdAndName | dynamic | MITRE ATT&CK tactic ID and name associated with the alert. |
| MitreTechniqueIdAndName | dynamic | MITRE ATT&CK technique ID and name associated with the alert. |
| ModuleId | string | Identifier for the module. |
| Name | string | Name of the detection or alert. |
| Namespace | string | Namespace associated with the log entry. |
| OperationName | string | Name of the operation being logged. |
| OsActorCausalityId | string | Causality ID associated with the OS actor. |
| OsActorEffectiveUsername | string | Effective username of the OS actor. |
| OsActorProcessCausalityId | string | Causality ID of the OS actor. |
| OsActorProcessCommandLine | string | Command line used by the OS actor's process. |
| OsActorProcessImageName | string | Name of the image used by the OS actor's process. |
| OsActorProcessImagePath | string | Path to the OS actor's process image. |
| OsActorProcessImageSha256 | string | SHA256 hash of the OS actor's process image. |
| OsActorProcessOsPid | int | OS process ID of the OS actor's process. |
| OsActorProcessSignatureStatus | string | Signature status of the OS actor's process. |
| OsActorProcessSignatureVendor | string | Vendor of the signature for the OS actor's process. |
| OsActorThreadThreadId | string | Thread ID of the OS actor's thread. |
| ResourceType | string | Type of resource involved in the log entry. |
| Severity | string | Level of severity of the alert (e.g., Low, Medium, High, Critical). |
| Source | string | Source of the alert or detection data (e.g., Cortex XDR, endpoint agent). |
| Starred | bool | Indicates whether the alert has been marked as important or starred (true/false). |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |
| UserAgent | string | User agent string associated with the log entry. |
| UserName | string | Username associated with the log entry. |
| Whitelisted | bool | Indicates whether the alert has been whitelisted (true/false). |

## Solutions (2)

This table is used by the following solutions:

- [Cortex XDR](../solutions/cortex-xdr.md)
- [Palo Alto Cortex XDR CCP](../solutions/palo-alto-cortex-xdr-ccp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


# NetworkAccessTraffic

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NetworkAccessTraffic table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Network, Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccesstraffic) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (80 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccesstraffic)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccessType | string | Type of accessed application. Access type options: QuickAccess, PrivateAccess. |
| Action | string | The action taken on the network session. Allowed, Denied. |
| AgentVersion | string | The version of the agent connecting. |
| AIAgentId | string | The unique identifier of the AI agent associated with the traffic. |
| AIAgentName | string | The name of the AI agent associated with the traffic. |
| AppId | string | Destination Application ID accessed in Azure AD during the transaction. |
| AppSegmentId | string | Destination Application segment ID from Azure AD accessed during the transaction. |
| CloudAppCatalogId | string | The id of the application in the saas application catalog. |
| CloudAppCategories | string | The category list of the cloud application (i.e social media, search, generative AI). |
| CloudAppCategory | string | The category of the cloud application (i.e social media, search, generative AI). |
| CloudAppComplianceScore | int | The compliance score of the application. |
| CloudAppGeneralScore | int | The general score of the application. |
| CloudAppLegalScore | int | The legal score of the application. |
| CloudAppLoginUser | string | The username that was used to log into the application. |
| CloudAppName | string | The name of the application (i.e chatGPT, SalesForce, Bing). |
| CloudAppRiskScore | int | The risk score of the application. |
| ConnectionId | string | Unique identifier representing the connection this traffic log was initiated from. |
| ConnectionStatus | string | Status of a connection. Status options: Open, Active, Closed. |
| ConnectorId | string | Private access connector ID. |
| ConnectorIp | string | Private access connector IP. |
| ConnectorName | string | Private access connector name. |
| Description | string | Additional details describing the traffic. |
| DestinationFqdn | string | The destination device hostname, including domain information when available. |
| DestinationIp | string | The IP address of the connection or session destination. |
| DestinationPort | int | The destination IP port. |
| DestinationUrl | string | The Url link of the connection or session destination. |
| DestinationWebCategories | string | The destination FQDN's Web Categories. |
| DeviceCategory | string | Device type the transaction originated from. Client, Branch. |
| DeviceId | string | The ID of the source device as reported in the record. |
| DeviceOperatingSystem | string | The client connecting operating system type. |
| DeviceOperatingSystemVersion | string | The client connecting operating system version. |
| DnsResponseOrigin | string | The origin of the DNS response for the traffic. Possible values: Cache, Onprem. |
| FilteringProfileId | string | The ID of the Filtering Profile associated with the action performed on traffic. |
| FilteringProfileName | string | The name of the Filtering Profile associated with the action performed on traffic. |
| HttpMethod | string | The http method used in the request. |
| HttpRequestContentType | string | The content type specified in the HTTP request header. |
| HttpResponseContentType | string | The content type specified in the HTTP response header. |
| HttpUserAgent | string | The user agent string from the HTTP request header. |
| InitiatingProcessName | string | The process initiating the traffic transaction. |
| NetworkProtocol | string | The network protocol, IPv6 or IPv4. |
| OriginHeader | string | The origin header value. |
| PolicyId | string | The ID of the policy for which the request was denied by its rule. |
| PolicyName | string | The name of the filtering policy associated with the action performed on traffic. |
| PolicyRuleId | string | The ID of the rule for which the request was denied by. |
| ProcessingRegion | string | Region where the request was processed by the backend service. |
| ReceivedBytes | long | The number of bytes received. |
| ReferrerHeader | string | The Referer header value. |
| RemoteNetworkId | string | The ID from which traffic was sent or received, providing visibility into the origin of the traffic. |
| ResourceTenantId | string | Tenant ID that owns the resource. |
| ResponseCode | int | The response code returned from the server. |
| RuleName | string | The name of the rule associated with the action performed on traffic. |
| SentBytes | long | The number of bytes sent. |
| SessionId | string | Unique identifier representing the session. |
| SourceIp | string | The IP address from which the connection or session originated. |
| SourcePort | int | The IP port from which the connection originated. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| ThreatType | string | The identified threat type associated with the traffic. |
| TimeGenerated | datetime | The date and time (UTC) that the event was generated. |
| TlsAction | string | The TLS action taken on the traffic. |
| TlsPolicyId | string | The unique token identifier of the TLS policy applied to the traffic. |
| TlsPolicyName | string | The name for the TLS policy applied to the traffic. |
| TlsRuleId | string | The unique identifier of the TLS rule applied to the traffic. |
| TlsRuleName | string | The name of the TLS rule applied to the traffic. |
| TlsStatus | string | The status of the Tls option. |
| Token3PExpiry | datetime | The expiry date of the access token used to access the private access application. |
| Token3PIssuedAt | datetime | The issued date of the access token used to access the private access application. |
| Token3PUniqueId | string | The unique token identifier of the access token used to access the private access application. |
| Token3PValidFrom | datetime | The validity date of the access token used to access the private access application. |
| TrafficType | string | The type of the target destination traffic. |
| TransactionId | string | Unique identifier that representing a roundtrip of request response. |
| TransportProtocol | string | The IP protocol used by the connection or session as listed in IANA protocol assignment. |
| Type | string | The name of the table |
| UniqueTokenId | string | The unique token identifier. |
| UserId | string | A machine-readable, alphanumeric, unique representation of the source user. |
| UserPrincipalName | string | The source username, including domain information when available. |
| VendorNames | string | The name of the vendors who detected the threat. |
| XForwardedFor | string | X-Forwarded-For header of the HTTP request. |

## Solutions (2)

This table is used by the following solutions:

- [Global Secure Access](../solutions/global-secure-access.md)
- [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Entra ID](../connectors/azureactivedirectory.md) |  |

---

## Content Items Using This Table (9)

### Analytic Rules (7)

**In solution [Global Secure Access](../solutions/global-secure-access.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [GSA - Detect Abnormal Deny Rate for Source to Destination IP](../content/global-secure-access-gsa-detect-abnormal-deny-rate-for-source-to-destination-ip-e3b6a9e7-4c3a-45e6-8baf-1d3bfa8e0c2b-aebab9fd.md) |  |
| [GSA - Detect Connections Outside Operational Hours](../content/global-secure-access-gsa-detect-connections-outside-operational-hours-4c9f0a9e-44d7-4c9b-b7f0-f6a6e0d8f8fa-4e59bfee.md) |  |
| [GSA - Detect Protocol Changes for Destination Ports](../content/global-secure-access-gsa-detect-protocol-changes-for-destination-ports-f6a8d6a5-3e9f-47c8-a8d5-1b2b9d3b7d6a-c17b64bc.md) |  |
| [GSA - Detect Source IP Scanning Multiple Open Ports](../content/global-secure-access-gsa-detect-source-ip-scanning-multiple-open-ports-82cfa6b9-5f7e-4b8b-8b2f-a63f21b7a7d1-5a266ab8.md) |  |
| [GSA - TI Domain Entity](../content/global-secure-access-gsa-ti-domain-entity-4ef07345-5d89-4f5b-9c64-a180d81a6176-c4743d20.md) |  |
| [GSA - TI IP Entity](../content/global-secure-access-gsa-ti-ip-entity-3ebd25b1-6f54-49f9-b5a5-0246357ce4ca-9601350c.md) |  |
| [GSA - TI URL Entity](../content/global-secure-access-gsa-ti-url-entity-347c6cb3-33d2-4753-b7f6-eab946a8cd51-ab57a79a.md) |  |

### Workbooks (2)

**In solution [Global Secure Access](../solutions/global-secure-access.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GSAM365EnrichedEvents](../content/global-secure-access-gsam365enrichedevents-b8162378.md) |  |
| [GSANetworkTraffic](../content/global-secure-access-gsanetworktraffic-b1c45294.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


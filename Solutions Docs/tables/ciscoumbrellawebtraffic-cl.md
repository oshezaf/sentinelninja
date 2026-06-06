# CiscoUmbrellaWebTraffic_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (56 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella%5CData%20Connectors%5CCiscoUmbrella_CCP/CiscoUmbrellaWebTraffic_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | Whether the request was allowed or blocked. |
| AiModelName | string | Indicates the name of the AI model involved in the transaction or event. |
| AiSupplyChainCategories | string | The list of AI supply chain categories associated with the event. |
| AmpDisposition | string | The status of the files proxied and scanned by Cisco Advanced Malware Protection (AMP) as part of the File Inspection feature; can be Clean, Malicious or Unknown. |
| AmpMalwareName | string | If Malicious, the name of the malware according to AMP. |
| AmpScore | string | The score of the malware from AMP. This field returns blank ("") unless the verdict is Unknown, in which the value will be 0. |
| ApplicationEntityCategory | string | It represents the classification grouping of application entities based on shared characteristics or functions. |
| ApplicationEntityName | string | It refers to the specific name of an application entity within a system. |
| ApplicationIds | string | The ID of the destination application. |
| AvDetections | string | The detection name according to the antivirus engine used in file inspection. |
| BlockedCategories | string | The category that resulted in the destination being blocked. |
| Categories | string | The security categories for this request, such as Malware. |
| CertificateErrors | string | Any certificate or protocol errors in the request. |
| ContentType | string | The type of web content, typically text/html. |
| DataCenter | string | The name of the data center that processed the user-generated traffic. |
| DestinationIp | string | The destination IP address of the request. |
| DestinationListIds | string | The ID number assigned to a destination list. |
| DetectedResponseFileType | string | The file type that resulted in a blocked response. Examples: exe, avi. |
| DlpStatus | string | If the request was Blocked for DLP. |
| Egress | string | TRUE indicates that the egress IP was a reserved IP. |
| EgressIp | string | The public IP address assigned to a session as it exits the Secure Access ZTA infrastructure en route to the destination application. |
| EventCorrelationId | string | A unique identifier generated for each network request, the Event Correlation ID stitches together all related events across various security services (Firewall, SWG, ZTNA) to provide a unified, end-to-end view of a single traffic flow. |
| ExternalClientIp | string | The egress IP address of the network where the request originated. |
| FileAction | string | The action taken on a file in a remote browser isolation session. |
| FileName | string | The name of the file. |
| ForwardingMethod | string | The method used to forward the proxy events. Example: Secure Web Appliance. |
| GeoLocationOfBlockedDestinationCountries | string | The ISO-3166 IDs of one or more countries where destination IPs blocked by policy are located. |
| HostName | string | The hostname of the user device. |
| Identities | string | All identities associated with this request. |
| IdentityTypes | string | The type of identities that were associated with the request. Examples: Roaming Computer, Network. |
| InternalClientIp | string | The internal IP address of the computer making the request. |
| IsolateAction | string | The remote browser isolation state associated with the request. |
| MspOrganizationId | string | The Secure Access parent organization ID. |
| OrganizationId | string | The Secure Access organization ID. |
| PolicyIdentityLabel | string | The identity that made the request. |
| PolicyIdentityType | string | The first identity type that made the request. Examples: Roaming Computer, Network. |
| Producer | string | The producer of the proxy events. |
| Puas | string | A list of all potentially unwanted application (PUA) results for the proxied file as returned by the antivirus scanner. |
| Referer | string | The referring domain or URL. |
| RequestMethod | string | The HTTP request method. Examples: GET, POST, HEAD, PUT, DELETE. |
| RequestSize | string | Request size in bytes. |
| ResponseBodySize | string | Response body size in bytes. |
| ResponseSize | string | Response size in bytes. |
| RuleId | string | The ID number assigned to the rule. |
| RulesetId | string | The ID number assigned to the ruleset. |
| SecurityOverridden | string | TRUE indicates that security filtering was explicitly overridden and not applied during enforcement. |
| ServerName | string | The name of the server according to the TLS protocol server name indication (SNI), if present, or from the server's SAN certificate common name (CN). |
| Sha256Hash | string | The hex digest of the response content. |
| StatusCode | string | The HTTP status code; should always be 200 or 201. |
| TimeBasedRule | string | TRUE indicates that a the rule was applied due to a time condition. |
| TimeGenerated | datetime |  |
| Timestamp | string | The date and time of the Web traffic event, expressed as a UTC-formatted string. |
| Url | string | The URL requested. |
| UserAgent | string | The browser agent that made the request. |
| WarnCategories | string | The ID of one or more content categories in lists matched for a Warn action by the rule. |
| WarnStatus | string | The Warn page's state associated with the request. |

## Solutions (1)

This table is used by the following solutions:

- [CiscoUmbrella](../solutions/ciscoumbrella.md)

## Connectors (3)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Umbrella (via Codeless Connector Framework)](../connectors/ciscoumbrellaconnector.md) |  |
| [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) |  |
| [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) |  |

---

## Content Items Using This Table (21)

### Analytic Rules (10)

**GitHub Only:**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cisco Cloud Security - Connection to Unpopular Website Detected](../content/ciscoumbrella-cisco-cloud-security-connection-to-unpopular-website-detected-75297f62-10a8-4fc1-9b2a-12f25c6f05a7-c775740f.md) |  |
| [Cisco Cloud Security - Connection to non-corporate private network](../content/ciscoumbrella-cisco-cloud-security-connection-to-non-corporate-private-network-c9b6d281-b96b-4763-b728-9a04b9fe1246-dc2431a8.md) |  |
| [Cisco Cloud Security - Crypto Miner User-Agent Detected](../content/ciscoumbrella-cisco-cloud-security-crypto-miner-user-agent-detected-b619d1f1-7f39-4c7e-bf9e-afbb46457997-483ca4a0.md) |  |
| [Cisco Cloud Security - Empty User Agent Detected](../content/ciscoumbrella-cisco-cloud-security-empty-user-agent-detected-2b328487-162d-4034-b472-59f1d53684a1-2a2d02f5.md) |  |
| [Cisco Cloud Security - Hack Tool User-Agent Detected](../content/ciscoumbrella-cisco-cloud-security-hack-tool-user-agent-detected-8d537f3c-094f-430c-a588-8a87da36ee3a-d0f46ed9.md) |  |
| [Cisco Cloud Security - Rare User Agent Detected](../content/ciscoumbrella-cisco-cloud-security-rare-user-agent-detected-8c8de3fa-6425-4623-9cd9-45de1dd0569a-05b10328.md) |  |
| [Cisco Cloud Security - Request Allowed to harmful/malicious URI category](../content/ciscoumbrella-cisco-cloud-security-request-allowed-to-harmful-malicious-uri-category-d6bf1931-b1eb-448d-90b2-de118559c7ce-e2a8343a.md) |  |
| [Cisco Cloud Security - Request to blocklisted file type](../content/ciscoumbrella-cisco-cloud-security-request-to-blocklisted-file-type-de58ee9e-b229-4252-8537-41a4c2f4045e-4fbd74eb.md) |  |
| [Cisco Cloud Security - URI contains IP address](../content/ciscoumbrella-cisco-cloud-security-uri-contains-ip-address-ee1818ec-5f65-4991-b711-bcf2ab7e36c3-8213dfcd.md) |  |
| [Cisco Cloud Security - Windows PowerShell User-Agent Detected](../content/ciscoumbrella-cisco-cloud-security-windows-powershell-user-agent-detected-b12b3dab-d973-45af-b07e-e29bb34d8db9-9add09cc.md) |  |

### Hunting Queries (10)

**In solution [CiscoUmbrella](../solutions/ciscoumbrella.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Cisco Cloud Security - 'Blocked' User-Agents.](../content/ciscoumbrella-cisco-cloud-security-'blocked'-user-agents.-22e5e573-409b-433f-91de-50d6f0ad5a9e-d7476629.md) |  |
| [Cisco Cloud Security - Anomalous FQDNs for domain](../content/ciscoumbrella-cisco-cloud-security-anomalous-fqdns-for-domain-c92741e6-8454-40bb-8830-069cb86946c6-b4d4c808.md) |  |
| [Cisco Cloud Security - DNS Errors.](../content/ciscoumbrella-cisco-cloud-security-dns-errors.-26aebe0d-9a4f-456d-bbb9-9f4c9c5d28ca-a2f4149b.md) |  |
| [Cisco Cloud Security - DNS requests to unreliable categories.](../content/ciscoumbrella-cisco-cloud-security-dns-requests-to-unreliable-categories.-bd1457df-3e81-4218-a079-0963200c8d67-c9326256.md) |  |
| [Cisco Cloud Security - High values of Uploaded Data](../content/ciscoumbrella-cisco-cloud-security-high-values-of-uploaded-data-975419eb-7041-419c-b8f0-c4bf513cf2b2-3ace2cb5.md) |  |
| [Cisco Cloud Security - Higher values of count of the Same BytesIn size](../content/ciscoumbrella-cisco-cloud-security-higher-values-of-count-of-the-same-bytesin-size-55393e5b-3f7e-4d40-85e5-38ef9ecd8484-b9761e9f.md) |  |
| [Cisco Cloud Security - Possible connection to C2.](../content/ciscoumbrella-cisco-cloud-security-possible-connection-to-c2.-85421f18-2de4-42ff-9ef4-058924dcb1bf-efd3c537.md) |  |
| [Cisco Cloud Security - Possible data exfiltration](../content/ciscoumbrella-cisco-cloud-security-possible-data-exfiltration-497d7250-87e1-49b1-a096-94f61c7ade9c-1d6ee98c.md) |  |
| [Cisco Cloud Security - Proxy 'Allowed' to unreliable categories.](../content/ciscoumbrella-cisco-cloud-security-proxy-'allowed'-to-unreliable-categories.-daf2f3cf-0f0d-45c1-b428-3c23d643859b-b99f1692.md) |  |
| [Cisco Cloud Security - Requests to uncategorized resources](../content/ciscoumbrella-cisco-cloud-security-requests-to-uncategorized-resources-de2ec986-ee24-465f-adf2-b718997074c1-635d0044.md) |  |

### Workbooks (1)

**In solution [CiscoUmbrella](../solutions/ciscoumbrella.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CiscoUmbrella](../content/ciscoumbrella-ciscoumbrella-dcc07ffb.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Cisco_Umbrella](../parsers/cisco-umbrella.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)


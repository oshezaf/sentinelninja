# CiscoUmbrellaZeroTrustAccess_CL

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

## Schema (58 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella%5CData%20Connectors%5CCiscoUmbrella_CCP/CiscoUmbrellaZeroTrustAccess_table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AdJoinedId | string | ID of the device if it is joined to an Active Directory domain. |
| AntiMalwareAgents | dynamic | The clients' anti malware agents. |
| AppConnectorGroupId | string | The group ID of the App Connector. |
| ApplicationPort | string | The port of the destination application. |
| ApplicationProtocol | string | The type of protocol used for transactions. |
| BlockReason | string | The reason for the transaction being blocked. |
| ClientBrowser | string | The name of the browser on the user device. |
| ClientFirewall | string | The client system firewall. Valid values are SYS or NONE. |
| ClientGeoLocation | string | The regional location of the user device. |
| ClientIp | string | The IP address of the user device. |
| ClientOs | string | The operating system of the user device. |
| DetectedTrustedNetworks | string | A list of trusted networks that were detected by the client during the event. |
| DiskEncryption | string | The client Disk Encryption Type. Valid values are: SYS, NONE or THIRD PARTY. |
| DuoDeviceId | string | The ID of the Duo App on the device. |
| DuoDeviceIdString | string | The ID label of the Duo App on the device. |
| EgressIp | string | The public IP address assigned to a session as it exits the Secure Access ZTA infrastructure en route to the destination application. |
| EnforcedBy | string | The Secure Access component or service that enforced the policy or control related to this event (e.g., Firewall, Web Proxy). |
| FtdEnforcementId | string | The unique identifier of the enforcement action taken by a Firepower Threat Defense (FTD) device integrated with Secure Access. |
| FtdEnforcementName | string | The name or type of enforcement action taken by a Cisco Secure Firewall Threat Defense device that is integrated with Secure Access, for example, Malware Block and URL Category Block. |
| HeadendType | string | The type of the headend. Valid values are: CLAP or BAP. |
| HostName | string | The hostname of the user device. |
| IdentityEmail | string | The email address of the Active Directory user. |
| IdentityLabels | string | The list of labels for the identity. |
| IdentityTypeLabels | string | The label of the identity type. |
| MdmDeviceId | string | The unique identifier assigned to the device by the integrated MDM platform, enabling Secure Access to track and manage the device's access privileges. |
| MdmIsCompliant | string | Indicates whether the device meets the compliance policies defined within the integrated MDM platform: TRUE or FALSE. |
| MdmIsManaged | string | Indicates whether the device is currently under active management by the integrated MDM platform: TRUE or FALSE. |
| MdmLastUpdated | string | The date and time that Secure Access last received updated device information from the integrated MDM platform. |
| MdmSource | string | The specific Mobile Device Manager (MDM) platform integrated with Secure Access providing device management and compliance information. |
| OrganizationId | string | The Secure Access organization ID. |
| PossibleMatchPosture | dynamic | For a block event, the posture that could have allowed the transaction if not for the block reason. |
| PossibleMatchRuleId | dynamic | For a block event, the ID of the rule within the ruleset that could have allowed the transaction if not for the block reason. |
| PossibleMatchRulesetId | dynamic | For a block event, the ID of the ruleset that could have allowed the transaction if not for the block reason. |
| PostureId | string | ID of the matching posture profile. |
| PrivateAppGroupId | string | The ID of the private application group. |
| PrivateAppId | string | The ID of the private application. |
| PrivateResourceGroupId | string | The ID if the rule matched is based on the private application group. |
| PrivateResourceId | string | The ID that Secure Access assigns to the customer-defined private application. |
| RequestedIdFqdn | string | The IP or FQDN of the requested application. |
| ResolvedIp | string | The IP of the application returned by the proxy. |
| RuleId | string | The ID of the access rule. |
| RulesetId | string | The ID of the ruleset. |
| SecureClientVersion | string | The version of the Cisco Secure Client on the endpoint device accessing a private resource. |
| SourceProcessHash | dynamic | The hash of the source process that initiated the transaction from the client side. |
| SourceProcessId | dynamic | The ID of the source process that initiated the transaction from the client side.. |
| SourceProcessName | dynamic | The name of the source process that initiated the transaction from the client side (e.g., chrome.exe). |
| SourceProcessUserName | dynamic | The user name associated with the source process that initiated the transaction from the client side. |
| StepUpAuthResult | string | The result of the authentication. Valid values are: SUCCESS or FAILURE. |
| StepUpAuthTokenLife | string | The time in seconds between when you generated the token and used the token. |
| StepUpAuthType | string | The type of authentication. Valid values are: SAML_SSO, MFA, or NONE. |
| SystemPassword | string | Whether the system password is enabled with its timeout in seconds. |
| TimeGenerated | datetime |  |
| Timestamp | string | The date and time of the ZTA event, expressed as a UTC-formatted string. |
| TransactionId | string | A unique identifier generated by the Secure Client for each network request. |
| TrustedNetwork | string | The trusted network that was applied during policy enforcement. |
| TunnelType | string | The type of tunnel used to connect to the ZTA proxy. |
| Verdict | string | Whether the user has access to a resource. |
| ZtaProfileId | string | The unique identifier of the applicable ZTA profile associated with the event. |

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

